import React from 'react';

import './App.css';
import Autocomplete, {SuggestionOption} from "./components/Autocomplete";
import {mockedOptions} from "./helpers/constants";

function App() {
    const getSuggestions = async (query: string): Promise<SuggestionOption[]> => {
        return await new Promise(resolve => {
            const options = mockedOptions.filter(option => new RegExp(`^${query}`, "i").test(option.label))
            resolve(options)
        })
    }

    return (
        <div className="App">
            <h1>Autocomplete Component</h1>
            <Autocomplete dataSource={getSuggestions}/>
        </div>
    );
}

export default App;
