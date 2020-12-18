import React from 'react';
import { Route } from 'react-router-dom';
import TeacherOptions from './TeacherOptions';
import ExamOptions from './ExamOptions';
import styled from 'styled-components';

export default function ExamsByTeacher ({match}) {
    return (
        <>
            <Route 
                path={`${match.url}/:teacherId`} 
                exact={true} 
                component={ExamOptions}
            />
            <Route 
                path={`${match.url}/`} 
                exact={true} 
                component={TeacherOptions}
            />
        </>
    );
}





//BiSpreadsheet