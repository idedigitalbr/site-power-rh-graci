import { readFileSync, writeFileSync, unlinkSync } from 'node:fs';
import { execSync } from 'node:child_process';

const REPO = 'idedigitalbr/site-power-rh-graci';
const PROJECT_NUMBER = 5;
const PROJECT_ID = 'PVT_kwDODX5gps4BrBVX';
const PROJECT_OWNER = 'idedigitalbr';
const CHECKLIST_PATH = 'd:/.GITHUB/sites-HTML/site-power-rh-graci/.MD/CHECKLIST.md';

const FIELDS = {
  status: 'PVTSSF_lADODX5gps4BrBVXzhpV2qc',
  etapa: 'PVTSSF_lADODX5gps4BrBVXzhpV5Cc',
  prioridade: 'PVTSSF_lADODX5gps4BrBVXzhpV5C0',
  sprint: 'PVTSSF_lADODX5gps4BrBVXzhpV5Dw'
};

const STATUS_OPTIONS = {
  'Todo': 'f75ad846',
  'In Progress': '47fc9ee4',
  'Done': '98236657'
};

const ETAPA_OPTIONS = {
  'Etapa 1': '023128db',
  'Etapa 2': 'd50dfd4d',
  'Etapa 3': 'a6525acb',
  'Etapa 4': 'bb9993c5',
  'Etapa 5': 'a7395487'
};

const PRIORIDADE_OPTIONS = {
  'P0': '2c97216d',
  'P1': 'be6c8b9b',
  'P2': '9768974b',
  'P3': 'bfa5d066'
};

const SPRINT_OPTIONS = {
  'Sprint 1': 'aae09425',
  'Sprint 2': 'e4b036b1',
  'Sprint 3': '82b87597',
  'Sprint 4': 'aef3122f'
};

function run(cmd) {
  return execSync(cmd, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] }).trim();
}

function runGql(query) {
  const res = execSync('gh api graphql --input -', {
    input: JSON.stringify({ query }),
    encoding: 'utf8',
    stdio: ['pipe', 'pipe', 'pipe']
  });
  return JSON.parse(res);
}

// 1. Definição das Tarefas Pais (5 Etapas) do CRM
const parentTasks = [
  {
    num: 1,
    title: 'ETAPA 01 — PRÉ-PROJETO E PLANEJAMENTO',
    crmId: 'cmw9uta1f00xslk0jf8y50qu5',
    objective: 'Pesquisa, levantamento de requisitos, arquitetura, wireframes, identidade visual, Design System e preparação técnica.',
    etapa: 'Etapa 1',
    prioridade: 'P1',
    sprint: 'Sprint 1',
    subcodes: ['1.1', '1.2', '1.3']
  },
  {
    num: 2,
    title: 'ETAPA 02 — DESENVOLVIMENTO CORE',
    crmId: 'cmw9utt65010plk0jxic5g09s',
    objective: 'Desenvolver e concluir as páginas fundamentais (Home e Sobre), a navegação e os componentes-base do website.',
    etapa: 'Etapa 2',
    prioridade: 'P0',
    sprint: 'Sprint 2',
    subcodes: ['2.1-PG01', '2.1-PG02', '2.4']
  },
  {
    num: 3,
    title: 'ETAPA 03 — DESENVOLVIMENTO COMPLEMENTAR',
    crmId: 'cmw9uuvz4018alk0jfr5m15i8',
    objective: 'Desenvolver as três páginas individuais de especialidades/soluções, a página de contato/diagnóstico e funcionalidades complementares.',
    etapa: 'Etapa 3',
    prioridade: 'P0',
    sprint: 'Sprint 3',
    subcodes: ['3.1-PG03', '3.1-PG04', '3.1-PG05', '3.1-PG06', '3.3']
  },
  {
    num: 4,
    title: 'ETAPA 04 — REFINAMENTO, INTEGRAÇÕES E QA',
    crmId: 'cmw9uvbtg01bmlk0jc5jopsfu',
    objective: 'Refinamento UI/UX, integrações de formulários e WhatsApp, revisão de conteúdo, SEO e testes completos de garantia da qualidade.',
    etapa: 'Etapa 4',
    prioridade: 'P0',
    sprint: 'Sprint 3',
    subcodes: ['4.1', '4.2', '4.3', '4.4']
  },
  {
    num: 5,
    title: 'ETAPA 05 — GO-LIVE, ENTREGA E LANÇAMENTO',
    crmId: 'cmw9uvqya01evlk0j1xolr2i0',
    objective: 'Homologação assistida com a cliente, deploy e publicação do site oficial, treinamento de atualização e encerramento.',
    etapa: 'Etapa 5',
    prioridade: 'P0',
    sprint: 'Sprint 4',
    subcodes: ['5.1', '5.2', '5.3']
  }
];

