import axios from 'axios'

const URL = 'http://api.openweathermap.org/data/2.5/weather'
const API_Key = 'bfa294572295d97adca32fc157ad8185'

export fetchWeather = async (query) => {
  const {data} = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_Key,
    }
  })

  return data
}
