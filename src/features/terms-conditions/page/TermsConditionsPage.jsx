import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Components
import { TermsHeader } from '../components/TermsHeader';
import { TermsIntro } from '../components/TermsIntro';
import { TermsContent } from '../components/TermsContent';
import { FooterCompliance } from '../components/FooterCompliance';

export const TermsConditionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <div className="w-full bg-white text-[#111] pt-28 selection:bg-[#25D366]/30">
        <Helmet>
          <title>Terms & Conditions (EULA) | Flowbee.io</title>
          <meta name="description" content="Flowbee.io Terms & Conditions and End User License Agreement." />
        </Helmet>
        
        <TermsHeader />

        <section className="py-24 px-4 max-w-5xl mx-auto">
          <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed space-y-8 font-sans">
            <TermsIntro />
            <TermsContent />
          </div>
        </section>

        <FooterCompliance />
      </div>
    </HelmetProvider>
  );
};
