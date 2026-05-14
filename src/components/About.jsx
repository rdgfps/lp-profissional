import React from 'react'
import { SITE_CONFIG } from '../config'
import { getWhatsAppLink } from '../utils/whatsapp'

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-sage-50">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-14 items-center">

        {/* Image side */}
        <div className="reveal flex justify-center md:justify-start">
          <div className="relative">
            {/* Background shape */}
            <div className="absolute top-6 left-6 w-full h-full rounded-3xl bg-sage-200/50" />

            <div className="relative w-72 h-[420px] sm:w-80 sm:h-[460px] rounded-3xl overflow-hidden shadow-card">
              <img
                src={SITE_CONFIG.aboutImage}
                alt={`Dra. ${SITE_CONFIG.name} nutricionista`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-900/20 via-transparent to-transparent" />
            </div>

            {/* Stats card */}
            <div className="absolute -right-5 bottom-10 bg-white rounded-2xl shadow-card p-4 flex flex-col items-center min-w-[100px]">
              <span className="font-display text-3xl font-semibold text-sage-600">200+</span>
              <span className="text-xs text-stone-500 text-center leading-tight mt-1">
                pacientes<br />atendidos
              </span>
            </div>

            {/* Leaf decoration */}
            <div className="absolute -top-5 -right-5 w-12 h-12 rounded-full bg-sage-500 flex items-center justify-center text-xl shadow-soft">
              🌿
            </div>
          </div>
        </div>

        {/* Text side */}
        <div>
          <div className="reveal">
            <span className="inline-block text-sage-500 text-sm font-medium uppercase tracking-widest mb-3">
              Sobre a profissional
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-sage-900 leading-tight mb-5">
              Olá! Eu sou a<br />
              <span className="italic text-sage-600">{SITE_CONFIG.name}</span>
            </h2>
          </div>

          <div className="reveal reveal-delay-1">
            <p className="font-body text-stone-600 leading-relaxed text-base mb-4">
              {SITE_CONFIG.shortBio}
            </p>
            <p className="font-body text-stone-600 leading-relaxed text-base mb-6">
              {SITE_CONFIG.longBio}
            </p>
          </div>

          {/* Specialties chips */}
          <div className="reveal reveal-delay-2 flex flex-wrap gap-2 mb-8">
            {SITE_CONFIG.specialties.map((s) => (
              <span
                key={s}
                className="px-4 py-1.5 rounded-full bg-white border border-sage-200 text-sage-700 text-xs font-medium shadow-soft hover:bg-sage-50 transition-colors"
              >
                {s}
              </span>
            ))}
          </div>

          {/* CRN + location */}
          <div className="reveal reveal-delay-3 flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm text-stone-500">
              <span className="w-7 h-7 rounded-full bg-sage-100 flex items-center justify-center text-base">🪪</span>
              {SITE_CONFIG.crn}
            </div>
            <div className="flex items-center gap-2 text-sm text-stone-500">
              <span className="w-7 h-7 rounded-full bg-sage-100 flex items-center justify-center text-base">📍</span>
              {SITE_CONFIG.location} · {SITE_CONFIG.attendanceMode}
            </div>
          </div>

          <div className="reveal reveal-delay-4">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-sage-600 text-white font-medium hover:bg-sage-700 transition-all duration-200 hover:shadow-hover hover:-translate-y-0.5"
            >
              Agendar minha consulta
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
