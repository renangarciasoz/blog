import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FunctionComponent = () => (
  <IndexLayout>
    <Helmet>
      <title>Sobre mim</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>Quem sou eu?</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
                Meu nome é Renan Santana Garcia, tenho 21 anos e moro em Osasco, onde nasci e fui criado, mas relaxe, não precisa ter medo rsrsrs…
              </p>
              <p>
              Sou um Desenvolvedor Front End desde 2016 que abusa do JavaScript e suas mágicas para criar inúmeras aplicações com o foco em performance e na experiência do usuário. Contribuí para grandes projetos das empresas como UOL, Ciclic, Cargox, etc.
              </p>
              <p>
              Gosto muito de ajudar outros desenvolvedores a evoluir, então decidi contribuir na comunidade open source disponibilizando tutoriais e projetos de coisas novas. Com isso consigo aprender e ao mesmo tempo praticar a empatia para criar um mundo melhor!
              </p>
              <h2>Habilidades</h2>
              <p>OBS: Vou dar uma abstraída, mas se quiser saber mais basta me pingar!</p>
              <ul>
                <li>JavaScript / ES6</li>
                <li>APIs / GraphQL / Apollo</li>
                <li>React / Redux / Gatsby / SSR</li>
                <li>Vue / Vuex / Gridsome / SSR</li>
                <li>JSCss/ Styled-components / Emotion</li>
                <li>HTML, CSS, SASS, Frameworks CSS (bootstrap, material, …).</li>
                <li>...</li>
              </ul>
              <h2>Contato</h2>
              <ul>
                <li><a href="https://www.linkedin.com/in/renan-g-2a251ba0/">LinkedIn</a></li>
                <li><a href="https://www.twitter.com/renangarciasoz">Twitter</a></li>
                <li><a href="https://www.github.com/renangarciasoz">Github</a></li>
              </ul>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
