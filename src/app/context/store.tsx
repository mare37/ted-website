'use client'

import { createContext ,SetStateAction,useState,Dispatch, useContext} from "react"




interface ContextProps {
    sidebar: boolean,
    setSidebar: Dispatch<SetStateAction<boolean>>
    popup: boolean,
    setPopup: Dispatch<SetStateAction<boolean>>
}




const GlobalContext = createContext<ContextProps>({
    sidebar: false,
    setSidebar: (): boolean => false,
    popup: false,
    setPopup: (): boolean => false

})


export const GlobalContextProvider = ({children})=>{
    const [sidebar, setSidebar] = useState(false);
    const [popup, setPopup] = useState(false);



    return (
        <GlobalContext.Provider  value={{sidebar, setSidebar, popup, setPopup}}>
          {children}
        </GlobalContext.Provider>
    )
}


export const useGlobalContext = () => useContext(GlobalContext);

