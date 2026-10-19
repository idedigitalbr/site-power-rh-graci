# 📐 PowerRH — Design System Specification

> **Versão:** 2.0.0 (Astro + Tailwind CSS v4 + Design Tokens Oficiais)  
> **Status:** Ativo / Homologado e em Produção  
> **Propósito:** Definir os fundamentos arquiteturais, tokens de design, regras de composição e componentes reutilizáveis para o ecossistema digital da **PowerRH (Graciete Corrêa)**.

---

## 🎯 1. Filosofia & Princípios Fundamentais

1. **Token-First Architecture:** Toda a parametrização visual (cores, tipografia, raios de borda, sombras e espaçamentos) nasce nos tokens CSS nativos e é exportada automaticamente para o `@theme` do Tailwind CSS v4.
2. **Separação de Dados e Apresentação:** Textos, depoimentos, FAQs e métricas são desacoplados do HTML e residem em `src/data/siteContent.ts` com tipagem TypeScript estrita. Alterações de copy não exigem edição de componentes visuais.
3. **Componentes UI Primitivos:** Elementos fundamentais como containers, botões e cabeçalhos de seção são componentizados em `src/components/ui/` (`Container.astro`, `Button.astro`, `SectionHeader.astro`), garantindo fidelidade 1:1 e reutilização em novas páginas.
4. **Zero Runtime Bloat:** Componentes Astro são compilados para HTML/CSS estático puro (SSG) no momento do build, mantendo pontuação 100 no Lighthouse e sem sobrecarga de scripts no navegador.

---

## 📦 2. Arquitetura de Estilos & Tokens

```text
src/
├── styles/
│   └── global.css              # Ponto de entrada Tailwind v4 com diretiva @theme
public/
└── assets/
    └── css/
        ├── tokens.css          # Design Tokens canônicos (Paleta oficial Ouro/Navy + Neutros)
        ├── base.css            # Reset moderno, tipografia base e utilitários
        ├── components.css      # Componentes de interface base (cards, forms, inputs)
        ├── site-final.css      # Extensão corporativa executiva
        └── design-system.css   # Master stylesheet que consolida todos os módulos
```

### Integração com Tailwind CSS v4 via `@theme`:
```css
/* src/styles/global.css */
@import "tailwindcss";

@theme {
  --color-gold: var(--color-gold);
  --color-gold-hover: var(--color-gold-hover);
  --color-navy-deep: var(--color-navy-deep);
  --color-navy-dark: var(--color-navy-dark);
  --color-bg-warm: var(--color-bg-warm);
  --font-sans: 'Inter', sans-serif;
  --font-signature: 'Alex Brush', cursive;
  --font-mono: 'JetBrains Mono', monospace;
}
```

---

## 🎨 3. Tokens de Cor da Marca PowerRH

### 3.1 Paleta Oficial da Marca
| Token | Valor Hex / Gradient | Aplicação Conceitual |
| :--- | :--- | :--- |
| `--color-gold` | `#C88A3B` | Ouro Principal / Botões CTA, destaques e emblema |
| `--color-gold-hover` | `#B07427` | Hover de ações primárias e bordas ativas |
| `--color-gold-dark` | `#9A621D` | Textos de contraste dourado sobre fundos claros |
| `--color-gold-light` | `#FDF6EC` | Superfície suave de badges e chips dourados |
| `--color-gold-gradient` | `linear-gradient(135deg, #CB9857 0%, #B87B2E 100%)` | Degradê metálico executivo de botões e emblema |
| `--color-navy-deep` | `#01243E` | Azul oceânico profundo / Fundo de emblema e cartões |
| `--color-navy-dark` | `#081624` | Azul petróleo escuro / Rodapé institucional |
| `--color-bg-warm` | `#FCFAF7` | Fundo quente sutil e acolhedor das seções |
| `--color-card-warm` | `#FDEEDB` | Superfícies quentes aveludadas |

