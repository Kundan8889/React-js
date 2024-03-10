import React, { useEffect, useState } from 'react'

function Github() {
  const[data,setData]=useState([])
  useEffect(()=>{
    fetch('https://github.com/Kundan8889')
    .then(response=>response.json())
    .then(data=>{
      console.log(data);
      setData(data);
    })
  },[])
    return(
        <div className=' text-center m-4 bg-gray-600 text-white text-3xl p-4'  > Github Followers:{data.followers}
       <img src="{data.avatar_url } "width={300} alt=" Git Picture " />
         </div>
      )
}
export default Github
