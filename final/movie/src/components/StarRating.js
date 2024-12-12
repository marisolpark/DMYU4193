import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import StarIcon from './StarIcon'

const StarRating = (props) => {
    const {rating, setRating} = props
  return (
    <View>
      <View style={styles.starLayout}>
            {Array.from({ length: 5 },(_,index) => (
                <TouchableOpacity key={index} onPress={() => setRating(index + 1)}>
                    <StarIcon isFilled={index < rating} />
                </TouchableOpacity>
            ))}
        </View>
    </View>
  )
}

const StarRatingDisplay = ({rating}) => {
    return (
        <View>
          <View style={styles.starLayout}>
                {Array.from({ length: 5 },(_,index) => (
                    <StarIcon key={index} isFilled={index < rating} />
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
export {StarRatingDisplay}

