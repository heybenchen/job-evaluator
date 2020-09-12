import React from "react";
import "./Chart.css";

import { ResponsiveRadar } from "@nivo/radar";

const data = [
  {
    taste: "fruity",
    chardonay: 94,
    carmenere: 85,
    syrah: 94,
  },
  {
    taste: "bitter",
    chardonay: 106,
    carmenere: 87,
    syrah: 92,
  },
  {
    taste: "heavy",
    chardonay: 91,
    carmenere: 77,
    syrah: 44,
  },
  {
    taste: "strong",
    chardonay: 34,
    carmenere: 26,
    syrah: 86,
  },
  {
    taste: "sunny",
    chardonay: 57,
    carmenere: 96,
    syrah: 57,
  },
];

function Chart() {
  return (
    <div className="Chart">
      <ResponsiveRadar
        data={data}
        keys={["chardonay", "carmenere", "syrah"]}
        indexBy="taste"
        maxValue="auto"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        curve="linearClosed"
        borderWidth={2}
        borderColor={{ from: "color" }}
        gridLevels={5}
        gridShape="circular"
        gridLabelOffset={36}
        colors={{ scheme: "nivo" }}
        fillOpacity={0.25}
        blendMode="multiply"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        isInteractive={true}
        legends={[
          {
            anchor: "top-left",
            direction: "row",
            translateX: -50,
            translateY: -40,
            itemWidth: 80,
            itemHeight: 20,
            itemTextColor: "#999",
            symbolSize: 12,
            symbolShape: "square",
          },
        ]}
      />
    </div>
  );
}

export default Chart;
