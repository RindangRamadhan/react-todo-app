import React from 'react'
import { StyleSheet, View, TextInput, FlatList, TouchableNativeFeedback, Alert } from 'react-native';
import { Text, Button, Card, Divider, Icon } from 'react-native-elements';
import firebase from './Config'

class TodoAdd extends React.Component {

  constructor(props){
		super(props)
		this.state = {
      todoTitle: '',
      todoDescription: '',
		}
	}

  storeTodo = () => {
    const newTodoKey = firebase.database().ref().child('todos').push().key
    firebase.database().ref('todos/').update({
      [newTodoKey]: this.state
    })
    Alert.alert('Berhasil', 'Todo Berhasil Ditambahkan')
    this.props.navigate.navigate('Home')
  }

  render() {

    return (
      <TouchableNativeFeedback>
        <View style={styles.container} >

          <Card>
            <Text style={{color: '#00BCD4'}}> Judul Todo </Text>
            <TextInput style={{height: 35}}
              onChangeText={(val) => this.setState({todoTitle: val})}
              value={this.state.todoTitle}
            />
          </Card>

          <Card>
            <Text style={{color: '#00BCD4'}}> Deskripsi Todo </Text>
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
              title="TAMBAH TODO"
              onPress={() => this.storeTodo()}/>
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
