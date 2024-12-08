import { StyleSheet, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'

const StarIcon = (props) => {
    const {isFilled} = props
    return (
        <View>
            {isFilled ? 
            <FontAwesome name="star" size={50} color="black" /> :
            <FontAwesome name="star-o" size={50} color="black" />
            }
        </View>
    )
}
export default StarIcon

const styles = StyleSheet.create({})