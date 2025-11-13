import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import InputSection from "./components/InputSection/InputSection";
import OutputSection from "./components/OutputSection/OutputSection";
import { calculateInvestmentResults } from "./util/investment";

function App() {
    const [initialInvestment, setInitialInvestment] = useState(0);
    const [annualInvestment, setAnnualInvestment] = useState(0);
    const [expectedReturn, setExpectedReturn] = useState(0);
    const [duration, setDuration] = useState(0);
    // console.log({ investment });

    // console.log({ investment });
    const annualData = calculateInvestmentResults({
        initialInvestment,
        annualInvestment,
        expectedReturn,
        duration,
    });

    const modifiedAnnualData = annualData.reduce(
        (acc, obj) => {
            const totalInterest = obj.interest + acc.previousSumOfInterest;
            const investedCapital = obj.valueEndOfYear - totalInterest;

            acc.previousSumOfInterest += obj.interest; // update running sum
            const { annualInvestment, ...rest } = obj;
            // console.log({ rest });

            acc.output.push({ ...rest, totalInterest, investedCapital });

            return acc;
        },
        { previousSumOfInterest: 0, output: [] } // initial accumulator
    ).output;

    return (
        <>
            <Header />
            <InputSection
                initialInvestment={initialInvestment}
                setInitialInvestment={setInitialInvestment}
                annualInvestment={annualInvestment}
                setAnnualInvestment={setAnnualInvestment}
                expectedReturn={expectedReturn}
                setExpectedReturn={setExpectedReturn}
                duration={duration}
                setDuration={setDuration}
            />
            <OutputSection annualData={modifiedAnnualData} />
        </>
    );
}

export default App;
