# CHECKLIST DE DESENVOLVIMENTO — SITE POWERRH | GRACIETE CORRÊA

**Padrão:** IDE Digital — 5 Etapas  
**Cliente:** Graciete Corrêa / PowerRH Consultoria  
**Projeto:** Website institucional e páginas de soluções  
**Tecnologia:** Astro 7 + Tailwind CSS 4  
**Repositório:** https://github.com/idedigitalbr/site-power-rh-graci  
**Prévia atual:** https://idedigitalbr.github.io/site-power-rh-graci/  
**Status:** Em desenvolvimento  
**Referências:** Minuta original da Graciete, estudo estratégico do Edmundo e auditoria técnica do repositório.

> **Critério das marcações**  
> `[x]` = atividade identificada como produzida/implementada; não significa aprovação final.  
> `[ ]` = atividade pendente, incompleta ou ainda não validada.  
> `N/A` = não se aplica ao escopo.  
> **Uma página só pode ser marcada como concluída quando todas as suas pendências estiverem resolvidas.**

## MAPA DE PÁGINAS — ESCOPO ATUAL

| Código | Página pública | Etapa | Situação |
|---|---|---|---|
| PG 01 | Home | 02 — Core | Em desenvolvimento |
| PG 02 | A PowerRH / Sobre | 02 — Core | Em desenvolvimento |
| PG 03 | Cultura e Arquitetura Organizacional e de Negócios | 03 — Complementar | Não desenvolvida |
| PG 04 | Engenharia de Equipes e Líderes de Líderes | 03 — Complementar | Não desenvolvida |
| PG 05 | Governança, Sucessão e Advisory Familiar | 03 — Complementar | Não desenvolvida |
| PG 06 | Contato / Diagnóstico Estratégico | 03 — Complementar | Não desenvolvida |

**Decisão de arquitetura:** a minuta original reunia as três especialidades na aba “Soluções”. Para o escopo operacional atual, **cada solução terá uma página própria**. O item “Soluções” do menu servirá para acessar essas três páginas; **não há uma PG Soluções genérica prevista neste checklist**. As rotas definitivas serão definidas na implementação.

---

# ETAPA 01 — PRÉ-PROJETO E PLANEJAMENTO

**Objetivo:** Pesquisa, levantamento de requisitos, arquitetura, wireframes, identidade visual, Design System e preparação técnica.

### 1.1 — Pesquisa e levantamento
- [x] Levantamento do briefing e das informações fornecidas pela cliente
- [x] Análise da minuta original “Estrutura para Site”
- [x] Análise do contexto estratégico preparado pelo Edmundo
- [x] Auditoria de posicionamento e presença digital de Graciete/PowerRH
- [x] Pesquisa de referências de consultoria, advisory e governança
- [x] Identificação dos três pilares de atuação
- [x] Definição inicial do público e da proposta de valor
- [x] Levantamento inicial das páginas e conteúdos
- [ ] Consolidar a arquitetura final de **seis páginas públicas** com as soluções individualizadas
- [ ] Validar com a cliente a abordagem comercial e o posicionamento final (empresas em crescimento, liderança, cultura e sucessão)
- [ ] Confirmar textos, serviços, credenciais e entregáveis autorizados para publicação

### 1.2 — UX/UI, wireframes e Design System
- [x] Pesquisa de referências visuais e direção editorial corporativa
- [x] Definição da paleta: azul-marinho, grafite, off-white e dourado/champanhe discreto
- [x] Definição de tipografia e princípios visuais
- [x] Criação da base do Design System e componentes visuais
- [x] Definição da estrutura inicial de Home e Sobre
- [ ] Consolidar o sitemap final e os fluxos entre as seis páginas
- [ ] Consolidar/validar wireframes das páginas individuais de soluções e Contato
- [ ] Padronizar modelos de Hero, conteúdo, CTA e rodapé para as novas páginas
- [ ] Selecionar, tratar e aprovar fotografias reais da Graciete
- [ ] Validar a direção visual definitiva com a cliente

