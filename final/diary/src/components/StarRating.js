
{/* <FontAwesome name="star" size={24} color="black" /> */}
{/* <FontAwesome name="star-o" size={24} color="black" /> */}

import React, {useState} from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import StarIcon from './StarIcon'

const StarRating = () => {
    const [currentState, setCurretState] = useState(0)
  return (
    <View>
      {/* <Text>Movie rating</Text>
      <View style={styles.starLayout}>
        <StarIcon isFilled={false} />
        <StarIcon isFilled={true}/>
      </View> */}
      <View style={styles.starLayout}>
            {Array.from({ length: 5 },(_,index) => (
                <TouchableOpacity key={index} onPress={() => setCurretState(index + 1)}>
                    <StarIcon isFilled={index < currentState} />
                </TouchableOpacity>
            ))}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    starLayout: {
        display: "flex",
        flexDirection: "row"
    }
})
export default StarRating

