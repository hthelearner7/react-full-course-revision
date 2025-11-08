import { useState } from "react";
import "./ReactEssentials.css";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

function ReactEssentials() {
    const [selectedTopic, setSelectedTopic] = useState(undefined);
    const handleSelect = (btnTitle) => {
        // console.log("clicked", btnTitle);

        setSelectedTopic(btnTitle);
        // console.log("old state", selectedTopic); // it logs old state because react schedules state update therefore you are still in old function component.
        // * This happens because when you call the state update function, React schedules the state update and re-executes the component function. The updated value is only available after the component function executes again. Therefore, logging the state immediately after calling the update function still shows the old value because you are still within the old component function execution.
    };

    // console.log("app component ");
    // console.log("new state", selectedTopic);

    const tabButtonsData = ["components", "jsx", "props", "state"];
    // console.log(selectedTopic, EXAMPLES[selectedTopic]);

    // carefully observe this syntax, it is more readableand presentable.
    let tabContent = <p>Please select a tab.</p>;
    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic]?.title}</h3>
                <p>{EXAMPLES[selectedTopic]?.description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic]?.code}</code>
                </pre>
            </div>
        );
    }

    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <ul>
                        {CORE_CONCEPTS.map((c, idx) => (
                            <CoreConcept {...c} key={idx} />
                        ))}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    {/*  component composition */}
                    <menu>
                        {tabButtonsData?.map((btnTitle, idx) => (
                            <TabButton
                                key={idx}
                                onSelect={() => {
                                    handleSelect(btnTitle);
                                }}
                                isSelected={btnTitle === selectedTopic}
                            >
                                {btnTitle}
                            </TabButton>
                        ))}
                    </menu>
                    {/* Dynamic Content */}
                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default ReactEssentials;
