import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function CardShuriken() {

  const [info, setInfo] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Shurikens")
      .then((response) => response.data)
      .then((data) => {
        setInfo(data[0]);
      });
  }, []);

  return (
    <div>
      <div className="CardShuriken">
        <div>{info.name}</div>
        <div>{info.weight}</div>
        <div>{info.mass}</div>
        <div>{info.dateofproduct}</div>
        <div>{info.name}</div>
        <div>{info.name}</div>
      </div>
    </div>
  );
}

export default CardShuriken;
