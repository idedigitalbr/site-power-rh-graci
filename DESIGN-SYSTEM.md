# 📐 PowerRH — Design System Specification

> **Versão:** 1.0.0 (Fase Wireframe Neutro de Alta Fidelidade)  
> **Status:** Ativo / Base Estrutural Homologada  
> **Propósito:** Definir os fundamentos arquiteturais, tokens de design, regras de composição e componentes reutilizáveis para o ecossistema digital da **PowerRH (Graciete Corrêa)**.

---

## 🎯 1. Filosofia & Princípios Fundamentais

1. **Design System First:** Toda e qualquer interface é gerada exclusivamente a partir dos tokens e componentes padronizados. Não são permitidas cores soltas, dimensões mágicas ou estilos arbitrários (*hardcoded*).
2. **Wireframe Neutro & Desacoplado:** Nesta fase, a interface utiliza uma escala de cinza e a tipografia universal **Inter**, priorizando a validação de arquitetura de informação, legibilidade, hierarquia e conversão.
3. **Escalabilidade & Troca de Tema Global:** Quando a identidade visual definitiva da PowerRH for aplicada, a transição é feita exclusivamente no arquivo `assets/css/tokens.css`, propagando-se de forma automática para o Preview e para o site final.
4. **Consistência Semântica:** Elementos visuais não são nomeados por sua aparência (ex: *cinza-escuro*), mas pela sua função lógica na experiência do usuário (ex: *bg-inverse*, *text-primary*, *action-primary*).

---

## 📦 2. Arquitetura de Arquivos CSS

O Design System está organizado de forma modular e canônica na pasta `assets/css/`:

```
assets/css/
├── tokens.css          # Design Tokens (Variáveis CSS primitivas, semânticas e escalares)
├── base.css            # Reset moderno, tipografia base, containers e utilitários
├── components.css      # Componentes de interface (botões, cards, formulários, nav, etc.)
├── design-system.css   # Arquivo mestre que importa todos os módulos acima
└── site-final.css      # Extensão corporativa final (paleta ouro/navy, fotos HD, micro-interações)
```

### 🧭 Ecossistema de Visões Integradas (4 Modos de Navegação)
1. **👁️ Skeleton (v0):** `index-wireframe-skeleton.html` — Blueprint estrutural e de diagramação com blocos visuais.
2. **📄 Conteúdo (v1):** `index-wireframe.html` — Wireframe neutro de alta fidelidade em escala de cinza com copy real.
3. **✨ Versão Final (v2):** `index-final.html` — Versão definitiva pixel perfect com fotografia executiva, identidade ouro e navy.
4. **📐 Design System:** `design-system-preview.html` — Biblioteca viva de componentes, tokens e documentação.

Para consumir todo o Design System e a camada final em qualquer página HTML:
```html
<link rel="stylesheet" href="assets/css/design-system.css">
<link rel="stylesheet" href="assets/css/site-final.css">
```

---

## 🎨 3. Tokens de Cor (Color Palette & Semantic Tokens)

### 3.1 Primitivos da Escala Neutra
| Token | Hex | Aplicação Conceitual |
| :--- | :--- | :--- |
| `--color-white` | `#ffffff` | Fundo puro, superfícies padrão e contrastes |
| `--color-gray-50` | `#f8f9fa` | Superfícies sutis, backgrounds alternados de seções |
| `--color-gray-100` | `#f1f3f5` | Fundo de inputs, badges e chips neutros |
| `--color-gray-200` | `#e9ecef` | Linhas divisórias finas (*hairline*), placeholders |
| `--color-gray-300` | `#dee2e6` | Bordas padrão de inputs e cartões de contorno |
| `--color-gray-400` | `#ced4da` | Bordas ativas em hover, textos atenuados |
| `--color-gray-500` | `#adb5bd` | Textos de apoio (*muted*), placeholders secundários |
| `--color-gray-600` | `#6c757d` | Ícones secundários, legendas auxiliares |
| `--color-gray-700` | `#495057` | Textos secundários de leitura contínua |
| `--color-gray-800` | `#343a40` | Hover de botões primários, fundos secundários escuros |
| `--color-gray-900` | `#212529` | Textos de alto contraste, botões principais de ação |
| `--color-gray-950` | `#121416` | Superfície extrema (Rodapé institucional) |
| `--color-black` | `#000000` | Preto absoluto para contraste extremo |

