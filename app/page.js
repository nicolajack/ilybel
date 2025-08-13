import './globals.css';

export default function Home() {
  return (
    <div className="homePage">
      <h1>hey bella,</h1>
      <p>i made you this little website to tell you something very important...</p>
      <br />
      <h2>do you know how much i love you?</h2>
      <div className="buttonContainer">
        <a href="/yes" className="yesButton">
          yes!
        </a>
        <a href="/no" className="noButton">
          no...
        </a>
      </div>
    </div>
  );
}
