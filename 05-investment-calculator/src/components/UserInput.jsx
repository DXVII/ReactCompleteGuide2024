export function UserInput() {
    return (
        <>
            <section id="user-input">
                {createInputGroupRow(
                    [
                        ['Initial Investment', 'Annual Investment'], 
                        ['Expected Returns', 'Duration']
                    ]
                )}
            </section>
        </>
    )
}
function createInputGroupRow(inputTitles){
    return inputTitles.map(
        (row,rowInd) => {
            const labelInput = row.map((labelName) => createLabelAndInputCols(labelName))
            return <div key={rowInd} className="input-group">{labelInput}</div>
        
        }
    )
    
}
function createLabelAndInputCols(labelName){
    return (
        <p key={`labelInput-${labelName}`}>
            <label key={`label-${labelName}`}>{labelName}</label>
            <input 
                key={`input-${labelName}`} 
                type="number" 
                placeholder={labelName} 
                required 
                min={0}
            />
        </p>
    )
}