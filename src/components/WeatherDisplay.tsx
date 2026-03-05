
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CloudSun, CloudRain, Sun, MapPin, Search } from 'lucide-react';

interface WeatherData {
  location: string;
  temperature: number;
  condition: 'sunny' | 'cloudy' | 'rainy';
  humidity: number;
  windSpeed: number;
  forecast: Array<{
    day: string;
    condition: 'sunny' | 'cloudy' | 'rainy';
    high: number;
    low: number;
  }>;
}

// Simulated weather data (in a real app, this would come from an API)
const mockWeatherData: Record<string, WeatherData> = {
  "New York": {
    location: "New York, NY",
    temperature: 72,
    condition: "sunny",
    humidity: 45,
    windSpeed: 8,
    forecast: [
      { day: "Mon", condition: "sunny", high: 75, low: 60 },
      { day: "Tue", condition: "cloudy", high: 70, low: 58 },
      { day: "Wed", condition: "rainy", high: 65, low: 55 },
      { day: "Thu", condition: "cloudy", high: 68, low: 57 },
      { day: "Fri", condition: "sunny", high: 72, low: 61 }
    ]
  },
  "Los Angeles": {
    location: "Los Angeles, CA",
    temperature: 85,
    condition: "sunny",
    humidity: 35,
    windSpeed: 5,
    forecast: [
      { day: "Mon", condition: "sunny", high: 86, low: 65 },
      { day: "Tue", condition: "sunny", high: 88, low: 67 },
      { day: "Wed", condition: "cloudy", high: 82, low: 64 },
      { day: "Thu", condition: "sunny", high: 84, low: 66 },
      { day: "Fri", condition: "sunny", high: 89, low: 68 }
    ]
  },
  "Chicago": {
    location: "Chicago, IL",
    temperature: 65,
    condition: "cloudy",
    humidity: 60,
    windSpeed: 12,
    forecast: [
      { day: "Mon", condition: "cloudy", high: 66, low: 52 },
      { day: "Tue", condition: "rainy", high: 63, low: 50 },
      { day: "Wed", condition: "rainy", high: 60, low: 48 },
      { day: "Thu", condition: "cloudy", high: 64, low: 51 },
      { day: "Fri", condition: "cloudy", high: 68, low: 53 }
    ]
  },
  "Miami": {
    location: "Miami, FL",
    temperature: 88,
    condition: "rainy",
    humidity: 75,
    windSpeed: 10,
    forecast: [
      { day: "Mon", condition: "rainy", high: 86, low: 76 },
      { day: "Tue", condition: "cloudy", high: 85, low: 75 },
      { day: "Wed", condition: "sunny", high: 87, low: 77 },
      { day: "Thu", condition: "sunny", high: 89, low: 78 },
      { day: "Fri", condition: "rainy", high: 86, low: 76 }
    ]
  },
  "Seattle": {
    location: "Seattle, WA",
    temperature: 58,
    condition: "rainy",
    humidity: 80,
    windSpeed: 8,
    forecast: [
      { day: "Mon", condition: "rainy", high: 60, low: 48 },
      { day: "Tue", condition: "rainy", high: 59, low: 47 },
      { day: "Wed", condition: "cloudy", high: 62, low: 50 },
      { day: "Thu", condition: "cloudy", high: 63, low: 51 },
      { day: "Fri", condition: "rainy", high: 61, low: 49 }
    ]
  }
};

const defaultLocations = ["New York", "Los Angeles", "Chicago", "Miami", "Seattle"];

