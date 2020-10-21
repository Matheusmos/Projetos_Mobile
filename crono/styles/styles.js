import StyleSheet from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8a05be',
    alignContent: 'center',
    alignItems: 'center',
  },
  timer: {
    color: 'coral',
    fontSize: 70,
    fontWeight: '200'
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTitle: {
    fontSize: 19,
  },
  scrollView: {
    paddingTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;