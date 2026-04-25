# Desafio Afirmações Poderosas — Página de Vendas

Página de vendas em HTML puro para o Desafio Afirmações Poderosas da Andressa Guimarães.

## Como rodar localmente

Basta abrir o `index.html` no navegador ou usar um servidor local:

```bash
# Opção 1 — npx (sem instalar nada)
npx serve .

# Opção 2 — Python
python3 -m http.server 8000

# Opção 3 — VS Code
# Instale a extensão "Live Server" e clique em "Go Live"
```

## Estrutura de arquivos

```
├── index.html      ← Página principal (CSS crítico inline)
├── styles.css      ← Estilos não-críticos
├── app.js          ← Motor do funil (FAQ, urgência, tracking)
├── flow.js         ← Configuração do funil (textos, preços, bônus)
├── images/         ← Pasta para fotos (criar e adicionar)
├── README.md       ← Este arquivo
└── DEPLOY.md       ← Instruções de deploy
```

## Como personalizar

### Textos e copy

Edite o arquivo `flow.js` — toda a copy está centralizada lá. Os textos no `index.html` são estáticos por performance, mas devem espelhar o `flow.js`.

### Cores

Edite as cores no `styles.css`. As principais variáveis estão no topo:

| Cor | Hex | Uso |
|-----|-----|-----|
| Creme quente | `#F5F0E8` | Fundo principal |
| Marrom chocolate | `#2C1F14` | Fundo escuro / texto |
| Verde sálvia | `#6B8E6B` | Botões CTA |
| Bege médio | `#D4C5B0` | Bordas e detalhes |
| Bege claro | `#EDE6DA` | Cards e seções alternadas |

### Imagens

Crie a pasta `images/` e adicione:

1. `andressa-hero.jpg` — Foto principal da Andressa (recomendado: 800x1066px)
2. `andressa-about.jpg` — Foto para a seção "Quem é a Andressa" (recomendado: 560x746px)

As fotos do WhatsApp (fotos com iPad, notebook, etc.) são ótimas candidatas.

### Link de checkout

O link do Kiwify está em 4 lugares no `index.html`:
- Header CTA
- Hero CTA
- Oferta CTA
- CTA Final

Busque por `pay.kiwify.com.br` e substitua se necessário.

### Tracking (GA4, Meta Pixel)

Abra `app.js` e preencha os IDs no topo:

```javascript
const TRACKING_CONFIG = {
  ga4_id: 'G-XXXXXXXXXX',        // Seu ID do Google Analytics 4
  meta_pixel_id: '1234567890',    // Seu ID do Meta Pixel
  custom_webhook: '',              // Webhook opcional (Zapier, etc.)
};
```

Se usar GA4, adicione o script do Google no `<head>` do `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Se usar Meta Pixel, adicione no `<head>`:

```html
<script>
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'SEU_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

### Urgência / Countdown

No `flow.js`, configure:

```javascript
urgency: {
  enabled: true,       // true para ativar, false para desativar
  countdownHours: 48,  // Horas do contador regressivo
  message: '...',      // Texto acima do contador
}
```

O contador inicia na primeira visita (baseado em `sessionStorage`). Para desativar, basta mudar `enabled` para `false`.

## Termos e Privacidade

Os links de "Termos de Uso" e "Política de Privacidade" no footer apontam para `#`. Substitua pelos URLs reais quando disponíveis.
