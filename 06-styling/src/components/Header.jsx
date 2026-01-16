import { useState } from "react";
import { styled } from "styled-components";
import styles from "./Header.module.css";
import CustomContainer from "./CustomContainer.jsx";

const CustomInputBox = styled.input`
// dynamically - styled
color:${(props) => (props.$isinvalid ? "red" : "blue")};
background-color:pink
font-size:14px;
`;
const CustomBox = styled.header`
    display: flex;
    gap: 1rem;
    border: 4px solid black;

    &:hover {
        border: 2px solid pink;
        background-color: lightblue;
    }

    & div {
        height: 100px;
        width: 100px;
        border: 1px solid black;
    }
    & div:hover {
        height: 200px;
        width: 200px;
        border: 2px solid black;
    }

    & button:hover {
        background-color: yellow;
    }

    & p {
        color: #922125;
    }

    @media (max-width: 900px) {
        background-color: lightgreen;

        & div {
            background-color: pink;
        }
    }
`;
const Header = () => {
    const [value, setValue] = useState(false);
    const [isInvalid, setisInvalid] = useState(false);
    const [bgColor, setBgColor] = useState("white");

    return (
        <div style={{ background: bgColor }}>
            <h1>Refer to readme of this folder for explanation.</h1>
            <CustomContainer className={value ? styles.yellow : styles.blue}>
                <li>home</li>
                <li>about</li>
                <li>contact</li>
                <li>extras</li>
            </CustomContainer>
            <button onClick={() => setValue((prev) => !prev)}>
                Change color of header headings
            </button>
            <label htmlFor="text-field" style={{ display: "block" }}>
                input example with styled-component
            </label>
            <CustomInputBox
                type="text"
                id="text-field"
                placeholder="Enter your input here"
                // * styled-components treats $props as:
                // ✅ styling-only props and ❌ not valid DOM attributes So it automatically filters them out.
                $isinvalid={isInvalid}
                onChange={() =>
                    setBgColor(
                        ["orange", "brown", "white", "purple", "wheat"][
                            Math.floor(Math.random() * 5)
                        ]
                    )
                }
            />
            {isInvalid ? "red" : "blue"}
            <button onClick={() => isInvalid((prev) => !prev)}>color</button>
            <CustomBox>
                <div>
                    <p>hello</p>
                </div>
                <div>
                    <p>hello</p>
                </div>
                <div>
                    <p>hello</p>
                </div>
                <div>
                    <p>hello</p>
                </div>
                <button>hello</button>
            </CustomBox>
        </div>
    );
};

export default Header;