### 3.2 Funções Semânticas
| Categoria | Token Semântico | Token de Origem | Função |
| :--- | :--- | :--- | :--- |
| **Canvas** | `--bg-canvas` | `--color-white` | Fundo global da aplicação |
| **Superfície** | `--bg-surface` | `--color-white` | Cartões e modais |
| **Superfície Suave**| `--bg-surface-subtle` | `--color-gray-50` | Seções com contraste suave |
| **Superfície Muted** | `--bg-surface-muted` | `--color-gray-100` | Background de blocos de apoio |
| **Superfície Inversa**| `--bg-inverse` | `--color-gray-900` | Banners de impacto e métricas |
| **Superfície Escura**| `--bg-inverse-card`| `#2b3035` | Cards sobre superfícies escuras |
| **Texto Primário** | `--text-primary` | `--color-gray-900` | Títulos, títulos de cards, rótulos principais |
| **Texto Secundário**| `--text-secondary`| `--color-gray-700` | Parágrafos e descrições gerais |
| **Texto Muted** | `--text-muted` | `--color-gray-500` | Legendas, datas e notas de rodapé |
| **Texto Inverso** | `--text-inverse` | `--color-white` | Títulos e textos sobre fundos escuros |
| **Ação Primária** | `--action-primary-bg`| `--color-gray-900` | Background de botões de conversão (CTA) |
| **Ação Primária Hover**| `--action-primary-hover`| `--color-gray-800` | Estado hover de botões primários |
| **Ação Secundária** | `--action-secondary-bg`| `--color-white` | Botões secundários com contorno |

---

## 🔤 4. Tipografia & Hierarquia Visual

- **Família Primária:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Família Monospaçada:** `'JetBrains Mono', 'Fira Code', monospace`

### 4.1 Escala de Tamanhos
| Token | Rem | Pixels Equivalentes | Aplicação Típica |
| :--- | :--- | :--- | :--- |
| `--font-size-xs` | `0.75rem` | `12px` | Eyebrows, badges, notas legais, helpers de formulário |
| `--font-size-sm` | `0.875rem` | `14px` | Botões padrão, itens de menu, inputs, labels |
| `--font-size-base`| `1.000rem` | `16px` | Corpo de texto regular, parágrafos |
| `--font-size-md` | `1.125rem` | `18px` | Subtítulos de seções, títulos de cards destacados |
| `--font-size-lg` | `1.250rem` | `20px` | Título de seções secundárias, destaques |
| `--font-size-xl` | `1.500rem` | `24px` | H4, chamadas médias |
| `--font-size-2xl` | `1.875rem` | `30px` | H3, valores de métricas e estatísticas |
| `--font-size-3xl` | `2.250rem` | `36px` | H2, títulos de grandes seções (Desktop) |
| `--font-size-4xl` | `2.875rem` | `46px` | H1 Mobile / Sub-hero |
| `--font-size-5xl` | `3.500rem` | `56px` | H1 Desktop (Hero Section principal) |

### 4.2 Pesos & Leading
- **Pesos:** Regular (`400`), Medium (`500`), Semibold (`600`), Bold (`700`), Extrabold (`800`).
- **Line Heights:** Tight (`1.15`), Snug (`1.3`), Normal (`1.5`), Relaxed (`1.65`).

---

## 📐 5. Espaçamento, Grid & Breakpoints

O sistema de espaçamentos é estritamente baseado no múltiplo de **4px / 8px**:

| Token | Valor em Rem | Pixels | Uso Recomendado |
| :--- | :--- | :--- | :--- |
| `--space-1` | `0.25rem` | `4px` | Micro espaçamentos, micro gap entre ícone e badge |
| `--space-2` | `0.50rem` | `8px` | Gap interno de botões, gap entre label e input |
| `--space-3` | `0.75rem` | `12px` | Padding interno compacto, gap de listas |
| `--space-4` | `1.00rem` | `16px` | Padding padrão de botões, margem inferior de parágrafos |
| `--space-6` | `1.50rem` | `24px` | Padding de cards, gap de grids |
| `--space-8` | `2.00rem` | `32px` | Padding generoso de cartões, gap de seções |
| `--space-10` | `2.50rem` | `40px` | Separações de blocos secundários |
| `--space-12` | `3.00rem` | `48px` | Margem inferior de cabeçalhos de seções (`.section-header`) |
| `--space-16` | `4.00rem` | `64px` | Padding vertical padrão de seções no mobile |
| `--space-20` | `5.00rem` | `80px` | Padding vertical padrão de seções no desktop |
| `--space-24` | `6.00rem` | `96px` | Seções com espaçamento nobre (Hero, CTA final) |

