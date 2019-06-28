---
layout: post
title: Criando uma arquitetura para Micro Front End (exemplo com AWS).
image: img/callum-shaw-555357-unsplash.jpg
author: Renan Garcia
date: 2019-06-20T16:08:00.000Z
tags:
  - Arquitetura de Software
  - Front End Development
  - Jamstack
  - Sistemas distribuidos
---

Fala senhores, resolvi escrever um tutorial sobre arquitetura, pois acho bem difícil achar um com este assunto, meu objetivo é escrever tutoriais em Português pra ajudar a galera.

Nele vou tentar ser bem objetivo colocando resumos e mostrar a vocês uma das maneiras de criar uma arquitetura para projetos de Front End. então let's bora!

### Arquitetura?

> A  **arquitetura de software**  de um sistema consiste na definição dos componentes de software, suas propriedades externas, e seus relacionamentos com outros  [softwares](https://pt.wikipedia.org/wiki/Software "Software"). O termo também se refere à  [documentação](https://pt.wikipedia.org/wiki/Documenta%C3%A7%C3%A3o "Documentação")  da arquitetura de software do sistema. A documentação da arquitetura do software facilita: a comunicação entre os  [stakeholders](https://pt.wikipedia.org/wiki/Stakeholder "Stakeholder"), registra as decisões iniciais acerca do  [projeto](https://pt.wikipedia.org/wiki/Projeto "Projeto")  de alto-nível, e permite o reúso do projeto dos componentes e padrões entre projetos. — Wikipédia

No Front End ela é bem importante também, pois lidamos vários componentes, arquivos, projetos, etc… E chega uma hora que se não cuida, vira um monolitão absurdo, e é por isso que devemos nos preocupar desde o começo como será a arquitetura desse projeto, ou até mesmo de todos os projetos front end na empresa.

### Projeto exemplo

Precisamos criar um marketplace, nele vamos atacar três frentes diferentes:

-   Home page
-   Cadastro / Login
-   Lista de produtos / Filtro / etc…

Geralmente criamos apenas uma aplicação que dentro contém essas frentes. Mas pensa comigo, se juntarmos tudo isso, não ficaria enorme? Não da uma preocupação só de pensar na quantidade de pastas? Ainda mais se for criar com React (index.js, style.js, component.js, …) rsrsrs…

A ideia é o seguinte, porque não criamos três aplicações separadas e pensamos em uma forma de compartilhar dados/componentes para utilizar nelas? Vamos a prática…

### Dividindo em aplicações

Primeiro vamos dividir o projeto em três diferentes lembrando que:

-   home (Página inicial e Landing pages)
-   user (Cadastro, login, …)
-   products (Produtos, filtro, …)

mais dois:

-   design-system
-   api

"**design-system**" é onde ficará seus componentes para compartilhar entre todas as suas aplicações, até mesmo se quiser criar outra coisa mais pra frente… (costumo criar uma lib e publicar no  [NPM](http://www.npmjs.com/)).

"**api**" será sua API para controle de dados dos projetos, sua única aplicação que é um servidor… Se você não quiser criar, também não precisa, basta compartilhar seus dados entre os projetos por LocalStorage ou Cookies.

![](https://cdn-images-1.medium.com/max/800/1*CzAF_a8EMyqrfmRL8YpNGg.png)

Pensando desse jeito, todas as nossas aplicações ficam reutilizáveis… se um dia você quiser evoluir esse "user" para uma aplicação de autenticação central, você consegue (por exemplo o login da Google).

### Repositórios

A ideia é que os repositórios também fiquem separados e cada um tenha seu CI e CD.

![](https://cdn-images-1.medium.com/max/800/1*jonBoe0DWNm11BCIfETP1g.png)

> CI (Integração contínua) — O objetivo principal de utilizar a integração contínua é verificar se as alterações ou novas funcionalidades não criaram novos defeitos no projeto já existente. A prática da integração contínua pode ser feita através de processos manuais ou automatizados, utilizando ferramentas como o Jenkins, Hudson entre outros. — DevMedia — Fabio

> CD (Entrega contínua — Entrega contínua é uma abordagem na qual os times de desenvolvimento lançam produtos de qualidade de forma frequente, previsível e automatizada. — Opus Software — Kaluan

### Ambientes (AWS)

Após entendermos quais aplicações temos que criar e como organizar os repositórios, agora vamos ver como deve funcionar a parte de ambientes na AWS.

Precisamos usar o  [**S3**](https://aws.amazon.com/pt/s3/)  para criar os buckets de ambientes (development, staging, qa1, qa2, …). Eu costumo criar buckets com o nome dos ambientes:

-   marketplace.com.br (production)
-   staging.marketplace.com.br (staging)
-   development.marketplace.com.br (development)
-   …

Agora iremos usar o  [**CloudFront**](https://aws.amazon.com/pt/cloudfront/)  para o ambiente de production e staging, não é preciso para os demais (development, qa1, qa2) pois irá gerar custos desnecessários…

E por fim o  [**Route53**](https://aws.amazon.com/pt/route53/)  para cada um deles, a idéia é que as URLs fiquem igual a dos buckets(marketplace.com.br, staging.mar…) lembrando que, production e staging precisa ser apontado para o CloudFront e os demais direto no bucket.

![](https://cdn-images-1.medium.com/max/800/1*9rMJcOvTftxWxiPaBljopQ.png)

### Deploy (AWS)

Cada bucket terá várias pastas dentro, ou seja, cada projeto terá suas pastas… entendeu? Vamos pegar o  **marketplace.com.br**  de exemplo.

marketplace.com.br

-   / (vai ter os arquivos finais do projeto  **home)**
-   /user (… projeto  **user)**
-   /products (… projeto  **products**)

Lembrando que, os arquivos finais são aqueles arquivos estáticos compilados que contém index.html, bundle.js, style.css, etc… que no final é isso que o browser vai mostrar.

Agora só basta você configurar o  **CD** para que ele faça o upload dos arquivos dentro da pasta do bucket certo.

OBS: Use branchs com o nome de cada ambiente para fazer o  **CI**  e  **CD**(staging, development, qa1, qa2, …).

![](https://cdn-images-1.medium.com/max/800/1*gR_jZi0ET-SzOy4hJQYArw.png)

No final de tudo você vai navegar entre os projetos com uma # na url (marketplace.com.br/#/user) pois isso é um padrão de roteamento da AWS, então não se preocupe se sua home vai ter um arquivo como-funciona.html.

### Conclusão

Atualmente eu utilizo essa arquitetura para meus projetos, pois utilizo bastante o  [JAMStack](https://jamstack.org/)  com  [Gatsby](https://www.gatsbyjs.org/)  e funciona muito bem, além de fazer eu pensar sempre em reutilização. Espero ter ajudado!

![](https://cdn-images-1.medium.com/max/800/1*0UcGA2lkdcZCfdey5JqAog.png)

### Fontes

Arquitetura de software — [https://pt.wikipedia.org/wiki/Arquitetura_de_software](https://pt.wikipedia.org/wiki/Arquitetura_de_software)

Integração contínua — [https://www.devmedia.com.br/integracao-continua-uma-introducao-ao-assunto/28002](https://www.devmedia.com.br/integracao-continua-uma-introducao-ao-assunto/28002)

Entrega contínua — [https://www.opus-software.com.br/o-que-e-entrega-continua/](https://www.opus-software.com.br/o-que-e-entrega-continua/)