const WeatherDisplay = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("New York");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchWeatherData(selectedLocation);
  }, [selectedLocation]);

  const fetchWeatherData = (location: string) => {
    setLoading(true);
    setError(null);
    
    // Simulate API call with timeout
    setTimeout(() => {
      const data = mockWeatherData[location];
      if (data) {
        setWeatherData(data);
        setLoading(false);
      } else {
        setError(`No weather data available for ${location}. Try one of the supported cities.`);
        setLoading(false);
      }
    }, 800);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setSelectedLocation(searchInput);
    }
  };

  const getWeatherIcon = (condition: 'sunny' | 'cloudy' | 'rainy', size = 24) => {
    switch (condition) {
      case 'sunny':
        return <Sun size={size} className="text-yellow-400" />;
      case 'cloudy':
        return <CloudSun size={size} className="text-gray-400" />;
      case 'rainy':
        return <CloudRain size={size} className="text-blue-400" />;
      default:
        return <CloudSun size={size} className="text-gray-400" />;
    }
  };

  const getWeatherTip = (temperature: number, condition: 'sunny' | 'cloudy' | 'rainy') => {
    if (temperature > 85) {
      return "High temperatures may stress plants. Ensure adequate watering and consider providing shade for sensitive crops.";
    } else if (temperature < 50) {
      return "Cool temperatures may slow plant growth. Consider protecting sensitive crops or planting cold-hardy varieties.";
    } else if (condition === 'rainy') {
      return "Rainy conditions increase the risk of fungal diseases. Ensure good drainage and avoid overhead watering.";
    } else if (condition === 'sunny') {
      return "Sunny conditions are good for photosynthesis. Ensure plants have adequate water to prevent wilting.";
    } else {
      return "Cloudy conditions reduce water loss from plants. A good time for transplanting seedlings.";
    }
  };

  return (
    <div id="weather" className="py-12 bg-sky-light/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Weather Updates</h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Location</span>
              </CardTitle>
              <CardDescription>Search for a city to check the current weather</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSearch} className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Enter city name (e.g., New York, Los Angeles)"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="flex-grow"
                />
                <Button type="submit" variant="default">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </form>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {defaultLocations.map(location => (
                  <Button
                    key={location}
                    variant={selectedLocation === location ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      setSelectedLocation(location);
                      setSearchInput(location);
                    }}
                  >
                    {location}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {loading ? (
            <div className="text-center py-12">
              <p>Loading weather data...</p>
            </div>
          ) : error ? (
            <Card className="bg-red-50">
              <CardContent className="pt-6">
                <p className="text-red-600">{error}</p>
              </CardContent>
            </Card>
          ) : weatherData && (
            <>
              <Card className="mb-6 overflow-hidden">
                <div className="relative">
                  {weatherData.condition === 'sunny' && (
                    <div className="absolute inset-0 bg-gradient-to-b from-yellow-100 to-yellow-300/20 opacity-70" />
                  )}
                  {weatherData.condition === 'cloudy' && (
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-300/20 opacity-70" />
                  )}
                  {weatherData.condition === 'rainy' && (
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-blue-300/20 opacity-70" />
                  )}
                  
                  <CardContent className="pt-6 relative z-10">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold">{weatherData.location}</h3>
                        <p className="text-muted-foreground">Current Weather</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2">
                          {getWeatherIcon(weatherData.condition, 36)}
                          <span className="text-4xl font-medium">{weatherData.temperature}°F</span>
                        </div>
                        <p className="text-sm text-muted-foreground capitalize">{weatherData.condition}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                      <div className="bg-white/80 p-3 rounded-lg">
                        <p className="text-sm text-muted-foreground">Humidity</p>
                        <p className="text-xl">{weatherData.humidity}%</p>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <p className="text-sm text-muted-foreground">Wind</p>
                        <p className="text-xl">{weatherData.windSpeed} mph</p>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg sm:col-span-1 col-span-2">
                        <p className="text-sm text-muted-foreground">Feels Like</p>
                        <p className="text-xl">{weatherData.temperature + (Math.random() > 0.5 ? 2 : -2)}°F</p>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
              
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>5-Day Forecast</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-5 gap-2">
                    {weatherData.forecast.map((day, index) => (
                      <div key={index} className="flex flex-col items-center p-2">
                        <p className="font-medium">{day.day}</p>
                        <div className="my-2">{getWeatherIcon(day.condition)}</div>
                        <div className="flex gap-1 text-sm">
                          <span className="font-medium">{day.high}°</span>
                          <span className="text-muted-foreground">{day.low}°</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Growing Conditions</CardTitle>
                  <CardDescription>Weather impact on your crops</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <h4 className="font-medium mb-2">Farming Tip:</h4>
                    <p>{getWeatherTip(weatherData.temperature, weatherData.condition)}</p>
                  </div>
                  
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="font-medium mb-2">Watering Recommendation:</h4>
                      <p className="text-sm">
                        {weatherData.condition === 'rainy' 
                          ? "Rain should provide adequate water for most crops. Check drainage to prevent waterlogging."
                          : weatherData.condition === 'sunny' && weatherData.temperature > 80
                            ? "Increase watering frequency to compensate for high evaporation rate."
                            : "Follow regular watering schedule based on crop needs."}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Planting Recommendation:</h4>
                      <p className="text-sm">
                        {weatherData.condition === 'rainy' 
                          ? "Avoid planting seeds until soil dries sufficiently to prevent rot."
                          : weatherData.temperature < 60
                            ? "Focus on cold-hardy crops or use protective coverings."
                            : weatherData.temperature > 85
                              ? "Plant heat-tolerant crops and provide adequate shade and water."
                              : "Ideal conditions for planting most crops. Ensure adequate soil moisture."}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
