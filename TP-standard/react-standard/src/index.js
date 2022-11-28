// import axios from 'axios';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Test1 from './test-react/Test1';
import PostForm from './test-react/Test2';
// import Test2 from './test-react/Test2';


function ParentComponent() {
  // const [text, setText] = useState('Hello World')
  const [text, setText] = useState([]);

  return (
    <>
    <PostForm setText={setText}></PostForm>
      {/* <Test2 setText={setText}></Test2> */}
      <Test1 text={text} setText={setText}></Test1>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ParentComponent></ParentComponent>
);


