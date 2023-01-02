import "./App.css"
import Steps from "./Components/Steps"
import PersonalInfo from "./Components/PersonalInfo"
import SelectPlan from "./Components/SelectPlan"
import { useState } from "react"

function App() {
  const [index, setIndex] = useState(0)
  const [personalDetails, setPersonalDetails] = useState(true)
  const [plan, setPlan] = useState(false)
  // const [plan,setPlan] = useState('')

  const nextStep = () => {
    setIndex(index + 1)
    console.log(index)

    // switch (index) {
    //   case 0:
    //     setPersonalDetails(true)
    //     setPlan(false)
    //     break
    //   case 1:
    //     setPersonalDetails(false)
    //     setPlan(true)
    //     break
    // }
  }

  return (
    <div className='App'>
      <Steps />
      {personalDetails && <PersonalInfo />}
      {plan && <SelectPlan />}

      <section className='next-and-back'>
        <button className='next-btn' onClick={nextStep}>
          Next Step
        </button>
      </section>
    </div>
  )
}

export default App
