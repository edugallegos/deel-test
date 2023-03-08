import {ChangeEvent, useState} from "react";
import {SuggestionOption} from "./index";

const useAutocomplete = (dataSource: (query: string) => Promise<SuggestionOption[]>) => {
    const [query, setQuery] = useState('')
    const [suggestions, setSuggestions] = useState<SuggestionOption[]>([])

    const handleQueryInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
        const suggestionOptions = dataSource(e.target.value)
        setSuggestions(await suggestionOptions)
    }

    const handleClickSuggestion = (selectedValue: string) => {
        setQuery(selectedValue)
        clearSuggestions()
    }

    const clearSuggestions = () => {
        setSuggestions([])
    }

    return {query, suggestions, handleQueryInputChange, handleClickSuggestion}
}

export default useAutocomplete
