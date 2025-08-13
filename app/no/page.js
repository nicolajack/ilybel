import Image from "next/image";

export default function No() {
    return (
        <div className="noPage">
            <h1>WHAT?!?</h1>
            <h2>i love you more than taylor swift loves the word <i>love</i></h2>
            <p>she's used the word 413 times, usually followed by the word is, again, or affair...</p>
            <p>she mainly uses it in the chorus, with 254 occurences happening there!</p>
            <p>it's in 11 albums and 106 songs!</p>
            <Image id="gif" src="/taylor.gif" alt="taylor swift loves love" width="300" height="300"/>
            <br />
            <h2>NOW do you know how much i love you?</h2>
            <div className="buttonContainer">
                <a href="/yes" className="yesButton">
                yes!
                </a>
                <a href="/nono" className="noButton">
                no...
                </a>
            </div>
        </div>
    );
}