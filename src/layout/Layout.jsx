import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { ScrollToTop } from "../components/scroll-to-top/ScrollToTop";
import { BackToTop } from "../components/back-to-top/BackToTop";
import { PromoPopup } from "../components/PromoPopup";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";

export const Layout = () => {
  return (
    <>
      <ScrollToTop />

      <div className="flex flex-col min-h-screen ">
        {/* Fixed Navbar */}
        <Navbar />

        <div className="flex-grow flex flex-col ">
          <Outlet />
        </div>
        <Footer />
      </div>
      <BackToTop />
      <PromoPopup />
      <FloatingWhatsApp />
    </>
  );
};
