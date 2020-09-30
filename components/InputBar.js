import React from 'react';
import { TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const InputBar = (props) => {
    return (
        <View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={props.todoInput}
                    onChangeText={(todoInput) => props.textChange(todoInput)}
                />

                <TouchableOpacity
                    onPress={props.addNewTodo}
                >
                    <Text style={styles.addButtonText}>dodaj</Text>

                </TouchableOpacity>
            </View>
            <Text
                style={styles.textBack}></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#171717',
        shadowOpacity: 0.1,
        height: 50,
        width:'100%',
        position:'relative'
    },
    input: {
        backgroundColor: '#FFF',
        flex: 1,
        fontSize: 18,
        paddingHorizontal: 30,
    },
    textBack: {
        backgroundColor: '#FFF',
        fontSize: 18,
        height:50,
   
        position:'absolute',
        width:'100%',
        zIndex:-1
    
    },
    addButtonText: {
        width: '100%',
        height: '100%',
        backgroundColor: "#FFCE00",
        lineHeight: 50,
        paddingHorizontal: 30,
        fontWeight: '700',
        fontSize: 22,
        textTransform: 'uppercase',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        


    },
 
    addButton: {
        color: '#171717',
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center'



    }
})

export default InputBar