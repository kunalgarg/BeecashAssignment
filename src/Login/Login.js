
import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as yup from 'yup';
import { Formik, Field } from 'formik';
import { Button } from 'native-base';
import InputText from '../Helper/InputText'

const LoginForm = memo(({ field, form: { setFieldValue, errors, values, touched, isValid, handleSubmit }, ...props }) => {
    return (
        <View style={{ flex: 1, margin: 8, marginVertical: 100 }}>

            {/*Welcome text */}
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 40, fontWeight: 'bold', margin: 8 }}>Welcome</Text>
                <Text>To</Text>
                <Text style={{ fontSize: 36, fontWeight: '500', margin: 8 }}>Beecash</Text>
            </View>


            {/*User name */}
            <View style={{ marginTop: 20, }}>

                <InputText
                    title='User name'
                    isRequired={true}
                    displayValue={values.user_name}
                    onChangeText={(value) => {
                        console.log(value)
                        setFieldValue('user_name', value)
                    }
                    }
                    hasError={touched.user_name && errors.user_name}
                    errorText={errors.user_name}
                >
                </InputText>

            </View>

            <View style={{ margin: 20, alignItems: 'center' }}>
                <Button style={styles.loginButton}
                    disabled={!isValid}
                    onPress={handleSubmit}>
                    <Text style={styles.loginButtonText}>
                        Next
                            </Text>
                </Button>

            </View>
        </View>
    )

})

const styles = StyleSheet.create({

    loginButton: {
        backgroundColor: 'red',
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },

    loginButtonText: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold'
    },
});

const Login = (props) => {


    const submitLoginValues = () => {
        props.navigation.navigate('LandingPage')
    }

    const validationSchema = yup.object().shape({
        user_name: yup.string()
            .required("User name is required")
    })

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Formik
                initialValues={{ user_name: '' }}
                validationSchema={validationSchema}
                onSubmit={(values) => submitLoginValues(values)}
                enableReinitialize={true}
            >
                {() => (
                    <Field
                        component={LoginForm}
                    >
                    </Field>
                )}
            </Formik>
        </View >
    )
}

Login.navigationOptions = {
    headerShown: false,
    headerStyle: {
        backgroundColor: 'white',
        borderBottomWidth: 0
    },
};


export default Login;