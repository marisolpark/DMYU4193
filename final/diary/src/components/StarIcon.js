import { StyleSheet, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'

const StarIcon = (props) => {
    const {isFilled} = props
    return (
        <View>
            {isFilled ? 
            <FontAwesome name="star" size={30} color="#f5ba00" /> :
            <FontAwesome name="star-o" size={30} color="#f5ba00" />
            }
        </View>
    )
}
export default StarIcon

const styles = StyleSheet.create({})