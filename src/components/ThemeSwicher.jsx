import React from "react";

const ThemeSwicher = ({ dark, setDark }) => {
  return (
    <header className="flex between">
      <h1>Todo</h1>
      <button
        className="theme-switcher"
        onClick={() => {
          setDark((prev) => !prev);
        }}
      >
        <img
          src={dark ? "./images/icon-moon.svg" : "./images/icon-sun.svg"}
          alt="icon-sun"
        />
      </button>
    </header>
  );
};

export default ThemeSwicher;
