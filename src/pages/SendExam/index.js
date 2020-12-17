import React from 'react';
import { Route } from 'react-router-dom';
import TeacherOptions from './TeacherOptions';
import UploadExam from './UploadExam';

export default function UploadPage ({match}) {
    return (
        <>
            <Route path={`${match.url}/professor/:id`} component={UploadExam}/>
            <Route exact path={`${match.url}/`} component={TeacherOptions}/>
        </>
    );
}