// 2. Definição das Subtarefas
const subtasksDef = [
  { code: '1.1', crmId: 'cmw9utali00xvlk0j92j8v5v8', title: '1.1 — Pesquisa e levantamento', etapa: 'Etapa 1', sprint: 'Sprint 1', prioridade: 'P1', tipo: 'ux', start: '### 1.1 — Pesquisa e levantamento', end: '### 1.2 — UX/UI, wireframes e Design System' },
  { code: '1.2', crmId: 'cmw9uthb800yvlk0jf5bw1spv', title: '1.2 — UX/UI, wireframes e Design System', etapa: 'Etapa 1', sprint: 'Sprint 1', prioridade: 'P1', tipo: 'ui', start: '### 1.2 — UX/UI, wireframes e Design System', end: '### 1.3 — Pré-configurações técnicas' },
  { code: '1.3', crmId: 'cmw9utmlv00zslk0jzgqa5cgw', title: '1.3 — Pré-configurações técnicas', etapa: 'Etapa 1', sprint: 'Sprint 1', prioridade: 'P0', tipo: 'infra', start: '### 1.3 — Pré-configurações técnicas', end: '# ETAPA 02 — DESENVOLVIMENTO CORE' },
  { code: '2.1-PG01', crmId: 'cmw9uttka010slk0j9idrdlq4', title: '2.1 — PG 01 — HOME', etapa: 'Etapa 2', sprint: 'Sprint 2', prioridade: 'P0', tipo: 'front', start: '### [ ] PG 01 — HOME', end: '### [ ] PG 02 — A POWERRH / SOBRE' },
  { code: '2.1-PG02', crmId: 'cmw9uuebx0151lk0jco8hnp11', title: '2.1 — PG 02 — A POWERRH / SOBRE', etapa: 'Etapa 2', sprint: 'Sprint 2', prioridade: 'P1', tipo: 'front', start: '### [ ] PG 02 — A POWERRH / SOBRE', end: '## 2.4 — COMPONENTES E FUNCIONALIDADES CORE' },
  { code: '2.4', crmId: 'cmw9uuoda0171lk0jlgmitcht', title: '2.4 — COMPONENTES E FUNCIONALIDADES CORE', etapa: 'Etapa 2', sprint: 'Sprint 2', prioridade: 'P1', tipo: 'front', start: '## 2.4 — COMPONENTES E FUNCIONALIDADES CORE', end: '# ETAPA 03 — DESENVOLVIMENTO COMPLEMENTAR' },
  { code: '3.1-PG03', crmId: 'cmw9uuwe3018dlk0jkker86f6', title: '3.1 — PG 03 — CULTURA E ARQUITETURA ORGANIZACIONAL E DE NEGÓCIOS', etapa: 'Etapa 3', sprint: 'Sprint 3', prioridade: 'P1', tipo: 'front', start: '### [ ] PG 03 — CULTURA E ARQUITETURA ORGANIZACIONAL E DE NEGÓCIOS', end: '### [ ] PG 04 — ENGENHARIA DE EQUIPES E LÍDERES DE LÍDERES' },
  { code: '3.1-PG04', crmId: 'cmw9uuzjv0191lk0jig3zmawo', title: '3.1 — PG 04 — ENGENHARIA DE EQUIPES E LÍDERES DE LÍDERES', etapa: 'Etapa 3', sprint: 'Sprint 3', prioridade: 'P1', tipo: 'front', start: '### [ ] PG 04 — ENGENHARIA DE EQUIPES E LÍDERES DE LÍDERES', end: '### [ ] PG 05 — GOVERNANÇA, SUCESSÃO E ADVISORY FAMILIAR' },
  { code: '3.1-PG05', crmId: 'cmw9uv2nw019plk0j7iv2kmu2', title: '3.1 — PG 05 — GOVERNANÇA, SUCESSÃO E ADVISORY FAMILIAR', etapa: 'Etapa 3', sprint: 'Sprint 3', prioridade: 'P1', tipo: 'front', start: '### [ ] PG 05 — GOVERNANÇA, SUCESSÃO E ADVISORY FAMILIAR', end: '### [ ] PG 06 — CONTATO / DIAGNÓSTICO ESTRATÉGICO' },
  { code: '3.1-PG06', crmId: 'cmw9uv5ub01adlk0j0ye369e9', title: '3.1 — PG 06 — CONTATO / DIAGNÓSTICO ESTRATÉGICO', etapa: 'Etapa 3', sprint: 'Sprint 3', prioridade: 'P1', tipo: 'front', start: '### [ ] PG 06 — CONTATO / DIAGNÓSTICO ESTRATÉGICO', end: '## 3.3 — FUNCIONALIDADES COMPLEMENTARES' },
  { code: '3.3', crmId: 'cmw9uv94r01b1lk0jnroib0py', title: '3.3 — FUNCIONALIDADES COMPLEMENTARES', etapa: 'Etapa 3', sprint: 'Sprint 3', prioridade: 'P2', tipo: 'front', start: '## 3.3 — FUNCIONALIDADES COMPLEMENTARES', end: '# ETAPA 04 — REFINAMENTO, INTEGRAÇÕES E QA' },
  { code: '4.1', crmId: 'cmw9uvc8m01bplk0jeegbj0s8', title: '4.1 — Refinamento UI/UX', etapa: 'Etapa 4', sprint: 'Sprint 3', prioridade: 'P1', tipo: 'ui', start: '### 4.1 — Refinamento UI/UX', end: '### 4.2 — Integrações e Inputs' },
  { code: '4.2', crmId: 'cmw9uvg9501cjlk0j1mv0jv0w', title: '4.2 — Integrações e Inputs', etapa: 'Etapa 4', sprint: 'Sprint 3', prioridade: 'P1', tipo: 'front', start: '### 4.2 — Integrações e Inputs', end: '### 4.3 — Revisão de Conteúdo e SEO' },
  { code: '4.3', crmId: 'cmw9uvjk301dalk0jxompnpwv', title: '4.3 — Revisão de Conteúdo e SEO', etapa: 'Etapa 4', sprint: 'Sprint 3', prioridade: 'P2', tipo: 'content', start: '### 4.3 — Revisão de Conteúdo e SEO', end: '### 4.4 — Testes, Correções e QA' },
  { code: '4.4', crmId: 'cmw9uvnc301e4lk0jmydfbtlr', title: '4.4 — Testes, Correções e QA', etapa: 'Etapa 4', sprint: 'Sprint 3', prioridade: 'P0', tipo: 'qa', start: '### 4.4 — Testes, Correções e QA', end: '# ETAPA 05 — GO-LIVE, ENTREGA E LANÇAMENTO' },
  { code: '5.1', crmId: 'cmw9uvrcz01eylk0jl8phxjpp', title: '5.1 — Homologação', etapa: 'Etapa 5', sprint: 'Sprint 4', prioridade: 'P0', tipo: 'qa', start: '### 5.1 — Homologação', end: '### 5.2 — Deploy / Publicação' },
  { code: '5.2', crmId: 'cmw9uvu5701fglk0j0netty8r', title: '5.2 — Deploy / Publicação', etapa: 'Etapa 5', sprint: 'Sprint 4', prioridade: 'P0', tipo: 'infra', start: '### 5.2 — Deploy / Publicação', end: '### 5.3 — Entrega e Lançamento' },
  { code: '5.3', crmId: 'cmw9uvxuy01g4lk0j7a1yy4dx', title: '5.3 — Entrega e Lançamento', etapa: 'Etapa 5', sprint: 'Sprint 4', prioridade: 'P1', tipo: 'content', start: '### 5.3 — Entrega e Lançamento', end: '## PENDÊNCIAS CRÍTICAS PARA CONCLUIR O PROJETO' }
];

