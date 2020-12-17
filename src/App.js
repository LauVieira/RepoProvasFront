import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SendExam from './pages/SendExam';
import ExamBySubject from './pages/ExamBySubject';
import ExamByTeacher from './pages/ExamByTeacher';
import { PageContextProvider } from './contexts/PageContext';

export default function App() {
  return (
    <PageContextProvider>
      <Router>
        <Switch>
          <Route path='/buscar/por-materia' component={ExamBySubject} />
          <Route path='/buscar' component={ExamByTeacher} />          
          <Route path='/enviar-prova' component={SendExam} />
          <Route path='/' component={LandingPage} />
        </Switch>
      </Router>
    </PageContextProvider>
   
  );
}