export default function TabButton({children, onSelect}){

  // sự kiện click trong js
  // const btn = document.querySelector("button");
  // btn.addEventListener("click", ()=>{
  //   // làm việc gì đó

  // })
  

    return(
         <li>
              <button onClick={onSelect}>{children} </button>
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