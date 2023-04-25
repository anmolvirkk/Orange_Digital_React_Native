import React from "react";
import { View } from "react-native";
import { VictoryPie, VictoryLegend } from "victory-native";
import { PieChartDataType } from "../../../types";

const data: PieChartDataType[] = [
  { x: "Rent", y: 25 },
  { x: "Restaurants", y: 20 },
  { x: "Drinks", y: 30 },
  { x: "Uber", y: 10 },
  { x: "Groceries", y: 15 }
];

const PieChart : React.FC = () => {
  const colorScale = ["#FF8E9B", "#219FF6", "#9ED764", "#FFD38C", "#FF8711"]
  return (
    <View style={{ backgroundColor: '#fff', marginTop: 12, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ alignItems: "center", marginTop: -40, justifyContent: 'center' }}>
        <VictoryPie
          data={data}
          colorScale={colorScale}
          innerRadius={70}
          labelRadius={100}
          labels={({ datum } : {datum: PieChartDataType}) => `${datum.y}%\n${datum.x}`}
          style={{ labels: { fontSize: 14, fill: '#ffffff' } }}
        />
        <View
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: [{ translateX: - 80 }, { translateY: - 80 }],
            width: 160,
            height: 160,
            borderRadius: 100,
            backgroundColor: "rgba(240,240,240,0.5)"
          }}
        />
      </View>
      <View style={{marginTop: -40}}>
        <VictoryLegend
          x={0}
          y={0}
          orientation="horizontal"
          gutter={15}
          colorScale={colorScale}
          data={data.map(d => ({ name: d.x }))}
          height={30}
        />
      </View>
    </View>
  );
};

export default PieChart;