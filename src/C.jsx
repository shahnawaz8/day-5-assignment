import {useState,useEffect} from 'react';
export const C = ()=>{
  const [timer,setTimer] = useState(0);
  useEffect(()=>{
      const id = setInterval(()=>{
        setTimer((p)=>{
          if(p>=20){
            clearInterval(id);
            return `end at ${20}`;
          }
          return p+1
          })
      },500)
      return ()=>{
        clearInterval(id);
        console.log("unmounted timer")
        }

  },[])

return(
    <div>
      <h1>timer: {timer} /20</h1>
    </div>
  )
}