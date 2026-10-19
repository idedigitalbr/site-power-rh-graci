# 🚀 PowerRH — Consultoria Estratégica em Pessoas (Astro)

> **Cliente:** Graciete Corrêa  
> **Repositório:** [idedigitalbr/site-power-rh-graci](https://github.com/idedigitalbr/site-power-rh-graci)  
> **Deploy GitHub Pages:** [https://idedigitalbr.github.io/site-power-rh-graci/](https://idedigitalbr.github.io/site-power-rh-graci/)  
> **Framework:** [Astro](https://astro.build/) (Static Site Generation — SSG)

---

## ⚡ Como Rodar o Projeto Localmente

```bash
# 1. Instalar dependências (apenas na primeira vez)
npm install

# 2. Iniciar o servidor de desenvolvimento local
npm run dev

# O site abrirá em: http://localhost:4321/site-power-rh-graci/ (com redirecionamento automático)

# 3. Compilar versão estática de produção
npm run build

# 4. Pré-visualizar a build de produção localmente
npm run preview
```

---

## 🌐 Páginas do Projeto

| Página | Descrição | Rota Astro / GitHub Pages | Arquivo Fonte |
| :--- | :--- | :--- | :--- |
| **✨ Site Oficial PowerRH** | Versão definitiva pixel-perfect com fotografia executiva, paleta ouro/navy e componentes modulares | [`/`](https://idedigitalbr.github.io/site-power-rh-graci/) | `src/pages/index.astro` |
| **📐 Design System** | Biblioteca viva de componentes, tokens semânticos e documentação visual oficial (link no rodapé) | [`/design-system`](https://idedigitalbr.github.io/site-power-rh-graci/design-system) | `src/pages/design-system.astro` |

---

## 📁 Arquitetura Modular de Componentes (Padrão S0 a S10)

As seções estão organizadas de forma modular em `src/`:

```text
site-power-rh-graci/
├── public/
│   └── assets/                     # CSS, tokens e acervo fotográfico servidos estaticamente
│       ├── css/
│       │   ├── tokens.css          # Design Tokens (cores, tipografia, espaçamentos)
│       │   ├── base.css            # Reset moderno e utilitários
│       │   ├── components.css      # Componentes de interface reutilizáveis
│       │   ├── design-system.css   # Import mestre do Design System
│       │   └── site-final.css      # Camada executiva (ouro, dark navy, hero)
│       └── imagens-diversas/
│           └── fotos_graci_ia/     # Acervo fotográfico em alta resolução
├── src/
│   ├── components/
│   │   ├── common/                 # Componentes compartilhados globais
│   │   │   ├── S0Header.astro      # Cabeçalho unificado com emblema ouro e navegação
│   │   │   ├── Footer.astro        # Rodapé oceânico institucional com 4 colunas
│   │   │   └── ViewSwitcher.astro  # Switcher de navegação entre as 4 visões
│   │   └── home/                   # Seções cronológicas da Home (S1 a S10)
│   │       ├── S1Hero.astro        # Hero section + formulário de diagnóstico flutuante
│   │       ├── S2Metrics.astro     # Faixa arredondada com métricas e prova rápida
│   │       ├── S3QuandoHora.astro  # 4 cards "Quando é hora de apoio estratégico"
│   │       ├── S4Solucoes.astro    # 3 cards de soluções com fotografia executiva
│   │       ├── S5Processo.astro    # Método em 4 etapas (Diagnóstico a Evolução)
│   │       ├── S6Sobre.astro       # Sobre a Fundadora Graciete Corrêa + credenciais
│   │       ├── S7Diferenciais.astro # Diferenciais estratégicos + card de impacto
│   │       ├── S8Depoimentos.astro # Grade de depoimentos de clientes com avatares
│   │       ├── S9Faq.astro         # Acordeão interativo de dúvidas frequentes
│   │       └── S10CtaBanner.astro  # Banner comercial com foto e checklist de conversão
│   ├── layouts/
│   │   └── Layout.astro            # Head, SEO, Meta tags, Google Fonts e scripts
│   └── pages/
│       ├── index.astro             # Página inicial (Versão Final v2)
│       ├── wireframe.astro         # Wireframe neutro com conteúdo (v1)
│       ├── skeleton.astro          # Skeleton blueprint (v0)
│       └── design-system.astro     # Catálogo vivo do Design System
├── astro.config.mjs                # Configuração do Astro (site e base GitHub Pages)
├── package.json                    # Dependências e scripts npm
├── tsconfig.json                   # Tipagem TypeScript
├── DESIGN-SYSTEM.md                # Especificação normativa do Design System
└── README.md                       # Esta documentação
```

---

## 🎨 Design System First & Fidelidade Visual

- **Tokens Preservados:** Nenhuma regra de CSS ou token do [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md) foi alterada. Os estilos continuam 100% canônicos em `public/assets/css/`.
- **Zero Ruptura:** A experiência visual é rigorosamente idêntica (pixel-perfect) à versão homologada, com a vantagem de que qualquer alteração de texto ou imagem agora é feita em componentes de 30 a 50 linhas em vez de um arquivo de 900 linhas.
- **Pronto para Escala:** Para criar novas rotas (ex: `/sobre`, `/servicos/lideranca`), basta criar um arquivo em `src/pages/` reaproveitando `<Layout><S0Header /> ... <Footer /></Layout>`.
