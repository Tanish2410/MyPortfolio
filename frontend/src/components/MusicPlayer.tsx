"use client";

import { useEffect, useId, useState, type CSSProperties } from "react";
import "./music-player.css";

const TRACK_DURATION = 164;

function formatTime(seconds: number) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

export default function MusicPlayer() {
  const descriptionId = useId();
  const [{ playing, elapsed }, setPlayback] = useState({
    playing: false,
    elapsed: 0,
  });

  useEffect(() => {
    if (!playing) return;

    const timer = window.setInterval(() => {
      setPlayback((current) => {
        const nextElapsed = Math.min(current.elapsed + 1, TRACK_DURATION);
        return {
          playing: current.playing && nextElapsed < TRACK_DURATION,
          elapsed: nextElapsed,
        };
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [playing]);

  function togglePlayback() {
    setPlayback((current) => ({
      playing: !current.playing,
      elapsed: current.elapsed === TRACK_DURATION ? 0 : current.elapsed,
    }));
  }

  return (
    <aside
      className={`music-player${playing ? " is-playing" : ""}`}
      aria-label="Music player demo"
    >
      <div className="music-artwork" aria-hidden="true">
        <span className="music-artwork-sun" />
        <span className="music-artwork-landscape" />
        <span className="music-equalizer">
          <span />
          <span />
          <span />
          <span />
        </span>
      </div>

      <div className="music-track">
        <p className="music-track-title">Quiet hours</p>
        <p className="music-track-artist">Studio notes · demo</p>
      </div>

      <button
        className="music-play-button"
        type="button"
        aria-label={
          playing ? "Pause music player demo" : "Play music player demo"
        }
        aria-describedby={descriptionId}
        onClick={togglePlayback}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          {playing ? (
            <path d="M7 5h4v14H7zm6 0h4v14h-4z" />
          ) : (
            <path d="M8 4.8c0-.6.7-1 1.2-.6l10 7.2c.4.3.4.9 0 1.2l-10 7.2c-.5.4-1.2 0-1.2-.6V4.8Z" />
          )}
        </svg>
      </button>

      <div className="music-progress">
        <input
          className="music-seek"
          type="range"
          min={0}
          max={TRACK_DURATION}
          step={1}
          value={elapsed}
          aria-label="Seek music player demo"
          aria-valuetext={`${formatTime(elapsed)} of ${formatTime(TRACK_DURATION)}`}
          aria-describedby={descriptionId}
          onChange={(event) => {
            const nextElapsed = Number(event.target.value);
            setPlayback((current) => ({
              playing: current.playing && nextElapsed < TRACK_DURATION,
              elapsed: nextElapsed,
            }));
          }}
          style={
            { "--music-progress": `${(elapsed / TRACK_DURATION) * 100}%` } as CSSProperties
          }
        />
      </div>

      <p className="music-demo-note" id={descriptionId}>
        This is a music player preview. No audio file has been added.
      </p>
    </aside>
  );
}
