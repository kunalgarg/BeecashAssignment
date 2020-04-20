import AsyncStorage from '@react-native-community/async-storage';

export async function setEvent(data) {
    console.log('data = = = ', data)
    try {
        await AsyncStorage.setItem('event_data', JSON.stringify(data))
            .then(() => {
                console.log('event date is saved successfully = ', data)
            })
            .catch(() => {
                console.log('There was an error saving the data')
            })
    }
    catch (error) {
        console.log('error = ', error);
    }
}

export async function getEventData() {
    try {
        let value = await AsyncStorage.getItem('event_data')
        return JSON.parse(value)

    }
    catch (error) {
        console.log('error = ', error);
    }
}

