export default function RecipeInfo(props) {
    const {title, description} = props
    return (
        <div>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
    )
}
