/**
 * weather.js
 * Fetches live weather data and updates the RhodyWeather footer widget.
 */

async function updateWeather() {
    // 1. Configuration
    // Replace with your actual key from OpenWeatherMap
    const apiKey = 'f4a37a101dabc6cd83a9f7da5c4ffd78'; 
    const city = 'Providence,US'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    const tempElement = document.getElementById('current-temp');
    const descElement = document.getElementById('weather-desc');

    try {
        // 2. Fetch the data
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Weather API error: ${response.status}`);
        }

        const data = await response.json();

        // 3. Extract and Process Data
        const temp = Math.round(data.main.temp);
        const rawDescription = data.weather[0].description;

        // 4. Format to Title Case (e.g., "broken clouds" -> "Broken Clouds")
        const formattedDesc = rawDescription.replace(/\b\w/g, char => char.toUpperCase());

        // 5. Update the UI
        if (tempElement && descElement) {
            tempElement.innerText = `${temp}°F`;
            descElement.innerText = formattedDesc;
        }

    } catch (error) {
        console.error("RhodyWeather Widget Error:", error);
        
        // 6. Fallback - Keeps the link functional even if the API is down
        if (tempElement && descElement) {
            tempElement.innerText = "Live";
            descElement.innerText = "RhodyWeather";
        }
    }
}

// Initialize the widget immediately on load
updateWeather();

// Update every 10 minutes (600,000 milliseconds)
setInterval(updateWeather, 600000);