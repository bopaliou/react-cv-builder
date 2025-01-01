import GeneralInfo from "./components/GeneralInfo"
import EducationalExperience from "./components/EducationalExperience"
import PracticalExperience from "./components/PracticalExperience"
import './App.css'

function App() {
  
  return (
    <div className="App">
      <h1>CV Builder</h1>
      <GeneralInfo />
      <EducationalExperience />
      <PracticalExperience />
    </div>
  )
  
}

export default App
