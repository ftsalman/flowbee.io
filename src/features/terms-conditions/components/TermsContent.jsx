import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { termsSections, termsFinalSections } from '../constants/termsData';

const iconMap = {
  FaWhatsapp,
  FiMail
};

export const TermsContent = () => {
  return (
    <div className="space-y-12 pt-12 text-sm">
      {termsSections.map((section, idx) => {
        const Icon = iconMap[section.icon];
        return (
          <section key={idx} className={section.style ? section.style : ""}>
            <h2 className={`text-xl font-black mb-4 flex items-center gap-2 ${section.titleStyle || 'text-[#111]'}`}>
              {Icon && <Icon />} {section.title}
            </h2>
            
            {section.content && <p className={section.contentHtml ? "" : ""}>{section.content}</p>}
            
            {section.contentHtml && (
              <p dangerouslySetInnerHTML={{ __html: section.contentHtml }}></p>
            )}

            {section.list && (
              <ul className="list-none space-y-3 mt-4">
                {section.list.map((item, i) => {
                  const strongEnd = item.indexOf("”") + 1;
                  const beforeStrong = item.slice(0, 4);
                  const strongText = item.slice(4, strongEnd);
                  const afterStrong = item.slice(strongEnd);
                  return (
                    <li key={i}>
                      {beforeStrong}<strong>{strongText}</strong>{afterStrong}
                    </li>
                  )
                })}
              </ul>
            )}

            {section.paragraphs && (
              <div className="space-y-4">
                {section.paragraphs.map((p, i) => (
                  <p key={i}><strong>{p.key}</strong> {p.text}</p>
                ))}
              </div>
            )}
          </section>
        );
      })}

      {/* 22-28. FINAL SECTIONS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {termsFinalSections.map((section, idx) => (
          <div key={idx}>
            <h3 className="font-bold mb-2">{section.title}</h3>
            <p className="text-xs">{section.desc}</p>
          </div>
        ))}
        <div id="section-28" className="bg-[#FFDD2D]/10 p-6 rounded-2xl border border-[#FFDD2D]/20">
          <h3 className="font-black text-[#111] uppercase tracking-widest text-[10px] mb-2 flex items-center gap-2">
            <FiMail /> 28. NOTICES
          </h3>
          <p className="text-xs font-bold mb-1">Legal Affairs Department</p>
          <p className="text-xs">Sharaco Private Ltd / Task Force Technologies Est</p>
          <p className="text-[11px] font-black mt-2">Contact@flowbee.io</p>
        </div>
      </section>
    </div>
  );
};
