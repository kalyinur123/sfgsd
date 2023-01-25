import React, {useState, createContext, useContext} from 'react'
import { Langua } from '../App'


function Show() {

    const {curLang}=useContext(Langua)



  return (
    <div>
      Context: {curLang}
    </div>
  )
}

export default Show