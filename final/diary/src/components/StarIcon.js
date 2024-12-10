import { StyleSheet, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'

//this small component recives boolean prop called isFilled that allows the ternary to decide 
//to print out a filled in star or an outline
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