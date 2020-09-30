import React from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header'
import InputBar from './components/InputBar'
import TodoItem from './components/TodoItem.js'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoInput: '',
      todos: [
        { id: 0, title: 'Take out the dog', done: false },
        { id: 1, title: "Cook dinner", done: true }
      ]
    }
  }
  addNewTodo() {
    console.log('test1');
    let todos = this.state.todos
    todos.unshift({
      id: todos.lenght + 1,
      title: this.state.todoInput,
      done: false
    })

    this.setState({
      todos,
      todoInput: ''
    })
    console.log("test 2");
  }

  removeTodo(item){
    let todos=this.state.todos
    todos=todos.filter((todo)=>todo.id!==item.id)
    this.setState({todos})

  }
  toggleDone(item) {
    let todos = this.state.todos
    todos = todos.map((todo) => {
      if (todo.id == item.id) {
        todo.done = !todo.done
      }
      return todo
    })
    this.setState({ todos })
  }





  render() {

    const statusbar = (Platform.OS == 'android') ? <View style={styles.statusbar}></View> : <View></View>
    return (
      <View style={styles.container}>
        {statusbar}
        <Header title="Hello Macieju" />
        <InputBar
          textChange={todoInput => this.setState({ todoInput })}
          addNewTodo={() => this.addNewTodo()}
          todoInput={this.state.todoInput}
        />

        <FlatList
          data={this.state.todos}
          extraData={(this.state)}
          style={styles.todoItem}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <TodoItem

                todoItem={item}
                toggleDone={() => this.toggleDone(item)}
                removeTodo={()=>this.removeTodo(item)}
              >

              </TodoItem>
            )
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  statusbar: {
    backgroundColor: "#FFCE00",
    height: 22,
  },
  todoItem: {
    paddingVertical: 22,
    width: '100%'
  }
});
