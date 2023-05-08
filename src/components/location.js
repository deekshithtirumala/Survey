import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput
} from "@mui/material";
import { useState } from "react";
import { locations, areas } from "./locationsData";

const styles = {
  postion: "absolute",
  left: "50%",
  transform: "translate(-50%,0)",
  paddingBottom: "10px"
};

export default function Location() {
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");

  const handleStateChange = (e) => {
    setState(e.target.value);
    setDistrict("");
    setCity("");
    setArea("");
  };

  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
    setCity("");
    setArea("");
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    setArea("");
  };
  const handleAreaChange = (e) => {
    setArea(e.target.value);
  };

  const renderStateOptions = () => {
    return Object.keys(locations).map((state) => (
      <MenuItem key={state} value={state}>
        {state}
      </MenuItem>
    ));
  };

  const renderDistrictOptions = () => {
    if (!state) {
      return;
    }

    return Object.keys(locations[state]).map((district) => (
      <MenuItem key={district} value={district}>
        {district}
      </MenuItem>
    ));
  };

  const renderCityOptions = () => {
    if (!state || !district) {
      return;
    }

    return locations[state][district].map((city) => (
      <MenuItem key={city} value={city}>
        {city}
      </MenuItem>
    ));
  };
  const renderAreaOptions = () => {
    if (!state || !district || !city || areas[city] === undefined) {
      return;
    }

    return areas[city].map((area) => (
      <MenuItem key={area} value={area}>
        {area}
      </MenuItem>
    ));
  };
  return (
    <div>
      <FormControl sx={{ m: 0, minWidth: "90%" }} style={styles}>
        <InputLabel id="select-state-label">State</InputLabel>
        <Select
          labelId="select-state-label"
          id="select-state"
          sx={{ width: "90%" }}
          value={state}
          label="state"
          onChange={handleStateChange}
          input={<OutlinedInput label="state" />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {renderStateOptions()}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 0, minWidth: "90%" }} style={styles}>
        <InputLabel id="select-dist-label">District</InputLabel>
        <Select
          labelId="select-dist-label"
          id="select-dist"
          sx={{ width: "90%" }}
          value={district}
          label="district"
          onChange={handleDistrictChange}
          input={<OutlinedInput label="district" />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {renderDistrictOptions()}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 0, minWidth: "90%" }} style={styles}>
        <InputLabel id="select-city-label">City</InputLabel>
        <Select
          labelId="select-city-label"
          id="select-city"
          sx={{ width: "90%" }}
          value={city}
          label="city"
          onChange={handleCityChange}
          input={<OutlinedInput label="city" />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {renderCityOptions()}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 0, minWidth: "90%" }} style={styles}>
        <InputLabel id="select-area-label">Area</InputLabel>
        <Select
          labelId="select-area-label"
          id="select-area"
          sx={{ width: "90%" }}
          value={area}
          label="area"
          onChange={handleAreaChange}
          input={<OutlinedInput label="area" />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {renderAreaOptions()}
        </Select>
      </FormControl>
    </div>
  );
}
