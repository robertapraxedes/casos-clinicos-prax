# Caso Clínico — versão independente do Manus

Este projeto foi preparado para hospedagem estática no Cloudflare Pages.

## O que foi removido

- `vite-plugin-manus-runtime`
- proxy `manus-storage`
- coletor de debug do Manus
- servidor Express utilizado apenas para a hospedagem original
- analytics configurado por variáveis específicas do Manus

## IMPORTANTE: imagens

A exportação recebida não contém os arquivos de imagem que o projeto original carregava pelo armazenamento do Manus. Foram identificados estes 5 caminhos: 

- `assets/batalha-invisivel-mark_af4f2e67.png`
- `assets/hero-atlas-bacteriano_6a01db9d.png`
- `assets/parede-gram-comparativa-pt_1256c1a1.png`
- `assets/morfologia-comparativa-pt_73eb1b90.png`
- `assets/gram-wall-detail_a9c3386a.png`

Crie `client/public/assets/` e coloque esses arquivos ali antes do deploy. O restante do site já aponta para os caminhos locais.

## Cloudflare Pages

Build command: `npm run build`
Build output directory: `dist`

O projeto também contém `client/public/_redirects` para manter a navegação SPA.

## Estado desta preparação

O código está desacoplado do Manus e pronto para o fluxo de build do Cloudflare Pages. O ZIP exportado, porém, não trouxe os cinco arquivos de imagem do armazenamento do Manus. Por isso, eles precisam ser adicionados em `client/public/assets/` antes do primeiro deploy para reproduzir integralmente a aparência original.


## Imagens

As imagens fornecidas no kit `kit-imagens-batalha-invisivel.zip` foram incorporadas em `client/public/assets/` e os caminhos do projeto foram atualizados para não depender do Manus.

## Publicação no Cloudflare Pages

Este é um projeto Vite/React. No Cloudflare Pages, use:
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: deixe em branco

O endereço gratuito `*.pages.dev` pode ser usado sem registrar um domínio próprio.

Observação: o build deve ser executado no Cloudflare (ou localmente com Node/npm) antes da publicação. A estrutura do projeto já está configurada para isso.
