"use client";
import React, { useState, useEffect, useRef } from 'react';
import '@/styles/VirtualTour.css'; 

function VirtualTour() {
    const [isMuted, setIsMuted] = useState(true);
    const playerRef = useRef(null);
    const videoId = '3JjaFQSvtZU';

    useEffect(() => {
        // This stops the build from crashing on the server
        if (typeof window === 'undefined') return;

        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            document.head.appendChild(tag);
        }

        const checkYTReady = setInterval(() => {
            if (window.YT && window.YT.Player && !playerRef.current) {
                playerRef.current = new window.YT.Player('virtual-tour-player', {
                    videoId: videoId,
                    host: 'https://www.youtube.com',
                    playerVars: {
                        autoplay: 1,
                        mute: 1,
                        loop: 1,
                        playlist: videoId,
                        controls: 0,
                        modestbranding: 1,
                        playsinline: 1,
                        rel: 0,
                        enablejsapi: 1,
                        origin: window.location.origin
                    },
                    events: {
                        onReady: (event) => {
                            event.target.mute();
                            event.target.playVideo();
                        },
                        onStateChange: (event) => {
                            if (event.data === window.YT.PlayerState.ENDED) {
                                event.target.playVideo();
                            }
                        }
                    },
                });
                clearInterval(checkYTReady);
            }
        }, 500);

        return () => clearInterval(checkYTReady);
    }, [videoId]);

    // ... (rest of your handleToggleMute and return JSX)

    const handleToggleMute = (e) => {
        // Stop events to prevent mobile taps from being swallowed
        e.preventDefault();
        e.stopPropagation();

        if (playerRef.current && typeof playerRef.current.unMute === 'function') {
            if (isMuted) {
                playerRef.current.unMute();
                playerRef.current.setVolume(100); // Ensure audible sound
                setIsMuted(false);
            } else {
                playerRef.current.mute();
                setIsMuted(true);
            }
        }
    };

    return (
        <section className="take-a-tour">
            {/* Background Video Layer */}
            <div className="tour-video-container">
                <div id="virtual-tour-player"></div>
                <div className="tour-overlay"></div>
            </div>

            <div className="take-a-tour-content">
                <h2 className="take-a-tour-title">JEC Campus Experience</h2>
                <p className="take-a-tour-subtitle">Experience our world-class infrastructure and vibrant campus life in this immersive tour.</p>

                <div className="tour-actions">
                    <button
                        className={`tour-mute-btn ${!isMuted ? 'active' : ''}`}
                        onPointerDown={handleToggleMute}
                        type="button"
                    >
                        <i className={`fas ${isMuted ? 'fa-volume-mute' : 'fa-volume-up'}`}></i>
                        {isMuted ? ' Unmute Tour' : ' Mute Tour'}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default VirtualTour;