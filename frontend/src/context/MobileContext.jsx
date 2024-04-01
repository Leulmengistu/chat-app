import {useState,useContext,createContext} from 'react';

const MobileContext = createContext();

export const useMobileContext = ()=>{
    return(useContext(MobileContext))
}

export const MobileContextProvider = ({children})=>{
    const [chatView,setChatView] = useState(false);

    return(
        <MobileContext.Provider value={{chatView,setChatView}}>
            {children}
        </MobileContext.Provider>
    )

}



