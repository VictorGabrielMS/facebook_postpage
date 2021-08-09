import React from 'react';
import "./App.css";

import { Header } from './components/Header';
import { List } from './components/Post/List';

function App() {
  return (
    <>
      <Header />
      <List />
    </>
  );
}

export default App;
