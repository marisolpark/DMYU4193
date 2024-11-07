import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BoxModelScreen = () => {
  return (
    <View>
      <Text>BoxModelScreen</Text>
      <View style={styles.parentStyle}>
        <Text style={styles.childOneStyle}>Child 1</Text>
        <Text style={styles.childTwoStyle}>Child 2</Text>
        <Text style={styles.childThreeStyle}>Child 3</Text>
        <Text style={styles.lastChild}>Last Child</Text>
      </View>
      <Text>With flexbox</Text>
      <View style={styles.parentFlexBox}>
        <Text style={styles.childOneFlex}>Child 1</Text>
        <Text style={styles.childTwoFlex}>Child 2</Text>
        <Text style={styles.childThreeFlex}>Child 3</Text>
      </View>
      <Text>With positioning</Text>
      <View style={styles.parentStyle}>
        <Text style={styles.childOneStyle}>Child 1</Text>
        <Text style={styles.childTwoStyle}>Child 2</Text>
        <Text style={styles.childThreeStyle}>Child 3</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    parentStyle: {
        marginVertical: 30,
        marginHorizontal: 15,
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    childOneStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'red',
        // the property flex will try to cover up all the area in can
        flex: 1,
    },

    childTwoStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        alignSelf: 'flex-end',
        flex: 1,
    },

    childThreeStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'blue',
        flex: 2,
    },

    lastChild: {
        backgroundColor: 'purple',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,

    },

    parentFlexBox: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 30,
        marginHorizontal: 15,
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        justifyContent: 'space-between',
        padding: 10,
    },

    childOneFlex: {
        height: 70,
        width: 70,
        backgroundColor: 'red',
    },

    childTwoFlex: {
        height: 70,
        width: 70,
        backgroundColor: 'green',
        alignSelf: 'flex-end'
    },

    childThreeFlex: {
        height: 70,
        width: 70,
        backgroundColor: 'blue',    },
})
export default BoxModelScreen