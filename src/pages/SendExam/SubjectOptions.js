import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { RiBookletFill } from 'react-icons/ri';

export default function SubjectOptions () {
    const { teacherId } = useParams();
    const [ subjectsList, setSubjectsList ] = useState([]);

    useEffect(getSubjects, []);

    function getSubjects () {
        const request = axios.get(`https://repoprovasback.herokuapp.com/api/teachers/${teacherId}/subjects `);
        request.then( response => setSubjectsList(response.data));
        request.catch( () => alert('Não foi possível carregar a lista de professores, tente mais tarde'));
    }

    return (
        <PageWrapper>
            <h1>
                E de qual matéria?
            </h1>

            {subjectsList.length === 0
                ? <p>Carregando...</p>
                : <ul>
                    {subjectsList.map( subject => 
                        <ListSubjects subject={subject} teacherId={teacherId} key={subject.id} />
                    )}
                </ul>
            }
        </PageWrapper>
    );
}

const PageWrapper = styled.main`
    color: #FFF;
    height: 100%;

    ul {
        height: 70vh;
        overflow: scroll;
    }

    h1 {
        font-size: 7vw;
        font-weight: 600;
        margin-bottom: 20px;
    }
`;

function ListSubjects (props) {
    const { subject, teacherId } = props;

    return (
        <Li>
            <Link to={`/enviar-prova/professor/${teacherId}/materia/${subject.id}`}>
                <RiBookletFill />  {subject.name}
            </Link>
        </Li>
    );
}

const Li = styled.li`
    font-size: 6vw;
    margin-bottom: 4vw;

    svg {
        margin-bottom: -3px;
    }
`;
