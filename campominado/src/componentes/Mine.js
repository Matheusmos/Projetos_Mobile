import React from 'react'
import {View, StyleSheet} from 'react-native'

export default props => {

    const logo = "\u2738"
    return(
        <View style={StyleSheet.container}>
            <View style={StyleSheet.coreMine}/>
            <View style={StyleSheet.line}/>
            {/* <View style={[StyleSheet.line, {transform: [{rotate: '45deg'}]}]}/>
            <View style={[StyleSheet.line, {transform: [{rotate: '90deg'}]}]}/>
            <View style={[StyleSheet.line, {transform: [{rotate: '135deg'}]}]}/> */}
            <View style={StyleSheet.line}>
                {"\u2738"}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    coreMine: {
        height: 14,
        width: 14,
        borderRadius: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    line: {
        position: 'absolute',
        height: 3,
        width: 20,
        borderRadius: 3,
        backgroundColor: 'black',
    },
})