### Containers
- `--container-max-width: 1220px` (Container padrão)
- `--container-narrow-width: 860px` (Artigos e formulários centrados)
- `--container-wide-width: 1360px` (Header e grids expandidos)

---

## 🔘 6. Raios de Borda (Radius) & Sombras (Shadows)

### 6.1 Raios
- `--radius-xs: 4px` — Badges e micro elementos
- `--radius-sm: 8px` — Botões pequenos e caixas de ícones
- `--radius-md: 12px` — Botões padrão, campos de formulário e inputs
- `--radius-lg: 16px` — Acordeões e cartões secundários
- `--radius-xl: 20px` — Cards principais de soluções, depoimentos e formulários
- `--radius-2xl: 28px` — Banners mestres de CTA e blocos envolventes
- `--radius-full: 9999px` — Pílulas, botões arredondados e avatares circulares

### 6.2 Sombras
- `--shadow-xs: 0 1px 2px rgba(18, 20, 22, 0.05)`
- `--shadow-sm: 0 2px 4px rgba(18, 20, 22, 0.06), 0 1px 2px rgba(18, 20, 22, 0.04)`
- `--shadow-md: 0 4px 12px -2px rgba(18, 20, 22, 0.08), 0 2px 6px -1px rgba(18, 20, 22, 0.05)`
- `--shadow-lg: 0 12px 24px -4px rgba(18, 20, 22, 0.1), 0 4px 8px -2px rgba(18, 20, 22, 0.04)`
- `--shadow-xl: 0 20px 32px -8px rgba(18, 20, 22, 0.14), 0 8px 16px -4px rgba(18, 20, 22, 0.06)`

---

## 🧩 7. Catálogo de Componentes Reutilizáveis

### 7.1 Botões (`.btn`)
- `.btn.btn-primary`: Ação primária de alto contraste.
- `.btn.btn-secondary`: Ação secundária neutra com contorno.
- `.btn.btn-outline`: Ação neutra vazada.
- `.btn.btn-ghost`: Ação textual sutil sem fundo.
- `.btn.btn-inverse`: Ação primária clara aplicada sobre fundo escuro.
- `.btn.btn-sm` / `.btn.btn-lg`: Modificadores de escala.
- `.btn.btn-pill`: Botão com raio 100% arredondado.

### 7.2 Badges & Eyebrows
- `.badge`: Tag informativa compacta com cantos arredondados e borda sutil.
- `.badge-dot`: Ponto indicador de status dentro da badge.
- `.section-eyebrow`: Rótulo de cabeçalho em caixa alta, tracking expandido e peso bold.

### 7.3 Formulários (`.form-card`, `.form-group`, `.form-control`)
- Campos de texto, e-mail, telefone, seletores dropdown e textarea.
- Estados: *Default*, *Hover*, *Focus* (com ring acessível `box-shadow: var(--focus-ring)`), *Disabled*.
- `.form-security-note`: Nota de garantia de segurança com ícone de cadeado.

### 7.4 Barra de Métricas (`.card-metric-bar`)
- Bloco escuro com 4 colunas de estatísticas com ícone em caixa semitransparente, número em `font-size-2xl` bold e legenda explicativa.

### 7.5 Cards de Cenários / Quando Entra (`.card-trigger`)
- Grid de 4 cartões com caixa de ícone e texto objetivo de identificação de dores do cliente.

### 7.6 Cards de Soluções (`.card-solution`)
- Estrutura composta por:
  - Área de imagem superior (`.card-solution-image-wrap`)
  - Barra inferior em alto contraste (`.card-solution-bar`) com ícone, título da solução e botão circular de seta com microinteração.

### 7.7 Timeline / Processo em 4 Etapas (`.steps-grid`)
- Grade horizontal com linha conectora, crachá numérico circular (`01`, `02`, `03`, `04`) e descrição de cada etapa do método.

### 7.8 Cards de Depoimento (`.card-testimonial`)
- Aspas estilizadas, texto do cliente em itálico, linha divisória, avatar circular, nome do cliente e cargo/empresa.

