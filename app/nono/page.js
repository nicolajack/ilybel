import Image from "next/image";

export default function NoNo() {
    return (
        <div className="noPage">
            <h1>you <i>STILL</i> don't?!?</h1>
            <h2>i love you more than the number of points paige bueckers has scored</h2>
            <p>she's scored 2439 points in her college career,</p>
            <p>and 479 so far in the wnba!</p>
            <p>i love you even more than paige loves azzi!!</p>
            <Image id="gif" src="/pazzi.gif" alt="pazzi love eachother" width="400" height="300"/>
            <br />
            <h2>okay now you <i>must</i> know how much i love you</h2>
            <div className="buttonContainer">
                <a href="/yes" className="yesButton">
                yes!
                </a>
                <a href="/nonono" className="noButton">
                no...
                </a>
            </div>
        </div>
    );
}