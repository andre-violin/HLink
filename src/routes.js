import { createStackNavigator } from 'react-navigation';

import Home from './pages/home';

export default createStackNavigator(
	{
		Home
	},
	{ // Configuração do estilo da barra de título
		navigationOptions: {
			headerStyle: {
				backgroundColor: '#444'
			},
			headerTintColor: '#FFF'
		}
	}
);
