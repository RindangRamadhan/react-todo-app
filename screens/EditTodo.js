import React from 'react'
import TodoEdit from '../components/TodoEdit'

export default class TodoPage extends React.Component {
  static navigationOptions = {
    title: 'To Do - Edit',
    headerStyle: {
     backgroundColor: '#0091EA',
   },
   headerTintColor: '#fff',
   headerTitleStyle: {
     fontWeight: 'bold',
   },
  }

  render() {
      return <TodoEdit navigate={ this.props.navigation } > </TodoEdit>
  }
}
