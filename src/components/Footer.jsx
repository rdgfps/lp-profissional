import React from 'react'
import { SITE_CONFIG, FOOTER } from '../config'
import { getWhatsAppLink } from '../utils/whatsapp'

export default function Footer() {
  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Agendar consulta', href: getWhatsAppLink(), external: true },
  ]

  return (
    <footer className="bg-sage-900 text-sage-100">
      {/* Main footer body */}
      <div className="max-w-6xl mx-auto px-5 py-14 grid md:grid-cols-3 gap-10">

        {/* Brand column */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-9 h-9 rounded-full bg-sage-600 flex items-center justify-center text-white font-display font-semibold text-base">
              A
            </span>
            <div>
              <p className="font-display font-semibold text-white text-base leading-none">
                {SITE_CONFIG.name}
              </p>
              <p className="text-[10px] text-sage-400 uppercase tracking-widest mt-0.5">
                {SITE_CONFIG.title}
              </p>
            </div>
          </div>
          <p className="font-body text-sm text-sage-400 leading-relaxed max-w-xs">
            Nutrição funcional e personalizada para quem quer resultados reais com saúde e bem-estar.
          </p>
          <p className="mt-3 text-xs text-sage-500">{SITE_CONFIG.crn}</p>
        </div>

        {/* Links column */}
        <div>
          <h4 className="font-body font-semibold text-white text-sm uppercase tracking-wider mb-4">
            Navegação
          </h4>
          <ul className="space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target={l.external ? '_blank' : undefined}
                  rel={l.external ? 'noopener noreferrer' : undefined}
                  className="font-body text-sm text-sage-400 hover:text-sage-200 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div>
          <h4 className="font-body font-semibold text-white text-sm uppercase tracking-wider mb-4">
            Contato
          </h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <span className="text-lg">📍</span>
              <span className="text-sm text-sage-400">
                {SITE_CONFIG.location} · {SITE_CONFIG.attendanceMode}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-lg">📸</span>
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-sage-400 hover:text-sage-200 transition-colors"
              >
                {SITE_CONFIG.instagram_handle}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-lg">💬</span>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-sage-400 hover:text-sage-200 transition-colors"
              >
                WhatsApp
              </a>
            </li>
          </ul>

          {/* CTA mini */}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sage-600 text-white text-sm font-medium hover:bg-sage-500 transition-colors"
          >
            Agendar consulta
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-sage-800">
        <div className="max-w-6xl mx-auto px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-sage-500">
          <p>
            © {FOOTER.year} {FOOTER.ownerName}. Todos os direitos reservados.
          </p>
          <p>
            Desenvolvido por{' '}
            <a
              href={FOOTER.developerInstagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage-400 hover:text-sage-200 transition-colors font-medium underline underline-offset-2"
            >
              {FOOTER.developerName}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
