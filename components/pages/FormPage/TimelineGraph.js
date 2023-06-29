import { Progress } from "antd";
import React, { useEffect, useState } from "react";

const TimelineGraph = ({ value }) => {
  const [options, setOptions] = useState({ percent: value });

  useEffect(() => {
    if (value < 30) {
      setOptions({
        percent: value,
        strokeColor: "red",
      });
    } else if (value > 30 && value < 60) {
      setOptions({
        percent: value,
        strokeColor: "green",
      });
    } else {
      setOptions({
        percent: value,
        strokeColor: "red",
      });
    }
  }, [value]);

  return (
    <>
      <Progress {...options} showInfo={false} />
    </>
  );
};

export default TimelineGraph;
