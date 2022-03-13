// import axios from "axios"
// import { useEffect, useState } from "react"

// export const Groceries = ()=>{

//     const [text,setText] = useState("")
//     const [singleItem,setSingleItem] = useState([]);
//     const [page,setPage] = useState(0);
//     const [limit,setLimit] = useState(3)
//     const [totolItems,setTotalItems] = useState(0)
//     useEffect( ()=>{
//         getData()
//     },[page])
//     useEffect(()=>{
//         axios.get(`http://localhost:3001/products`).then((res)=>{setTotalItems(res.data)})
//     },[])
    
//     const getData = ()=>{
//         axios.get(`http://localhost:3001/products?_page=${page}&_limit=${limit}`).then((res)=>{setSingleItem(res.data)})
        
//     }
//     return(
//         <>
//         <input type="text" onChange={(e)=>setText(e.target.value)}/>
//         <p>{text}</p>
//         <button onClick={()=>{
//             // fetch("http://localhost:3001/products",{
//             //     method:"POST",
//             //     body:JSON.stringify({title:text,newBorn:false}),
//             //     headers:{
//             //         "content-type":"application/json"
//             //     }
//             // })
//             axios.post("http://localhost:3001/products",{title:text,newBorn:false}).then(()=>{getData()})
//         }}>Add Item</button>
//         {
//             singleItem.map(s=><div key={s.id}>{s.id }={s.title}</div>)
//         }


// <button onClick={()=>{
//             setPage(page-1)
//         }}>Prev</button>
//     <span>Page: {page} / {totolItems.length}</span>
        
//     <button onClick={()=>{
            
//             setPage(page+1)
//         }}>Next</button>
        


//         </>
//     )
// }