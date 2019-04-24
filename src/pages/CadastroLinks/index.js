import React, { Component } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";

import api from "../../services/api";
import styles from "./styles";

export default class CadastroLinks extends Component {
  static navigationOptions = {
    title: "Cadastro de Links"
  };

  state = {
    title: "",
    description: "",
    url: "http://"
  };

  handleSubmit = async () => {
    const response = await api.post("products", {
      title: this.state.title,
      description: this.state.description,
      url: this.state.url
    });

    this.props.navigation.navigate("Home");
  };

  render(props) {
    console.log(this.props);

    return (
      <View style={styles.form}>
        <TextInput
          style={styles.inputText}
          placeholder="Título"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.title}
          onChangeText={text => this.setState({ title: text })}
        />

        <TextInput
          style={styles.inputText}
          placeholder="Descrição"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.description}
          onChangeText={text => this.setState({ description: text })}
        />

        <TextInput
          style={styles.inputText}
          placeholder="URL"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          value={this.state.url}
          onChangeText={text => this.setState({ url: text })}
        />

        <TouchableOpacity
          style={styles.productButton}
          onPress={this.handleSubmit}
        >
          <Text style={styles.productButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
