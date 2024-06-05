import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { fetchWeatherForecast } from '../api/weather';

const HomeScreen = () => {
    const [weathher, setWeather] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMyWeatherData();
    }, []);

    const fetchMyWeatherData = async () => {
        fetchWeatherForecast({
            country: 'Malaysia',
            days: '7',  
        }).then(data => {
            setWeather(data);
            setLoading(false);
        })
    }

    const { current, location, forecast } = weathher;

    const theme = {
        bgWhite: opacity => `rgba(255, 255, 255, ${opacity})`
    }

  return (
    <View className="flex-1 bg-black">
        {
            loading ? (
                <View className="flex-1 justify-center items-center">
                    <ProgressEvent.CircleSnail thickness={5} size={60} color="0bb3b2" />
                </View>
            ) : (
                <SafeAreaView className="flex-1 mt-12">
                    <View className="justify-around flex-1 my-12">
                        <Text className="text-white text-center text-2x1 font-bold mt-12">
                            {location?.name}
                            <Text className="text-lg font-semibold text-gray-300">
                                {", " + location?.country}
                            </Text>
                        </Text>
                    </View>
                </SafeAreaView>
            )
        }
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen