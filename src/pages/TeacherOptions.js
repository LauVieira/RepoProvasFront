import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsFillPersonFill } from 'react-icons/bs';
import PageContext from '../contexts/PageContext';

export default function TeacherOptions () {
    const [ teachersList, setTeachersList ] = useState([]);
    const { pageAim } = useContext(PageContext)

    useEffect(getTeachers, []);

    function getTeachers () {
        const request = axios.get('http://localhost:3000/api/teachers/list');
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
                    {teachersList.map( teacher => <ListTeachers teacher={teacher} pageAim={pageAim} key={teacher.id} />)}
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
    const { teacher, pageAim } = props;

    return (
        <Li>
            <Link to={`/${pageAim}/professor/${teacher.id}`}>
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
