export default function Tabs({children, button, ButtonsContainer}){

    // const ButtonsContainer =buttonsContainer;
    return(
        <>
            <ButtonsContainer>{button}</ButtonsContainer>
            {children}
        
        </>
    );
}