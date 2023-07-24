'use client'

import { createContext ,SetStateAction,useState,Dispatch, useContext} from "react"




interface ContextProps {
    sidebar: boolean,
    setSidebar: Dispatch<SetStateAction<boolean>>
}




const GlobalContext = createContext<ContextProps>({
    sidebar: false,
    setSidebar: (): boolean => false

})


export const GlobalContextProvider = ({children})=>{
    const [sidebar, setSidebar] = useState(false);



    return (
        <GlobalContext.Provider  value={{sidebar, setSidebar}}>
          {children}
        </GlobalContext.Provider>
    )
}


export const useGlobalContext = () => useContext(GlobalContext);

