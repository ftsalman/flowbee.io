import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader.js";

// --- Vertex Shader ---
const vertexShader = `
precision highp float;

attribute vec3 aCenter;      // Original 3D world center position of the instanced particle
attribute vec3 aColor;       // Curated Google rainbow gradient RGB color
attribute vec3 aRandom;      // Random seeds (x: breathing phase, y: noise phase, z: general jitter)
attribute vec3 aParams;      // x: ring radius, y: ring angle theta, z: base scale multiplier

uniform float uTime;
uniform vec3 uMouse;         // Damping mouse 3D world coordinates on Z=0 plane
uniform vec2 uResolution;

varying vec3 vColor;
varying vec2 vUv;
varying float vDistanceToMouse;
varying float vHoverScale;
varying float vOpacity;

// --- 3D Simplex Noise ---
vec4 permute(vec4 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

  i = mod(i, 289.0);
  vec4 p = permute(permute(permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.zzzz);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

// --- FBM Noise (3 Octaves) ---
float fbm(vec3 p) {
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = 1.0;
  for (int i = 0; i < 3; i++) {
    value += amplitude * snoise(p * frequency);
    frequency *= 2.0;
    amplitude *= 0.5;
  }
  return value;
}

void main() {
  vUv = uv;
  vColor = aColor;
  
  // 1. Smooth floating movement using Simplex Noise
  vec3 noiseCoord = aCenter * 0.12 + vec3(0.0, 0.0, uTime * 0.2 + aRandom.y * 6.2831);
  float nx = snoise(noiseCoord);
  float ny = snoise(noiseCoord + vec3(31.41, 15.92, 0.0));
  
  // Slight Z displacement using FBM Noise
  float nz = fbm(noiseCoord * 1.5 + vec3(0.0, 42.0, uTime * 0.15));
  vec3 noiseDisplacement = vec3(nx * 0.35, ny * 0.35, nz * 1.2);

  // 2. Slow orbital vortex rotation around the circle
  float currentRadius = aParams.x;
  float currentAngle = aParams.y;
  float angularSpeed = 0.08 / (1.0 + currentRadius * 0.05); // inner rings swirl slightly faster
  float animatedAngle = currentAngle + uTime * angularSpeed;
  
  vec3 orbitalCenter = vec3(
    cos(animatedAngle) * currentRadius,
    sin(animatedAngle) * currentRadius,
    aCenter.z
  );

  vec3 animatedCenter = orbitalCenter + noiseDisplacement;

  // 3. Mouse Interaction (Repulsion, Expansion, Ripple Waves)
  vec2 toMouse = animatedCenter.xy - uMouse.xy;
  float distToMouse = length(toMouse);
  vDistanceToMouse = distToMouse;

  float mouseRadius = 7.5;
  float influence = smoothstep(mouseRadius, 0.0, distToMouse);
  
  // Smooth magnetic repulsion pushing particles away
  vec2 pushDir = distToMouse > 0.001 ? normalize(toMouse) : vec2(1.0, 0.0);
  vec2 mousePush = pushDir * (influence * influence * 3.2);
  float mousePushZ = influence * 2.2;

  // Concentric ripple waves propagating out from mouse interaction
  float ripple = sin(distToMouse * 2.5 - uTime * 5.0) * influence * 0.45;

  vec3 finalCenter = animatedCenter + vec3(mousePush, mousePushZ + ripple);

  // 4. Subtle depth parallax
  if (uMouse.x < 1000.0) {
    vec3 parallax = vec3(-uMouse.x * (finalCenter.z * 0.025), -uMouse.y * (finalCenter.z * 0.025), 0.0);
    finalCenter += parallax;
  }

  // 5. Capsule orientation (tangent to circle + noise tilt)
  float tangentAngle = animatedAngle + 1.5707963 + (nx * 0.2);
  if (distToMouse < mouseRadius) {
    tangentAngle += influence * 0.4; // organic rotation when pushed
  }
  float cosA = cos(tangentAngle);
  float sinA = sin(tangentAngle);
  mat2 rot = mat2(cosA, -sinA, sinA, cosA);

  // 6. Scale & breathing animation
  float breathing = 1.0 + 0.08 * sin(uTime * 2.0 + aRandom.x * 6.2831);
  float hoverScale = 1.0 + influence * 1.35; // slightly enlarge nearby particles
  vHoverScale = hoverScale;
  
  float totalScale = aParams.z * breathing * hoverScale;
  
  vec3 localPos = position * totalScale;
  localPos.xy = rot * localPos.xy;

  // Fade opacity only for particles at extreme Z depths
  vOpacity = smoothstep(18.0, 6.0, abs(finalCenter.z));

  gl_Position = projectionMatrix * modelViewMatrix * vec4(finalCenter + localPos, 1.0);
}
`;

