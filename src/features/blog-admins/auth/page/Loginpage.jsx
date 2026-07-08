import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputBox } from "../../../../../lib/turtle-ui/components/input-box/InputBox";
import { Button } from "../../../../../lib/turtle-ui/components/button/Button";

export const Loginpage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@flowbee.io");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      return;
    }

    setIsLoading(true);

    // Simulate instant secure auth authentication
    setTimeout(() => {
      localStorage.setItem("flowbee_admin_auth", "true");
      localStorage.setItem("flowbee_admin_email", email);
      setIsLoading(false);
      navigate("/admin/create-blog");
    }, 400);
  };

  return (
    <div className="flex-1 flex items-center justify-center min-h-[75vh]">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl border border-gray-200/80 shadow-xl relative overflow-hidden">
        {/* Top Decorative Yellow Accent */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FFD400] via-[#FACC15] to-[#EAB308]" />

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#FFD400]/20 text-[#CA8A04] mb-4 shadow-inner border border-[#FFD400]/40">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-black text-neutral-900 tracking-tight">
            Admin Portal Access
          </h2>
          <p className="text-xs text-neutral-500 mt-1.5 font-medium">
            Sign in to access the Flowbee Blog Studio & CMS
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-bold flex items-center gap-2">
            <span>⚠️</span> {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1.5">
              Email Address
            </label>
            <InputBox
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@flowbee.io"
              className="w-full !rounded-xl !bg-gray-50/80 focus:!bg-white font-medium text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1.5">
              Password
            </label>
            <InputBox
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full !rounded-xl !bg-gray-50/80 focus:!bg-white font-medium text-sm"
              required
            />
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full !bg-[#FFD400] hover:!bg-[#E6BF00] !text-black !font-black !py-3 !rounded-xl shadow-[0px_4px_12px_rgba(255,212,0,0.35)] hover:shadow-[0px_6px_16px_rgba(255,212,0,0.45)] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4 text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Authenticating...</span>
                </>
              ) : (
                <span>Access Studio Dashboard →</span>
              )}
            </Button>
          </div>
        </form>

        {/* <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-[11px] text-neutral-400">
            Demo Credentials: <span className="font-semibold text-neutral-600">admin@flowbee.io</span> / <span className="font-semibold text-neutral-600">admin123</span>
          </p>
        </div> */}
      </div>
    </div>
  );
};
