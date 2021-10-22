import React from 'react'
import Bridge from './Bridge';
import logo from '../../logo.svg';


export const GlassBridge = () => {
  const rows = 10;
  const cols = 2;

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Bridge rows={rows} cols={cols}></Bridge>
    </header>
  )
}