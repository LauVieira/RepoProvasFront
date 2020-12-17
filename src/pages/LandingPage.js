import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';

export default function LandingPage () {
    
    return (
        <MainPage>
            <Header/>

            <h1>O que você gostaria de fazer?</h1>

            <Link to='/enviar-prova'>
                Enviar uma prova
            </Link>
        
            <Link to='/buscar/por-materia'>
                Buscar uma prova por disciplina
            </Link>
        
            <Link to='/buscar/por-professor'>
                Buscar uma prova por professor
            </Link>
        </MainPage>
    );
}

const MainPage = styled.main`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;

    h1 {
        color: #FFF;
        font-size: 6.5vw;
        font-weight: 700;
        margin: 20vw 0 5vh 0;
    }

    a {
        background: #C271B0;
        border-radius: 20px;
        color: #FFF;
        display: block;
        font-size: 5vw;
        font-weight: 600;
        margin-top: 25px;
        padding: 3vw 0;
        text-align: center;
        width: 85vw;
    }
`;
