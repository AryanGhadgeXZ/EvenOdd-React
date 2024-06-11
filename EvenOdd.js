import { useState } from "react";

function EvenOdd()
{
    const [num,setNum] = useState("");
    const [msg,setMsg] = useState("");

    const hNum = (event) => {setNum(event.target.value);}

    const check = (event) => {
        event.preventDefault();
        let n = parseInt(num);
        let r = n % 2 == 0 ? "even" : "odd";
        setMsg("res = " + r);
    }

    return(
        <>
        <center>
        <h1>Even Odd App</h1>
        <form onSubmit = {check}>
            <input type = "number" placeholder="Enter Integer" onChange = {hNum} />
            <br/><br/>
            <input type="submit" />
        </form>
        <h2>{msg}</h2>
        </center>
        </>
    );
}

export default EvenOdd;