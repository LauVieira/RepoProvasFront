import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Button from './Button';

export default function LandingPage () {
    return (
        <MainPage>
            <Header/>
            <h1>O que você gostaria de fazer?</h1>
            <Button onClick={ () => alert('entrei')}>Enviar uma prova</Button>
            <Button onClick={ () => alert('entrei')}>Buscar uma prova por disciplina</Button>
            <Button onClick={ () => alert('entrei')}>Buscar uma prova por professor</Button>
        </MainPage>
    );
}




const MainPage = styled.main`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    h1 {
        color: #FFF;
        font-size: 6.5vw;
        font-weight: 700;
        margin: 40vw 0 5vh 0;
    }
`;