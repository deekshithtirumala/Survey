import { React } from "react";
import {
  TextField,
  FormLabel,
  FormGroup,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox
} from "@mui/material";

import Location from "./location";
import "./card.css";

export default function Card(props) {
  const handelCard = () => {
    if (props.type === "basic") {
      return <BasicCard />;
    } else {
      return (
        <QuestionCard
          type={props.qtype}
          quest={props.quest}
          option={props.option}
        />
      );
    }
  };
  return <div className="card">{handelCard()}</div>;
}
const styles = {
  postion: "absolute",
  left: "50%",
  transform: "translate(-50%,0)",
  paddingBottom: "10px"
};

function BasicCard() {
  return (
    <div>
      <h2>Basic Details</h2>
      <TextField
        sx={{ width: "90%" }}
        style={styles}
        id="outlined-basic"
        label="Name"
        variant="outlined"
      />
      <TextField
        sx={{ width: "90%" }}
        style={styles}
        id="outlined-basic"
        label="Email"
        variant="outlined"
      />
      <TextField
        sx={{ width: "90%" }}
        style={styles}
        id="outlined-basic"
        label="Contact Number"
        variant="outlined"
      />
      <Location />
    </div>
  );
}

const qstyle = {
  paddingTop: "20px"
};
function QuestionCard(props) {
  if (props.type === "desc") {
    return (
      <div style={qstyle}>
        <p style={{ color: "rgba(0, 0, 0, 0.6)" }}>{props.quest}</p>
        <TextField
          sx={{ width: "90%" }}
          style={styles}
          id="outlined-basic"
          label="Answer"
          variant="outlined"
        />
      </div>
    );
  } else if (props.type === "radio") {
    return (
      <div style={qstyle}>
        <FormLabel id="demo-radio-buttons-group-label">{props.quest}</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          {props.option.map((text) => (
            <FormControlLabel value={text} control={<Radio />} label={text} />
          ))}
        </RadioGroup>
      </div>
    );
  } else if (props.type === "checkbox") {
    return (
      <div style={qstyle}>
        <FormLabel component="legend">Label placement</FormLabel>
        <FormGroup aria-label="position">
          {props.option.map((text) => (
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="End"
              labelPlacement="end"
            />
          ))}
        </FormGroup>
      </div>
    );
  } else {
    return <div>props not found {props.type}</div>;
  }
}
