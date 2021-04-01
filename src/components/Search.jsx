//NPM Packages
import React from "react";

export default function Search() {
  return (
    <form className="search-form">
      <label htmlFor="trackNumber">Enter your tracking number </label>
      <input className="search-bar" type="text" />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
}
