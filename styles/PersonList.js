import { StyleSheet } from 'react-native'
import Colors from '../constants/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef0f3',
  },
  list: {
    marginBottom: 20,
    marginTop: -1,
  },
  spinner: {
    color: Colors.tintColor,
    fontSize: 16, marginTop: -45,
    fontWeight: 'normal',
  },
})

export default styles
