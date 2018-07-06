import React from 'react'
import TodoList from '../components/TodoList'

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'To Do - Home',
    headerStyle: {
     backgroundColor: '#0091EA',
   },
   headerTintColor: '#fff',
   headerTitleStyle: {
     fontWeight: 'bold',
   },
  }

  render() {
      console.ignoredYellowBox = ['Setting a timer'];

      return <TodoList navigate={ this.props.navigation }> </TodoList>
  }
}
