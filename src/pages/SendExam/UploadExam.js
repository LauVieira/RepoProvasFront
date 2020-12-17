import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

export default function UploadExam () {
    const { teacherId, subjectId } = useParams();
    
    return (
        <h1>Teacher {teacherId}, subject {subjectId}</h1>
    );
}
