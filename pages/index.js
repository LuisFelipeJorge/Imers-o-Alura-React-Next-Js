/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Quiz CSS da Alura</title>
        <meta name="title" content="Quiz CSS da Alura" />
        <meta name="description" content="" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://imers-o-alura-react-next-js.luisfelipejorge.vercel.app/" />
        <meta property="og:title" content="Quiz CSS da Alura" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://imers-o-alura-react-next-js.luisfelipejorge.vercel.app/" />
        <meta property="twitter:title" content="Quiz CSS da Alura" />
        <meta property="twitter:description" content="" />
        <meta property="twitter:image" content="" />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Mundo Fitness</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por meio do react');
            }}
            >
              <input
                onChange={function (infosDoEvento) {
                  console.log(infosDoEvento.target.value);
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Diz ai seu nome"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes Gerais</h1>
            <p>
              Loren ipsum dolor sit amet...
            </p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/LuisFelipeJorge/Imers-o-Alura-React-Next-Js" />
    </QuizBackground>
  );
}
