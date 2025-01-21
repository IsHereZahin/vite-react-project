// Import statements should be at the top of the file
import { useRef } from "react";

const Hook = () => {
    // Create multiple refs
    let myHeadLine = useRef();
    let mySecondHeadLine = useRef();

    const change = () => {
        myHeadLine.current.innerText = "Hello, updated useRef!";
        myHeadLine.current.style.color = "#FFB6C1";
    };

    const changeSecond = () => {
        myHeadLine.current.innerText = "Hello, updated useRef!";
        mySecondHeadLine.current.innerText = "Hello, updated second ref!";
        myHeadLine.current.style.color = "#98FF98";
        mySecondHeadLine.current.style.color = "#FFDAB9";
    };


    return (
        <div>
            <p ref={myHeadLine}>Non Update</p>
            <p ref={mySecondHeadLine}>Second Headline</p>

            <button onClick={change}>Change First Headline</button>
            <button onClick={changeSecond}>Change Both Headlines</button>
        </div>
    );
};

export default Hook;
