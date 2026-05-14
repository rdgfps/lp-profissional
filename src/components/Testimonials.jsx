import React from 'react'
import { TESTIMONIALS } from '../config'
import { getWhatsAppLink } from '../utils/whatsapp'

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-sage-50 -translate-y-1/2 translate-x-1/2 opacity-70" />
      <div className="absolute left-0 bottom-0 w-48 h-48 rounded-full bg-cream-100 translate-y-1/3 -translate-x-1/3 opacity-60" />

      <div className="relative max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="reveal text-center mb-14">
          <span className="inline-block text-sage-500 text-sm font-medium uppercase tracking-widest mb-3">
            Depoimentos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-sage-900">
            O que minhas pacientes dizem
          </h2>
          <p className="mt-4 font-body text-stone-500 text-base max-w-xl mx-auto">
            Resultados reais de mulheres que confiaram no processo e transformaram
            sua saúde e relação com a alimentação.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} group bg-white rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border border-sage-50 p-7 flex flex-col`}
            >
              {/* Stars */}
              <StarRating count={t.stars} />

              {/* Quote mark */}
              <div className="font-display text-5xl text-sage-200 leading-none mt-2 mb-1 select-none">"</div>

              {/* Text */}
              <p className="font-body text-stone-600 text-sm leading-relaxed flex-1">
                {t.text}
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-sage-50">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center font-display text-sage-700 font-semibold text-base`}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="font-body font-semibold text-sage-900 text-sm leading-none">
                    {t.name}
                  </p>
                  <p className="text-xs text-stone-400 mt-0.5">{t.role}</p>
                </div>
                {/* Verified badge */}
                <div className="ml-auto">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-sage-50 text-sage-600 text-[10px] font-medium border border-sage-100">
                    <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    verificado
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom nudge */}
        <div className="reveal text-center mt-12">
          <p className="font-body text-stone-400 text-sm mb-5">
            Pronta para escrever o seu próprio depoimento?
          </p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-sage-600 text-white font-medium hover:bg-sage-700 transition-all duration-200 hover:shadow-hover hover:-translate-y-0.5"
          >
            Agendar minha consulta
          </a>
        </div>
      </div>
    </section>
  )
}
