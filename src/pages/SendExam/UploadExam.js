import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

export default function UploadExam () {
    const { teacherId, subjectId } = useParams();
    const [ name, setName ] = useState('');
    const [ type, setType ] = useState('');
    const [ url, setUrl ] = useState('');
    
    return (
        <PageWrapper>

            <h1>Agora é só inserir os últimos dados :)</h1>

            <Form onSubmit={}>
                <label htmlFor='url'>
                    Url da prova <br/ >
                    <input 
                        type='url'
                        id='url'
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}   
                        required 
                    />
                </label>
                
                <label htmlFor='name'>
                    Nome da prova <br/ >
                    <input 
                        type='text'
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}   
                        required 
                    />
                </label>

                <label htmlFor='type'>
                    Selecione o tipo de prova
                    <Select defaultValue='' onChange={(e) => setType(e.target.value)} id='type'>
                        <option value='P1'>P1</option>
                        <option value='P2'>P2</option>
                        <option value='P3'>P3</option>
                        <option value='PF'>PF</option>
                        <option value='2ch'>2ch</option>
                        <option value='Outras'>Outras</option>
                    </Select>
                </label>

                <Button>
                    Enviar
                </Button>

            </Form>

        </PageWrapper>
       
    );
}

const PageWrapper = styled.main`
    color: #FFF;
    height: 100%;

    h1 {
        font-size: 8vw;
        font-weight: 600;
        margin-bottom: 40px;
        text-align: center;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;

    input {
        background: rgba(194,113,176,0.5);
        border-radius: 10px;
        font-size: 5vw;
        margin-top: 5px;
        padding: 5px 15px;
        width: 100%;
    }

    label {
        font-size: 6vw;
        margin-bottom: 15px;
    }
`;

const Select = styled.select`
    color: #8c537f;
    margin-top: 5px;
    padding: 5px 10px;
    width: 100%;
`;

const Button = styled.button`
    align-self: center;
    background: #FFF;
    border-radius: 10px;
    color: #8c537f;
    font-size: 6vw;
    font-weight: 600;
    margin-top: 40px;
    padding: 8px 0;
    text-align: center;
    width: 60vw;
`;
