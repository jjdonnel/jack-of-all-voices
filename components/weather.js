/**
 * weather.js
 * Fetches live weather data and updates the RhodyWeather footer widget.
 */

// 1. Your Custom Cloudinary Mapping
const picture = {
    '01d': 'https://res.cloudinary.com/jjdonnel/image/upload/v1641969755/icons/imageSun_fbgi9k.png',
    '01n': 'https://res.cloudinary.com/jjdonnel/image/upload/v1641699145/icons/smallMoonShadow_yc5vom.png',
    '02d': 'https://res.cloudinary.com/jjdonnel/image/upload/v1641971374/icons/imageFewClouds_gz2nuy.png',
    '02n': 'https://res.cloudinary.com/jjdonnel/image/upload/v1641971377/icons/imageFewCloudsNight_pvdbtj.png',
    '03d': 'https://res.cloudinary.com/jjdonnel/image/upload/v1641699093/icons/smallPartlyCloudyShadow_egwyl7.png',
    '03n': 'https://res.cloudinary.com/jjdonnel/image/upload/v1641699078/icons/smallPartlyCloudyNightShadow_xalsjo.png',
    '04d': 'https://res.cloudinary.com/jjdonnel/image/upload/v1641699849/icons/smallCloudyShadow_krernp.png',
    '04n': 'https://res.cloudinary.com/jjdonnel/image/upload/v1641699849/icons/smallCloudyShadow_krernp.png',
    '09d': 'https://res.cloudinary.com/jjdonnel/image/upload/v1641699091/icons/smallPartlyCloudyRainShadow_wglhla.png',
    '09n': 'https://res.cloudinary.com/jjdonnel/image/upload/v1641699087/icons/smallPartlyCloudyNightShowerShadow_acdvma.png',
    '10d': 'https://res.cloudinary.com/jjdonnel/image/upload/v1641699104/icons/smallRainShadow_wbuqyd.png',
    '10n': 'https://res.cloudinary.com/jjdonnel/image/upload/v1641699104/icons/smallRainShadow_wbuqyd.png',
    '11d': 'https://res.cloudinary.com/jjdonnel/image/upload/v1641699181/icons/lightningStorm_qasj5h.png',
    '11n': 'https://res.cloudinary.com/jjdonnel/image/upload/v1641699181/icons/lightningStorm_qasj5h.png',
    '13d': 'https://res.cloudinary.com/jjdonnel/image/upload/v1641699116/icons/smallSnowShadow_cxqhox.png',
    '13n': 'https://res.cloudinary.com/jjdonnel/image/upload/v1641699116/icons/smallSnowShadow_cxqhox.png',
    '50d': 'https://res.cloudinary.com/jjdonnel/image/upload/v1641700135/icons/smallFogShadow_pcosu5.png',
    '50n': 'https://res.cloudinary.com/jjdonnel/image/upload/v1641700135/icons/smallFogShadow_pcosu5.png'
};

async function updateWeather() {
    const apiKey = 'f4a37a101dabc6cd83a9f7da5c4ffd78'; 
    const city = 'Providence,US'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    const tempElement = document.getElementById('current-temp');
    const descElement = document.getElementById('weather-desc');
    const iconElement = document.getElementById('icon'); // Added this for the icon

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Weather API error: ${response.status}`);
        }

        const data = await response.json();

        const temp = Math.round(data.main.temp);
        const rawDescription = data.weather[0].description;
        const iconCode = data.weather[0].icon; // Grab the code (e.g., '01d')

        const formattedDesc = rawDescription.replace(/\b\w/g, char => char.toUpperCase());

        // Update the UI
        if (tempElement && descElement) {
            tempElement.innerText = `${temp}°F`;
            descElement.innerText = formattedDesc;
        }

        // --- NEW ICON UPDATE LOGIC ---
        if (iconElement && picture[iconCode]) {
            iconElement.src = picture[iconCode];
        }
        // -----------------------------

    } catch (error) {
        console.error("RhodyWeather Widget Error:", error);
        
        if (tempElement && descElement) {
            tempElement.innerText = "Live";
            descElement.innerText = "RhodyWeather";
        }
    }
}

updateWeather();
setInterval(updateWeather, 600000);