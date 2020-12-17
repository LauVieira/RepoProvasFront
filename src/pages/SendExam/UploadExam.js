import React from 'react';
import { Route, useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

export default function UploadExam () {
    const teacherId = useParams().id;

    return (
        <h1>{teacherId}</h1>
    );
}

const PageWrapper = styled.main`
    height: 100%;
`;

// app.get('/api/teachers/:id/subjects', teachersController.getSubjectsByTeacher);
