import React from 'react'
import { FOR_WHO_ITEMS } from '../config'
import { getWhatsAppLink } from '../utils/whatsapp'

export default function ForWho() {
  return (
    <section className="py-24 bg-cream-50 relative overflow-hidden">
      {/* Faint pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, #3f6e3f 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="reveal text-center mb-14">
          <span className="inline-block text-sage-500 text-sm font-medium uppercase tracking-widest mb-3">
            Para quem é
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-sage-900 leading-tight">
            Posso te ajudar se você…
          </h2>
          <p className="mt-4 font-body text-stone-500 text-base max-w-xl mx-auto">
            Atendo pessoas que buscam resultados reais com saúde e equilíbrio —
            sem extremismos nem dietas mágicas.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FOR_WHO_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} group bg-white rounded-2xl p-6 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border border-sage-50`}
            >
              <div className="w-12 h-12 rounded-xl bg-sage-50 flex items-center justify-center text-2xl mb-4 group-hover:bg-sage-100 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-sage-900 mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="font-body text-sm text-stone-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA inline */}
        <div className="reveal text-center mt-12">
          <p className="text-stone-500 text-sm mb-4">
            Se você se identificou com algum desses perfis, estou pronta para te ajudar.
          </p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-sage-600 text-white font-medium hover:bg-sage-700 transition-all duration-200 hover:shadow-hover hover:-translate-y-0.5"
          >
            Quero começar agora
          </a>
        </div>
      </div>
    </section>
  )
}
