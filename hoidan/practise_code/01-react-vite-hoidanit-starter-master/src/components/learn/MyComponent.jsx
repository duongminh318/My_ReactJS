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
    // const hoidanit= "eric 1" ; // string
    // const hoidanit= 222;    // number
    //  const hoidanit= true;    // boolean : ko in ra dc gì cả
    //  const hoidanit= undefined;
    //const hoidanit= null;
    const hoidanit= [1, 2, 3 ];

    // const hoidanit = {

    //     name: "hoi dan IT",
    //     age: 25
    // }

// JSON.stringify() = biến 1 object thành string

    return (
        <>

            <div> {JSON.stringify(hoidanit)} Win & Win tech</div>
            <div className="child"
                style={
                    { borderRadius: "10px" }
                }
            > class name chill</div>
        </>

    );
}

export default MyComponent;
export { FakeComponent };