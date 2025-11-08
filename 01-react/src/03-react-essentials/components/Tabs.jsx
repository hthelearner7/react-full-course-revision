export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
    // const ButtonsContainer = buttonsContainer; // made it uppercase as buttonsContainer will try to recognize this as inbuilt component
    return (
        <>
            <ButtonsContainer>
                {/* Buttons */}
                {buttons}
                {/* Dynamic Content */}
            </ButtonsContainer>
            {children}
        </>
    );
}
