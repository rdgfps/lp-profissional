import { SITE_CONFIG } from '../config'

/**
 * Gera link dinâmico para o WhatsApp.
 * @param {string} [customMessage] - Mensagem personalizada (opcional)
 * @returns {string} URL do WhatsApp pronta para uso
 */
export function getWhatsAppLink(customMessage) {
  const msg = customMessage || SITE_CONFIG.whatsappMessage
  const encoded = encodeURIComponent(msg)
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encoded}`
}
