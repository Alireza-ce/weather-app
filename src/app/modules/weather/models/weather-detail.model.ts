export interface WeatherDetail {
    cod: string;
    message: number;
    cnt: number;
    list: List[];
    city: City;
  }
  
  interface City {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    timezone: number;
    sunrise: number;
    sunset: number;
  }
  
  interface Coord {
    lat: number;
    lon: number;
  }
  
export interface List {
    dt: number;
    main: Main;
    url?:string;
    weather: Weather[];
    clouds: Clouds;
    wind: Wind;
    visibility: number;
    pop: number;
    sys: Sys;
    dt_txt: string;
  }
  
  interface Sys {
    pod: string;
  }
  
  interface Wind {
    speed: number;
    deg: number;
  }
  
  interface Clouds {
    all: number;
  }
  
  interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
  
  interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  }
  