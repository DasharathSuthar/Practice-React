import { useState } from "react";

const Form = () => {

    let [fullName,setFullName] = useState("Dk")
    function fullNameChange(e){
        setFullName(e.target.value);
    }

    return(
        <>
            <form>
                <label htmlFor="fullName">FullName : </label>
                <input type="text" id="fullName" value={fullName} onChange={fullNameChange} />
                <br />
                <br />
                <button type="button">Submit</button>
            </form>
        </>
    )
};

export default Form