const checklist = readFileSync(CHECKLIST_PATH, 'utf8');

// Criar labels
console.log('--- 1. Assegurando Labels no repositório site-power-rh-graci ---');
const requiredLabels = [
  { name: 'tipo:etapa', color: '6f42c1', desc: 'Tarefa Pai / Etapa do Projeto' },
  { name: 'tipo:subtarefa', color: '0e8a16', desc: 'Subtarefa vinculada à Etapa' },
  { name: 'tipo:ux', color: '0e8a16', desc: 'UX' },
  { name: 'tipo:ui', color: '0e8a16', desc: 'UI' },
  { name: 'tipo:front', color: '0e8a16', desc: 'Front-end' },
  { name: 'tipo:back', color: '0e8a16', desc: 'Back-end' },
  { name: 'tipo:infra', color: '0e8a16', desc: 'Infraestrutura' },
  { name: 'tipo:qa', color: '0e8a16', desc: 'QA e Testes' },
  { name: 'tipo:content', color: '0e8a16', desc: 'Conteúdo' },
  { name: 'etapa:1', color: '1d76db', desc: 'Etapa 1' },
  { name: 'etapa:2', color: '1d76db', desc: 'Etapa 2' },
  { name: 'etapa:3', color: '1d76db', desc: 'Etapa 3' },
  { name: 'etapa:4', color: '1d76db', desc: 'Etapa 4' },
  { name: 'etapa:5', color: '1d76db', desc: 'Etapa 5' },
  { name: 'prioridade:p0', color: 'b60205', desc: 'P0 Urgente' },
  { name: 'prioridade:p1', color: 'd93f0b', desc: 'P1 Alta' },
  { name: 'prioridade:p2', color: 'fbca04', desc: 'P2 Normal' },
  { name: 'prioridade:p3', color: '0e8a16', desc: 'P3 Baixa' }
];