### 3.2 Escala Neutra
| Token | Hex | Função |
| :--- | :--- | :--- |
| `--color-white` | `#ffffff` | Fundo de cartões e contrastes |
| `--color-gray-50` | `#f8f9fa` | Superfícies secundárias sutis |
| `--color-gray-100` | `#f1f3f5` | Fundo de inputs e caixas de texto |
| `--color-gray-200` | `#e9ecef` | Linhas divisórias (Hairline) |
| `--color-gray-300` | `#dee2e6` | Bordas de cards e separadores |
| `--color-gray-700` | `#495057` | Textos de leitura contínua (parágrafos) |
| `--color-gray-900` | `#212529` | Títulos e textos de alto contraste |

---

## 🔤 4. Tipografia & Escala Visual

- **Família Primária (Sans):** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Família de Assinatura:** `'Alex Brush', 'Caveat', cursive` *(Exclusiva para títulos destacados e assinatura da fundadora)*
- **Família Monospaçada:** `'JetBrains Mono', 'Fira Code', monospace`

### 4.1 Regra Canônica de Capitalização (Casing Rule)
> [!IMPORTANT]
> - **HEADLINES NÃO SÃO MAIÚSCULA:** Títulos (H1, H2, H3, H4) utilizam **estritamente Sentence case** (Caixa Alta e Baixa natural — apenas a primeira letra da frase em maiúscula). Jamais aplicar `text-transform: uppercase` em títulos corporativos!
>   - *Correto:* `Empresas crescem quando pessoas evoluem.` (H1) / `Como saber se a sua empresa precisa da PowerRH?` (H2)
>   - *Incorreto:* `EMPRESAS CRESCEM QUANDO PESSOAS EVOLUEM.`
> - **UPPERCASE EXCLUSIVO:** O uso de `text-transform: uppercase` é restrito e reservado a:
>   - **Eyebrows (Chapéus):** 12px a 13px, tracking 0.10em a 0.16em, ouro `#C48D47`. Ex: `CONSULTORIA ESTRATÉGICA EM PESSOAS`.
>   - **Botões & CTAs:** 12.5px a 13.5px, bold 700, tracking 0.02em a 0.03em. Ex: `QUERO UM DIAGNÓSTICO →`.
>   - **Mini-Badges / Chips:** 9px a 11px, bold, tracking 0.05em. Ex: `VISÃO ESTRATÉGICA`.

### 4.2 Especificação dos Headlines (Títulos Oficiais)
| Nível / Tag | Classe CSS | Tamanho (rem / px / clamp) | Peso & Leading | Tracking | Casing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **H1 Hero** | `.hero-title-final` | `clamp(2.3rem, 3.6vw, 3.2rem)` (37px a 51px) | ExtraBold 800 / 1.12 | `-0.025em` | Sentence case |
| **H2 Seções Central** | `.section-title-center-final` | `clamp(1.8rem, 2.6vw, 2.3rem)` (29px a 37px) | ExtraBold 800 / 1.20 | `-0.025em` | Sentence case |
| **H2 Bento Soluções** | `.solucoes-main-title` | `clamp(28px, 3.6vw, 40px)` | ExtraBold 800 / 1.20 | `-0.020em` | Sentence case |
| **H2 Processo / Sobre**| `.processo-title-final` | `clamp(1.8rem, 2.6vw, 2.4rem)` (29px a 38px) | ExtraBold 800 / 1.20 | `-0.025em` | Sentence case |
| **H3 Cards Módulos** | `.solucao-card-title` | `18px` a `20px` (1.125rem a 1.25rem) | Bold 700 / 1.30 | `-0.015em` | Sentence case |
| **H4 Diagnóstico** | `.quando-hora-card-title` | `15px` a `16px` (1.000rem) | Bold 700 / 1.35 | `normal` | Sentence case |

### 4.3 Especificação dos Eyebrows (Chapéus)
| Padrão | Classe CSS | Tamanho | Peso | Tracking | Casing | Elementos Visuais |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Eyebrow** | `.hero-eyebrow-final` | `12px` | ExtraBold 800 | `0.10em` | UPPERCASE | Cor `#C48D47` |
| **Divider Central** | `.section-eyebrow-divider` | `12px` | ExtraBold 800 | `0.16em` | UPPERCASE | Duas linhas laterais douradas de 48px (`::before`, `::after`) |
| **Bento Soluções** | `.solucoes-eyebrow-wrap` | `13px` | Bold 700 | `0.15em` | UPPERCASE | Linhas laterais douradas de 36px |