### 1.3 — Pré-configurações técnicas
- [x] Definição da stack tecnológica (Astro + Tailwind CSS)
- [x] Criação do repositório GitHub
- [x] Instalação e configuração inicial do projeto
- [x] Estruturação de páginas, componentes e arquivos estáticos
- [x] Configuração dos estilos globais e tokens visuais
- [x] Configuração da base de rotas públicas
- [x] Configuração de prévia no GitHub Pages
- [x] Criação de rotina de build/deploy da prévia
- [ ] Confirmar ambiente de produção, domínio e responsáveis pela publicação
- [ ] Definir o serviço/fluxo de recebimento dos formulários de diagnóstico (site estático)

**Entrega da Etapa 01:** escopo e arquitetura de seis páginas validados, Design System alinhado, materiais-base aprovados e projeto tecnicamente preparado.

---

# ETAPA 02 — DESENVOLVIMENTO CORE

**Objetivo:** Desenvolver e concluir as páginas fundamentais, a navegação e os componentes-base do website.

## 2.1 — PÁGINAS PÚBLICAS

### [ ] PG 01 — HOME

**S1 — Hero / Topo**
- [x] Estrutura visual principal do Hero
- [x] Rotação de imagens do topo
- [x] Headline, texto de apoio e botão CTA
- [ ] Definir e aplicar a copy final aprovada
- [ ] Selecionar imagens definitivas (priorizar fotografia real)
- [ ] Revisar enquadramentos, legibilidade e experiência mobile
- [ ] Conferir CTA para o diagnóstico estratégico

**S2 — Autoridade, Indicadores e Diagnóstico**
- [x] Estrutura visual dos indicadores
- [x] Interface inicial do formulário de diagnóstico na Home
- [ ] Validar números, métricas e resultados mencionados
- [ ] Revisar os campos para alinhar ao briefing
- [ ] Preparar o formulário para a integração funcional da Etapa 04

**S3 — Desafios / Quando Buscar Apoio Estratégico**
- [x] Estrutura dos cards de identificação dos desafios
- [x] Ícones e organização inicial do conteúdo
- [ ] Alinhar o texto à dor real do empresário e da média liderança
- [ ] Contemplar a mensagem do briefing sobre crescimento e dependência do fundador, sem excesso de apelo comercial
- [ ] Refinar espaçamentos e adaptação mobile

**S4 — Nossas Soluções**
- [x] Estrutura visual dos três pilares na Home
- [x] Cards com imagens e descrições resumidas
- [ ] Validar textos e imagens dos três pilares
- [ ] Vincular o card **Cultura** à PG 03
- [ ] Vincular o card **Líderes de Líderes** à PG 04
- [ ] Vincular o card **Governança e Sucessão** à PG 05
- [ ] Conferir CTA, estados interativos e mobile

**S5 — Como Trabalhamos / Advisory**
- [x] Estrutura das etapas de trabalho: diagnóstico, planejamento, implementação e evolução
- [ ] Revisar a metodologia com base no briefing
- [ ] Explicar a atuação próxima, sênior e discreta do Advisor
- [ ] Validar nomenclaturas e conteúdo final

**S6 — Sobre a Graciete / Fundadora**
- [x] Estrutura da apresentação da fundadora
- [x] Texto biográfico inicial e credenciais
- [ ] Corrigir inconsistências de tempo de experiência no conteúdo
- [ ] Revisar a trajetória executiva e as qualificações com o material original
- [ ] Substituir/validar imagem definitiva
- [ ] Confirmar o link de apresentação para PG 02 — Sobre

**S7 — Diferenciais PowerRH**
- [x] Estrutura visual dos diferenciais
- [x] Cards e imagem de destaque
- [ ] Refinar diferenciais: senioridade, pragmatismo, proximidade e confidencialidade
- [ ] Evitar informações não comprovadas ou promessas excessivas
- [ ] Validar imagem e conteúdo final

