import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import ListExams from './ListExams';

export default function ExamOptions () {
    const { subjectId } = useParams();
    const [ loading, setLoading ] = useState(true);
    const [ examsObj, setExamsObj ] = useState({});

    useEffect(getExams, []);

    function getExams () {
        const request = axios.get(`http://localhost:3000/api/exams/subject/${subjectId}`);
        request.then( response => organizeList(response.data));
        request.catch( () => alert('Não foi possível carregar a lista de provas, tente mais tarde'));
    }

    function organizeList(examsFromDB) {
        const p1 = examsFromDB.filter( exam => exam.type === 'P1');
        const p2 = examsFromDB.filter( exam => exam.type === 'P2');
        const p3 = examsFromDB.filter( exam => exam.type === 'P3');
        const pf = examsFromDB.filter( exam => exam.type === 'PF');
        const segCh = examsFromDB.filter( exam => exam.type === '2ch');
        const outras = examsFromDB.filter( exam => exam.type === 'Outras');
        finishProcess({p1, p2, p3, pf, segCh, outras}) ;
    }

    function finishProcess (exams) {
        setExamsObj({... exams});
        setLoading(false);
    }

    return (
        <PageWrapper>
            <h1>Selecione uma prova para ser encaminhada a seu endereço virtual :)</h1>
            {loading
                ? <p>Carregando...</p>
                : <ListExams examsObj={examsObj} /> 
            }
        </PageWrapper>
    )
}

const PageWrapper = styled.main`
    color: #FFF;
    height: 100%;

    h1 {
        font-size: 7vw;
        margin-bottom: 30px;
        text-align: center;
    }
`;
