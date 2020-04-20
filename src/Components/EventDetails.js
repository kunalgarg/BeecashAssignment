
import React, { useEffect, useRef, useContext, useState, memo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, Dimensions, Platform } from 'react-native';

const EventDetails = (props) => {

    const item = props.navigation.state.params.item

    return (
        <View style={{ flex: 1, margin: 4 }}>
            <Image
                style={{ width: Dimensions.get('window').width - 8, height: Dimensions.get('window').width, alignSelf: 'center' }}
                source={item.image}
            />

            <Text style={{
                fontSize: 30,
                margin: 3,
                color: 'black',
                fontStyle: 'italic'
            }}>{item.event}</Text>

            <Text style={{
                fontSize: 18,
                margin: 3,
                color: 'black',
            }}>{item.place}</Text>
            <Text style={{
                fontSize: 16,
                margin: 3,
                color: 'black',
            }}>{item.entry}</Text>

        </View >
    )
}

EventDetails.navigationOptions = ({ navigation }) => ({
    title: "Event Details",
    headerTintColor: 'black',
    headerBackTitle: null,
    headerStyle: {
        borderBottomWidth: 0
    },
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18
    },
});

export default EventDetails;