**S8 — Prova Social / Depoimentos**
- [x] Componente reutilizável de depoimentos desenvolvido no projeto
- [ ] Incluir a seção na Home (componente ainda não renderizado nessa página)
- [ ] Substituir os depoimentos provisórios/não verificados
- [ ] Selecionar referências profissionais reais disponibilizadas pela cliente
- [ ] Validar nomes, cargos, recortes e permissão de publicação
- [ ] Preservar o posicionamento de discrição e confidencialidade

**S9 — Perguntas Frequentes**
- [x] Estrutura e interação de FAQ implementadas
- [ ] Revisar perguntas e respostas com a cliente
- [ ] Revisar acessibilidade, teclado e comportamento no mobile

**S10 — CTA Final**
- [x] Estrutura visual do banner final
- [x] Botão de conversão
- [ ] Revisar imagem e texto de fechamento
- [ ] Direcionar o botão ao fluxo definitivo de diagnóstico

### [ ] PG 02 — A POWERRH / SOBRE

**S1 — Hero / Manifesto**
- [x] Estrutura visual da abertura
- [ ] Revisar apresentação institucional
- [ ] Incorporar/validar o conceito **“Honrar o passado. Estruturar o futuro.”**
- [ ] Definir imagem e CTA aprovados

**S2 — História, Trajetória e Autoridade**
- [x] Estrutura de apresentação biográfica e indicadores
- [ ] Revisar a trajetória executiva e a experiência de mais de 30 anos
- [ ] Validar credenciais, experiências e indicadores mencionados
- [ ] Revisar referências a governança, transformação organizacional e M&A
- [ ] Validar fotografia real da Graciete
- [ ] Reforçar autoridade com linguagem profissional, humana e objetiva

**S3 — Missão, Visão e Valores**
- [x] Estrutura visual dos fundamentos institucionais
- [ ] Revisar missão e visão conforme texto original
- [ ] Validar os valores: pragmatismo, resultados, senioridade, confidencialidade, humanismo e perenidade
- [ ] Refinar apresentação e hierarquia de conteúdo

**S4 — Metodologia / Áreas de Atuação / Galeria**
- [x] Estrutura inicial de galeria e frentes de atuação
- [ ] Conferir aderência ao método do Advisor descrito pela cliente
- [ ] Revisar conteúdos de diagnóstico de campo, análise comportamental e aconselhamento ativo
- [ ] Selecionar e substituir imagens provisórias por fotografias autorizadas
- [ ] Validar legendas, descrições e versões responsivas

**S5 — Prova Social**
- [x] Componente de depoimentos incluído na página Sobre
- [ ] Retirar depoimentos não comprovados atualmente cadastrados
- [ ] Selecionar depoimentos reais do material da cliente/LinkedIn
- [ ] Validar texto, autoria, cargo e autorização antes da publicação

**S6 — CTA Final**
- [x] Estrutura do CTA de fechamento
- [ ] Revisar texto e imagem
- [ ] Vincular à página Contato / Diagnóstico Estratégico

## 2.2 — TELA DE LOGIN

**N/A — O website institucional não prevê autenticação ou login.**

## 2.3 — PÁGINAS DASHBOARD (INTERNAS)

**N/A — Não há painel administrativo ou área restrita prevista no escopo atual.**

## 2.4 — COMPONENTES E FUNCIONALIDADES CORE

**Header / Navegação**
- [x] Logo e estrutura de navegação desktop
- [x] CTA de WhatsApp no cabeçalho
- [ ] Implementar **menu mobile funcional** (navegação atual é ocultada em telas menores)
- [ ] Atualizar menu para Home, Sobre, as três Soluções e Contato
- [ ] Definir “Soluções” como item de navegação para as três páginas individuais
- [ ] Revisar estados ativos, âncoras e comportamento sticky

