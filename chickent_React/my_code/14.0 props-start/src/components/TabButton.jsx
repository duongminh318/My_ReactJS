export default function TabButton({children}){

  // sự kiện click trong js
  // const btn = document.querySelector("button");
  // btn.addEventListener("click", ()=>{
  //   // làm việc gì đó

  // })
  
// tạo sự kiện click trong react sau đó gắn sự kiện cho nút bấm 
function handleClick() {
  // làm việc gì đó khi nút được bấm
  alert("nút bấm đã được click");
}
    return(
         <li>
              <button onClick={handleClick}>{children} </button>
            </li>
    )
}

// export default function TabButton({batky}){
//     return(
//          <li>
//               <button>{batky} </button>
//             </li>
//     )
// }