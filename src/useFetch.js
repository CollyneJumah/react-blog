import { useState, useEffect } from 'react';


const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError]=useState(null)
   
    //useEffect
    useEffect(() => {
        //1.abort controller
        const abortCont = new AbortController();
        
        setTimeout(()=> {
            //2. associate abort controller with the fetch
            fetch(url, {signal: abortCont.signal} )
            .then(res => {
                // console.log(res)
                if(!res.ok){
                    throw Error('Could not fetch data for that resource')
                }
                return res.json()
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null)
            })
            .catch( err=>{
                //4. if error is Abort 
                if(err.name === 'AbortError')
                {
                    console.table("Fetch aborted")
                }
                else
                {
                    console.table(err)
                    setIsPending(false)
                    setError(err.message)
                }
            })
       }, 1000)
       
       //3. cleanup function
       return () => abortCont.abort();
    },[url]);

    return {data, isPending, error}
       
}

export default useFetch;