**Footer / Rodapé**
- [x] Estrutura visual do rodapé
- [x] Identidade visual e ícones sociais
- [ ] Substituir URLs genéricas de Instagram/LinkedIn pelos perfis oficiais
- [ ] Validar WhatsApp, e-mail e demais informações de contato
- [ ] Corrigir link de Termos/Privacidade (atualmente não aponta para a política)
- [ ] Remover link público do Design System do rodapé de produção

**Base de navegação e componentes**
- [x] Rotas atuais Home e Sobre
- [x] Componentes reutilizáveis de interface
- [x] Design System aplicado à base existente
- [ ] Preparar navegação e templates reutilizáveis para as quatro páginas restantes
- [ ] Revisar consistência de botões, CTAs e links de seção

**Entrega da Etapa 02:** Home e Sobre completas no nível de implementação, com componentes e navegação principal preparados. A homologação visual e os testes finais ocorrem nas Etapas 04 e 05.

---

# ETAPA 03 — DESENVOLVIMENTO COMPLEMENTAR

**Objetivo:** Desenvolver **cada uma das três soluções em uma página independente**, além da página de Contato/Diagnóstico.

## 3.1 — DEMAIS PÁGINAS PÚBLICAS

### [ ] PG 03 — CULTURA E ARQUITETURA ORGANIZACIONAL E DE NEGÓCIOS

**S1 — Hero / Apresentação da Solução**
- [ ] Criar layout e composição de abertura
- [ ] Desenvolver headline e texto objetivo da especialidade
- [ ] Selecionar fotografia/elemento visual aprovado

**S2 — Desafios e Objetivos**
- [ ] Apresentar os desafios de cultura informal, processos e responsabilidades
- [ ] Explicar o objetivo de transformar a estrutura em um sistema de gestão mais organizado e autônomo

**S3 — Cultura Corporativa**
- [ ] Detalhar mapeamento e redesenho da cultura
- [ ] Apresentar rituais e práticas de fortalecimento da cultura desejada

**S4 — Arquitetura e Design Organizacional**
- [ ] Apresentar desenho organizacional, organogramas e fluxos de trabalho
- [ ] Explicar papéis, responsabilidades e processos de gestão

**S5 — Cargos, Carreiras e Remuneração**
- [ ] Apresentar estruturação de Planos de Cargos, Carreiras e Salários (PCCS)
- [ ] Incluir engenharia de cargos e competências desejadas
- [ ] Abordar alinhamento à realidade e ao mercado da Região Norte, conforme briefing

**S6 — Metodologia e Entregáveis**
- [ ] Organizar escopo, método, benefícios e entregáveis descritos no briefing
- [ ] Validar textos e limites das promessas comerciais com a cliente

**S7 — CTA Final**
- [ ] Criar chamada para reunião/diagnóstico
- [ ] Vincular à PG 06 — Contato

### [ ] PG 04 — ENGENHARIA DE EQUIPES E LÍDERES DE LÍDERES

**S1 — Hero / Apresentação da Solução**
- [ ] Criar layout e composição de abertura
- [ ] Desenvolver headline, descrição e imagem

**S2 — Desafios da Liderança**
- [ ] Apresentar a necessidade de autonomia gerencial e tomada de decisão
- [ ] Demonstrar o papel da média liderança na redução da dependência do fundador

**S3 — Assessment / Perfil Comportamental**
- [ ] Explicar avaliação do perfil atual versus perfil desejado para o cargo
- [ ] Apresentar diagnóstico e devolutiva das lideranças

**S4 — PDI e Desenvolvimento de Competências**
- [ ] Apresentar Plano de Desenvolvimento Individual (PDI)
- [ ] Explicar desenvolvimento orientado a competências e responsabilidades

**S5 — Capacitação e Mentoria Executiva**
- [ ] Apresentar gestão de indicadores, pessoas e metas
- [ ] Apresentar aplicação de feedback e acompanhamento de performance
- [ ] Detalhar mentoria para formação de líderes estratégicos

