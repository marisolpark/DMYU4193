export default function RecipeImg(props) {
    //use disctructuring to pull out put imgSrc prop as its own variable
    //this is the start of props and desctuctioring
    const {imgSrc, altText} = props
    return <img src={imgSrc} alt={altText} />
}

// props = {
//     children: some JSX Element,
//     imgSRC: required(...)
//     alt: "some text"
// }
