import { View } from "react-native"
import { ExpensesCardType } from "../../../types"
import Card from "./Card"

const CardList = ({categories}: {categories: ExpensesCardType[]}) => {
  return (
    <View>
      {categories.map((card) => (
        <Card
          key={card.id}
          {...card}
        />
      ))}
    </View>
  )
}

export default CardList