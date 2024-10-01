import React from React;
import ReactDOM from 'react-dom/client';
import './index.css';
import Mycontext from './Mycontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
const sharedValue = "say hello"
root.render(
  <React.StrictMode>
    <Mycontext>
    <App />
    </Mycontext>
    
  </React.StrictMode>
);

export default index