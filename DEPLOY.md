# Deploy — Desafio Afirmações Poderosas

A página é 100% estática (HTML + CSS + JS). Funciona em qualquer servidor de arquivos estáticos.

## Vercel (recomendado)

```bash
# Instalar CLI
npm i -g vercel

# Deploy de preview
cd "caminho/para/a/pasta"
vercel

# Deploy de produção
vercel --prod
```

Ou conecte o repositório GitHub na [dashboard da Vercel](https://vercel.com) para deploy automático a cada push.

## Netlify

### Opção 1 — Drag & Drop
1. Acesse [app.netlify.com/drop](https://app.netlify.com/drop)
2. Arraste a pasta do projeto para a tela
3. Pronto — URL gerada automaticamente

### Opção 2 — CLI
```bash
npm i -g netlify-cli
netlify deploy --dir=. --prod
```

## GitHub Pages

1. Crie um repositório no GitHub
2. Faça push dos arquivos
3. Vá em Settings > Pages
4. Selecione a branch `main` e pasta `/` (root)
5. Salve — em ~2 minutos a página estará no ar

## Cloudflare Pages

1. Acesse [dash.cloudflare.com](https://dash.cloudflare.com)
2. Vá em Workers & Pages > Create
3. Conecte seu repositório GitHub ou faça upload direto
4. Build command: (vazio — não precisa build)
5. Output directory: `.`
6. Deploy

## Amazon S3

```bash
# Criar bucket
aws s3 mb s3://afirmacoes-poderosas

# Configurar como website
aws s3 website s3://afirmacoes-poderosas --index-document index.html

# Upload dos arquivos
aws s3 sync . s3://afirmacoes-poderosas --exclude ".git/*" --exclude "*.md"

# Tornar público (ajuste a policy conforme necessário)
aws s3api put-bucket-policy --bucket afirmacoes-poderosas --policy '{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::afirmacoes-poderosas/*"
  }]
}'
```

## Firebase Hosting

```bash
# Instalar CLI
npm i -g firebase-tools

# Login
firebase login

# Inicializar (escolha Hosting, diretório público: ".")
firebase init hosting

# Deploy
firebase deploy
```

## Domínio customizado

Após o deploy, configure seu domínio customizado na plataforma escolhida. Todas as opções acima suportam domínios próprios com HTTPS gratuito.
