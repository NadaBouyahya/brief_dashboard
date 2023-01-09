import ShowData from './components/pages/Show';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import { ReactDOM } from 'react';
import './App.css';
import Consult from './components/pages/Brief_details';
import ShowTasks from './components/pages/TaskDashboard';
import BriefStudent from './components/pages/Brief_student';
import AddBrief from './components/pages/AddBrief';

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
          <Route path='/briefs/add' element={<AddBrief/>}/>
        </Routes>
        
      </BrowserRouter>

    </>
  )
}

export default App;
