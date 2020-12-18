import React from 'react';
import { Route } from 'react-router-dom';
import TeacherOptions from './TeacherOptions';
import SubjectOptions from './SubjectOptions';
import UploadExam from './UploadExam';

export default function UploadPage ({match}) {
    
    return (
        <>
            <Route 
                path={`${match.url}/professor/:teacherId/materia/:subjectId`} 
                exact={true} 
                component={UploadExam}
            />
            <Route 
                path={`${match.url}/professor/:teacherId`} 
                exact={true} 
                component={SubjectOptions}
            />
            <Route 
                path={`${match.url}/`} 
                exact={true} 
                component={TeacherOptions}
            />
        </>
    );
}
