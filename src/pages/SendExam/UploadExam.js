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
            <Form>
                
            </Form>
        </PageWrapper>
       
    );
}

const PageWrapper = styled.main`
    color: #FFF;
    height: 100%;

    h1 {
        font-size: 7vw;
        font-weight: 600;
        margin-bottom: 20px;
    }
`;

const Form = styled.form`
`;



//campos: nome -input, url - input e categoria - select