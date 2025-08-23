import { useImperativeHandle, useRef } from "react"
export default function ResultModel({result, targetTime, ref}){

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
            <h2>you {result}</h2>
            <p> thời gian đích : <strong> {targetTime} second</strong></p>
            <p> bạn đã dừng tại <strong> X second</strong> </p>
            <form method="dialog">
                <button> Close</button>
            </form>
        </dialog>
    )

}