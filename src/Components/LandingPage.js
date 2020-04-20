
import React, { useEffect, useRef, useContext, useState, memo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, StatusBar, Platform } from 'react-native';
import { Container, Tabs, Tab, TabHeading, Button, Textarea } from 'native-base';

import EventListView from './EventListView'
import EventGridView from './EventGridView'

const LandingPage = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Container style={{ borderColor: 'white', borderWidth: 0 }} height={20}>
                <Tabs tabBarUnderlineStyle={{ borderWidth: 0, backgroundColor: 'white' }} tabContainerStyle={{ height: 40 }}>
                    <Tab heading="Events list" textStyle={{ color: 'black', fontWeight: 'normal' }} activeTextStyle={{ color: 'black', fontWeight: 'bold' }}>
                        <EventListView navigation={props.navigation} />
                    </Tab>
                    <Tab heading="Event Grid" textStyle={{ color: 'black', fontWeight: 'normal' }} activeTextStyle={{ color: 'black', fontWeight: 'bold' }}>
                        <EventGridView navigation={props.navigation} />
                    </Tab>
                </Tabs>
            </Container>
        </View >
    )
}

LandingPage.navigationOptions = ({ navigation }) => ({
    headerBackTitle: null,
    headerStyle: {
        backgroundColor: 'black',
        borderBottomWidth: 0
    },
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18
    },
});

export default LandingPage;