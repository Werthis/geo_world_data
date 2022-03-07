import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
// import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import "./Navbar.css";
import countries from "../../data/countries_from_json";

const Navbar = () => {
  function countryToFlag(isoCode) {
    return typeof String.fromCodePoint !== "undefined"
      ? isoCode
          .toUpperCase()
          .replace(/./g, (char) =>
            String.fromCodePoint(char.charCodeAt(0) + 127397)
          )
      : isoCode;
  }

  return (
    <nav className="navbar">
      <h1>Geo data App</h1>
      <div>
        <Autocomplete
          id="country-select-demo"
          style={{ width: 300 }}
          options={countries}
          // classes={{
          //   option: classes.option,
          // }}
          autoHighlight
          getOptionLabel={(option) => option.label}
          renderOption={(option) => (
            <React.Fragment>
              <span>{countryToFlag(option.code)}</span>
              {option.label} ({option.code}) +{option.phone}
            </React.Fragment>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose a country"
              variant="outlined"
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              }}
            />
          )}
        />{" "}
      </div>
      <div className="buttons">
        <button>Button</button>
      </div>
    </nav>
  );
};

export default Navbar;
