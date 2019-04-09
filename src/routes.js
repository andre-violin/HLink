import { createStackNavigator } from 'react-navigation';

import Home from './pages/home';
import Hyperlink from './pages/hyperlink';

export default createStackNavigator(
	{
		Home,
		Hyperlink
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
