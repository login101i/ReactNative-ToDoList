import React from 'react'
import { StyleSheet, Text, Button, TouchableOpacity } from 'react-native'

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const todoItem = this.props.todoItem
        return (
            <TouchableOpacity
                style={styles.todoItem}
                onPress={() => this.props.toggleDone()}
            >
                <Text
                    style={(todoItem.done) ? styles.done : styles.undone}>
                    {todoItem.title}
                </Text>
                <Text>

                </Text>
                <Text

                    color={(todoItem.done) ? 'red' : 'blue'}
                    onPress={() => this.props.removeTodo()}
                    style={styles.remove}
                >Remove</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    todoItem: {
        height: 40,
        borderBottomColor: '#DDD',
        borderBottomWidth: 1,
        width: '100%',
        paddingLeft: 22,
        justifyContent: 'space-between',
        flexDirection: 'row'


    },
    done: {
        fontSize: 25,
        color: '#DDD',



    },
    undone: {
        fontSize: 25,
        color: 'red',
    },
    remove: {
        fontSize: 22,
       
        paddingRight: 15,
        textTransform: 'uppercase',

    }
})