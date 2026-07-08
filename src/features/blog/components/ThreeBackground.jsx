import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const ThreeBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 28;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Mouse Tracking & Damping
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      // Normalize between -1 and 1
      mouse.targetX = (x / rect.width) * 2 - 1;
      mouse.targetY = -(y / rect.height) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // 3. Create Antigravity Particle Wave (500 dots for rich, dynamic look)
    const cols = 25;
    const rows = 20;
    const particleCount = cols * rows;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const originalPositions = new Float32Array(particleCount * 3);

    let idx = 0;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        // Spread across X and Y
        const x = (i - cols / 2) * 2.2;
        const y = (j - rows / 2) * 1.8;
        const z = (Math.sin(i * 0.2) + Math.cos(j * 0.2)) * 2;

        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;

        originalPositions[idx * 3] = x;
        originalPositions[idx * 3 + 1] = y;
        originalPositions[idx * 3 + 2] = z;

        // Scatter mix: 60% Yellow dots (#FFD400), 40% White dots (#FFFFFF)
        const isYellow = (i + j) % 2 === 0 || Math.random() > 0.4;
        if (isYellow) {
          colors[idx * 3] = 1.0;      // R
          colors[idx * 3 + 1] = 0.83; // G (#D4 / 255)
          colors[idx * 3 + 2] = 0.0;  // B
        } else {
          colors[idx * 3] = 1.0;      // R
          colors[idx * 3 + 1] = 1.0;  // G
          colors[idx * 3 + 2] = 1.0;  // B
        }

        scales[idx] = Math.random() * 0.8 + 0.4;
        idx++;
      }
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    particleGeo.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

    // Generate round circle texture in JS for smooth rounded dots
    const createRoundDotTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.arc(32, 32, 28, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      return new THREE.CanvasTexture(canvas);
    };
    const roundTexture = createRoundDotTexture();

    // Glowy White & Yellow Particle Material matching theme
    const particleMat = new THREE.PointsMaterial({
      size: 0.32,
      map: roundTexture,
      alphaTest: 0.1,
      vertexColors: true, // Enable per-dot RGB colors (White & Yellow)
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 4. Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse damping (Lerp)
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Rotate particle dots subtly towards mouse cursor
      particleSystem.rotation.y = mouse.x * 0.4;
      particleSystem.rotation.x = -mouse.y * 0.4;

      // Wave & Mouse Repulsion on Particles
      const posArr = particleGeo.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const ox = originalPositions[i * 3];
        const oy = originalPositions[i * 3 + 1];
        const oz = originalPositions[i * 3 + 2];

        // Undulating wave calculation
        const wave =
          Math.sin(elapsedTime * 2 + ox * 0.25) * 1.2 +
          Math.cos(elapsedTime * 1.5 + oy * 0.25) * 1.2;

        // Calculate distance to projected mouse cursor in 3D space
        const mouseWorldX = mouse.x * 25;
        const mouseWorldY = mouse.y * 15;
        const dx = ox - mouseWorldX;
        const dy = oy - mouseWorldY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Interactive Anti-gravity repulsion when mouse hovers nearby
        let repelZ = 0;
        if (dist < 8) {
          const factor = (1 - dist / 8);
          repelZ = factor * factor * 6; // Push dots outward towards viewer
        }

        posArr[i * 3 + 2] = oz + wave + repelZ;
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    // 5. Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // 6. Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      particleGeo.dispose();
      particleMat.dispose();
      roundTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
    />
  );
};
