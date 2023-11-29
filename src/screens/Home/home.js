import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

export default function Home() {
 return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Ola</Text>

        <TouchableOpacity style={styles.profile} activeOpacity={0.7}>
          <FontAwesome name='user' color={'#648374'} size={22} style={styles.userIcon}/>
        </TouchableOpacity>
      </View>
   </View>
  );
}


const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#1e2025',
  },

  header: {
    paddingVertical: 60,
    backgroundColor: '#afc186',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  headerTitle: {
    marginTop: 10,
    marginLeft: 40,
    fontSize: 20,
  },  

  profile:{
    position: 'absolute',
  },

  userIcon: {
    backgroundColor: '#e3e5d8',
    textAlign: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
    marginTop: 70,
    marginLeft: 370,
    paddingTop: 5,
    borderRadius: 30,
  },
});