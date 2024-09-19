import React, { useEffect, useState } from "react"; // Ensure 'useState' is imported
import axios from "../../utils/access"; // Ensure axios is imported from your utils folder
import requests from "../../utils/request"; // Ensure correct import of requests
import "./banner.css"; // Ensure correct path for CSS import

const Banner = () => {
  const [movies, setMovies] = useState({}); // Fix: useState destructuring with []

  useEffect(() => {
    (async () => {
      // Corrected 'asyne' to 'async'
      try {
        const request = await axios.get(requests.fetchNetflixOriginals); // Fixed 'malt' to 'await' and typo in 'fetchNetflixOriginals'

        setMovies(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error); // Error handling
      }
    })();
  }, []); // Empty dependency array means the effect runs once when component mounts

  // Truncate function to shorten text
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str; // Fix in function, 'substr' instead of 'sub export'
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover", // Added quotes for valid CSS property
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`, // Use proper movie image
        backgroundPosition: "center", // Added quotes for valid CSS property
        backgroundRepeat: "no-repeat", // Added quotes for valid CSS property
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_titles">
          {movies?.title || movies?.name || movies?.original_name}{" "}
          {/* Fixed logical OR */}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(movies?.overview, 150)}
        </h1>{" "}
        {/* Fixed syntax for truncate */}
      </div>
      <div className="banner_fadeBottom" /> {/* Fade effect div */}
    </div>
  );
};

export default Banner;
