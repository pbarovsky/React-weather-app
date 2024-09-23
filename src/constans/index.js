export const DEFAULT_PLACE = {
  name:"Vyborg",
  place_id:"vyborg",
  adm_area1:"Leningradskaya Oblast",
  adm_area2:null,
  country:"Russia",
  lat:"60.70763N",
  lon:"28.75283E",
  timezone:"Europe/Moscow",
  type:"settlement",
}

export const MEASUREMENT_SYSTEMS = {
  AUTO: 'auto',
  METRIC: 'metric',
  UK: 'uk',
  US: 'us',
  CA: 'ca',
}

export const UNITS = {
  metric: {
    temperature: '°C',
    precipitation: 'mm/h',
    wind_speed: 'm/s',
    visibility: 'km',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
  us: {
    temperature: '°F',
    precipitation: 'in/h',
    wind_speed: 'mph',
    visibility: 'mi',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
  uk: {
    temperature: '°C',
    precipitation: 'mm/h',
    wind_speed: 'mph',
    visibility: 'mi',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
  ca: {
    temperature: '°C',
    precipitation: 'mm/h',
    wind_speed: 'km/h',
    visibility: 'km',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
};