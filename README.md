# Carlos Serralheria e Manutenção

Site institucional e página de conversão via WhatsApp para **Carlos Serralheria e Manutenção** (**Carlos Roberto Cardoso Junior**) em **Uberaba - MG**.

## Informações da Empresa
- **Nome fantasia:** Carlos Serralheria e Manutenção
- **Razão social:** Carlos Roberto Cardoso Junior
- **CNPJ:** `69.752.105/0001-01`
- **Endereço:** Rua Aracaju, 150 · Uberaba - MG
- **WhatsApp:** [(34) 99794-8468](https://wa.me/5534997948468)

## Tecnologias
- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4
- Motion & Lucide React

## Como rodar localmente

```bash
npm install
npm run dev
```

O servidor local será iniciado em `http://localhost:3000`.

## Build de produção

```bash
npm run build
```

Os arquivos finais para hospedagem serão gerados na pasta `dist/`.

## Deploy na Netlify (via GitHub)

O repositório já inclui `netlify.toml`, `.nvmrc` (Node 22) e `public/_redirects`:

1. Acesse **app.netlify.com** e entre com sua conta do **GitHub**.
2. Clique em **Add new project → Import an existing project → GitHub**.
3. Selecione este repositório.
4. A Netlify preencherá automaticamente pelo `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** `22`
5. Clique em **Deploy site**.
