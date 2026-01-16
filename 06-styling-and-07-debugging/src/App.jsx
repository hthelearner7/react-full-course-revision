// for 06-styling
// import Header from "./components/Header";

// const App = () => {
//     return (
//         <div>
//             <Header />
//         </div>
//     );
// };

// export default App;

// for 07-debugging
import { useState } from "react";

import HeaderSeven from "./components/HeaderSeven.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    function handleChange(inputIdentifier, newValue) {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue,
            };
        });
    }

    return (
        <>
            <HeaderSeven />
            <UserInput userInput={userInput} onChange={handleChange} />
            <Results input={userInput} />
        </>
    );
}

export default App;
