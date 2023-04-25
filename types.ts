import { ImageSourcePropType } from "react-native";

export type RootTabParamList = {
  home: undefined;
  expenses : undefined;
  portfolio: undefined;
  bank_accounts: undefined;
  more: undefined;
};

export type RootStackParamList = {
  Root: undefined;
}

export type HomeStackParamList = {
  Home: undefined;
}

export type ExpensesStackParamList = {
  Root: undefined;
  AllCategories: undefined;
};

export type ExpensesCardType = {
  id: number;
  title: string;
  text: string;
  image: ImageSourcePropType;
}

export type PieChartDataType = {
  x: string,
  y: number
}

export type HomeCardType = {
  name: string;
  type: string;
  icon: ImageSourcePropType;
  amount: number;
}