interface SuggestionLabelProps {
    query: string
    label: string
}

const SuggestionLabel = ({query, label}: SuggestionLabelProps) => {
    const labelArray = label.split(new RegExp(`(${query})`, 'gi'))

    return <div>{labelArray.map((labelPart, index) => {
        if (labelPart.toLowerCase() === query.toLowerCase()) {
            return <mark key={index}>{labelPart}</mark>;
        } else {
            return labelPart;
        }
    })}</div>
}

export default SuggestionLabel
