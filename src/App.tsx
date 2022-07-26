import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Todos } from "./components/Todos";

function App() {
  return (
    <div className="bg-gray-100 dark:bg-slate-900 h-screen">
      <Todos />
    </div>
  );
}

export default App;