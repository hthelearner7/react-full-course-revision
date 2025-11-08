import { EXAMPLES } from "../data";
import Section from "./Section";
import TabButton from "./TabButton";
import { useState } from "react";
import Tabs from "./Tabs";

function Examples() {
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
        <Section id="examples" title="Examples">
            <Tabs
                ButtonsContainer="menu"
                buttons={tabButtonsData?.map((btnTitle, idx) => (
                    <TabButton
                        key={idx}
                        onClick={() => {
                            handleSelect(btnTitle);
                        }}
                        isSelected={btnTitle === selectedTopic}
                    >
                        {btnTitle}
                    </TabButton>
                ))}
            >
                {tabContent}
            </Tabs>
        </Section>
    );
}

export default Examples;
