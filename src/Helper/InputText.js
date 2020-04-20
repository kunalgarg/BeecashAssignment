import React, { useState, useEffect, useRef, memo } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from './Colors'
import { InputGroup, Input } from 'native-base';
import {
    TextField,
} from 'react-native-material-textfield';
const InputText = (props) => {
    const fieldRef = useRef(null);
    useEffect(() => {
        let { current: field } = fieldRef;
        field.setValue(props.displayValue)
    }, [props.displayValue])


    return (
        <View style={props.disabled ? styles.parentViewDisbaled : styles.parentViewEnabled}>

            <TextField
                label={props.title}
                tintColor='rgba(76, 90, 82, 1)'
                containerStyle={styles.containerStyle}
                inputContainerStyle={styles.containerStyle}
                labelTextStyle={styles.labelTextStyle}
                ref={fieldRef}
                keyboardType={props.keyboardType && props.keyboardType || 'default'}
                disabled={props.disabled && props.disabled || false}
                onChangeText={(text) => props.onChangeText(text)}
            />

            {props.hasError && <Text style={styles.errorTextStyle}>{props.errorText}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    parentViewEnabled: {
        backgroundColor: Colors.AppBgColor
    },
    parentViewDisbaled: {
        backgroundColor: Colors.AppBgColor
    },
    textColorRed: {
        color: 'red'
    },
    containerStyle: {
        marginLeft: 6,
        marginRight: 6,
        height: 50
    },
    labelTextStyle: {
        height: 30,
        marginTop: -15
    },
    header: {
        flexDirection: 'row'
    },
    headerTitle: {
        marginTop: 8,
        paddingLeft: 4
    },
    headerAsterisk: {
        marginTop: 8,
        paddingLeft: 2,
        color: 'red'
    },
    inputText: {
        marginLeft: -5,
        paddingBottom: 2,
        borderWidth: 1,
        borderColor: Colors.INPUT_BORDER_GRAY,
        height: 32,
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 16
    },
    errorTextStyle: {
        color: 'red',
        marginTop: 2,
        fontSize: 12,
        marginLeft: 12,

    }
});

export default memo(InputText);





