

import React, { memo, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, FlatList, Platform } from 'react-native';
import { eventData } from '../Helper/Data'
import { getEventData, setEvent } from '../Helper/Store'
const EventListItems = (item) => {
    return (
        <View style={{ flex: 1, margin: 2 }}>
            <View style={styles.childView}>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Image
                            style={{ width: 100, height: 80, alignSelf: 'center' }}
                            source={item.image}
                        />
                    </View>
                    <View>
                        <Text style={{
                            fontSize: 22,
                            margin: 2,
                            fontStyle: 'italic'

                        }}> {item.event}</Text>

                        <Text style={{
                            fontSize: 13,
                            margin: 2,
                        }}>  {item.place}</Text>
                        <Text style={{
                            fontSize: 13,
                            margin: 2,
                        }}>  {item.entry}</Text>
                    </View>

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

const EventListView = (props) => {
    const [flatlistData, setFlatlistData] = useState([])
    const getEvents = async () => {
        const data = await getEventData()
        setFlatlistData(data)
    }

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>

            {eventData.length > 0 ? < FlatList
                data={flatlistData}
                numColumns={1}
                scrollEnabled={true}
                renderItem={({ item }) =>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('EventDetails', { item: item })}>
                        {EventListItems(item)}
                    </TouchableOpacity >
                } /> : <View>
                    <Text style={[styles.textStyle, styles.listNotAvailableStyle]}>Data not found.</Text>
                </View>}
        </View >
    )
}




export default EventListView;