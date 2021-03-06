import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsFillPersonFill } from 'react-icons/bs';

export default function TeacherOptions () {
    const [ teachersList, setTeachersList ] = useState([]);

    useEffect(getTeachers, []);

    function getTeachers () {
        const request = axios.get('https://repoprovasback.herokuapp.com/api/teachers/list');
        request.then( response => setTeachersList(response.data));
        request.catch( () => alert('Não foi possível carregar a lista de professores, tente mais tarde'));
    }

    return (
        <PageWrapper>
            <h1>
                Oba! De qual professor?
            </h1>

            {teachersList.length === 0
                ? <p>carregando...</p>
                : <ul>
                    {teachersList.map( teacher => <ListTeachers teacher={teacher} key={teacher.id} />)}
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

function ListTeachers (props) {
    const { teacher } = props;

    return (
        <Li>
            <Link to={`/enviar-prova/professor/${teacher.id}`}>
                <BsFillPersonFill />  {teacher.name}
            </Link>
        </Li>
    );
}

const Li = styled.li`
    font-size: 6vw;
    margin-bottom: 2vw;

    svg {
        margin-bottom: -3px;
    }
`;
