import React, {useState, createContext, useContext}from 'react'
import { Langua } from '../App'
import Show from './Show'


function Languages() {

    const {handleToEng, handleToFre} = useContext(Langua)



  return (
    <div>
        <Show/>
        <button onClick={handleToEng}>toEnglish</button>
        ----
        <button onClick={handleToFre}>toFrench</button>
    </div>
  )
}

export default Languages