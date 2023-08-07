'use client'

import { createContext ,SetStateAction,useState,Dispatch, useContext} from "react"
import { ObjectId } from "mongoose"
import { idText } from "typescript"




interface obj {
    id: string,
    title: string
}

interface ContextProps {
    sidebar: boolean,
    setSidebar: Dispatch<SetStateAction<boolean>>
    popup: boolean,
    setPopup: Dispatch<SetStateAction<boolean>>
    journalId: string,
     setJournalId: Dispatch<SetStateAction<string>>
     journalTitle: string,
     setJournalTitle: Dispatch<SetStateAction<string>>

}




const GlobalContext = createContext<ContextProps>({
    sidebar: false,
    setSidebar: (): boolean => false,
    popup: false,
    setPopup: (): boolean => false,
    journalId: "",
    setJournalId:(): string => ""  ,
    journalTitle: "",
    setJournalTitle:(): string => ""  ,
})



export const GlobalContextProvider = ({children})=>{
    const [sidebar, setSidebar] = useState(false);
    const [popup, setPopup] = useState(false);
    const [journalId, setJournalId] = useState("");
    const [journalTitle, setJournalTitle] = useState("");


    return (
        <GlobalContext.Provider  value={{sidebar, setSidebar, popup, setPopup, journalId,setJournalId,journalTitle,setJournalTitle}}>
          {children}
        </GlobalContext.Provider>
    )
}


export const useGlobalContext = () => useContext(GlobalContext);

