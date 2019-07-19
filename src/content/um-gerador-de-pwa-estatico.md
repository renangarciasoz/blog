---
title: "Um gerador de PWA estático?!? (Gatsby)"
author: Renan Garcia
tags: ["Gatsbyjs", "Front End", "JAMStack", "Server Side Rendering", "SEO"]
image: img/testimg-cover.jpg
date: "2019-06-21T17:11:00.000Z"
draft: false
---

Fala galera, estou aqui mais uma vez tentando facilitar a vida d@s Fronts trazendo novidades, mas dessa vez é para quem utiliza ou quer utilizar o famoso  [React.js](https://pt-br.reactjs.org/).

### Entendendo o cenário

Você que já desenvolve com esse poderoso framework já deve ter tido alguns problemas com Performance, SEO, etc… Talvez teve que optar por utilizar um [Server Side Rendering](https://facebook.github.io/react/docs/react-dom-server.html) como o  [Next.js](https://nextjs.org/) certo? mas não é a única opção.

Sabia que da pra resolver todos esses problemas com uma biblioteca? No final ela compila seu código escrito em React e retorna tudo estático, onde você consegue fazer deploy em qualquer lugar, até mesmo no serviço de armazenamento da AWS (S3)!

O que seria essa biblioteca?

### O Gatsby

É uma biblioteca/framework da Web em JavaScript que permite criar sites rápidos, dinâmicos e prontos para dispositivos móveis _sem_ um grau avançado em magia de JavaScript.

Um incrível gerador de site estático que permite que o [React.js](https://pt-br.reactjs.org/) seja usado como o mecanismo de renderização por baixo dos panos para criar um site estático que realmente tenha todos os benefícios esperados em uma aplicação da Web Moderno (Performance, SEO, …).

Ele faz isso renderizando componentes dinâmicos do [React.js](https://pt-br.reactjs.org/) em conteúdo HTML estático por meio  [da renderização do lado do servidor](https://facebook.github.io/react/docs/react-dom-server.html)  no momento da criação.

Significa que seus usuários obtêm todos os benefícios de um site estático, como a capacidade de trabalhar sem JavaScript, a facilidade de pesquisa, os tempos de carregamento rápidos, etc., com as poderosas abstrações, ferramentas e recursos do cliente do mundo  [React.js](https://pt-br.reactjs.org/).

### Gatsby é rápido

[O Gatsby otimiza automaticamente seu site para a web moderna](https://www.gatsbyjs.org/docs/prpl-pattern/) . Você fornece páginas e o Gatsby as une para que elas sejam carregadas o mais rápido possível.

### Gatsby é simples

Os sites JavaScript modernos são muito complexos para depender de desenvolvedores que sempre configuram as coisas corretamente. O Gatsby simplifica o desenvolvimento de sites extraindo a configuração do seu site e movendo-a para os plug-ins da estrutura e da comunidade.

Você fornece componentes, dados e estilos do Gatsby  [React.js](https://pt-br.reactjs.org/), e o Gatsby devolve um site otimizado.

### Roteamento de cliente e pré-cache

O Gatsby carrega primeiro uma página HTML renderizada pelo servidor estático e, em seguida, o JavaScript para converter o site em um aplicativo da web. O que significa que clicar no site não requer uma recarga de página. O Gatsby  _pré-armazena o_ código e os dados necessários para outras páginas, de modo que clicar em um link carrega a próxima página instantaneamente.

### Plugins

O Gatsby sempre teve um rico conjunto de APIs de ciclo de vida para permitir que você se conecte a vários eventos durante o desenvolvimento, a construção e o cliente.

Por exemplo, se você quiser configurar sua aplicação para que ela seja um PWA basta apenas instalar o plugin  [**gatsby-plugin-manifest**](https://www.npmjs.com/package/gatsby-plugin-manifest)  e configurá-lo… Assim como tem inúmeros plugins!

### Gatsby também é JAMStack

O JAMStack é uma arquitetura de desenvolvimento web moderna baseada em JavaScript do lado do cliente, APIs reutilizáveis ​​e marcação pré-construída.

É uma nova maneira de criar websites e aplicativos que ofereçam melhor desempenho, maior segurança, menor custo de dimensionamento e melhor experiência do desenvolvedor.

### [E MUITO MAIS…](https://gatsbyjs.org)

### Conclusão

Vimos que não precisamos iniciar uma discussão complexa de mudar todo o esquema dos projetos de uma empresa para colocar o  [Next.js](https://nextjs.org/), conseguimos resolver apenas com um toque de [Gatsby!](https://gatsbyjs.org)

Mas óbvio que não é uma concorrência, são bem diferentes… e lembrando um ajuda o outro, imagina você fazer N projetos com [Gatsby](https://gatsbyjs.org) e fazer com que o  [Next.js](https://nextjs.org/) utilize/junte esses projetos?

E obrigado mais uma vez turma, até a próxima ❤

### Fontes

[**GatsbyJS**](https://www.gatsbyjs.org/)

[**JAMstack | JavaScript, APIs, and Markup**](https://jamstack.org/)
