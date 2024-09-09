export default function InstructionList(pros) {
    const {instructions} = props
    return (
        <div>
            <h3>Instructions</h3>
            <ol>
                {instructions.map((instruction, index) => {
                    return <li key={index}>{instruction}</li>
                })}
            </ol>
        </div>
    )
}