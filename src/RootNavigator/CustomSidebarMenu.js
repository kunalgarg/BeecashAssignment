//This is an example code for Navigation Drawer with Custom Side bar//
//This Example is for React Navigation 3.+//
import React, { Component, useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, FlatList, Platform } from 'react-native';
import { eventData } from '../Helper/Data'
import DraggableFlatList from 'react-native-draggable-flatlist'
import { getEventData, setEvent } from '../Helper/Store'

const EventListItems = (item) => {
  return (
    <View style={{ flex: 1, margin: 2 }}>
      <View style={styles.childView}>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Image
              style={{ width: 80, height: 60, alignSelf: 'center' }}
              source={item.image}
            />
          </View>
          <View>
            <Text style={{
              fontSize: 14,
              margin: 1,

            }}> {item.event}</Text>

            <Text style={{
              fontSize: 13,
              margin: 1,
            }}> {item.place}</Text>
            <Text style={{
              fontSize: 13,
              margin: 1,
            }}> {item.entry}</Text>
          </View>

        </View>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  fontBold: {
    fontWeight: 'bold',
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

const CustomSidebarMenu = (props) => {

  const [flatlistData, setFlatlistData] = useState([])

  const setEventData = async () => {
    const data = await getEventData()
    console.log('dddd', data)
    if (data === null || data === 'undefined') {
      await setEvent(eventData)
      getEvents()
    }
  }

  const getEvents = async () => {
    console.log('eeeee')
    const data = await getEventData()
    setFlatlistData(data)
  }

  useEffect(() => {
    setEventData()
    getEvents()

  }, [])

  return (
    <View style={{ flex: 1, justifyContent: 'center', marginTop: 50 }}>

      {eventData.length > 0 ? <DraggableFlatList
        data={flatlistData}
        numColumns={1}
        scrollEnabled={false}
        renderItem={({ item, drag }) =>
          <TouchableOpacity activeOpacity={0.8} onPress={() => {
            props.navigation.closeDrawer()
            props.navigation.navigate('EventDetails', { item: item })
          }} onLongPress={drag} >
            {EventListItems(item)}
          </TouchableOpacity >
        }
        keyExtractor={(item, index) => `draggable-item-${item.event}`}
        onDragEnd={({ data }) => { setFlatlistData(data) }}
      /> : <View>
          <Text style={[styles.textStyle, styles.listNotAvailableStyle]}>Data not found.</Text>
        </View>}
    </View >
  )
}
export default CustomSidebarMenu;