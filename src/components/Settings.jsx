import { useContext, useState } from "react";
import ThemeContext from "../context/theme.context";
import WeatherContext from "../context/weather.context";
import { MEASUREMENT_SYSTEMS } from "../constans";
import "../styles/components/Settings.scss";

const Settings = () => {
  const [openSettings, setOpenSettings] = useState(false);

  const { dark, setDark, saveThemeLocalStorage } = useContext(ThemeContext);

  const { measurementSystem, setMeasurementSystem } = useContext(WeatherContext);

  const changeMeasurementSystem = (system) => {
    setMeasurementSystem(system)
    setOpenSettings(false)
  }

  const toggleTheme = () => {
    setDark((prevDark) => !prevDark);
    saveThemeLocalStorage(!dark);
  };

  return (
    <div className="Settings">
      <div className="theme-toggler">
        <div onClick={toggleTheme} className="theme-buttons">
          <div className={`light-theme-btn ${dark ? "" : "active"}`}>
            <i className="bi bi-sun"></i>
          </div>
          <div className={`dark-theme-btn ${dark ? "active" : ""}`}>
            <i className="bi bi-moon"></i>
          </div>
        </div>
      </div>
      <div
        className="settings-btn"
        onClick={() => setOpenSettings((prevVal) => !prevVal)}
      >
        <i className={`bi bi-gear${openSettings ? "-fill" : ""}`}></i>
      </div>

      <div className={`settings-menu ${openSettings ? "open" : ""}`}>
        <div className="measurement-systems">
          <h4>Measurement system: </h4>
          <div className="systems">
            {Object.values(MEASUREMENT_SYSTEMS).map((system) => (
              <div
                className={`system ${system === measurementSystem ? "active" : ''}`}
                key={system}
                onClick={() => changeMeasurementSystem(system)}
              >
                {system}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
