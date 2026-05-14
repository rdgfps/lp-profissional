import React from 'react'
import { SITE_CONFIG } from '../config'
import { getWhatsAppLink } from '../utils/whatsapp'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-cream-50"
    >
      {/* Background blobs */}
      <div className="hero-blob w-[500px] h-[500px] bg-sage-300 top-[-100px] right-[-120px]" />
      <div className="hero-blob w-[300px] h-[300px] bg-cream-400 bottom-[-60px] left-[-80px]" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, #3f6e3f 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 py-28 md:py-0 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left — Text */}
        <div className="order-2 md:order-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage-100 border border-sage-200 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-sage-500 animate-pulse" />
            <span className="text-sage-700 text-xs font-medium tracking-wide uppercase">
              Atendimento presencial & online
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] text-sage-900 mb-6 animate-fade-up">
            Transforme sua
            <br />
            <span className="italic text-sage-600">saúde</span> através
            <br />
            da alimentação
          </h1>

          <p className="font-body text-lg text-stone-600 leading-relaxed mb-8 max-w-md animate-fade-up" style={{ animationDelay: '0.15s' }}>
            {SITE_CONFIG.tagline}. Consultas individuais com plano alimentar
            personalizado, baseado em ciência e no seu estilo de vida.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ animationDelay: '0.25s' }}>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-sage-600 text-white font-medium text-base hover:bg-sage-700 transition-all duration-300 hover:shadow-hover hover:-translate-y-0.5"
            >
              <WhatsAppIcon />
              Agendar minha consulta
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-sage-300 text-sage-700 font-medium text-base hover:bg-sage-50 transition-all duration-200"
            >
              Conhecer mais
            </a>
          </div>

          {/* Social proof strip */}
          <div className="mt-10 flex items-center gap-6 animate-fade-up" style={{ animationDelay: '0.35s' }}>
            <div className="flex -space-x-2">
              {['M', 'F', 'J', 'C'].map((l, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-xs font-semibold text-white"
                  style={{ background: ['#558c55','#7aaa7a','#3f6e3f','#a8c9a8'][i] }}
                >
                  {l}
                </div>
              ))}
            </div>
            <div>
              <div className="flex text-amber-400 text-sm">{'★★★★★'}</div>
              <p className="text-xs text-stone-500 mt-0.5">
                +200 pacientes transformados
              </p>
            </div>
          </div>
        </div>

        {/* Right — Image */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute inset-[-16px] rounded-[40px] border-2 border-sage-200/60 rotate-3" />
            <div className="absolute inset-[-8px] rounded-[36px] bg-sage-50 -rotate-2" />

            <div className="relative w-72 h-96 sm:w-80 sm:h-[440px] md:w-[360px] md:h-[480px] rounded-[32px] overflow-hidden shadow-card animate-float">
              <img
                src={SITE_CONFIG.heroImage}
                alt={`Foto de ${SITE_CONFIG.name}`}
                className="w-full h-full object-cover"
                loading="eager"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-sage-900/30 via-transparent to-transparent" />
            </div>

            {/* Floating card — CRN */}
            <div className="absolute -bottom-5 -left-6 bg-white rounded-2xl shadow-card px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center">
                <span className="text-lg">🌿</span>
              </div>
              <div>
                <p className="text-xs text-stone-500 leading-none mb-0.5">
                  {SITE_CONFIG.crn}
                </p>
                <p className="text-sm font-semibold text-sage-800 leading-none">
                  {SITE_CONFIG.name}
                </p>
              </div>
            </div>

            {/* Floating card — experience */}
            <div className="absolute -top-4 -right-4 bg-sage-600 rounded-2xl shadow-card px-4 py-3 text-white">
              <p className="text-2xl font-display font-semibold leading-none">8+</p>
              <p className="text-[11px] font-body leading-tight mt-0.5">anos de<br />experiência</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 wave-divider">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,40 C360,0 1080,70 1440,30 L1440,60 L0,60 Z" fill="#f4f8f4" />
        </svg>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}
