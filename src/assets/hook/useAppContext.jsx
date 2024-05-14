import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export default function useAppContext() {
    const context = useContext(AppContext)

    if(context == undefined){
        throw new Error('Não está no contexto')
    }

    return context
}

