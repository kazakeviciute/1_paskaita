import Section from "./components/Section"
import "./App.css"
import Button from "./components/Button"

function App () {
const name = "Inga"

const testSection = (
  <p>Wow {name}</p>
 )

  return (<main>
    <h1 className="hello">Hi</h1>
    <div className="container">
      If you love software press this button <Button/>
    <p>Wow {name}</p>
    {testSection}
    <Section/>
    </div>
    </main>)
}

export default App
