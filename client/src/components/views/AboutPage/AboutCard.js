import React from "react";
import { makeStyles } from "@material-ui/core";
import { Collapse } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 560,
    background: "rgba(0,0,0,0.5)",
    margin: "20px",
  },
  media: {
    width: 560,
    height: 400,
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff",
  },
  desc: {
    fontFamily: "Nunito",
    fontSize: "1.1rem",
    color: "#abfff2",
  },
});

export default function AboutCard({ place, checked }) {
  const classes = useStyles();

  return <Collapse></Collapse>;
}
