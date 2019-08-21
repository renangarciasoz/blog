---
title: "Micro Front End com NextJS"
author: Renan Garcia
tags: ["NextJS", "Front End", "Micro Frontends", "Arquitetura de Software"]
image: img/micro.png
date: "2019-08-17T18:55:00.000Z"
draft: false
---

Fala galera, beleza? Hoje irei tentar discutir sobre “Micro Front End” dando um exemplo com NextJs/React.

# O Problema…
Imagine que você inicia um projeto de front end e começa a fazer as páginas, componentes, gerenciamento de estado, etc. Dado que fez uma boa estrutura de pastas com alguns padrões se sentiu bem orgulhoso de como ficou, de repente o time cresce absurdamente é separado em squads, many features sendo realizadas a cada sprint de cada squad, tudo no mesmo projeto. Você ainda lembra como tal componente que criou está? ele sofreu mudanças? Ou até mesmo sabe se esse componente foi duplicado? Agora precisa negociar débitos técnicos com os PMs/POs?

Finge que usou NextJs e ele virou um “monolito”, com isso iniciou uma discussão de separar pelo menos os componentes em uma biblioteca para publicar no NPM, diminuindo a quantidade de arquivos dentro do projeto. Isso já é micro front end, porque criou um projeto com uma única finalidade de fornecer componentes para outros projetos, isso não se parece com micro-serviço? Justamente, micro front end nada mais é que aplicar a arquitetura do back-end de micro-serviços em projetos de front-end.

# Micro-serviços
“A arquitetura de micro-serviços reduz os aplicativos complexos em componentes de finalidade única. Essa é uma abordagem mais eficiente porque os componentes são isolados por falhas: se um deles quebrar, o restante do aplicativo continuará funcionando. Cada componente pode ser construído por uma equipe pequena e multifuncional, permitindo que a equipe escolha a tecnologia ideal para o trabalho e, ao mesmo tempo, implante de forma independente, em seu próprio ritmo.”

# Mãos à obra
Bom vamos ao que interessa, irei ajudá-los a entender melhor essa arquitetura disponibilizando o código do meu teste utilizando NextJS e create-react-app (UMD), lembrando que não há um único jeito de se fazer como já fiz outro post sobre isso vocês devem já imaginar, hoje irei utilizar uma outra maneira que talvez faça mais sentido para SPA’s, em cima do artigo do Martin Fowler ([https://martinfowler.com/articles/micro-frontends.html](https://martinfowler.com/articles/micro-frontends.html)).

# UMD
“Como a AMD e o CommonJS são muito populares e mutuamente ininteligíveis um ao outro, o “Universal Module Definition” (UMD) é um padrão que tenta criar um módulo que possa ser consumido por ambos, ao custo de um formato mais complicado.”

A idéia então é criar um SPA com NextJS que tenha um design system e uma página “/sobre” como dependência sendo um micro front-end.

![](https://miro.medium.com/max/519/1*Mi8FQgs2XYJa6Ge8MI-71Q.png)
*Figura 1: Ideia para Arquitetura Micro Front End.*

# Diferente do "hype"
Atualmente tem muitas soluções, até mesmo a do Martin de criar N aplicações como um serviço(localhost:…). Pois, se por algum acaso aconteça de ficar indisponível, sua aplicação inteira também ficará, dependendo de como você estruturou. Então, por isso, pensei em criar como bibliotecas, e não precisará se preocupar com a infra.

# Repositórios

-   NextJS:  [https://github.com/renangarciasoz/micro-front-end-nextjs](https://github.com/renangarciasoz/micro-front-end-nextjs)
-   Design System:  [https://github.com/renangarciasoz/design-system-lib](https://github.com/renangarciasoz/design-system-lib)
-   Página Sobre:  [https://github.com/renangarciasoz/about-page](https://github.com/renangarciasoz/about-page)

## NextJS/layout.js
```
import { Header, Footer } from "design-system-lib";
  
const Layout = ({ children }) => (  
  <div>  
    <Header />  
    <main>  
      {children}
    </main>  
    <Footer />  
  </div>  
);  
  
export default Layout;
```

Neste arquivo é onde criamos um componente de layout(HOC) utilizando a biblioteca de Design System. Com ele podemos definir elementos/padrões que se repetirá na aplicação toda (por isso utilizei para o header e o footer). Mas óbvio que não é só esse o escopo, podemos instalar essa biblioteca nos outros projetos e utilizá-la independente da aplicação central (NextJS).

## NextJs/pages/sobre.js
```
import AboutPage from "about-page";  
import Layout from "../components/layout";  

export default function Sobre() {  
  return (  
    <Layout>  
      <AboutPage />  
    </Layout>  
  );  
}
```

Já no arquivo sobre.js, dentro de pages/ (jeito de criar uma página no NextJS), apenas importo a biblioteca e renderizo dentro do layout.

# Conclusão

Como percebemos, a aplicação feita em NextJS virou a “central” onde instala as outras dependências (Design System, Página Sobre, …) e decide onde irá usá-las. Vocês devem ter visto também que criei uma lib de redux para gerenciamento de estado por fora ([https://github.com/renangarciasoz/redux-store-lib](https://github.com/renangarciasoz/redux-store-lib)).

Com essa mini arquitetura, podemos resolver vários problemas do nosso dia-a-dia e de escalabilidade, CI e CD, mudar algo e não perceber que quebrou outra página. Mas como eu disse lá em cima, essa é umas das maneiras de resolver e temos várias… A idéia é sempre pensar em reutilização, manutenção e escalabilidade.

Irei pegar emprestado uma imagem do post do Martin citado lá em cima, para demonstrar como funcionaria o CI e CD.

![](https://miro.medium.com/max/700/1*gsPqu9gvhYVSSujaeRBdyw.png)
*Figura 2: CI e CD de cada Micro Front End de forma independente.*

# É nóis 🤟🏻

_Galera, não ligue para os erros de português, se estiver "entendível" está valendo hahaha. Qualquer dúvida só me chamar pelas redes e estou aberto a todo tipo de dica!_

# Fontes
-   Micro frontends —  [https://martinfowler.com/articles/micro-frontends.html](https://martinfowler.com/articles/micro-frontends.html)
-   UMD —  [https://github.com/umdjs/umd](https://github.com/umdjs/umd)
-   Micro serviços —  [https://www.scalablepath.com/blog/micro-frontends-future-microservices/](https://www.scalablepath.com/blog/micro-frontends-future-microservices/)

by Renan Garcia /  [renangarcia.com](http://renangarcia.com/)
