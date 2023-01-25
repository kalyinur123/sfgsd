import React, {createContext, useState} from 'react';
import Languages from './components/Languages';
import Show from './components/Show';


export const Langua = createContext()

const App = () => {
    const [curLang, setCurLang] = useState("english")

    const handleToEng = () =>{
        setCurLang("english")
    }

    const handleToFre = () =>{
        setCurLang("french")

    }

    return (
        <div>
            Text:
            <Langua.Provider value={{curLang, handleToEng, handleToFre}}>
                <Languages/>
            </Langua.Provider>
        </div>
    );
};

export default App;