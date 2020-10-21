import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'


function HeaderDesign(){
    return (
        <View>
            <Text style={styles.textHeader}>Cronômetro Nubank</Text>
        </View> 
    )
}

export default class Header extends Component {
    render() {
      return (
        <View style={styles.header}>

            <HeaderDesign/>
          
        </View>
      );
    }
    
  }

const styles = StyleSheet.create({
  
    header: {
        flex: 1,
        backgroundColor: '#ab50ca',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
      },

    textHeader: {
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold',
        
    },
  
    
  })