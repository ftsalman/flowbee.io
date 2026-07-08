import React, { useEffect, useState } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "../../../../../lib/turtle-ui/components/button/Button";

export const AuthLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("flowbee_admin_auth"),
  );

  useEffect(() => {
    // Check auth status on route change
    const authStatus = !!localStorage.getItem("flowbee_admin_auth");
    setIsLoggedIn(authStatus);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("flowbee_admin_auth");
    setIsLoggedIn(false);
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#FAFBFD] flex flex-col selection:bg-[#FFD400]/40 selection:text-black font-sans relative overflow-x-hidden">
      {/* Top Yellow Brand Accent Strip */}
      <div className="h-1 bg-[#FFD400] w-full" />

      {/* Admin Navbar */}
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link to="/" className="flex items-center gap-2 group shrink-0">
              <img src="/images/logo.png" alt="Logo" className="h-4 sm:h-5 w-auto" />
            </Link>
            <span className="h-5 w-[1px] bg-gray-300 mx-1 hidden sm:block" />
            <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded-md bg-[#FFD400]/20 text-neutral-900 border border-[#FFD400]/60 text-[10px] sm:text-xs font-bold tracking-wide uppercase shrink-0">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#CA8A04] animate-pulse" />
              <span className="hidden sm:inline">Admin Studio</span>
              <span className="sm:hidden">Admin</span>
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <Link
              to="/blog"
              className="text-[11px] sm:text-sm font-bold text-neutral-700 hover:text-black flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 shadow-sm transition-all active:scale-95 shrink-0"
              title="View Live Blog"
            >
              <span>←</span>
              <span className="hidden sm:inline">View Live Blog</span>
              <span className="sm:hidden">Live Blog</span>
            </Link>

            {isLoggedIn ? (
              <div className="flex items-center gap-1.5 sm:gap-3 pl-1.5 sm:pl-2 border-l border-gray-200 shrink-0">
                <Button
                  size="md"
                  onClick={handleLogout}
                  className="!bg-red-50 hover:!bg-red-100 !text-red-600 !border !border-red-200 !font-extrabold !rounded-xl !px-2.5 sm:!px-4 !py-1.5 sm:!py-2 !text-xs sm:!text-sm shadow-sm active:scale-95 transition-all cursor-pointer shrink-0"
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              location.pathname !== "/admin/login" && (
                <div className="flex items-center gap-1.5 sm:gap-3 pl-1.5 sm:pl-2 border-l border-gray-200 shrink-0">
                  <Link to="/admin/login">
                    <Button
                      size="md"
                      className="!bg-[#FFD400] hover:!bg-[#E6BF00] !text-black !font-extrabold !rounded-xl !px-2.5 sm:!px-4 !py-1.5 sm:!py-2 !text-xs sm:!text-sm shadow-[2px_2px_0px_0px_#C9A000] active:scale-95 transition-all cursor-pointer shrink-0"
                    >
                      Sign In
                    </Button>
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </header>

      {/* Main Studio Content Area */}
      <main className="flex-1 flex flex-col relative z-10 py-4 sm:py-8 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <Outlet />
      </main>

      {/* Footer Minimal */}
      <footer className="py-6 px-4 border-t border-gray-200/60 bg-white text-center text-[11px] sm:text-xs text-neutral-400">
        © {new Date().getFullYear()} Flowbee Inc. Admin Content Management
        System. All rights reserved.
      </footer>
    </div>
  );
};
