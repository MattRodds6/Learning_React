import Input from "../Components/Input"

export default function InvestmentInput({investmentInfo , onChange}){
    return (
      <section id="user-input" >
          <div className="input-group">
              <Input required labelName = "INITIAL INVESTMENT" type = "number" value = {investmentInfo.initialInvestment} onChange = {(event) => {onChange("initialInvestment", event.target.value);}}/>
              <Input required labelName = "ANNUAL INVESTMENT" type = "number" value = {investmentInfo.annualInvestment} onChange = {(event) => onChange("annualInvestment", event.target.value)}/>
          </div>
          <div className="input-group">
              <Input required labelName = "EXPECTED RETURN" type = "number" value = {investmentInfo.expectedReturn} onChange = {(event) => onChange("expectedReturn", event.target.value)}/>
              <Input required labelName = "DURATION" type = "number"  value = {investmentInfo.duration} onChange = {(event) => onChange("duration", event.target.value)}/>
          </div>
      </section>
    );
}