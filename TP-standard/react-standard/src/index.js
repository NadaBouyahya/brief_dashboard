import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import ShowData from './Component/Show';
import PostForm from './Component/Add';


function ParentComponent() {
  const [text, setText] = useState([]);

  return (
    <>
      <PostForm setText={setText}></PostForm>
      <ShowData text={text} setText={setText}></ShowData>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ParentComponent></ParentComponent>
);


