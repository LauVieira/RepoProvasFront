import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BiSpreadsheet } from 'react-icons/bi';

export default function ListExams (props) {
    const { p1, p2, p3, pf, segCh, outras } = props.examsObj;

    return (
        <Div>
            { p1.length > 0 && <DisplayExams list={p1} /> }
            { p2.length > 0 && <DisplayExams list={p2} /> }
            { p3.length > 0 && <DisplayExams list={p3} /> }
            { pf.length > 0 && <DisplayExams list={pf} /> }
            { segCh.length > 0 && <DisplayExams list={segCh} /> }
            { outras.length > 0 && <DisplayExams list={outras} /> }
        </Div>
    );
}

function DisplayExams (props) {
    return (
        <Section> 
            <h2>{props.list[0].type}</h2>
            <ul>
                { props.list.map( exam => 
                    <PrintExam exam={exam} />
                )}
            </ul>
        </Section>
    );
}



// Ao clicar então em uma disciplina, são exibidas as provas agrupadas por tipo (P1, P2, etc), com o nome da prova e do professor que aplicou. Ao clicar na prova, abre-se o link do pdf.

function PrintExam (props) {
    const { name, url, teacher } = props.exam;

    return (
        <li>
            <a href={url} target='_blank'>
                {name} - {teacher}
            </a>
        </li>
    );
}

const Div = styled.div`
    height: 55vh;
    overflow-y: scroll;
    overflow-x: hidden;
`;

const Section = styled.section`
    border: 1px dotted white;
    border-radius: 20px;
    margin-bottom: 15px;
    padding: 15px;
    width: 85vw;

    h2 {
        font-size: 6vw;
        margin-bottom: 10px;
    }
    li {
        margin-bottom: 6px;
    }
`;


// // id: 12,
// // name: '2013.1',
// // type: 'P3',
// // url: 'https://www.youtube.com/watch?v=DkFJE8ZdeG8',
// // subject: 'Cálculo 3',
// // semester: '3'
