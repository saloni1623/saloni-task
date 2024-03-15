import React, { useEffect, useRef, useState } from "react";
import './Search.css'

const Search = ({collectData,state,setState}) => {
 
   
    const inputRef = useRef(null);

    const onSubmit = (e) =>{
      collectData(state)
      e.preventDefault()
    }


    useEffect(() => {
        const handleKeyPress = (event) => {
          if ((event.ctrlKey || event.metaKey) && event.key === '/') {
            inputRef.current.focus();
          }
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => {
          window.removeEventListener('keydown', handleKeyPress);
        };
      }, []);
    return (
        <>
            <form  className="input-box" onSubmit={onSubmit}>
                <input ref={inputRef} placeholder="Search places... " value={state} onChange={(e)=>setState(e.target.value)} />
            </form>

        </>
    )
}
export default Search