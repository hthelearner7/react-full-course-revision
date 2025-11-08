import "./ReactEssentials.css";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function ReactEssentials() {
    return (
        <>
            <Header />
            <main>
                <CoreConcepts />
                <Examples />
            </main>
        </>
    );
}

export default ReactEssentials;
