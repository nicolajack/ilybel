"use client";
import { useEffect } from 'react';
import React from 'react';
import { useRef } from 'react';
import './yes.css';
import Image from "next/image";

export default function Yes() {
    // for audio
    const audioRef = useRef(null);
    const playAudio = () => {
        audioRef.current.play();
    };

    return (
        <div className="yesPage">
        <h1>good!!</h1>
        <h2>you are my favorite person in the world! i’ll never love anyone like i love you</h2>
        <br />
        <Image id="gif" src="/belnico2.png" alt="belnico!" width="300" height="300"/>
        <br />
        <button className="playAudioButton" onClick={playAudio}>click me...</button>
        <p>p.s. I LOVE YOU MOST!</p>
        <audio ref={audioRef} src="/400lux.mp3" />
        </div>
    );
}

