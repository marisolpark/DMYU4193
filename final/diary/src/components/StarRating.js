import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import StarIcon from './StarIcon'

//component with the functionality to rate and edit the number of filled in starts based on a 
//press the the specified star
const StarRating = (props) => {
    //recienves this information from the postForm
    const {rating, setRating} = props
  return (
    <View>
      <View style={styles.starLayout}>
        {/* the array prints out 5 StarIcon starts and assigns an inted to each one going from 0-4.
        Initially, it will print out the stats that match the passed raitning, this might vary depending if it 
        is an edit of creating screen. When a specific star is pressed it triggers the onpress, which will modify 
        the star to it's index + 1 and will cause the filled start number to shift to since it is dependent on 
        the index in relation to the selected raiting */}
            {Array.from({ length: 5 },(_,index) => (
                <TouchableOpacity key={index} onPress={() => setRating(index + 1)}>
                    <StarIcon isFilled={index < rating} />
                </TouchableOpacity>
            ))}
        </View>
    </View>
  )
}

//component that simply prints out the expected start based on the rating prop it recieves from the database
const StarRatingDisplay = ({rating}) => {
    return (
        <View>
        {/* uses a similar mechanism to print out the starts but does not have an touchable opacity since 
        we do not want this results to change. You need to go to the editing page for that */}
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

