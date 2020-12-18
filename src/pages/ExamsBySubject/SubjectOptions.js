import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RiBookletFill } from 'react-icons/ri';
import { BiSpreadsheet } from 'react-icons/bi';

export default function SubjectOptions () {
    const [ subjectsList, setSubjectsList ] = useState([]);
    const sections = ['1','2','3','4','5','6','7','8','9','any'];

    useEffect(getSubjects, []);

    function getSubjects () {
        const request = axios.get('http://localhost:3000/api/subjects/exams');
        request.then( response => setSubjectsList(response.data));
        request.catch( () => alert('Não foi possível carregar a lista de matérias, tente mais tarde'));
    }

    return (
        <PageWrapper>
            <h1>
                Oba! De qual matéria?
            </h1>

            {subjectsList.length === 0
                ? <p>carregando...</p>
                : <SubjectsBox>
                    {sections.map( (section,i) => <ListSemester section={section} subjectsList={subjectsList} key={i} />)}
                </SubjectsBox>
            }
        </PageWrapper>
    );
}

function ListSemester (props) {
    const { section, subjectsList } = props;
    const listToDisplay = subjectsList.filter( subject => subject.semester === section)
    const semesterText = section === 'any' ? 'Eletivas' : `${section}º Semestre`

    return (
        <Section>
            <h2>{semesterText}</h2>
            <ul>
                {listToDisplay.map( subject => <ListSubjects subject={subject} key={subject.id} />)}
            </ul>
        </Section>
    );
}

function ListSubjects (props) {
    const { subject } = props;
    const shouldLink = subject.count > 0;

    return (
        <Li>
            { shouldLink 
                ? <Link to={`/buscar/por-materia/${subject.id}`}>
                    <RiBookletFill />  {subject.name} <br />
                    <BiSpreadsheet />  {subject.count}
                </Link>

                : <><RiBookletFill />  {subject.name} <br />
                <BiSpreadsheet />  {subject.count}</>
            }
        </Li>
    );
}

const Section = styled.section`
    border-bottom: 2px dotted white;
    margin-bottom: 15px;
    padding-bottom: 10px;
    
    h2 {
        font-size: 6vw;
        margin-bottom: 10px;
    }
`;

const PageWrapper = styled.main`
    color: #FFF;
    height: 100%;

    h1 {
        font-size: 7vw;
        font-weight: 600;
        margin-bottom: 20px;
    }
`;

const SubjectsBox = styled.div`
    height: 70vh;
    overflow: scroll;
`;

const Li = styled.li`
    font-size: 5vw;
    margin-bottom: 2vw;

    svg {
        margin-bottom: -3px;
    }
`;
