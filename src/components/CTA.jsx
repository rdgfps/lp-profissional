import React from 'react'
import { SITE_CONFIG } from '../config'
import { getWhatsAppLink } from '../utils/whatsapp'

export default function CTA() {
  return (
    <section id="cta" className="py-24 bg-sage-gradient texture-overlay relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-[-80px] right-[-80px] w-64 h-64 rounded-full bg-white/5" />
      <div className="absolute bottom-[-60px] left-[-60px] w-48 h-48 rounded-full bg-white/5" />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-white/5 -translate-y-1/2" />

      <div className="relative max-w-4xl mx-auto px-5 text-center">
        {/* Icon */}
        <div className="reveal mb-6 flex justify-center">
          <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center text-3xl backdrop-blur-sm">
            🌿
          </div>
        </div>

        <div className="reveal reveal-delay-1">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-5">
            Pronta para transformar
            <br />
            <span className="italic">sua saúde de vez?</span>
          </h2>
          <p className="font-body text-sage-100 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Agende sua consulta agora pelo WhatsApp e dê o primeiro passo rumo a
            uma vida mais leve, saudável e feliz. Sem enrolação, sem fórmulas mágicas
            — só resultado de verdade.
          </p>
        </div>

        {/* CTA Button */}
        <div className="reveal reveal-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-9 py-5 rounded-full bg-white text-sage-700 font-semibold text-lg hover:bg-cream-50 transition-all duration-200 hover:shadow-hover hover:-translate-y-0.5 animate-pulse-soft"
          >
            <WhatsAppIcon />
            Falar com a Dra. Ana agora
          </a>
        </div>

        {/* Reassurance */}
        <div className="reveal reveal-delay-3 mt-8 flex flex-wrap justify-center gap-5 text-sage-100 text-sm">
          {[
            '✅ Resposta rápida',
            '✅ Primeira consulta sem compromisso',
            '✅ Atendimento online disponível',
          ].map((item) => (
            <span key={item} className="font-body">{item}</span>
          ))}
        </div>

        {/* Urgency nudge */}
        <div className="reveal reveal-delay-4 mt-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
            <span className="w-2 h-2 rounded-full bg-amber-300 animate-pulse" />
            <span className="text-white text-xs font-medium">
              Vagas limitadas por mês — garanta a sua
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}
