import React from 'react'
import { HOW_IT_WORKS_STEPS } from '../config'

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-white relative">
      {/* Decorative side accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-40 bg-sage-gradient rounded-r-full opacity-40" />

      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="inline-block text-sage-500 text-sm font-medium uppercase tracking-widest mb-3">
            Processo
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-sage-900">
            Como funciona?
          </h2>
          <p className="mt-4 font-body text-stone-500 text-base max-w-xl mx-auto">
            Um processo simples, transparente e centrado em você. Do primeiro contato
            até os resultados — te acompanho em cada etapa.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[calc(16.666%+2rem)] right-[calc(16.666%+2rem)] h-px bg-sage-200 z-0" />

          {HOW_IT_WORKS_STEPS.map((step, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} relative z-10 flex flex-col items-center text-center`}
            >
              {/* Step number bubble */}
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full bg-sage-50 border-2 border-sage-200 flex items-center justify-center text-4xl shadow-soft">
                  {step.icon}
                </div>
                <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-sage-gradient flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">{step.number}</span>
                </div>
              </div>

              <h3 className="font-display text-xl font-semibold text-sage-900 mb-3">
                {step.title}
              </h3>
              <p className="font-body text-sm text-stone-500 leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 wave-divider">
        <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10">
          <path d="M0,25 C480,60 960,0 1440,35 L1440,50 L0,50 Z" fill="#f4f8f4" />
        </svg>
      </div>
    </section>
  )
}
