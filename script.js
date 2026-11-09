const apiURL = "https://api.open-meteo.com/v1/forecast?latitude=33.8933&longitude=35.5016&hourly=temperature_2m&current=temperature_2m";

fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
        let temperature = data.current.temperature_2m;
        document.querySelector("#temperature").textContent = temperature + "°C";
        
        if (temperature < 15) {
            document.body.className = "cold";

            document.querySelector("#message").textContent = "Wear a jacket today.";
        } else if (temperature < 25) {
            document.body.className = "mild";

            document.querySelector("#message").textContent = "A light sweater should be fine.";
        } else {
            document.body.className = "hot";

            document.querySelector("#message").textContent = "Wear something light and stay hydrated.";

        }

    });

