import { calculateInvestmentResults, formatter } from "../util/investment.jsx"

export default function InvestmentTable({investmentInfo}){
    const investmentData = calculateInvestmentResults(investmentInfo);
    const initialInvestment = investmentData[0].valueEndOfYear - investmentData[0].interest - investmentData[0].annualInvestment;

    return (
        <section>
            <table id = "result">
                <thead>
                    <tr>
                    <th>Year</th> 
                    <th>Invesment value</th>        
                    <th>Interest(year)</th> 
                    <th>Total Interest</th> 
                    <th>Invested Capital</th> 
                    </tr>
                </thead>
                <tbody>
                    {investmentData.map((item) => {
                        const totalInterest = item.valueEndOfYear - item.annualInvestment * item.year - initialInvestment;
                        const totalAmountInvested = item.valueEndOfYear - totalInterest;
                        return (
                            <tr key = {item.year}>
                                <td>{item.year}</td>
                                <td>{formatter.format(item.valueEndOfYear)}</td>
                                <td>{formatter.format(item.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(totalAmountInvested)}</td>
                            </tr>
                        );
                    })}
                    
                </tbody>
            </table>
        </section>
    );
}