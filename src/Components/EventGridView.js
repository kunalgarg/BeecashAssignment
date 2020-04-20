
import React, { useEffect, useRef, useContext, useState, memo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, StatusBar, Dimensions } from 'react-native';
import { eventData } from '../Helper/Data'

const EventGridItems = (item) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: (Dimensions.get('window').width - 8) / 2, margin: 2 }}>
                <View>
                    <Image
                        style={{ width: (Dimensions.get('window').width - 10) / 2, height: (Dimensions.get('window').width - 10) / 2, alignSelf: 'center' }}
                        source={item.image}
                    />
                </View>
                <View>
                    <Text style={{
                        fontSize: 20,
                        margin: 2,
                        color: 'black',
                        fontStyle: 'italic'
                    }}>{item.event}</Text>

                    <Text style={{
                        fontSize: 13,
                        margin: 2,
                        color: 'black',
                    }}>{item.place}</Text>
                    <Text style={{
                        fontSize: 13,
                        margin: 2,
                        color: 'black',
                    }}>{item.entry}</Text>
                </View>

            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    arrowViewStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 1,
        marginLeft: 0
    },
    columnViewStyle: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255,0)',
        flexDirection: 'row',
        margin: 0
    },

    fontBold: {
        fontWeight: 'bold',
    },
    parentView: {
        flexDirection: 'row',
        height: 100,
        marginLeft: 4,
        marginRight: 4,
        marginBottom: 2,
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
        borderRadius: 4
    },

    sideView: {
        width: 100,
        height: 16,
        transform: [{ rotate: '270deg' }],
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: -42,
        borderRadius: 2
    },
    sideviewTextStyle: {
        color: 'white',
        fontSize: 10,
        alignSelf: 'center',
        fontWeight: 'bold'
    },

    bgcolorGreen: {
        backgroundColor: 'green'
    },
    bgColorBrown: {
        backgroundColor: 'rgb(153, 102, 0)'
    },
    childView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginBottom: 4,
        marginTop: 3
    },
    textStyle: {
        color: 'gray',
        fontSize: 14,
        margin: 2,
    },
    listNotAvailableStyle: {
        marginTop: 30,
        alignSelf: 'center'
    },
});

const EventGridView = (props) => {
    
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            {eventData.length > 0 ? < FlatList
                data={eventData}
                numColumns={2}
                scrollEnabled={true}
                renderItem={({ item }) =>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('EventDetails', { item: item })}>
                        {EventGridItems(item)}
                    </TouchableOpacity >
                } /> : <View>
                    <Text style={[styles.textStyle, styles.listNotAvailableStyle]}>Data not found.</Text>
                </View>}
        </View >
    )
}




export default EventGridView;