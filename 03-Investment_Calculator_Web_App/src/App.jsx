import { useState } from "react"

import InvestmentTable from "./Components/InvestmentTable"
import InvestmentInput from "./Components/InvestmentInput";

const INITIAL_INVESTMENT_INFO = {
  initialInvestment : 10000,
  annualInvestment : 1200,
  expectedReturn : 6,
  duration : 12,
};

function App() {
  const [investmentInfo, setInvestmentInfo] = useState(INITIAL_INVESTMENT_INFO);

  const isValidInput = investmentInfo.duration > 0;

  function handleInvestmentInfoChange(inputId, newValue) {
    setInvestmentInfo(oldInfo => {
      return {
        ...oldInfo,
        [inputId] : +newValue
      };
    }); 
  }

  return (
    <>
      <InvestmentInput investmentInfo = {investmentInfo} onChange={handleInvestmentInfoChange}/>
      {!isValidInput && <p className="center">Please enter a valid duration</p>}
      {isValidInput && <InvestmentTable investmentInfo = {investmentInfo}/>}
    </>
  )
}

export default App
