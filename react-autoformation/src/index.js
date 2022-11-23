import React from 'react';
import ReactDOM from 'react-dom/client';
import Test from './Component';
import Test2 from './Component2';
import Test3 from './Component3';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<Test/>
		<Test2 list={['prop1', 'prop2', 'prop2']}/>
		<Test3 location='solicode' />
	</>
);
