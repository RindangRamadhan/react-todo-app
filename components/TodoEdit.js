import React from 'react'
import { StyleSheet, View, TextInput, FlatList, TouchableNativeFeedback, Alert } from 'react-native';
import { Text, Button, Card, Divider, Icon } from 'react-native-elements';
import firebase from './Config'

class TodoAdd extends React.Component {

  constructor(props){
    const { text, description } = props.navigate.state.params.todoList

		super(props)
		this.state = {
      todoTitle: text,
      todoDescription: description,
		}
	}

  updateTodo = (key) => {
    const { todoTitle, todoDescription } = this.state

    firebase.database().ref('todos/' + key).set({
      todoTitle: todoTitle,
      todoDescription: todoDescription,
    })
    Alert.alert('Berhasil', 'Todo Berhasil Diubah')
    this.props.navigate.navigate('Home')
  }

  render() {

    const { key } = this.props.navigate.state.params.todoList

    return (
      <TouchableNativeFeedback>
        <View style={styles.container} >

          <Card>
            <Text style={{color: '#00BCD4'}}> Todo Title </Text>
            <TextInput style={{height: 35}}
              onChangeText={(val) => this.setState({todoTitle: val})}
              value={this.state.todoTitle}
            />
          </Card>

          <Card>
            <Text style={{color: '#00BCD4'}}> Todo Description </Text>
            <TextInput style={{height: 300}}
              editable = {true}
              multiline = {true}
              numberOfLines = {10}
              onChangeText={(val) => this.setState({todoDescription: val})}
              value={this.state.todoDescription}
            />
          </Card>

          <Card style={{position:'absolute', bottom:0,}}>
            <Button
              backgroundColor='#03A9F4'
              buttonStyle={styles.buttonStyle}
              title="SIMPAN TODO"
              onPress={() => this.updateTodo(key)}/>
          </Card>

  			</View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: '#E0E0E0',
  },
  todoColumn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
	inputBox: {
		height: 40,
		borderWidth: 1,
		borderColor: 'gray',
		borderRadius: 5,
	},
  buttonStyle: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  }
});

export default TodoAdd
