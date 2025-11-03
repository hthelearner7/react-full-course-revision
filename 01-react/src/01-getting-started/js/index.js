const content = [
    [
        "React is extremely popular",
        "It makes building complex, interactive UIs a breeze",
        "It's powerful & flexible",
        "It has a very active and versatile ecosystem",
    ],
    [
        "Components, JSX & Props",
        "State",
        "Hooks (e.g., useEffect())",
        "Dynamic rendering",
    ],
    [
        "Official web page (react.dev)",
        "Next.js (Fullstack framework)",
        "React Native (build native mobile apps with React)",
    ],

    [
        "Vanilla js needs imperative programming, meaning you need to define all the steps in order to achieve a result.",
        "react embraces declarative programming",
        "with react, you just need to define the goal and it figured out how to get there",
    ],
];

const btnWhyReact = document.getElementById("btn-why-react");
const btnCoreFeatures = document.getElementById("btn-core-features");
const btnRelatedResources = document.getElementById("btn-related-resources");
const btnJsVsReact = document.getElementById("btn-js-vs-react");
const tabContent = document.getElementById("tab-content");

function displayContent(items) {
    let listContent = "";
    for (const item of items) {
        listContent += `<li>${item}</li>`;
    }
    const list = document.createElement("ul");
    tabContent.innerHTML = ""; // clear existing content
    list.innerHTML = listContent; // insert new content
    tabContent.append(list);
}

function handleClick(event) {
    // console.log({ event });
    const btnId = event.target.id;

    highlightButton(event.target);
    if (btnId === "btn-why-react") {
        displayContent(content[0]);
    } else if (btnId === "btn-core-features") {
        displayContent(content[1]);
    } else if (btnId === "btn-related-resources") {
        displayContent(content[2]);
    } else {
        displayContent(content[3]);
    }
}
displayContent(content[0]);
function highlightButton(targettedButton) {
    btnWhyReact.classList.remove("active");
    btnCoreFeatures.classList.remove("active");
    btnRelatedResources.classList.remove("active");
    btnJsVsReact.classList.remove("active");

    targettedButton.classList.add("active");
}

btnWhyReact.addEventListener("click", handleClick);
btnCoreFeatures.addEventListener("click", handleClick);
btnRelatedResources.addEventListener("click", handleClick);
btnJsVsReact.addEventListener("click", handleClick);
