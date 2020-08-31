import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import UserCard from './UserCard'

export default function App() {
  const [contacts, setContacts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://safe-contact.herokuapp.com/person/all-users')
      .then(res => res.json())
      .then(res => {
        setContacts(res)
        setIsLoading(false)
      })
      return () => {

      }

  }, [])

  return (
    isLoading ? <View style={styles.container}>
        <Text>Loading...</Text>
      </View> : <View style={styles.container}>
          <Text style={{alignSelf: "center", fontSize: 50}}>Contact App</Text>
        <ScrollView contentContainerStyle={styles.subContainer}>
        {
          contacts && contacts.map(el => <UserCard contact={el} key={el._id}/>)
        }
      <StatusBar style="auto" />
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40
  },
  subContainer: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 10
  },
});
