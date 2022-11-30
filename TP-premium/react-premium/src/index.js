// import axios from 'axios';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import ShowData from './Component/Show';
import PostForm from './Component/Add';
// import Test2 from './test-react/Test2';


function ParentComponent() {
  // const [text, setText] = useState('Hello World')
  const [text, setText] = useState([]);

  return (
    <>
    <PostForm setText={setText}></PostForm>
      {/* <Test2 setText={setText}></Test2> */}
      <ShowData text={text} setText={setText}></ShowData>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ParentComponent></ParentComponent>
);


