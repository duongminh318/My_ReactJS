import { useImperativeHandle, useRef } from "react"
export default function ResultModel({ targetTime, ref, remainingTime, onReset}){

    const userLost= remainingTime<=0;
    const formattedRemainingTime= (remainingTime/1000).toFixed(2);

    const dialog = useRef();
    useImperativeHandle(ref, ()=>{
        return{
            open(){
                dialog.current.showModal();
            },
        };
    });
    return(
        <dialog ref={dialog} className="result-modal">
            {/* <h2>you {result}</h2> */}
            {userLost && <p> You Lost</p>}
            <p> thời gian đích : <strong> {targetTime} second</strong></p>
            <p> bạn còn <strong> {formattedRemainingTime} </strong> </p>
            <form method="dialog" onSubmit={onReset}>
                <button> Close</button>
            </form>
        </dialog>
    )

}