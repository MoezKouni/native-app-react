import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

const UserCard = ({ contact }) => {
    return (
        <View style={styles.card}>
            <Image source={{uri: contact.avatar}} style={{width: 350, height: 350, margin: 8}}/>
            <View style={styles.content}>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{contact.firstname}</Text>
                    <Text style={styles.name}>{contact.lastname}</Text>
                </View>
                <View style={styles.infos}>
                    <View>
                        <Text>{contact.email}</Text>
                        <Text>{contact.phone}</Text>
                    </View>
                    <View>
                        <Text>{contact.occupation}</Text>
                        <Text>{contact.age}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default UserCard


const styles = StyleSheet.create({
    infos:{
        flexDirection: "row",
        alignSelf: "stretch",
        justifyContent: "space-around",
        marginTop: 5
    },
    name: {
        marginRight: 5,
        fontSize: 20,
        fontWeight: 'bold'
    },
    nameContainer:{
        flexDirection: "row"
    },
    card: {
        borderRadius: 6,
        elevation: 5,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 15
    },
    content: {
        marginHorizontal: 18,
        marginVertical: 15,
        alignItems: "center"
    }
  });