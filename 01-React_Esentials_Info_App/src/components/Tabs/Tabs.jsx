export default function Tabs({children, button, ButtonContainer = "menu", ...props}){
    return(
        <>
            <ButtonContainer {...props}> {button} </ButtonContainer>
            {children}
        </>
    );
}