// --- Fragment Shader ---
const fragmentShader = `
precision highp float;

varying vec3 vColor;
varying vec2 vUv;
varying float vDistanceToMouse;
varying float vHoverScale;
varying float vOpacity;

// 2D Signed Distance Function (SDF) for a rounded line segment / capsule
float sdCapsule(vec2 p, vec2 a, vec2 b, float r) {
  vec2 pa = p - a, ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h) - r;
}

void main() {
  // Center UV coordinates to [-1, 1]
  vec2 p = vUv * 2.0 - 1.0;
  
  // Aspect correction for base PlaneGeometry(0.24, 0.06) -> ratio 4:1
  vec2 pAspect = vec2(p.x * 4.0, p.y);
  
  // Exact SDF for thin rounded capsule (pill/dash)
  float d = sdCapsule(pAspect, vec2(-2.4, 0.0), vec2(2.4, 0.0), 0.55);

  // Clean, universal 1-pixel anti-aliasing filter width
  float fw = 0.04;
  
  // Soft edges using smoothstep
  float alpha = 1.0 - smoothstep(-fw, fw, d);
  
  // Apply distance fading from vertex shader
  alpha *= vOpacity;
  
  if (alpha < 0.01) discard;

  // Enhance color with subtle interior luminescence for cinematic glow
  float innerGlow = smoothstep(0.0, -0.6, d);
  vec3 finalColor = vColor + vec3(0.22 * innerGlow);
  
  // Brighten nearby hovered particles slightly for responsive feedback
  if (vHoverScale > 1.05) {
    float boost = (vHoverScale - 1.0) * 0.45;
    finalColor += vec3(boost);
  }

  gl_FragColor = vec4(finalColor, alpha);
}
`;