**S6 — Metodologia e Entregáveis**
- [ ] Consolidar processo de atuação e resultados esperados
- [ ] Validar linguagem, escopo e entregáveis com a cliente

**S7 — CTA Final**
- [ ] Criar chamada para reunião/diagnóstico
- [ ] Vincular à PG 06 — Contato

### [ ] PG 05 — GOVERNANÇA, SUCESSÃO E ADVISORY FAMILIAR

**S1 — Hero / Apresentação da Solução**
- [ ] Criar layout e composição de abertura
- [ ] Desenvolver headline, descrição e imagem

**S2 — Desafios da Continuidade Empresarial**
- [ ] Apresentar os desafios de continuidade do negócio e preservação do legado
- [ ] Abordar responsabilidades, transição e relações familiares com linguagem sensível e profissional

**S3 — Governança Familiar**
- [ ] Apresentar estruturação de regras de participação de familiares no negócio
- [ ] Explicar definição de responsabilidades e prevenção de conflitos

**S4 — Preparação de Herdeiros e Sucessores**
- [ ] Apresentar desenvolvimento técnico e comportamental
- [ ] Incluir PDI para herdeiros e sucessores
- [ ] Explicar mentorias personalizadas e preparação da nova liderança

**S5 — Advisory Familiar / Transição**
- [ ] Descrever atuação neutra e próxima na mediação comportamental
- [ ] Explicar a condução da transição de responsabilidades e liderança
- [ ] Reforçar confiança, discrição e confidencialidade

**S6 — Metodologia e Entregáveis**
- [ ] Consolidar escopo, etapas e entregáveis do serviço
- [ ] Validar promessas, limites da atuação e linguagem comercial

**S7 — CTA Final**
- [ ] Criar chamada para reunião estratégica
- [ ] Vincular à PG 06 — Contato

### [ ] PG 06 — CONTATO / DIAGNÓSTICO ESTRATÉGICO

**S1 — Hero / Introdução ao Agendamento**
- [ ] Criar layout de abertura
- [ ] Aplicar a proposta do briefing: convite para reunião estratégica
- [ ] Definir texto, CTA e elementos de confiança

**S2 — Formulário de Diagnóstico**
- [ ] Criar layout completo do formulário
- [ ] Campo: Nome do Proprietário / Diretor
- [ ] Campo: E-mail Corporativo
- [ ] Campo: Telefone / WhatsApp Direto
- [ ] Campo: Nome da Empresa
- [ ] Campo: Número de Colaboradores
  - [ ] Até 30
  - [ ] De 31 a 100
  - [ ] De 100 a 500
  - [ ] Mais de 500
- [ ] Campo: Maior desafio atual da empresa
  - [ ] Reduzir a sobrecarga operacional do fundador
  - [ ] Desenvolver a média liderança
  - [ ] Iniciar ou organizar a sucessão familiar
  - [ ] Compreender e modelar a cultura organizacional
  - [ ] Melhorar o desenho organizacional, processos ou modelo de gestão
- [ ] Botão: Solicitar Reunião de Diagnóstico
- [ ] Preparar o formulário para validação e integração da Etapa 04

**S3 — Compromisso de Confidencialidade**
- [ ] Implementar apresentação do compromisso de sigilo do briefing
- [ ] Inserir informação e link de privacidade aplicáveis ao tratamento de dados
- [ ] Validar texto final de confidencialidade com a cliente

**S4 — Contato Direto**
- [ ] Exibir WhatsApp e e-mail oficiais validados
- [ ] Exibir canais sociais pertinentes
- [ ] Ajustar navegação e CTA final

## 3.2 — DEMAIS PÁGINAS DASHBOARD (INTERNAS)

**N/A — Não há dashboard ou módulos internos previstos.**

## 3.3 — FUNCIONALIDADES COMPLEMENTARES

