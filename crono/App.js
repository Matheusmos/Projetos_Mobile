import React, {Component} from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import moment from 'moment'
import Header from './componentes/Header'
import Footer from './componentes/Footer'
//import styles from './styles/styles'


function Timer ({interval, style}){
  const k = (n) => n < 10 ? '0' + n : n
  const duration = moment.duration(interval)
  const cent = Math.floor(duration.milliseconds() / 10)

  return (
    <View style={styles.container2}>
      
      <Text style={style}>{k(duration.minutes())}:</Text>
      <Text style={style}>{k(duration.seconds())},</Text>
      <Text style={style}>{k(cent)}</Text>
      
    </View>
  )
}

function Sbutton({title, color, background, onPress, disabled}){
  return (
    <TouchableOpacity 
      onPress={() => !disabled && onPress()}
      style={[styles.button,{background}]}
      activeOpacity={disabled ? 1.0 : 0.7}
    >
      <View style={styles.btnBorder}>
        <Text style = {[styles.btnTitle, {color}]}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

function Rbutton({title, color, background, onPress, disabled}){
  return (
    <TouchableOpacity 
      style={[styles.Rbutton,{background}]}
      onPress={() => !disabled && onPress()}
      activeOpacity={disabled ? 1.0 : 0.7}
    >
      <View style={styles.RbtnBorder}>
        <Text style = {[styles.btnTitle, {color}]}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

function StopBtn({title, color, background, onPress, disabled}){
  return (
    <TouchableOpacity 
      style={[styles.stopBtn,{background}]}
      onPress={() => !disabled && onPress()}
      activeOpacity={disabled ? 1.0 : 0.7}
    >
      <View style={styles.stopBorder}>
        <Text style = {[styles.btnTitle, {color}]}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

function BtnRow({children}){
  return(
  <TouchableOpacity style={styles.BtnRow}>{children}</TouchableOpacity>
  )
}

function Lap({numero, interval}){

  return(
    <View style={styles.lap}>
      <Text style={styles.lapText}>Volta {numero}</Text>
      <Timer style={[styles.lapText, styles.lapTimer]} interval = {interval} />
    </View>
  )
}

function LapsTable({laps, timer }){
  return(
    <ScrollView style={styles.scroll}>
      {laps.map((lap, index) => (
        <Lap 
          numero={laps.length - index} 
          key={laps.length - index} 
          interval = {index == 0 ? timer + lap : lap} 
        />
      ))}
    </ScrollView>
  )
}
export default class App extends Component {


  constructor(props){
    super(props)
    this.state = {
      inicio: 0,
      agora: 0,
      laps: [],
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  start = () => {
    const agora = new Date().getTime()
    this.setState({
      inicio: agora,
      agora,
      laps: [0],
    }) 
    this.timer = setInterval(() =>{
      this.setState({agora: new Date().getTime()})
    }, 100)
  }

  resume = () => {
    const times = new Date().getTime()
    this.setState({
      inicio: times,
      times,
    })
    this.timer = setInterval(() => {
      this.setState({ agora: new Date().getTime()})
    }, 100)
  }

  stop = () => {
    clearInterval(this.timer)
    const {laps, agora, inicio} = this.state
    const [firstLap, ...other] = laps
    this.setState({
      laps: [firstLap + agora - inicio, ...other],
      inicio: 0,
      agora: 0,
    })
  }

  lap = () => {
    const times = new Date().getTime()
    const{laps, agora, inicio} = this.state
    const [firstLap, ...other] = laps
    this.setState({
      inicio: times,
      agora: times,
      laps: [0, firstLap + agora - inicio, ...other],
      
    })
  }

  reset = () => {
    this.setState({
      inicio: 0,
      agora: 0,
      laps: [],
      
    })
  }

  render(){
    const {inicio, agora , laps} = this.state
    const timer = agora - inicio
    return (
      
      <View style={styles.container}>
        <StatusBar hidden/>
        <Header />
        <ScrollView style={styles.ScrollView}>
          <View style={styles.crono}>

            <Timer 
              interval = {laps.reduce((total, curr) => total + curr, 0)+ timer} 
              style = {styles.timer}
            />

            {laps.length == 0 && (
              <Sbutton 
              title= 'Início' 
              color='white' 
              background = 'coral'
              onPress={this.start}/>
            )}
            

            {agora > 0 && (
              
              <StopBtn 
                title='Stop' 
                color = 'black' 
                background = 'red'
                onPress={this.stop}/>

               
            )}

            {laps.length == 0 && (
              <BtnRow>
              
                <Rbutton 
                  title='Reset' 
                  color='coral' 
                  background= 'white'
                  disabled
                />
            
              </BtnRow>
            )}

            {agora > 0 && (
              
              <BtnRow>
              
                <Rbutton 
                  title='Circuito' 
                  color='coral' 
                  background= 'white'
                  onPress={this.lap}
                />
            
              </BtnRow>

               
            )}
            {laps.length > 0 && agora === 0 && (
              <Sbutton 
              title= 'Início' 
              color='white' 
              background = 'coral'
              onPress={this.resume}/>
            )}
            {laps.length > 0 && agora === 0 &&(
              <BtnRow>
              
                <Rbutton 
                  title='Reset' 
                  color='coral' 
                  background= 'white'
                  onPress={this.reset}
                />
            
              </BtnRow>
            )}
            
            <LapsTable laps={laps} timer={timer} />
          </View>
        </ScrollView>
        <Footer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8a05be',
    alignContent: 'center',
    alignItems: 'center',
  },
  container2:{
    flexDirection: 'row'
  },
  timer: {
    color: 'coral',
    fontSize: 70,
    fontWeight: '200',
    alignSelf: 'center',
    width: 100
  },
  button: {
    width: 160,
    height: 160,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
    marginRight: 50,
  },
  btnTitle: {
    fontSize: 19,
  },
  btnBorder: {
    width: 152,
    height: 152,
    borderRadius: 76,
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Rbutton:{
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  RbtnBorder: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 2,
    borderColor: 'coral',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stopBtn:{
    width: 160,
    height: 160,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
    marginRight: 50,
  },
  stopBorder: {
    width: 152,
    height: 152,
    borderRadius: 76,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  BtnRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
  },
  lapText: {
    color: 'coral',
    fontSize: 19,
    
  },
  lapTimer: {
    width: 28,
  },
  lap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'coral',
    borderTopWidth: 1,
    paddingVertical: 10,
  },
  scroll: {
    alignSelf: 'stretch',
    width: '100%'
  }
});


