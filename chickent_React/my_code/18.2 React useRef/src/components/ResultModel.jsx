import { useImperativeHandle, useRef } from "react"
export default function ResultModel({ targetTime, ref, remainingTime, onReset }) {
    const dialog = useRef();
    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    // biến điểm
    const score = Math.round((1-remainingTime/(targetTime*1000))*100) // remainingTime: thời gian còn lại

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            },
        };
    });
    return (
        <dialog ref={dialog} className="result-modal">
            {/* <h2>you {result}</h2> */}
            {userLost && <h2> You Lost</h2>}
            {!userLost && <h2> Your Score {score}</h2>}
            <p> thời gian đích : <strong> {targetTime} second</strong></p>
            <p> bạn còn <strong> {formattedRemainingTime} </strong> </p>
            <form method="dialog" onSubmit={onReset}>
                <button> Close</button>
            </form>
        </dialog>
    )

}