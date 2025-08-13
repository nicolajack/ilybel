import Image from "next/image";

export default function NoNoNo() {
    return (
        <div className="noPage">
            <h1>okay... this is getting ridiculous</h1>
            <h2>i love you more than the number of fics you&apos;ve read</h2>
            <p>pricefield have 3,730 fics... i&apos;m sure you've read at least half</p>
            <p>taivan have 525, i&apos;m sure you've read them all</p>
            <p>shaunanat and shaunahat combined only have 697</p>
            <p>but that&apos;s still at least 4952 fics! and i love you more than the love between all of those characters!</p>
            <Image id="gif" src="/pricefield.gif" alt="pricefield love eachother" width="300" height="300"/>
            <br />
            <h2>you don&apos;t get an option! i love you <i>so</i> much</h2>
            <div className="buttonContainer">
                <a href="/yes" className="yesButton">
                yes!
                </a>
            </div>
        </div>
    );
}