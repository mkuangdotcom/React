const apiKey = '4dfeaf4809f242c58a073811240506';
const apiURL = params =>`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.country}&days=${params.days}&aqi=no&alerts=no`;

const apiCall = async (URL) => {
    const options = {
        method: 'Get',
        url: URL
    }
    try {
        const response = await axios.request(options);
        return response.data;
    } catch(err) {
        console.log('error',err);
        return null;
    }
}

export const fetchWeatherForecast = params => {
    return apiCall(apiURL(params));
}