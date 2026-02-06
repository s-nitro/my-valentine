import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState(1);
  const [celebrate, setCelebrate] = useState(false);

  const handleYes = () => {
    setCelebrate(true);
    setPage(5);
  };

  return (
    <div className="container">
      {celebrate && <Confetti />}
      {celebrate && <Hearts />}

      {page === 1 && <PageOne next={() => setPage(2)} />}
      {page === 2 && <PageTwo next={() => setPage(3)} />}
      {page === 3 && <PageThree next={() => setPage(4)} />}
      {page === 4 && <PageFour yes={handleYes} />}
      {page === 5 && <PageFive />}
    </div>
  );
}

/* PAGE 1 */
function PageOne({ next }: { next: () => void }) {
  return (
    <div className="page">
      <h1>Hey Gayatri 💖</h1>
      <p>I made something special just for you 🥹</p>
      <button onClick={next}>Start 💕</button>
    </div>
  );
}

/* PAGE 2 */
function PageTwo({ next }: { next: () => void }) {
  return (
    <div className="page">
      <h1>Gayatri, You Mean So Much 🌸</h1>
      <p>You make my world brighter, my heart happier, and my life better 💫</p>
      <button onClick={next}>Next 😘</button>
    </div>
  );
}

/* PAGE 3 */
function PageThree({ next }: { next: () => void }) {
  const [sad, setSad] = useState(false);

  return (
    <div className="page">
      <h1>Quick Question 😌</h1>
      <p>Do you like me? 🥹</p>

      <button onClick={next}>Yes 🥰</button>
      <button onClick={() => setSad(true)}>No 😒</button>

      {sad && (
        <>
          <p>🥺💔 That hurt a little...</p>
          <img
            src="https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif"
            alt="sad"
            width="200"
          />
        </>
      )}
    </div>
  );
}

/* PAGE 4 */
function PageFour({ yes }: { yes: () => void }) {
  const [noPos, setNoPos] = useState({ top: "60%", left: "55%" });
  const [tries, setTries] = useState(0);

  const moveNo = () => {
    setTries((t) => t + 1);

    setNoPos({
      top: Math.random() * 80 + "%",
      left: Math.random() * 80 + "%",
    });
  };

  return (
    <div className="page">
      <h1>Gayatri, Will You Be My Valentine? 💘</h1>
      {tries >= 2 && tries < 4 && <p>👀 Nice try…</p>}
      {tries >= 4 && tries < 6 && <p>🥹 YES kar chup chap</p>}
      {tries >= 6 && <p>😏 Jast Shani nako banu</p>}
      <button className="yes-btn" onClick={yes}>
        YES 💕🥹
      </button>

      <button
        className="no-btn"
        style={{ top: noPos.top, left: noPos.left }}
        onMouseEnter={moveNo} // desktop hover
        onTouchStart={moveNo} // mobile touch
        onClick={moveNo} // extra safety
      >
        No 💔
      </button>
    </div>
  );
}

/* PAGE 5 */
function PageFive() {
  const images = [
    "/my-valentine/img2.png",
    "/my-valentine/img1.jpg",
    "/my-valentine/img4.png",
    "/my-valentine/img5.jpg",
    "/my-valentine/img3.jpg",
  ];

  const [current, setCurrent] = useState(0);

  // auto-change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="page page-five">
      <h1>YAYYYYY GAYATRI 💃💖</h1>
      <p>You just made me the happiest person 🥰</p>

      <img
        src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"
        alt="celebrate"
        width="180"
        style={{ marginBottom: "10px" }}
      />

      <h2 className="memory-title">Our Memories 💕</h2>

      <div className="carousel-wrapper">
        <img
          src={images[current]}
          alt={`memory ${current + 1}`}
          className="carousel-img"
        />
      </div>
    </div>
  );
}

/* 🎉 CONFETTI */
function Confetti() {
  const colors = ["#ff0a54", "#ff477e", "#ff7096", "#ffd166", "#06d6a0"];

  return (
    <>
      {[...Array(80)].map((_, i) => (
        <div
          key={i}
          className="confetti"
          style={{
            left: Math.random() * 100 + "%",
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            animationDelay: Math.random() * 3 + "s",
          }}
        />
      ))}
    </>
  );
}

/* ❤️ HEARTS */
function Hearts() {
  return (
    <>
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="heart"
          style={{
            left: Math.random() * 100 + "%",
            fontSize: Math.random() * 20 + 20 + "px",
            animationDuration: Math.random() * 3 + 4 + "s",
          }}
        >
          ❤️
        </div>
      ))}
    </>
  );
}

export default App;
