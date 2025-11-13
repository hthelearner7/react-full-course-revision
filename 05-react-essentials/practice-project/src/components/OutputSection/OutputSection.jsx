import { formatter } from "../../util/investment";

export default function OutputSection({ annualData }) {
    // console.log(annualData);

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {annualData?.map((data, idx) => (
                    <tr key={`${idx}-data`}>
                        <td>{data?.year}</td>
                        <td>
                            {formatter.format(Math.round(data?.valueEndOfYear))}
                        </td>
                        <td>{formatter.format(Math.round(data?.interest))}</td>
                        <td>
                            {formatter.format(Math.round(data?.totalInterest))}
                        </td>
                        <td>
                            {formatter.format(
                                Math.round(data?.investedCapital)
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
