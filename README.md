import React, { useState, useEffect } from "react";
import './App.css';

const locations = [
    {
        id: 1,
        name: "Stockholm",
        sights: ["Gamla Stan", "Vasa Museum", "Skansen"]
    },
    {
        id: 2,
        name: "Göteborg",
        sights: ["Liseberg", "Universeum", "Göteborgs Konstmuseum"]
    },
    {
        id: 3,
        name: "Malmö",
        sights: ["Turning Torso", "Malmöhus Slott", "Ribersborgs Strand"]
    }
];

function App() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [position, setPosition] = useState(null);
    const [geoError, setGeoError] = useState(null);

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    setPosition({
                        lat: pos.coords.latitude,
                        lng: pos.coords.longitude
                    });
                    setGeoError(null);
                },
                (err) => {
                    setGeoError(err.message);
                }
            );
        } else {
            setGeoError("Geolocation is not supported by your browser.");
        }
    }, []);

    const goNext = () => {
        setCurrentIndex((idx) => (idx + 1) % locations.length);
    };

    const goPrev = () => {
        setCurrentIndex((idx) => (idx - 1 + locations.length) % locations.length);
    };

    const currentLocation = locations[currentIndex];

    return (
        <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
            <h1>Resa genom Sverige ✈️</h1>
            <h2>Nuvarande plats: {currentLocation.name}</h2>

            <h3>Sevärdheter:</h3>
            <ul>
                {currentLocation.sights.map((sight) => (
                    <li key={sight}>{sight}</li>
                ))}
            </ul>

            <div style={{ marginTop: "20px" }}>
                <button onClick={goPrev} aria-label="Föregående plats">
                    ← Föregående
                </button>
                <button
                    onClick={goNext}
                    style={{ marginLeft: "10px" }}
                    aria-label="Nästa plats"
                >
                    Nästa →
                </button>
            </div>

            <div style={{ marginTop: "30px" }}>
                <h3>Din GPS-position:</h3>
                {position && (
                    <div>
                        Latitud: {position.lat.toFixed(5)}, Longitud: {position.lng.toFixed(5)}
                    </div>
                )}
                {geoError && (
                    <div style={{ color: "red" }}>
                        {geoError}
                    </div>
                )}
            </div>
        </div>
    );
}

export default App
