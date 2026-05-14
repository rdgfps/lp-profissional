import React from 'react'
import { BENEFITS, SITE_CONFIG } from '../config'
import { getWhatsAppLink } from '../utils/whatsapp'

export default function Benefits() {
  return (
    <section className="py-24 bg-sage-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-center">

        {/* Left — content */}
        <div>
          <div className="reveal">
            <span className="inline-block text-sage-500 text-sm font-medium uppercase tracking-widest mb-3">
              Por que escolher meu método?
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-sage-900 leading-tight mb-8">
              Benefícios que você <br />
              <span className="italic text-sage-600">vai sentir na prática</span>
            </h2>
          </div>

          <ul className="space-y-4">
            {BENEFITS.map((benefit, i) => (
              <li
                key={i}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)} flex items-start gap-3`}
              >
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-sage-500 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="font-body text-stone-600 text-sm leading-relaxed">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>

          <div className="reveal mt-10">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-sage-600 text-white font-medium hover:bg-sage-700 transition-all duration-200 hover:shadow-hover hover:-translate-y-0.5"
            >
              Quero esses benefícios
            </a>
          </div>
        </div>

        {/* Right — visual card */}
        <div className="reveal reveal-delay-2">
          <div className="relative bg-white rounded-3xl shadow-card p-8 overflow-hidden">
            {/* Decorative blob inside card */}
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-sage-100 -translate-y-1/2 translate-x-1/2 opacity-60" />

            <div className="relative">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="font-display text-2xl font-semibold text-sage-900 mb-3">
                Método Ana Oliveira
              </h3>
              <p className="font-body text-sm text-stone-500 leading-relaxed mb-6">
                Uma abordagem integrativa que une ciência nutricional, escuta ativa e
                estratégias práticas para o dia a dia — porque saúde tem que caber na
                sua vida real.
              </p>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { num: '97%', label: 'satisfação' },
                  { num: '8+', label: 'anos' },
                  { num: '200+', label: 'pacientes' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-sage-50 rounded-2xl p-3 text-center"
                  >
                    <p className="font-display text-xl font-semibold text-sage-700">
                      {s.num}
                    </p>
                    <p className="text-[11px] text-stone-400 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quote floating card */}
          <div className="mt-5 bg-sage-700 rounded-2xl p-5 text-white relative overflow-hidden shadow-card">
            <div className="absolute top-3 right-4 font-display text-7xl text-sage-500/30 leading-none select-none">"</div>
            <p className="font-body text-sm leading-relaxed relative z-10 italic">
              "Meu objetivo não é te dar uma dieta. É te ensinar a comer bem para a
              vida toda, com prazer e sem culpa."
            </p>
            <p className="mt-3 text-sage-300 text-xs font-medium">— {SITE_CONFIG.name}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
