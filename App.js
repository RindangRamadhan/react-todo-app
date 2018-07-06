import React from 'react';
import {createStackNavigator} from 'react-navigation'
import Home from './screens/Home'
import TodoPage from './screens/TodoPage'
import EditPage from './screens/EditTodo'

const RootStack = createStackNavigator({
	Home: {
		screen: Home
	},
	TodoPage: {
		screen: TodoPage
	},
	EditPage: {
		screen: EditPage
	}
},{
	initialRouteName: 'Home'
})

export default RootStack
