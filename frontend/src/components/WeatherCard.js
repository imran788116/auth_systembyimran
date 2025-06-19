// WeatherCard.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function WeatherCard() {
  const [weather, setWeather] = useState(null);
  const city = "Kolkata"; // you can change this
  const apiKey = "YOUR_DUMMY_API_KEY"; // 🔁 Replace with real key later

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeather(res.data);
      } catch (error) {
        console.error("Weather fetch error:", error);
      }
    };

    fetchWeather();
  }, []);

  if (!weather) return <p>Loading weather...</p>;

  const { main, weather: weatherInfo, wind, name } = weather;
  const iconCode = weatherInfo[0].icon;

  return (
    <div style={styles.card}>
      <h3 style={styles.city}>{name}</h3>
      <img
        src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
        alt="weather-icon"
        style={styles.icon}
      />
      <p style={styles.temp}>{main.temp}°C</p>
      <p style={styles.desc}>{weatherInfo[0].description}</p>
      <p style={styles.extra}>💨 {wind.speed} m/s | 💧 {main.humidity}%</p>
    </div>
  );
}

const styles = {
  card: {
    padding: "20px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    width: "220px",
    textAlign: "center",
    marginTop: "20px"
  },
  city: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333"
  },
  icon: {
    width: "80px",
    height: "80px"
  },
  temp: {
    fontSize: "28px",
    fontWeight: "bold",
    margin: "10px 0"
  },
  desc: {
    fontStyle: "italic",
    color: "#666"
  },
  extra: {
    fontSize: "14px",
    color: "#888"
  }
};

export default WeatherCard;
