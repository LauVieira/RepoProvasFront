import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SendExam from './pages/SendExam';
import ExamsBySubject from './pages/ExamsBySubject';
import ExamsByTeacher from './pages/ExamsByTeacher';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/buscar/por-materia' component={ExamsBySubject} />
        <Route path='/buscar/professor' component={ExamsByTeacher} />          
        <Route path='/enviar-prova' component={SendExam} />
        <Route path='/' component={LandingPage} />
      </Switch>
    </Router>
  );
}
