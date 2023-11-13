import Section from "./components/Section"

function App () {
const name = "Inga"
const a = 5

const testSection = (
  <p>Wow {name}</p>
 )

  return (<main>
    <h1>Hi</h1>
    <p>Wow {name}</p>
    {testSection}
    <Section />
    </main>)
}

export default App