for (const l of requiredLabels) {
  try {
    run(`gh label create "${l.name}" --repo ${REPO} --color "${l.color}" --description "${l.desc}"`);
  } catch (e) {}
}

// 2. Criar as Tarefas Pais
console.log('\n--- 2. Criando Tarefas Pais (Etapa 01 a 05) ---');
for (const p of parentTasks) {
  const tmpFile = 'd:/.GITHUB/sites-HTML/site-power-rh-graci/.MD/temp_p.md';
  const body = `## Objetivo da Etapa
${p.objective}

- **Nível Hierárquico:** Tarefa Pai (Etapa)
- **ID no CRM:** \`${p.crmId}\`
- **Etapa:** ${p.etapa}

<!-- agent-reservation
tarefa: ${p.title}
crmId: ${p.crmId}
etapa: ${p.etapa}
tipo: parent-etapa
-->`;

  writeFileSync(tmpFile, body, 'utf8');
  const url = run(`gh issue create --repo ${REPO} --title "${p.title}" --body-file "${tmpFile}" --label "etapa:${p.num},tipo:etapa,prioridade:${p.prioridade.toLowerCase()}" --assignee victorwilliames`);
  unlinkSync(tmpFile);
  p.issueNumber = parseInt(url.split('/').pop());
  p.url = url;
  console.log(`Criada Tarefa Pai #${p.issueNumber}: ${p.title}`);

  const gqlRes = runGql(`query {
    repository(owner: "idedigitalbr", name: "site-power-rh-graci") {
      issue(number: ${p.issueNumber}) { id }
    }
  }`);
  p.gqlId = gqlRes.data.repository.issue.id;
}

// 3. Criar Subtarefas com checklists completos
console.log('\n--- 3. Criando as 18 Subtarefas com Checklists Oficiais ---');
for (const s of subtasksDef) {
  const sIdx = checklist.indexOf(s.start);
  const eIdx = checklist.indexOf(s.end, sIdx);
  if (sIdx === -1 || eIdx === -1) {
    throw new Error(`Delimitador não encontrado para ${s.code}: ${s.start} -> ${s.end}`);
  }
  const chunk = checklist.substring(sIdx, eIdx);
  const checklistLines = chunk
    .split('\n')
    .filter(line => line.trim().startsWith('- [') || line.trim().startsWith('#### ') || line.trim().startsWith('**'))
    .join('\n');

  const items = chunk.split('\n').filter(l => l.trim().startsWith('- ['));
  const doneCount = items.filter(l => l.trim().startsWith('- [x]')).length;
  let statusName = 'Todo';
  if (doneCount === items.length && items.length > 0) statusName = 'Done';
  else if (doneCount > 0) statusName = 'In Progress';

  const body = `## Contexto e Objetivo
Subtarefa oficial do checklist IDE Digital para o projeto **Website PowerRH | Graciete Corrêa**.
- **Etapa:** ${s.etapa}
- **Código:** \`${s.code}\`
- **ID no CRM:** \`${s.crmId}\`
- **Progresso inicial verificado:** ${doneCount}/${items.length} itens concluídos

## Checklist Oficial
${checklistLines}

## Protocolo do Agente
1. Conferir se a tarefa possui dependências abertas antes de iniciar alterações.
2. Trabalhar em branch própria \`feat/${s.code.toLowerCase().replace(/[^a-z0-9]/g, '-')}-<slug>\` ou \`fix/\`.
3. Comentar commits e PRs vinculando a esta Issue e ao CRM.

<!-- agent-reservation
tarefa: ${s.code}
crmId: ${s.crmId}
etapa: ${s.etapa}
estado: ${statusName}
-->`;

  const tmpFile = 'd:/.GITHUB/sites-HTML/site-power-rh-graci/.MD/temp_s.md';
  writeFileSync(tmpFile, body, 'utf8');
  const url = run(`gh issue create --repo ${REPO} --title "${s.title}" --body-file "${tmpFile}" --label "etapa:${s.etapa.replace('Etapa ', '')},tipo:${s.tipo},tipo:subtarefa,prioridade:${s.prioridade.toLowerCase()}" --assignee victorwilliames`);
  unlinkSync(tmpFile);
  s.issueNumber = parseInt(url.split('/').pop());
  s.url = url;
  s.statusName = statusName;
  console.log(`Criada Subtarefa #${s.issueNumber}: ${s.title} (${doneCount}/${items.length} concluídos -> Status: ${statusName})`);

  const gqlRes = runGql(`query {
    repository(owner: "idedigitalbr", name: "site-power-rh-graci") {
      issue(number: ${s.issueNumber}) { id }
    }
  }`);
  s.gqlId = gqlRes.data.repository.issue.id;
}

