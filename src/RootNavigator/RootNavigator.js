import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { View, Dimensions, TouchableOpacity, } from 'react-native';
import CustomSidebarMenu from './CustomSidebarMenu';


import LandingPage from '../Components/LandingPage';
import EventDetails from '../Components/EventDetails'
import Login from '../Login/Login';

class NavigationDrawerStructure extends Component {
    //Top Navigation Header with Donute Button
    toggleDrawer = () => {
        //Props to open/close the drawer
        this.props.navigationProps.toggleDrawer();
    };
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    {/* <Icon name={'menu'} size={30} color={'gray'} style={{ width: 26, height: 26, marginLeft: 10 }} /> */}
                </TouchableOpacity>
            </View>
        );
    }
}


//Stack Navigator for the First Option of Navigation Drawer
const mainStackNav = createStackNavigator({
    //All the screen from the First Option will be indexed here
    Landing: {
        screen: LandingPage,
        navigationOptions: ({ navigation }) => ({
            title: 'Dashboard',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                borderBottomWidth: 0
            },
            headerTintColor: 'black',
            headerBackTitle: null,


        }),
    },
    EventDetails: { screen: EventDetails }
});

//Drawer Navigator Which will provide the structure of our App
const DrawerNavigator = createDrawerNavigator(
    {
        //Drawer Optons and indexing
        NavScreen1: {
            screen: mainStackNav,
        }
    },
    {
        //For the Custom sidebar menu we have to provide our CustomSidebarMenu
        contentComponent: CustomSidebarMenu,
        //Sidebar width
        drawerWidth: Dimensions.get('window').width - 120,
        drawerPosition: 'right'
    }
);

DrawerNavigator.navigationOptions = ({ navigation, screenProps }) => ({
    header: null
});

const RootNavigator = createStackNavigator(
    {
        Login: { screen: Login },
        LandingPage: { screen: DrawerNavigator },
    },
    {
        headerLayoutPreset: 'center',
        initialRouteName: 'Login',
    },
);


export default createAppContainer(RootNavigator);
