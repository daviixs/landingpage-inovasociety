# Plano de Implementação: Landing Page Inova Society

Data: 2026-04-13

## Observação

O skill `writing-plans` não está disponível nesta sessão. Este arquivo registra o plano de implementação equivalente para execução imediata.

## Escopo

Trocar integralmente a landing page atual por uma versão mobile-first, premium e orientada a conversão para WhatsApp, preservando a ordem das seções aprovadas no design.

## Etapas

1. Reestruturar `src/App.tsx`

- remover narrativa, branding e seções atuais que não correspondem ao novo posicionamento
- montar a página em sete blocos principais na ordem aprovada
- centralizar os dados textuais e links em constantes para facilitar manutenção

2. Reescrever a copy

- aplicar a nova mensagem em português
- simplificar textos para leitura rápida em telas pequenas
- inserir placeholders críveis na prova social
- configurar CTA principal para WhatsApp

3. Refatorar os estilos globais em `src/index.css`

- trocar a direção tipográfica
- definir variáveis de cor, espaçamento e superfícies
- remover dependência visual do tema atual
- reforçar feedback de toque e legibilidade mobile

4. Ajustar responsividade

- priorizar larguras pequenas
- controlar altura da primeira dobra
- empilhar cards e comparações em uma coluna no celular
- garantir botões com toque confortável

5. Limpar dependências da landing page antiga

- remover imports e componentes que deixarem de ser usados
- preservar arquivos existentes sem deletar conteúdo desnecessariamente

6. Validar

- executar `npm run build`
- corrigir eventuais erros de tipagem ou importação
- revisar o fluxo visual e a hierarquia textual final

## Critérios de Aceite

- toda a copy principal está em português do Brasil
- a marca exibida é Inova Society
- a ordem das seções aprovadas foi mantida
- o CTA principal aponta para WhatsApp
- a página funciona bem em telas mobile
- a build local conclui sem erro
