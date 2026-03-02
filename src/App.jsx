import { useRef, useState } from "react";
import { Card } from "@/components/ui/card"; // If you use Card, otherwise remove

export default function BirthdaySite() {
  const musicRef = useRef();
  const [showMessage, setShowMessage] = useState(false);

  // Replace these URLs with your Imgur direct image links
  const photos = [
    "https://i.imgur.com/1cKl8lQ.jpeg",
    "https://i.imgur.com/BO1hanH.jpeg",
    "https://i.imgur.com/Q2EXM5H.jpeg",
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
        background: "linear-gradient(to bottom, #ffccd5, #ff99b3)",
        color: "#880e4f",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        Happy Birthday My Nijumieee 💖
      </h1>

      <p style={{ fontSize: "22px", maxWidth: "600px", lineHeight: "1.5" }}>
        Nijumieee, the day I met you, everything in my life changed. 
        Your smile is my sunrise, your voice is my peace, and your love is my home. 
        I am so grateful for every moment with you. Happy Birthday, my love! 🌸
      </p>

      {/* Surprise Music Button */}
      <button
        onClick={() => {
          musicRef.current.play();
          setShowMessage(true); // show message on click
        }}
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          fontSize: "18px",
          borderRadius: "12px",
          cursor: "pointer",
          backgroundColor: "#e91e63",
          color: "white",
          border: "none",
        }}
      >
        Click for Surprise 🎵
      </button>

      {/* Audio */}
      <audio ref={musicRef} loop>
        <source src="/night_we_met.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Hidden Love Message Card */}
      {showMessage && (
        <Card style={{ 
          backgroundColor: "rgba(255, 255, 255, 0.85)", 
          padding: "20px", 
          borderRadius: "20px", 
          marginTop: "30px", 
          maxWidth: "600px" 
        }}>
          <p style={{ fontSize: "20px", lineHeight: "1.5", color: "#880e4f" }}>
            My Nijumieee ❤️,<br />
            The day I met you, everything in my life changed. The world became brighter and softer because you were in it. 
            Your smile is my favorite sunrise, your voice is my peace, and your love is the safest place I have ever known.<br /><br />
            I am so grateful for every moment with you — every laugh, every late-night talk, every little fight, and every memory that belongs only to us.<br /><br />
            You are not just my girlfriend, you are my comfort, my happiness, my home, and my biggest blessing. Loving you is the easiest and most beautiful thing I have ever done.<br /><br />
            I promise to stand with you, protect your heart, make you smile when you feel low, and love you louder with every passing year.<br /><br />
            Happy Birthday to the most precious girl in my universe. I don’t need the whole world — I just need you.<br /><br />
            Forever yours,<br />
            Your Hafeez
          </p>
        </Card>
      )}

      {/* Photo Gallery */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "10px",
          width: "100%",
          marginTop: "30px",
        }}
      >
        {photos.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`memory ${index + 1}`}
            style={{
              width: "100%",
              borderRadius: "20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          />
        ))}
      </div>

      <p style={{ marginTop: "40px", fontSize: "14px", color: "#880e4f" }}>
        Made with love 💕 just for you
      </p>
    </div>
  );
}