import React from 'react'
import { StyleSheet, View, FlatList, ActivityIndicator, Text, ScrollView } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import firebase from './Config'
import List from '../components/List'
import Accordion from 'react-native-collapsible/Accordion';

class TodoList extends React.Component {

  constructor(props){
		super(props)
		this.state = {
      todo: '',
      loadData: true,
      todos: null
		}
    this.renderHeader = this.renderHeader.bind(this)
	}

  componentDidMount() {
    firebase.database().ref('todos/').on('value', (snapshot) => {
      const todosFiles = snapshot.val();

      this.setState({todos: todosFiles, loadData: false})
    })

  }

  renderHeader(todos) {
    return (
      <List list={todos} navigate={ this.props.navigate } />
    );
  }

  renderContent(todos) {
    return (
      <View style={styles.panel}>
        <Text>{todos.description}</Text>
      </View>
    );
  }

  deleteTodo = (key) => {
    firebase.database().ref('todos/'+ key).remove()
  }

  render() {
		const { navigate } = this.props.navigate
    const { loadData } = this.state
    const todos = !this.state.todos ? [] : Object.keys(this.state.todos).map( key => {
      return {
        key: key,
        text: this.state.todos[key].todoTitle,
        description: this.state.todos[key].todoDescription,
      }
    })

    return (
        <ScrollView style={styles.container} >

          <Card>
            <Button
              icon={<Icon name='add' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={styles.buttonStyle}
              title="+ TODO BARU"
              onPress={() => this.props.navigate.navigate("TodoPage")}/>
          </Card>

          <Card title="DAFTAR TODO">
            <Accordion
              sections={todos}
              renderHeader={this.renderHeader}
              renderContent={this.renderContent}
            />
          </Card>

          {
            loadData && <View style={styles.horizontal}>
                          <ActivityIndicator size="large" color="#0000ff" />
                        </View>
          }

  			</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: '#E0E0E0',
  },
  todoList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  panel: {
    paddingLeft: 80,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "white",
    overflow: "hidden",
  }
});

export default TodoList
