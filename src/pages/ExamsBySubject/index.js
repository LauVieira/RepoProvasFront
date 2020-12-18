import React from 'react';
import { Route } from 'react-router-dom';
import SubjectOptions from './SubjectOptions';
import ExamOptions from './ExamOptions';
import styled from 'styled-components';

export default function ExamsBySubject ({match}) {
    return (
        <>
            <Route 
                path={`${match.url}/:subjectId`} 
                exact={true} 
                component={ExamOptions}
            />
            <Route 
                path={`${match.url}/`} 
                exact={true} 
                component={SubjectOptions}
            />
        </>
    );
}