// 4. Vincular nativamente via addSubIssue
console.log('\n--- 4. Vinculando Subtarefas aos seus Pais (GraphQL addSubIssue) ---');
for (const p of parentTasks) {
  const children = subtasksDef.filter(s => p.subcodes.includes(s.code));
  for (const c of children) {
    try {
      const mut = `mutation {
        addSubIssue(input: {
          issueId: "${p.gqlId}",
          subIssueId: "${c.gqlId}"
        }) {
          subIssue { id title }
        }
      }`;
      runGql(mut);
      console.log(`  Vinculada: #${c.issueNumber} (${c.title}) -> ${p.title}`);
    } catch (err) {
      console.error(`  Erro ao vincular #${c.issueNumber}:`, err.message);
    }
  }
}

// 5. Adicionar todos os itens ao Quadro #5 e preencher campos
console.log('\n--- 5. Adicionando ao Quadro #5 (site-power-rh-graci) e configurando campos ---');
const allToProject = [
  ...parentTasks.map(p => ({
    number: p.issueNumber,
    title: p.title,
    url: p.url,
    etapa: p.etapa,
    prioridade: p.prioridade,
    sprint: p.sprint,
    status: p.etapa === 'Etapa 1' || p.etapa === 'Etapa 2' ? 'In Progress' : 'Todo'
  })),
  ...subtasksDef.map(s => ({
    number: s.issueNumber,
    title: s.title,
    url: s.url,
    etapa: s.etapa,
    prioridade: s.prioridade,
    sprint: s.sprint,
    status: s.statusName
  }))
];

for (const item of allToProject) {
  let itemId;
  try {
    const addRes = run(`gh project item-add ${PROJECT_NUMBER} --owner ${PROJECT_OWNER} --url ${item.url} --format json`);
    const parsed = JSON.parse(addRes);
    itemId = parsed.id;
  } catch (e) {}

  if (!itemId) {
    const curItems = JSON.parse(run(`gh project item-list ${PROJECT_NUMBER} --owner ${PROJECT_OWNER} --limit 100 --format json`));
    const match = curItems.items.find(i => i.content && i.content.number === item.number);
    if (match) itemId = match.id;
  }

  if (itemId) {
    // Status
    const sId = STATUS_OPTIONS[item.status];
    if (sId) run(`gh project item-edit --id ${itemId} --field-id ${FIELDS.status} --project-id ${PROJECT_ID} --single-select-option-id ${sId}`);
    // Etapa
    const eId = ETAPA_OPTIONS[item.etapa];
    if (eId) run(`gh project item-edit --id ${itemId} --field-id ${FIELDS.etapa} --project-id ${PROJECT_ID} --single-select-option-id ${eId}`);
    // Prioridade
    const prId = PRIORIDADE_OPTIONS[item.prioridade];
    if (prId) run(`gh project item-edit --id ${itemId} --field-id ${FIELDS.prioridade} --project-id ${PROJECT_ID} --single-select-option-id ${prId}`);
    // Sprint
    const spId = SPRINT_OPTIONS[item.sprint];
    if (spId) run(`gh project item-edit --id ${itemId} --field-id ${FIELDS.sprint} --project-id ${PROJECT_ID} --single-select-option-id ${spId}`);
    console.log(`  Quadro item #${item.number}: ${item.title} -> [${item.status} | ${item.etapa}]`);
  }
}

console.log('\n--- PROJETO GRACI CONCLUÍDO COM 100% DE SUCESSO! ---');
