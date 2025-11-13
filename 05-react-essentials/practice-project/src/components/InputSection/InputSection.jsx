export default function InputSection({
    initialInvestment,
    setInitialInvestment,
    annualInvestment,
    setAnnualInvestment,
    expectedReturn,
    setExpectedReturn,
    duration,
    setDuration,
}) {
    const handleChange = (newValue, setterFn) => {
        setterFn(Number(newValue));
    };

    return (
        <section id="user-input">
            <div className="input-group">
                <div>
                    <label htmlFor="initial-investment-input">Investment</label>
                    <input
                        type="number"
                        name="initial-investment-input"
                        value={initialInvestment}
                        onChange={(event) =>
                            handleChange(
                                event.target.value,
                                setInitialInvestment
                            )
                        }
                    />
                </div>
                <div>
                    <label htmlFor="annual-investment-input">
                        Annual Investment
                    </label>
                    <input
                        type="number"
                        name="annual-investment-input"
                        value={annualInvestment}
                        onChange={(event) =>
                            handleChange(
                                event.target.value,
                                setAnnualInvestment
                            )
                        }
                    />
                </div>
            </div>

            <div className="input-group">
                <div>
                    <label htmlFor="expected-return">Expected Return</label>
                    <input
                        type="number"
                        name="expected-return"
                        value={expectedReturn}
                        onChange={(event) =>
                            handleChange(event.target.value, setExpectedReturn)
                        }
                    />
                </div>
                <div>
                    <label htmlFor="duration">Duration</label>
                    <input
                        type="number"
                        name="duration"
                        value={duration}
                        onChange={(event) =>
                            handleChange(event.target.value, setDuration)
                        }
                    />
                </div>
            </div>
        </section>
    );
}
