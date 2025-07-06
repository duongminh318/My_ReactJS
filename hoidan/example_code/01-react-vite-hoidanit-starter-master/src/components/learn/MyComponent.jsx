const FakeComponent = () => {

    return (
        <div>
            fake component
        </div>
    )

}

//jsx
// fragment : 1 parent
// import css
import './style.css';


const MyComponent = () => {

    return (
        <>

            <div> Win & Win tech</div>
            <div className="child" 
            style={
                {borderRadius: "10px"}
            }
            > class name chill</div>
        </>

    );
}

export default MyComponent;
export { FakeComponent };