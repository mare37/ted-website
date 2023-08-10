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
    createStory: boolean,
    setCreateStory: Dispatch<SetStateAction<boolean>>
    isLoading: boolean,
    setIsLoading: Dispatch<SetStateAction<boolean>>
    error: boolean,
    setError: Dispatch<SetStateAction<boolean>>

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
    createStory: false,
    setCreateStory:(): boolean => false,
    isLoading: false,
    setIsLoading:(): boolean => false,
    error: false,
    setError:(): boolean => false

})



export const GlobalContextProvider = ({children})=>{
    const [sidebar, setSidebar] = useState(false);
    const [popup, setPopup] = useState(false);
    const [journalId, setJournalId] = useState("");
    const [journalTitle, setJournalTitle] = useState("");
    const [createStory,setCreateStory] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(false);


    return (
        <GlobalContext.Provider  value={{sidebar, setSidebar, popup, setPopup, 
                                         journalId,setJournalId,journalTitle,
                                         setJournalTitle, createStory,setCreateStory,  isLoading,setIsLoading,
                                        error,setError}}>
          {children}
        </GlobalContext.Provider>
    )
}


export const useGlobalContext = () => useContext(GlobalContext);