export const HeroThreeBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 500;

    // 1. Scene, Camera, and WebGLRenderer Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      width / height,
      0.1,
      1000
    );
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // 100% transparent background
    container.appendChild(renderer.domElement);

    // 2. Mouse Tracking & Raycasting Setup
    const mouse = {
      ndcX: 0,
      ndcY: 0,
      targetWorld: new THREE.Vector3(9999, 9999, 0), // initialize off-screen
      dampedWorld: new THREE.Vector3(9999, 9999, 0),
      isHovered: false,
    };

    const raycaster = new THREE.Raycaster();
    const mousePlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0); // Z = 0 plane
    const planeIntersect = new THREE.Vector3();

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      if (
        event.clientY < rect.top - 100 ||
        event.clientY > rect.bottom + 100 ||
        event.clientX < rect.left - 100 ||
        event.clientX > rect.right + 100
      ) {
        mouse.targetWorld.set(9999, 9999, 0);
        return;
      }

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      mouse.ndcX = (x / rect.width) * 2 - 1;
      mouse.ndcY = -(y / rect.height) * 2 + 1;
      mouse.isHovered = true;

      raycaster.setFromCamera(new THREE.Vector2(mouse.ndcX, mouse.ndcY), camera);
      if (raycaster.ray.intersectPlane(mousePlane, planeIntersect)) {
        mouse.targetWorld.copy(planeIntersect);
      }
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
      mouse.targetWorld.set(9999, 9999, 0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    // 3. Particle Distribution & Google Antigravity Rainbow Vortex Generation
    const count = 7500; // In range 6000-8000
    const centers = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const randoms = new Float32Array(count * 3);
    const params = new Float32Array(count * 3); // x: radius, y: theta, z: scale

    // Exact Google Antigravity Rainbow Vortex Palette
    const colorStops = [
      new THREE.Color("#FFC107"), // Yellow
      new THREE.Color("#FF7043"), // Orange
      new THREE.Color("#F44336"), // Red
      new THREE.Color("#EC407A"), // Pink
      new THREE.Color("#AB47BC"), // Purple
      new THREE.Color("#5C6BC0"), // Indigo
      new THREE.Color("#2979FF"), // Blue
      new THREE.Color("#00E5FF"), // Cyan
      new THREE.Color("#FFC107"), // Continuous loop back to Yellow
    ];

    const numRings = 75; // 75 concentric rings
    let particleIndex = 0;

    const ringCapacities = [];
    let totalCapacity = 0;
    for (let r = 1; r <= numRings; r++) {
      const cap = Math.floor(15 + Math.pow(r, 1.15) * 1.8);
      ringCapacities.push(cap);
      totalCapacity += cap;
    }

    let currentR = 1.2; // Innermost ring starting radius
    for (let rIdx = 0; rIdx < numRings; rIdx++) {
      const ringSpacing = 0.28 + Math.random() * 0.12;
      currentR += ringSpacing;

      let dotsInRing = Math.round((ringCapacities[rIdx] / totalCapacity) * count);
      if (rIdx === numRings - 1) {
        dotsInRing = count - particleIndex;
      }

      const angleOffset = Math.random() * Math.PI * 2;

      for (let j = 0; j < dotsInRing; j++) {
        if (particleIndex >= count) break;

        const baseTheta = (j / dotsInRing) * Math.PI * 2 + angleOffset;
        const thetaJitter = (Math.random() - 0.5) * (0.25 / (rIdx + 1));
        const theta = baseTheta + thetaJitter;

        const radiusJitter = (Math.random() - 0.5) * 0.35;
        const r = currentR + radiusJitter;

        const z = (Math.random() - 0.5) * (3.5 + r * 0.12);

        const x = Math.cos(theta) * r;
        const y = Math.sin(theta) * r;

        centers[particleIndex * 3] = x;
        centers[particleIndex * 3 + 1] = y;
        centers[particleIndex * 3 + 2] = z;

        randoms[particleIndex * 3] = Math.random();
        randoms[particleIndex * 3 + 1] = Math.random();
        randoms[particleIndex * 3 + 2] = Math.random();

        const scale = 0.7 + Math.random() * 0.7; // 0.7x to 1.4x scale variation

        params[particleIndex * 3] = r;
        params[particleIndex * 3 + 1] = theta;
        params[particleIndex * 3 + 2] = scale;

        const normalizedAngle = ((theta / (Math.PI * 2)) % 1 + 1) % 1;
        const stopIndex = normalizedAngle * (colorStops.length - 1);
        const idx1 = Math.floor(stopIndex);
        const idx2 = Math.min(idx1 + 1, colorStops.length - 1);
        const t = stopIndex - idx1;

        const col = new THREE.Color().lerpColors(colorStops[idx1], colorStops[idx2], t);
        colors[particleIndex * 3] = col.r;
        colors[particleIndex * 3 + 1] = col.g;
        colors[particleIndex * 3 + 2] = col.b;

        particleIndex++;
      }
    }

    // 4. Robust InstancedMesh with Official Attribute Bindings (Guarantees WebGL VAO registration)
    const geometry = new THREE.PlaneGeometry(0.24, 0.06);
    geometry.setAttribute("aCenter", new THREE.InstancedBufferAttribute(centers, 3));
    geometry.setAttribute("aColor", new THREE.InstancedBufferAttribute(colors, 3));
    geometry.setAttribute("aRandom", new THREE.InstancedBufferAttribute(randoms, 3));
    geometry.setAttribute("aParams", new THREE.InstancedBufferAttribute(params, 3));

    const shaderMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector3(9999, 9999, 0) },
        uResolution: {
          value: new THREE.Vector2(
            width * Math.min(window.devicePixelRatio, 2),
            height * Math.min(window.devicePixelRatio, 2)
          ),
        },
      },
      transparent: true,
      depthWrite: false,
      depthTest: true,
      side: THREE.DoubleSide,
    });

    const instancedMesh = new THREE.InstancedMesh(geometry, shaderMaterial, count);
    instancedMesh.frustumCulled = false; // Prevent culling during GPU shader displacement

    // Initialize identity matrices for all 7500 instances so WebGL creates proper bounding volumes
    const dummy = new THREE.Object3D();
    for (let i = 0; i < count; i++) {
      const x = centers[i * 3];
      const y = centers[i * 3 + 1];
      const z = centers[i * 3 + 2];
      const theta = params[i * 3 + 1];

      dummy.position.set(x, y, z);
      dummy.rotation.z = theta + Math.PI / 2;
      dummy.scale.set(1, 1, 1);
      dummy.updateMatrix();
      instancedMesh.setMatrixAt(i, dummy.matrix);

      instancedMesh.setColorAt(
        i,
        new THREE.Color(colors[i * 3], colors[i * 3 + 1], colors[i * 3 + 2])
      );
    }
    instancedMesh.instanceMatrix.needsUpdate = true;
    if (instancedMesh.instanceColor) instancedMesh.instanceColor.needsUpdate = true;

    scene.add(instancedMesh);

    // 5. Post-Processing Pipeline (EffectComposer, RenderPass, UnrealBloomPass, ToneMapping, FXAA)
    const composer = new EffectComposer(renderer);

    const renderPass = new RenderPass(scene, camera);
    renderPass.clearColor = new THREE.Color(0x000000);
    renderPass.clearAlpha = 0; // Maintain transparent background
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      0.45, // Soft cinematic glow strength
      0.55, // Radius
      0.2   // Threshold
    );
    composer.addPass(bloomPass);

    const outputPass = new OutputPass();
    composer.addPass(outputPass);

    const fxaaPass = new ShaderPass(FXAAShader);
    const pixelRatio = renderer.getPixelRatio();
    fxaaPass.material.uniforms["resolution"].value.x = 1 / (width * pixelRatio);
    fxaaPass.material.uniforms["resolution"].value.y = 1 / (height * pixelRatio);
    composer.addPass(fxaaPass);

    // 6. High-Performance GPU Animation Loop (60 FPS target)
    let animationFrameId;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Update shader uniforms
      shaderMaterial.uniforms.uTime.value = elapsedTime;

      // Smooth mouse damping
      mouse.dampedWorld.lerp(mouse.targetWorld, 0.06);
      shaderMaterial.uniforms.uMouse.value.copy(mouse.dampedWorld);

      // Subtle cinematic camera and vortex tilt toward the mouse
      if (mouse.dampedWorld.x < 1000) {
        const tiltX = mouse.dampedWorld.x * 0.015;
        const tiltY = -mouse.dampedWorld.y * 0.015;
        instancedMesh.rotation.y += (tiltX - instancedMesh.rotation.y) * 0.05;
        instancedMesh.rotation.x += (tiltY - instancedMesh.rotation.x) * 0.05;

        camera.position.x += (mouse.dampedWorld.x * 0.15 - camera.position.x) * 0.05;
        camera.position.y += (mouse.dampedWorld.y * 0.15 - camera.position.y) * 0.05;
        camera.lookAt(0, 0, 0);
      } else {
        instancedMesh.rotation.y += (0 - instancedMesh.rotation.y) * 0.05;
        instancedMesh.rotation.x += (0 - instancedMesh.rotation.x) * 0.05;
        camera.position.x += (0 - camera.position.x) * 0.05;
        camera.position.y += (0 - camera.position.y) * 0.05;
        camera.lookAt(0, 0, 0);
      }

      // Render through EffectComposer
      composer.render();
    };
    animate();

    // 7. Responsive Window Resize Handler
    const handleResize = () => {
      if (!container) return;
      const currentWidth = container.clientWidth || window.innerWidth;
      const currentHeight = container.clientHeight || 500;
      const currentPixelRatio = Math.min(window.devicePixelRatio, 2);

      camera.aspect = currentWidth / currentHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(currentWidth, currentHeight);
      composer.setSize(currentWidth, currentHeight);

      if (fxaaPass && fxaaPass.material && fxaaPass.material.uniforms["resolution"]) {
        fxaaPass.material.uniforms["resolution"].value.x = 1 / (currentWidth * currentPixelRatio);
        fxaaPass.material.uniforms["resolution"].value.y = 1 / (currentHeight * currentPixelRatio);
      }

      if (shaderMaterial && shaderMaterial.uniforms["uResolution"]) {
        shaderMaterial.uniforms["uResolution"].value.set(
          currentWidth * currentPixelRatio,
          currentHeight * currentPixelRatio
        );
      }
    };
    window.addEventListener("resize", handleResize);

    // 8. Cleanup on Unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      shaderMaterial.dispose();
      renderer.dispose();
      composer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
    />
  );
};
