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

### 4.1 Escala Modular
| Token | Rem | Pixels Equivalentes | Aplicação Típica |
| :--- | :--- | :--- | :--- |
| `--font-size-xs` | `0.75rem` | `12px` | Eyebrows, badges, notas de segurança |
| `--font-size-sm` | `0.875rem` | `14px` | Botões padrão, menus, inputs |
| `--font-size-base`| `1.000rem` | `16px` | Corpo de texto regular, parágrafos |
| `--font-size-md` | `1.125rem` | `18px` | Subtítulos de seções, destaques médios |
| `--font-size-lg` | `1.250rem` | `20px` | Títulos de cards e depoimentos |
| `--font-size-xl` | `1.500rem` | `24px` | Chamadas e subtítulos |
| `--font-size-2xl` | `1.875rem` | `30px` | Valores de métricas (+120, +9.000) |
| `--font-size-3xl` | `2.250rem` | `36px` | H2, títulos de grandes seções |
| `--font-size-5xl` | `3.500rem` | `56px` | H1 Desktop (Hero Section) |

---

## 🧩 5. Catálogo de UI Primitives (`src/components/ui/`)

1. **`Container.astro`**: Define os limites de largura responsiva da página (`default: 1140px`, `wide: 1240px`).
2. **`Button.astro`**: Botão polimórfico (`<a>` ou `<button>`) com variantes `gold`, `hero-pill`, `form-submit` e `outline`.
3. **`SectionHeader.astro`**: Título padronizado com eyebrow decorativo, alinhamento central ou à esquerda.

---

## 💻 6. Consumo & Manutenção

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