- [ ] Criar as rotas definitivas das três soluções e do Contato
- [ ] Vincular os cards da Home às páginas individuais
- [ ] Implementar acesso às três soluções pelo menu principal
- [ ] Padronizar componentes reutilizados nas novas páginas
- [ ] Integrar os CTAs das soluções ao diagnóstico
- [ ] Revisar as relações de navegação entre as seis páginas

**Entrega da Etapa 03:** páginas PG 03, PG 04, PG 05 e PG 06 implementadas, com conteúdo, seções, CTAs e navegação estruturados.

---

# ETAPA 04 — REFINAMENTO, INTEGRAÇÕES E QA

**Objetivo:** Finalizar UI/UX, validar os inputs, integrar o formulário, corrigir bugs e testar a experiência completa.

### 4.1 — Refinamento UI/UX
- [ ] Revisão visual da Home (PG 01)
- [ ] Revisão visual da Sobre (PG 02)
- [ ] Revisão visual de Cultura (PG 03)
- [ ] Revisão visual de Lideranças (PG 04)
- [ ] Revisão visual de Governança e Sucessão (PG 05)
- [ ] Revisão visual de Contato (PG 06)
- [ ] Revisão da consistência do Design System nas seis páginas
- [ ] Ajustar tipografia, contraste, alinhamentos, espaçamentos e hierarquia visual
- [ ] Ajustar botões, hover, focus, loading e estados de interação
- [ ] Refinar animações e transições, respeitando preferência de movimento reduzido
- [ ] Revisar acessibilidade dos componentes, menus, formulários e FAQ
- [ ] Validar responsividade para desktop, tablet e mobile
- [ ] Otimizar dimensões, formatos e carregamento de fotografias reais
- [ ] Confirmar que nenhuma imagem provisória/artificial seja apresentada como fotografia real

### 4.2 — Integrações e Inputs
- [ ] Definir integração de formulário compatível com a hospedagem estática
- [ ] **Remover envio fictício da Home:** atualmente o formulário apenas mostra alerta de sucesso
- [ ] Implementar recebimento real das solicitações do formulário da Home
- [ ] Implementar recebimento real das solicitações da PG 06
- [ ] Validar campos obrigatórios, e-mail, telefone e seleção das opções
- [ ] Garantir feedback real de sucesso, erro e carregamento
- [ ] Configurar destinatário e confirmar recebimento das mensagens
- [ ] Implementar medidas adequadas contra spam e envios repetidos
- [ ] Revisar tratamento de dados e informações de privacidade do formulário
- [ ] Testar botões e links de WhatsApp
- [ ] Validar links externos, redes sociais e canais oficiais

### 4.3 — Revisão de Conteúdo e SEO
- [ ] Revisar todos os textos com o briefing original e as aprovações da cliente
- [ ] Validar a narrativa do Advisor Estratégico e a apresentação dos três pilares
- [ ] Padronizar o tempo de experiência e demais dados profissionais
- [ ] Verificar resultados, números, certificações e credenciais
- [ ] Conferir autoria e autorização dos depoimentos publicados
- [ ] Padronizar nomes da marca, serviços, botões e chamadas
- [ ] Revisar ortografia, pontuação e legibilidade
- [ ] Definir título e meta description exclusivos por página
- [ ] Configurar URLs canônicas e compartilhamento Open Graph
- [ ] Configurar/verificar sitemap e robots.txt
- [ ] Validar hierarquia semântica dos títulos e textos alternativos das imagens
- [ ] Criar/validar a Política de Privacidade e corrigir os links do Footer

### 4.4 — Testes, Correções e QA
- [ ] Executar build e validar ausência de erros
- [ ] Testar navegação entre todas as seis páginas
- [ ] Testar menu mobile, teclado e estados de foco
- [ ] Testar todos os CTAs e links internos/externos
- [ ] Testar ambos os formulários com submissões reais controladas
- [ ] Testar mensagens de erro, sucesso e campos inválidos
- [ ] Testar FAQ, sliders e demais interações
- [ ] Testar layout em diferentes dimensões e navegadores
- [ ] Verificar imagens, caminhos estáticos e rotas de assets
- [ ] Executar revisão de desempenho e otimização
- [ ] Verificar acessibilidade básica e privacidade
- [ ] Corrigir bugs, inconsistências e regressões
- [ ] Realizar checklist final de QA antes da homologação

