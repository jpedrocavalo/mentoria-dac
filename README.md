# Handoff: Página de Vendas — Mentoria Individual DAC

## Overview
Landing page de vendas (não é checkout) para a **Mentoria Individual DAC** (Descomplicando a Clínica), de Andreza Barros. Objetivo único: levar a psicóloga a clicar no CTA e preencher o formulário de aplicação (funil de aplicação → sessão de diagnóstico gratuita → decisão). Segue o framework Problem–Agitate–Solution: dores → método DAC como solução → prova social → oferta → objeções (FAQ) → CTA final.

## About the Design Files
O arquivo `index.html` deste pacote é um **design de referência**: HTML funcional standalone (sem dependências de build) que reproduz fielmente o visual, copy e comportamento pretendidos (accordion do FAQ, CTA fixo no mobile ao rolar). Ele **pode ser hospedado diretamente como está** (é HTML/CSS/JS puro, sem framework) — não é obrigatório reescrevê-lo em outra stack. Se o projeto de destino já usa um framework (Next.js, etc.), recrie o mesmo HTML/CSS dentro dele; caso contrário, o arquivo já está pronto para deploy estático (ex: Vercel).

## Fidelidade
**Alta fidelidade (hifi).** Cores, tipografia, espaçamento e copy são finais — não são placeholders de layout.

## Pendências antes de publicar (importante)
1. **Fotos** — há dois placeholders de imagem (avatar da Andreza e da Susy Morais), marcados com `id="foto-andreza"` e `id="foto-susy"` no HTML. Substituir por `<img>` reais com as fotos definitivas.
2. **Link do formulário de aplicação** — todos os botões CTA apontam para `#aplicar` (âncora da seção de oferta) ou `#link-do-formulario` (placeholder). Substituir pelo link real do formulário de aplicação.
3. **CRP da Andreza** — aparece como `[NÚMERO]` no rodapé e na seção "Quem conduz".
4. **Links de rodapé** — Política de Privacidade e Termos apontam para `#`.
5. **GTM/Pixel** — nenhum tracking está incluído neste HTML; adicionar conforme a stack de analytics do projeto.
6. **Depoimento da Susy Morais** — o texto assume autorização por escrito já concedida (confirmado no briefing do projeto). Confirmar antes de publicar.

## Estrutura da página (ordem)
1. **Hero** — bloco verde full-bleed, headline "teto de vidro", badge de vagas, CTA
2. **Proof chips** — 3 números de prova social flutuando sobre o hero
3. **Dores** (Problem) — 4 cards de dor + frase de fechamento
4. **Método DAC** (Solution) — bloco verde arredondado, 3 etapas (D/A/C) com ícone circular
5. **Como funciona / Entrega** — 4 itens de checklist do que está incluso
6. **Prova social** — card branco com depoimento da Susy Morais + resultado numérico
7. **Sobre a mentora** — card com foto + bio de Andreza Barros
8. **Oferta** — card com borda âmbar, preço ancorado (R$3.997 → R$2.497 ou 12x R$249), justificativa da condição fundadora, CTA
9. **Como entrar** — 3 passos (aplicação → diagnóstico → decisão)
10. **FAQ** — accordion com 7 perguntas (clique expande/colapsa; apenas uma aberta por vez)
11. **CTA final** — bloco verde arredondado, headline de fechamento
12. **Footer** — disclaimers legais/éticos + links
13. **CTA fixo mobile** — aparece ao rolar para baixo do hero, some perto do fim da página (viewport < 700px)

## Interações e comportamento
- **FAQ accordion**: clique no cabeçalho expande a resposta (`max-height` animado, 0.25s ease) e gira o ícone "+" para "×" (rotate 45°). Apenas um item fica aberto por vez.
- **CTA sticky mobile**: listener de scroll mostra a barra fixa quando `scrollY > 700px` e esconde nos últimos ~900px da página; só ativo em telas < 700px de largura.
- **Hover dos botões**: CTA principal (verde) escurece para `#143830`; CTA branco (sobre fundo verde) escurece para `#F0EEE8`.
- Sem validação de formulário nesta página — o formulário de aplicação vive em outro link/ferramenta externa.

## Design Tokens
- **Cores**: verde `#1E4D40` (primária) · verde-escuro (hover) `#143830` · verde-claro `#E8F0EC` · papel/fundo `#FBFAF7` · tinta `#1C2321` · tinta-suave `#5A6660` · linha `#D9DFDB` · âmbar (só urgência: vagas/oferta) `#C25E3A` · verde-menta (texto sobre fundo verde) `#9CC5B4` / `#DCE8E2`
- **Tipografia**: display `Fraunces` (serif, Google Fonts) · corpo `Sora` (sans, Google Fonts)
- **Border radius**: cards 16–20px · blocos de seção (hero, método, CTA final, oferta) 28–40px · botões 999px (pill) · avatares circulares
- **Sombras**: cards brancos `0 6–14px 18–32px rgba(30,77,64,.08–.1)` · botão branco sobre verde `0 10px 26px rgba(0,0,0,.18)`
- **Largura máxima de conteúdo**: 720px (640px na seção de oferta)

## Assets
Nenhuma imagem externa além das fontes do Google Fonts (Fraunces, Sora). Os dois placeholders de foto usam um componente de drag-and-drop interno da ferramenta de design (`image-slot`) — **não portar esse componente para produção**: substituir por tags `<img>` normais com as fotos finais.

## Arquivos deste pacote
- `index.html` — página completa, self-contained (HTML+CSS+JS inline, sem build necessário)
