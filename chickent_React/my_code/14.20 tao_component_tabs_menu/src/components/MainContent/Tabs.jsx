export default function Tabs({children, button}){

    return(
        <>
            <menu>{button}</menu>
            {children}
        
        </>
    );
}