**Entrega da Etapa 04:** site completo, responsivo, integrado, sem conteúdo provisório e com testes funcionais concluídos.

---

# ETAPA 05 — GO-LIVE, ENTREGA E LANÇAMENTO

**Objetivo:** Homologar o site, publicar a versão definitiva, validar produção e formalizar a entrega.

### 5.1 — Homologação
- [ ] Apresentar versão final à cliente
- [ ] Validar PG 01 — Home
- [ ] Validar PG 02 — A PowerRH / Sobre
- [ ] Validar PG 03 — Cultura e Arquitetura Organizacional
- [ ] Validar PG 04 — Engenharia de Equipes e Líderes de Líderes
- [ ] Validar PG 05 — Governança, Sucessão e Advisory Familiar
- [ ] Validar PG 06 — Contato / Diagnóstico Estratégico
- [ ] Validar fotografias, textos e depoimentos
- [ ] Consolidar solicitações e aplicar ajustes aprovados
- [ ] Obter aprovação final para publicação

### 5.2 — Deploy / Publicação
- [ ] Confirmar domínio oficial e hospedagem definitiva
- [ ] Configurar DNS, SSL/HTTPS e ambiente de produção
- [ ] Ajustar base path/rotas conforme o domínio definitivo
- [ ] Revisar arquivos e links que não devem ficar públicos (ex.: Design System)
- [ ] Executar build final de produção
- [ ] Realizar deploy da versão homologada
- [ ] Testar as seis URLs no domínio oficial
- [ ] Confirmar recebimento real dos formulários em produção
- [ ] Verificar SEO, robots, sitemap e compartilhamento social
- [ ] Verificar HTTPS, redirecionamentos e links externos

### 5.3 — Entrega e Lançamento
- [ ] Atualizar README e documentação para refletir a estrutura real do site
- [ ] Revisar organização do repositório e registrar a versão entregue
- [ ] Documentar domínio, hospedagem e serviço de formulários
- [ ] Organizar backup e acessos de manutenção
- [ ] Fornecer orientações de atualização de conteúdo e imagens
- [ ] Realizar lançamento oficial do site
- [ ] Acompanhar o funcionamento inicial e corrigir eventuais incidentes
- [ ] Formalizar a entrega ao cliente
- [ ] Registrar encerramento e aprovação do projeto

**Entrega da Etapa 05:** site público no domínio definitivo, homologado, documentado e entregue.

---

## PENDÊNCIAS CRÍTICAS PARA CONCLUIR O PROJETO

1. [ ] **Criar as quatro páginas ainda inexistentes:** as três páginas individuais de soluções e a página de Contato.
2. [ ] **Tornar os formulários realmente funcionais:** a Home atualmente simula sucesso sem enviar a solicitação.
3. [ ] **Corrigir a navegação mobile:** o menu desktop é ocultado e não existe substituto funcional no código atual.
4. [ ] **Substituir depoimentos provisórios e validar provas de autoridade.**
5. [ ] **Padronizar a biografia e os anos de experiência**, com base nos dados aprovados pela Graciete.
6. [ ] **Validar fotografias reais** e eliminar imagens provisórias que prejudiquem o posicionamento.
7. [ ] **Corrigir o Footer, redes sociais, política de privacidade e todos os CTAs.**
8. [ ] **Concluir QA, homologação, deploy e entrega.**

**Observação de auditoria:** as marcações foram feitas com base nas fontes e na inspeção anterior do código publicado no GitHub; não substituem teste de build, navegação real, performance ou aprovação da cliente. Itens de design e texto implementados podem continuar pendentes de validação.
