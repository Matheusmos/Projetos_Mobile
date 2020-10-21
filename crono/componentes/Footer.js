import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'


function FooterT({nome}){
    return (
       <View >
           <Text style={styles.textFooter}>{'\u00A9'}{nome}</Text>
       </View> 
    )
}

export default class Footer extends Component {
    render() {
      return (
        
          <View style={styles.footer}>

            <FooterT nome = 'MatheusImagine.com'/>
          
          </View>
        
      );
    }
    
  }

const styles = StyleSheet.create({
    
    footer: {
        flex: 1,
        backgroundColor: '#ab50ca',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        width: '100%'
      },

    textFooter: {
        color: 'white',
        fontWeight: 'bold',
    },
  
    
  })