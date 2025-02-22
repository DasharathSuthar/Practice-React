import { useEffect, useState } from "react";

const Joke = ()=>{
    let url = "https://official-joke-api.appspot.com/random_joke";

    let [joke,setJoke] = useState({});

    const getJoke = async () => {
        let res = await fetch(url);
        let jsonRes = await res.json();
        console.log(jsonRes);
        setJoke({
            setup:jsonRes.setup,
            punchline:jsonRes.punchline,
        })
    }
    
    useEffect(()=>{
        async function firstJoke()  {
            let res = await fetch(url);
            let jsonRes = await res.json();
            console.log(jsonRes);
            setJoke({
                setup:jsonRes.setup,
                punchline:jsonRes.punchline,
            })
        }   
        firstJoke();
    },[])

    return(
        <>
            <h1>Get Jokes</h1>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getJoke}>Get New Jokes</button>
        </>
    )    
}
export default Joke