### 4.4 Textos de Leitura (Body Copy) & Métricas
| Aplicação | Classe / Tag | Tamanho | Peso | Line-Height | Cor |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Subtítulo Hero** | `.hero-subtitle-final` | `15px` | Regular 400 | `1.48` | `#4A5568` |
| **Subtítulo de Seção** | `.section-subtitle` | `15px a 16px` | Regular 400 | `1.55` | `#4A5568` |
| **Corpo Regular** | `<p>`, `.text-base` | `16px` | Regular 400 | `1.65` | `#212529` |
| **Cards & Depoimentos** | `.card-desc` | `14px` | Regular 400 | `1.50` | `#4A5568` |
| **Microcopy & Segurança** | `.form-security-badge` | `11px a 12px` | Regular 400 | `1.30` | `#64748B` |
| **Métricas Numéricas** | `.s2-metric-number` | `clamp(34px, 2.6vw, 40px)` | ExtraBold 800 | `1.10` | `#C48D47` |

---

## 🔘 5. Catálogo de Botões & Ações

| Variante | Classe CSS | Background | Cor do Texto | Border Radius | Aplicação |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **CTA Ouro Primário** | `.btn-gold` / `.btn-primary` | `linear-gradient(135deg, #CB9857 0%, #B87B2E 100%)` | `#FFFFFF` | `9999px` | Header, Hero e CTAs principais |
| **Hero Pill CTA** | `.btn-hero-pill` | `linear-gradient(135deg, #C58E49 0%, #AF7733 100%)` | `#FFFFFF` | `9999px` | Hero section e banners |
| **Secundário Executivo** | `.btn-secondary` | `#FFFFFF` | `#01243E` (Navy) | `9999px` | Borda dourada suave e ações secundárias |
| **Contorno Ouro** | `.btn-outline` | Transparente (Borda 1.5px `#C88A3B`) | `#9A621D` | `9999px` | Ações de exploração em fundo claro |
| **Navy de Autoridade** | `.btn-navy` | `#01243E` (Azul Oceânico) | `#FFFFFF` | `9999px` | Ações institucionais de governança |
| **Envio de Formulário** | `.btn-form-submit` | `linear-gradient(135deg, #C58E49 0%, #AF7733 100%)` | `#FFFFFF` | `9999px` | Formulário de diagnóstico |
| **Inverso Branco (Dark)** | `.btn-inverse` | `#FFFFFF` | `#01243E` | `9999px` | Sobre superfície escura (Navy / Rodapé) |

---

## 🧩 6. Catálogo de UI Primitives (`src/components/ui/`)

1. **`Container.astro`**: Define os limites de largura responsiva da página (`default: 1140px`, `wide: 1240px`).
2. **`Button.astro`**: Botão polimórfico (`<a>` ou `<button>`) com variantes `gold`, `hero-pill`, `form-submit`, `secondary`, `outline` e `navy`.
3. **`SectionHeader.astro`**: Título padronizado com eyebrow decorativo, alinhamento central ou à esquerda.

---

## 💻 7. Consumo & Manutenção

Para adicionar novas seções ou páginas no projeto mantendo fidelidade total ao Design System:

```astro
---
import Layout from '../layouts/Layout.astro';
import Container from '../components/ui/Container.astro';
import SectionHeader from '../components/ui/SectionHeader.astro';
import Button from '../components/ui/Button.astro';
---

<Layout title="Nova Página — PowerRH">
  <section class="py-16">
    <Container size="wide">
      <SectionHeader
        eyebrow="NOVA SEÇÃO"
        title="Título 100% Padronizado"
        center={true}
      />
      <div class="mt-8 flex justify-center">
        <Button href="#contato" variant="gold">
          Ação Principal →
        </Button>
      </div>
    </Container>
  </section>
</Layout>
```
