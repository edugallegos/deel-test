import SuggestionLabel from "./SuggestionLabel";
import useAutocomplete from "./useAutocomplete";

export interface SuggestionOption {
    label: string
    value: string
}

interface AutocompleteProps {
    placeholder?: string
    dataSource: (query: string) => Promise<SuggestionOption[]>
}

const Autocomplete = ({placeholder, dataSource}: AutocompleteProps) => {
    const {query, handleQueryInputChange, handleClickSuggestion, suggestions} = useAutocomplete(dataSource)

    return <div className='autocomplete'>
        <div className='input-wrapper'><input placeholder={placeholder || 'Search'} value={query}
                                              onChange={handleQueryInputChange}/></div>
        <ul className='suggestions'>
            {suggestions.map((suggestion) => (<li key={suggestion.value} className='suggestion-item'
                                                  onClick={() => handleClickSuggestion(suggestion.value)}>
                    <SuggestionLabel label={suggestion.label} query={query}/>
                </li>)
            )}
        </ul>
    </div>
}

export default Autocomplete
