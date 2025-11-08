import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

function CoreConcepts() {
    return (
        <section id="core-concepts">
            <ul>
                {CORE_CONCEPTS.map((c, idx) => (
                    <CoreConcept {...c} key={idx} />
                ))}
            </ul>
        </section>
    );
}

export default CoreConcepts;
