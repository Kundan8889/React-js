import { useEffect ,useState} from "react";
function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json()) //then ke andr obviusly call back milta hain
        .then((res)=>setData(res[currency]))
        console.log(data)
    },[currency]) //ye meri dependecy hain 
    console.log(data)
    return  data;
}
export default useCurrencyInfo;