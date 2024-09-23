import { useContext, useState } from "react";
import { searchPlaces } from "../api";
import "../styles/components/Search.scss";
import WeatherContext from "../context/weather.context";

const Search = () => {
  const { setPlace } = useContext(WeatherContext);
  const [text, setText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [openSearchresults, setOpenSearchresults] = useState(false);

  const onSearch = async (e) => {
    setText(e.target.value);
    const data = await searchPlaces(e.target.value);
    setSearchResults(data);
    setOpenSearchresults(data.length)
  };
  const changePlaceHandler = (place) => {
    setPlace(place);
    setText("");
    setOpenSearchresults(false)
  };

  return (
    <>
      <div className="search-container">
        <div className="search-icon">
          <i className="bi bi-search"></i>
        </div>
        <div className="search-input">
          <input
            type="text"
            name="search-city"
            placeholder="Search city..."
            value={text}
            onChange={onSearch}
          />
        </div>
        {openSearchresults && (
          <div className="search-results">
            <div className="results-container">
              {searchResults.map((place) => (
                <div
                  className="result"
                  key={place.place_id}
                  onClick={() => changePlaceHandler(place)}
                >
                  {place.name}, {place.adm_area1}, {place.country}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
