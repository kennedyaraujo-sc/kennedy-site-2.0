# Landing page — Kennedy Araújo

Site estático (HTML + CSS + JavaScript puro). Não precisa de instalação nem de build.

## Estrutura

```
index.html        página completa
css/style.css     estilos
js/main.js        FAQ, formulário e envio para o WhatsApp
img/              logo, fotos e ilustrações
.nojekyll         evita processamento do Jekyll no GitHub Pages
```

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub (por exemplo `site-kennedy-araujo`).
2. Envie **o conteúdo desta pasta** para a raiz do repositório (o `index.html` precisa ficar na raiz).
3. No repositório, abra **Settings > Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**, branch `main` e pasta `/ (root)`, e clique em **Save**.
5. Em alguns minutos o site fica em `https://SEU-USUARIO.github.io/site-kennedy-araujo/`.

Para usar domínio próprio, preencha o campo **Custom domain** na mesma tela.

## O que editar

- **WhatsApp**: o número `5548991575011` aparece em `index.html` (links `wa.me`) e em `js/main.js` (variável `WHATSAPP`). Troque nos dois.
- **Instagram e e-mail**: no rodapé do `index.html`.
- **Textos entre colchetes** (`[Ajuste com seus prazos]`, `[Descreva aqui seu suporte e condições.]`, `[Inclua aqui sua trajetória e diferenciais reais.]`): substitua pelas informações reais.
- **Imagens**: troque os arquivos em `img/` mantendo os mesmos nomes.

## Para testar no computador

Abra o `index.html` no navegador. Os botões do WhatsApp e do Instagram abrem em outra aba.
