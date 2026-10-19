# 🚀 PowerRH — Consultoria Estratégica em Pessoas

> **Cliente:** Graciete Corrêa  
> **Repositório:** [idedigitalbr/site-power-rh-graci](https://github.com/idedigitalbr/site-power-rh-graci)  
> **Deploy GitHub Pages:** [https://idedigitalbr.github.io/site-power-rh-graci/](https://idedigitalbr.github.io/site-power-rh-graci/)

---

## 🌐 Ecossistema de Visões (4 Modos de Navegação)

O projeto conta com um ecossistema completo de 4 visões integradas com um switcher flutuante no topo de todas as telas:

| Versão | Descrição | Link Direto (GitHub Pages) | Arquivo Local |
| :--- | :--- | :--- | :--- |
| **✨ Versão Final (v2)** | Versão definitiva pixel perfect com fotografia executiva, paleta ouro/navy e micro-interações | [Acessar v2](https://idedigitalbr.github.io/site-power-rh-graci/index-final.html) | `index-final.html` |
| **📄 Conteúdo (v1)** | Wireframe funcional neutro de alta fidelidade em escala de cinza com copy real | [Acessar v1](https://idedigitalbr.github.io/site-power-rh-graci/index-wireframe.html) | `index-wireframe.html` |
| **👁️ Skeleton (v0)** | Blueprint estrutural e de diagramação com blocos visuais abstratos | [Acessar v0](https://idedigitalbr.github.io/site-power-rh-graci/index-wireframe-skeleton.html) | `index-wireframe-skeleton.html` |
| **📐 Design System** | Biblioteca viva de componentes, tokens e documentação visual | [Acessar DS](https://idedigitalbr.github.io/site-power-rh-graci/design-system-preview.html) | `design-system-preview.html` |

*O arquivo `index.html` realiza redirecionamento instantâneo para a `index-final.html`.*

---

## 📁 Estrutura de Arquivos

```
site-power-rh-graci/
├── assets/
│   ├── css/
│   │   ├── tokens.css              # Tokens globais (cores, tipografia, espaçamentos)
│   │   ├── base.css                # Reset moderno, containers e utilitários
│   │   ├── components.css          # Componentes reutilizáveis (botões, cards, FAQ, forms)
│   │   ├── design-system.css       # Ponto de entrada mestre do Design System
│   │   └── site-final.css          # Camada visual final premium (ouro, dark navy, hero)
│   └── imagens-diversas/
│       ├── fotos_graci_ia/         # Fotografias executivas organizadas por seção
│       │   ├── 01_HOME_HERO_TOPO/
│       │   ├── 02_SOBRE_GRACIETE/
│       │   ├── 03_SOLUCAO_CULTURA_E_ESTRUTURA/
│       │   ├── 04_SOLUCAO_LIDERANCA_E_DESENVOLVIMENTO/
│       │   ├── 05_SOLUCAO_GOVERNANCA_E_SUCESSAO/
│       │   ├── 06_METODO_E_DIAGNOSTICO/
│       │   ├── 07_CTA_FINAL_E_CONTATO/
│       │   └── 08_BANCO_RESERVAS_E_MIDIAS/
│       └── refs/                   # Wireframes e prints de referência de design
├── DESIGN-SYSTEM.md                # Especificação normativa e documentação do Design System
├── design-system-preview.html      # Catálogo e preview interativo do Design System
├── index-final.html                # Landing page principal definitiva da PowerRH
├── index-wireframe.html            # Wireframe neutro com conteúdo e copy real
├── index-wireframe-skeleton.html   # Blueprint skeleton v0
├── index.html                      # Ponto de entrada canônico com redirecionamento
└── README.md                       # Documentação institucional do repositório
```

---

## 🎨 Design System First

- **Documentação completa:** Veja o [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md) para especificações detalhadas de tokens, escala tipográfica, acessibilidade (WCAG AA), regras de contraste e catálogo de componentes.
- **Tokens Canônicos:** Todas as cores, tipografia e raios de borda derivam de variáveis CSS customizadas em `assets/css/tokens.css` e `assets/css/site-final.css`.

---

## 💻 Desenvolvimento & Visualização Local

Para visualizar localmente sem dependências ou configurações complexas:

```bash
# Com Node.js (npx serve):
npx serve .

# Ou com Python:
python -m http.server 8080

# Ou abra diretamente no navegador qualquer um dos arquivos HTML principais:
# - index-final.html
# - design-system-preview.html
```
