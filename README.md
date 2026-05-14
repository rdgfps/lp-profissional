# 🌿 Landing Page — Nutricionista

Template profissional de landing page para nutricionista, desenvolvido com React + Vite + Tailwind CSS.

---

## 🚀 Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) versão 18 ou superior
- npm (vem com o Node.js)

### Passo a passo

```bash
# 1. Acesse a pasta do projeto
cd nutricionista-landing

# 2. Instale as dependências
npm install

# 3. Rode em modo de desenvolvimento
npm run dev

# 4. Acesse no navegador
# http://localhost:5173
```

### Build para produção

```bash
npm run build
# Os arquivos estarão na pasta /dist — prontos para deploy
```

---

## ✏️ Como personalizar

Toda a personalização de conteúdo está centralizada em um único arquivo:

### 📄 `src/config.js`

Edite este arquivo para alterar:

| Campo | Descrição |
|---|---|
| `SITE_CONFIG.name` | Nome da nutricionista |
| `SITE_CONFIG.title` | Título profissional |
| `SITE_CONFIG.crn` | Registro CRN |
| `SITE_CONFIG.tagline` | Frase de destaque |
| `SITE_CONFIG.shortBio` | Bio curta (seção Sobre) |
| `SITE_CONFIG.longBio` | Bio longa (seção Sobre) |
| `SITE_CONFIG.specialties` | Lista de especialidades |
| `SITE_CONFIG.whatsappNumber` | Número com DDI (ex: `5511999999999`) |
| `SITE_CONFIG.whatsappMessage` | Mensagem automática do WhatsApp |
| `SITE_CONFIG.location` | Cidade de atendimento |
| `SITE_CONFIG.attendanceMode` | Presencial / Online |
| `SITE_CONFIG.instagram` | URL do Instagram |
| `SITE_CONFIG.heroImage` | URL da foto do hero |
| `SITE_CONFIG.aboutImage` | URL da foto do sobre |
| `FOR_WHO_ITEMS` | Cards da seção "Para quem é" |
| `HOW_IT_WORKS_STEPS` | Passos do processo |
| `BENEFITS` | Lista de benefícios |
| `TESTIMONIALS` | Depoimentos das pacientes |
| `FOOTER` | Nome da proprietária e do dev |

---

## 🎨 Como alterar as cores

As cores estão definidas em `tailwind.config.js` dentro da chave `colors.sage` e `colors.cream`.

Substitua os valores hexadecimais pelas cores da identidade visual do cliente.

---

## 📂 Estrutura do projeto

```
nutricionista-landing/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Barra de navegação fixa
│   │   ├── Hero.jsx            # Seção principal
│   │   ├── About.jsx           # Sobre a profissional
│   │   ├── ForWho.jsx          # Para quem é
│   │   ├── HowItWorks.jsx      # Como funciona (3 passos)
│   │   ├── Benefits.jsx        # Benefícios
│   │   ├── Testimonials.jsx    # Depoimentos
│   │   ├── CTA.jsx             # Chamada final
│   │   ├── Footer.jsx          # Rodapé
│   │   └── WhatsAppButton.jsx  # Botão flutuante
│   ├── hooks/
│   │   └── useScrollReveal.js  # Animação ao scroll
│   ├── utils/
│   │   └── whatsapp.js         # Gerador de link WhatsApp
│   ├── config.js               # ⭐ Centraliza todo o conteúdo
│   ├── App.jsx                 # Componente raiz
│   ├── main.jsx                # Entry point
│   └── index.css               # Estilos globais
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## 📲 WhatsApp

O link do WhatsApp é gerado dinamicamente pela função em `src/utils/whatsapp.js`:

```js
getWhatsAppLink(mensagemPersonalizada?)
// Retorna: https://wa.me/NUMERO?text=MENSAGEM
```

---

## 🌐 Deploy

Sugestões de hospedagem gratuita:

- **[Vercel](https://vercel.com)** — Conecte o repositório e faça deploy em 1 clique
- **[Netlify](https://netlify.com)** — Arraste a pasta `/dist` para o painel
- **[GitHub Pages](https://pages.github.com)** — Com a config `base` no `vite.config.js`

---

Desenvolvido por [Henrique Rodeghiero](https://www.instagram.com/henriquerodeghiero/) 🚀
