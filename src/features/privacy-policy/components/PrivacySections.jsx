import React from 'react';
import { FiGlobe, FiInfo, FiFileText, FiDatabase } from 'react-icons/fi';
import { privacySections, informationCollected, yourRights, securityMeasures } from '../constants/privacyData';

const iconMap = {
  FiInfo,
  FiGlobe,
  FiFileText,
  FiDatabase
};

export const PrivacySections = () => {
  return (
    <>
      {/* Dynamic Intro, Scope, Definitions */}
      {privacySections.map((section, idx) => {
        const Icon = iconMap[section.icon];
        return (
          <section key={idx}>
            <h2 className="text-xl font-black text-gray-900 flex items-center gap-2 mb-4 uppercase tracking-tight">
              {Icon && <Icon className="text-yellow-400" />} {section.title}
            </h2>
            
            {section.content && section.content.map((p, i) => (
              <p key={i} className={i > 0 ? "mt-4" : ""}>{p}</p>
            ))}

            {section.list && (
              <ul className="list-disc pl-5 mt-2 space-y-1">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {section.footer && (
              <p className="mt-4">{section.footer}</p>
            )}

            {section.definitions && (
              <div className="space-y-3">
                {section.definitions.map((def, i) => (
                  <p key={i}><strong>{def.term}</strong> {def.desc}</p>
                ))}
              </div>
            )}
          </section>
        );
      })}

      {/* Information We Collect */}
      <section>
        <h2 className="text-xl font-black text-gray-900 flex items-center gap-2 mb-4 uppercase tracking-tight">
          <FiDatabase className="text-yellow-400" /> 4. Information We Collect
        </h2>
        <div className="space-y-6">
          {informationCollected.map((item, idx) => (
            <div key={idx}>
              <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
              {item.isList ? (
                <ul className="list-disc pl-5 space-y-1 text-gray-500">
                  {item.content.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              ) : (
                <p>{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Rights & Security */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="p-8 bg-gray-50 rounded-3xl">
          <h2 className="text-lg font-black text-gray-900 mb-4 uppercase">{yourRights.title}</h2>
          <p className="text-xs space-y-1">{yourRights.content}</p>
        </section>
        <section className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
          <h2 className="text-lg font-black text-gray-900 mb-4 uppercase">{securityMeasures.title}</h2>
          <p className="text-xs">{securityMeasures.content}</p>
        </section>
      </div>
    </>
  );
};
