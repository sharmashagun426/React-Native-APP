import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {StatusBar} from 'react-native';

function Dashboard() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        style={styles.image}
        source={require('../../assets/images/friends.png')}
      />
      <Text style={styles.TextStyle}>Welcome to Dashboard</Text>
      <Text style={styles.TextStyle}>
        Coming Soon Chat Application For Your Gang.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#307ecc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    // flex: 1,
    //marginTop: 40,
    // marginBottom: 40,
    width: '40%',
    height: 150,
  },
  TextStyle: {
    color: 'Red',
    fontSize: 14,
    fontWeight: 'bold',
    // flex: 1,
    marginTop: 30,
  },
});
export default Dashboard;
