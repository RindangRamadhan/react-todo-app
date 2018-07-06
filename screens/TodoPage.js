import React from 'react'
import TodoAdd from '../components/TodoAdd'

export default class TodoPage extends React.Component {
  static navigationOptions = {
    title: 'To Do - Add',
    headerStyle: {
     backgroundColor: '#0091EA',
   },
   headerTintColor: '#fff',
   headerTitleStyle: {
     fontWeight: 'bold',
   },
  }

  render() {
      return <TodoAdd navigate={ this.props.navigation }> </TodoAdd>
  }
}
