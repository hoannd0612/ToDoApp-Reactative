import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

const Input = ({inputChange}) => (
    

    <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            placeholder='What need to be done?'
            placeholderTextColor='#CACACA'
            selectionColor='#666666'

        />

    </View>

)
const styles = StyleSheet.create({
    inputContainer: {
        marginLeft: 30,
        marginRight: 20,
        shadowOpacity: 0.7,
        shadowRadius: 9,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 },
        borderRadius: 0.9
    },
    input: {
        height: 60,
        backgroundColor: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10

    }


})
export default Input