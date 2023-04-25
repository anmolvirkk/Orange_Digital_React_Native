import { View } from "react-native"
import { HomeCardType } from "../../../types"
import Card from "./Card"

const CardList = ({cashData}: {cashData: HomeCardType[]}) => {
  return (
    <View>
      {cashData.map((card, i) => (
        <Card
          key={i}
          {...card}
        />
      ))}
    </View>
  )
}

export default CardList