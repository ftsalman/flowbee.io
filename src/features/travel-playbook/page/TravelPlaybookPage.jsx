import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { structuredData } from '../constants/travelData';
import { sendWhatsappTemplate } from '../../../../lib/whatsappApi';

// Components
import { HeroSection } from '../components/HeroSection';
import { MarketContext } from '../components/MarketContext';
import { ChallengeSection } from '../components/ChallengeSection';
import { BroadcastSection } from '../components/BroadcastSection';
import { SolutionPillars } from '../components/SolutionPillars';
import { DailyUseCases } from '../components/DailyUseCases';
import { BenefitsSection } from '../components/BenefitsSection';
import { BroadcastTemplates } from '../components/BroadcastTemplates';
import { AnalyticsReports } from '../components/AnalyticsReports';
import { ScenariosSection } from '../components/ScenariosSection';
import { FAQSection } from '../components/FAQSection';
import { FinalCTA } from '../components/FinalCTA';
import { PromoModal } from '../components/PromoModal';

export const TravelPlaybookPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- STATE MANAGEMENT ---
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  const [promoView, setPromoView] = useState('compare');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  // --- TIMED TRIGGER (20 Seconds) ---
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPromoOpen(true);
    }, 20000); 
    return () => clearTimeout(timer);
  }, []);

  const handlePromoClose = () => {
    setIsPromoOpen(false);
    setTimeout(() => setPromoView('compare'), 500);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePromoSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendWhatsappTemplate(formData);
      setPromoView('success');
    } catch (error) {
      console.error("Error sending WhatsApp messages:", error);
      alert("Something went wrong. Please check the console for details.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <HelmetProvider>
        <main className="w-full bg-white text-slate-900 selection:bg-[#0B2447]/20 overflow-x-hidden font-sans">
          
          <Helmet>
            <title>WhatsApp Automation for Tours & Travels | Flowbee.io</title>
            <meta name="description" content="Flowbee.io helps travel agencies manage WhatsApp enquiries, send travel offers, automate replies, organize team inbox, share packages, and convert more bookings." />
            <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
          </Helmet>

          <HeroSection onOpenPromo={() => setIsPromoOpen(true)} />
          <MarketContext />
          <ChallengeSection />
          <BroadcastSection />
          <SolutionPillars />
          <DailyUseCases />
          <BenefitsSection />
          <BroadcastTemplates />
          <AnalyticsReports />
          <ScenariosSection />
          <FAQSection />
          <FinalCTA onOpenPromo={() => setIsPromoOpen(true)} />
          
          <PromoModal 
            isOpen={isPromoOpen}
            onClose={handlePromoClose}
            promoView={promoView}
            setPromoView={setPromoView}
            formData={formData}
            handleInputChange={handleInputChange}
            handlePromoSubmit={handlePromoSubmit}
            isSubmitting={isSubmitting}
          />
        </main>
      </HelmetProvider>
    </>
  );
};
