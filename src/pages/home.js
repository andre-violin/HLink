import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

import api from '../services/api';
import { bold } from 'ansi-colors';

export default class Home extends Component {
	static navigationOptions = {
		title: 'HyperLink'
	};

	state = {
		docs: []
	};

	componentDidMount() {
		this.loadLinks();
	}

	loadLinks = async () => {
		try {
			const response = await api.get('/products');

			const { docs } = response.data;

			this.setState({ docs });
		} catch (error) {
			console.log(error);
		}
	};

	renderItem = ({ item }) => {
		return (
			<View style={styles.productContainer}>
				<Text style={styles.productTitle}>{item.title}</Text>
				<Text style={styles.productDescription}>{item.description}</Text>

				<TouchableOpacity style={styles.productButton} onPress={() => {}}>
					<Text style={styles.productButtonText}>Acessar</Text>
				</TouchableOpacity>
			</View>
		);
	};

	render() {
		return (
			<View style={styles.container}>
				<FlatList
					contentContainerStyle={styles.list}
					data={this.state.docs}
					keyExtractor={(item) => item._id}
					renderItem={this.renderItem}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
		backgroundColor: "#fafafa",
	},
	list: {
		padding: 20
	},
	productContainer: {
    backgroundColor: "#FFF",
    borderColor: "#DDD",
    borderRadius: 5,
    padding: 20,
		marginBottom: 20,
		
		shadowColor: '#000',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.8,
		shadowRadius: 5,
		elevation: 5,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333"
  },
  productDescription: {
    fontSize: 16,
    color: '#999',
    marginTop: 5,
    lineHeight: 24
	},
	productButton: {
		height: 42,
		borderRadius: 5,
		borderWidth: 2,
		borderColor: "#333",
		backgroundColor: "transparent",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 10
	},
	productButtonText: {
		fontSize: 16,
		color: "#333",
		fontWeight: "bold"
	}
});
