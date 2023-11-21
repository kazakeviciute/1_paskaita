import Button from "./Button"
import ButtonClass from "./ButtonClass"
import "./Section.css"
const Section = () => {
    const name = "Inga"
    return (<section className="custom-section">
        <p>Hi {name} how are you</p>
        <p>Hello</p>
        <p>Hello</p>
        <Button/>
        <ButtonClass />
    </section>

    )
}

export default Section