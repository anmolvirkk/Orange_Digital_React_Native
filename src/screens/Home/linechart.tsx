import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { VictoryArea, VictoryAxis, VictoryChart } from "victory-native";
import expenseData from "../../../constants/expenseData";
import Colors from "../../../constants/Colors";
import addCommas from "../../utility/addCommas";

const LineChart = () => {

  const [data, setData] = useState(expenseData.slice(-365));
  const [currentTimeframe, setCurrentTimeframe] = useState('1Y')
  const [totalAmount, setTotalAmount] = useState(expenseData.slice(-365).reduce((acc, curr) => {
    return acc + curr.y
  }, 0))

  const handleDataChange = (timeFrame) => {
    let newData = [];
    switch (timeFrame) {
      case "1D":
        newData = expenseData.slice(-2)
        setTotalAmount(expenseData.slice(-2).reduce((acc, curr) => {
          return acc + curr.y
        }, 0))
        break;
      case "1W":
        newData = expenseData.slice(-7)
        setTotalAmount(expenseData.slice(-7).reduce((acc, curr) => {
          return acc + curr.y
        }, 0))
        break;
      case "1M":
        newData = expenseData.slice(-30)
        setTotalAmount(expenseData.slice(-30).reduce((acc, curr) => {
          return acc + curr.y
        }, 0))
        break;
      case "3M":
        newData = expenseData.slice(-90)
        setTotalAmount(expenseData.slice(-90).reduce((acc, curr) => {
          return acc + curr.y
        }, 0))
        break;
      case "1Y":
        newData = expenseData.slice(-365)
        setTotalAmount(expenseData.slice(-365).reduce((acc, curr) => {
          return acc + curr.y
        }, 0))
        break;
      case "All":
        newData = expenseData;
        setTotalAmount(expenseData.reduce((acc, curr) => {
          return acc + curr.y
        }, 0))
        break;
      default:
        newData = data;
    }
    setData(newData)
    setCurrentTimeframe(timeFrame)
  };

  const TimeFrameButton = ({timeframe}) => {
    return (
      <View
          onTouchStart={() => handleDataChange(timeframe)}
          style={{backgroundColor: currentTimeframe === timeframe ? Colors.grey : "transparent", ...styles.timeframe}}
        >
        <Text style={{ color: currentTimeframe === timeframe ? "#fff" : "#000", fontWeight: '600'}}>
          {timeframe}
        </Text>
      </View>
    )
  }

  return (
    <View style={{ backgroundColor: "#fff", marginTop: 12, marginLeft: 12, marginRight: 12 }}>
      <View style={{ alignItems: "center" }}>
        <Text style={{fontSize: 30, marginTop: 6}}>${addCommas(totalAmount.toString())}</Text>
        <View style={{marginTop: -30}}>
          <VictoryChart>
            <VictoryAxis
              dependentAxis
              orientation="right"
              crossAxis
              tickFormat={(t) => `${t/1000}k`}
              style={{ axis: { stroke: "none" }, tickLabels: {fill: Colors.grey} }}
            />
            <VictoryArea
              data={data}
              interpolation="cardinal"
              style={{ data: { fill: Colors.areaChart, fillOpacity: "0.25", strokeWidth: 2} }}
            />
          </VictoryChart>
        </View>
      </View>
      <View
        style={{ flexDirection: "row", justifyContent: "space-between", paddingLeft: 24, paddingRight: 24, marginTop: -40, marginBottom: 12 }}
      >
        <TimeFrameButton timeframe='1D' />
        <TimeFrameButton timeframe='1W' />
        <TimeFrameButton timeframe='1M' />
        <TimeFrameButton timeframe='3M' />
        <TimeFrameButton timeframe='1Y' />
        <TimeFrameButton timeframe='All' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timeframe: {
    width: 40, 
    height: 40, 
    borderRadius: 7, 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'
  }
})

export default LineChart;