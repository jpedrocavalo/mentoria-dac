// Troca a faixa do topo de uma página do funil por uma chamada clicável.
// Uso: node _faixa.js <pasta> "<frase em destaque>" "<complemento>" <#âncora>
const fs = require('fs')
const [pasta, destaque, complemento, ancora] = process.argv.slice(2)
const arq = `${pasta}/index.html`
let s = fs.readFileSync(arq, 'utf8')

const antiga = s.match(/<(div|a) class="faixa"[^>]*>[\s\S]*?<\/(div|a)>/)
if (!antiga) throw new Error('faixa não encontrada em ' + arq)
s = s.replace(antiga[0], `<a class="faixa" href="${ancora}"><strong>${destaque}</strong> <span>${complemento} <i aria-hidden="true">→</i></span></a>`)

if (!s.includes('a.faixa{display:block')) {
  for (const v of ['--tinta:', '--carvao:', '--creme:', '--acento:']) if (!s.includes(v)) throw new Error('falta a variável ' + v)
  const css = `
/* faixa de topo como chamada: clica e desce até a oferta */
a.faixa{display:block;text-decoration:none;color:var(--tinta);font-size:.78rem;letter-spacing:.1em;line-height:1.5;padding:11px 16px;transition:background .2s}
a.faixa strong{font-weight:700}
a.faixa span{font-weight:500;opacity:.92}
a.faixa i{font-style:normal;display:inline-block;transition:transform .2s}
a.faixa:hover{background:var(--carvao);color:var(--creme)}
a.faixa:hover i{transform:translateX(4px)}
@media (max-width:640px){a.faixa{font-size:.66rem;letter-spacing:.04em;padding:9px 12px}a.faixa span{display:block}}
${ancora}{scroll-margin-top:56px}`
  s = s.replace(/(\.faixa\{[^}]*\})/, `$1${css}`)
}
fs.writeFileSync(arq, s)
console.log('ok', arq, '→', ancora)
