import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Components
import { PrivacyHeader } from '../components/PrivacyHeader';
import { PrivacySections } from '../components/PrivacySections';
import { RetentionTable } from '../components/RetentionTable';
import { ContactInfo } from '../components/ContactInfo';

export const PrivacypolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <div className="w-full bg-white text-gray-900 pt-28 selection:bg-green-100">
        <Helmet>
          <title>Privacy Policy | Flowbee.io</title>
          <meta name="description" content="Flowbee.io Privacy Policy" />
        </Helmet>
        
        <PrivacyHeader />

        <section className="py-24 px-4 max-w-5xl mx-auto font-sans">
          <div className="text-gray-600 leading-relaxed space-y-12 text-sm">
            <PrivacySections />
            <RetentionTable />
            <ContactInfo />
          </div>
        </section>
      </div>
    </HelmetProvider>
  );
};
