import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, startLogin} from '../../actionCreators/loginAction';
import firebase from 'firebase';

class LoginScreen extends React.Component {
  emailTextChanged(text) {
    console.log(text);
    this.props.emailChanged(text);
  }

  passwordTextChanged(text) {
    console.log(text);
    this.props.passwordChanged(text);
  }

  loginBtnPressed() {
    console.log('login btn pressed');
    this.props.startLogin(this.props.email, this.props.password);
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'flex-start'}}>
        <View>
          <Text>Email: </Text>
          <TextInput
            placeholder="johnDoe1234@gmail.com"
            style={{padding: 20}}
            value={this.props.email}
            onChangeText={this.emailTextChanged.bind(this)}
          />
          <Text>Password: </Text>
          <TextInput
            placeholder="[a-z A-Z 0-9 !@#$%^&*]"
            style={{padding: 20}}
            value={this.props.password}
            onChangeText={this.passwordTextChanged.bind(this)}
          />
          <Button title="Login" onPress={this.loginBtnPressed.bind(this)} />
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.email,
    password: state.password
  };
}

export default connect(
  mapStateToProps,
  {emailChanged, passwordChanged,startLogin},
)(LoginScreen);