### 7.9 Acordeão / FAQ (`.accordion`)
- Componente expansível com botão de alternância acessível (`aria-expanded`), ícone dinâmico que gira 45 graus para se transformar em "x" e resposta animada.

### 7.10 Banner CTA Final (`.cta-banner-dark`)
- Bloco curvo com fundo escuro, chamada persuasiva, lista de verificação (*checklist*) com ícones de checagem e botão primário inverso.

### 7.11 Rodapé Institucional (`.site-footer`)
- 4 colunas distribuídas:
  1. Identidade institucional, resumo e ícones de redes sociais.
  2. Links de navegação principal.
  3. Lista de soluções da empresa.
  4. Informações de contato direto (endereço, telefone, e-mail).
- Sub-rodapé com direitos reservados e links de políticas.

---

## ♿ 8. Acessibilidade & Estados de Interação

- **Taxa de Contraste WCAG AA:** O wireframe utiliza texto `#212529` sobre fundo `#ffffff` (contraste superior a 15:1) e texto `#ffffff` sobre `#212529` (15:1), excedendo o mínimo exigido pela WCAG AA de 4.5:1.
- **Anel de Foco Visível (`:focus-visible`):** Nenhum elemento interativo tem o contorno removido sem a substituição pelo `--focus-ring`.
- **Target Touch Mínimo:** Todos os botões e áreas clicáveis possuem altura mínima de 44px em dispositivos móveis.
- **Semântica HTML5:** Uso estrito de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<details>`/`<button>` e `<footer>`.

---

## 🦴 10. Modo Skeleton Blueprint (Referência v0)

O Design System conta com suporte nativo de primeira classe para o **Modo Skeleton**, permitindo apresentar uma abstração geométrica fiel ao wireframe referencial (`v0-wireframe-site-power-rh.png`).

### 10.1 Tokens Dedicados do Skeleton
- `--wf-canvas: #f4f7fb` (Fundo acinzentado suave)
- `--wf-surface: #ffffff` (Superfície dos cartões)
- `--wf-border: #dde4ed` (Bordas de divisão de blocos)
- `--wf-accent: #4d8bf5` (Azul primário para botões e indicadores)
- `--wf-accent-light: #ebf3ff` (Fundo suave para ícones e badges)
- `--wf-accent-border: #bcd5fd` (Borda de realce para badges numéricas)
- `--wf-bar-heading: #5f7089` (Barras de título)
- `--wf-bar-body: #94a3b8` (Barras de corpo de texto)
- `--wf-bar-subtle: #cbd5e1` (Barras de textos complementares)
- `--wf-img-bg: #edf4fd` (Fundo dos placeholders com ícone montanha)
- `--wf-img-icon: #8db5f3` (Cor do ícone de montanha e sol)

### 10.2 Componentes e Utilitários
- `.sk-bar`: Barras arredondadas de largura e altura moduladas (`.sk-bar-heading`, `.sk-bar-title-lg`, `.sk-bar-subtle`).
- `.sk-img-box`: Caixa com ícone SVG de montanha centralizado.
- `.sk-avatar-circle`: Avatar circular para depoimentos e fundadora com silhueta SVG.
- `.sk-icon-circle`: Círculo em azul claro para métricas e diferenciais.
- `.sk-btn-primary`: Botão em azul com cantos arredondados ou pílula (`.sk-btn-pill`).
- `.sk-step-badge`: Crachá numérico circular conectado à trilha horizontal.
- `.sk-top-switcher`: Barra flutuante de navegação rápida entre os modos Skeleton (v0), Conteúdo (v1) e Design System.

---

## 🔄 11. Regra de Manutenibilidade e Escalabilidade

> [!IMPORTANT]
> **Critério de Ouro:** Qualquer mudança em variáveis globais no arquivo `assets/css/tokens.css` refletirá de forma automática e imediata em:
> 1. `design-system-preview.html` (Biblioteca de Demonstração dos Tokens e Componentes)
> 2. `index-wireframe.html` (Wireframe Funcional do Site com Conteúdo v1)
> 3. `index-wireframe-skeleton.html` (Wireframe Geométrico Abstrato Skeleton v0)
> 
> Nenhum estilo inline, código duplicado ou valor hardcoded deve existir fora da cadeia de importação do Design System.

