import React,{useContext}from 'react'
import {commonContext} from './commonContext'
  
  export default function UseContext() {
    return (
    //   <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
    //   </ThemeContext.Provider>
    );
  }
  
  function Toolbar(props) {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }
  
  function ThemedButton() {
    const theme = useContext(commonContext);
    console.log(theme)
    return (
      <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
      </button>
    );
  }
