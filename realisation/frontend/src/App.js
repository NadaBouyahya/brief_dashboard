import ShowData from './components/pages/Show';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import { ReactDOM } from 'react';
import './App.css';
import Consult from './components/pages/Brief_details';
import ShowTasks from './components/pages/TaskDashboard';
import BriefStudent from './components/pages/Brief_student';

function App() {
  const [text, setText] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowData text={text} setText={setText} />} />
          <Route path='/Brief_details/:id' element={<Consult />} />
          <Route path='/briefs/:id/tasks' element={<ShowTasks/>}/>
          <Route path='/briefs/:id/students' element={<BriefStudent/>}/>

        </Routes>
        
      </BrowserRouter>

    </>
  )
}

export default App;
