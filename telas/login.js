import React, {Component} from "react";
import {View,
StyleSheet,
ImageBackGround,
Image,
TextInput,
TouchableOpacity,
Text,
Alert,
KeyboardAvoidingView
} from "react-native";
import firebase from "firebase";

const bgImage = require("../assets/background1.png");
const appIcon = require("../assets/appIcon.png");
const appName = require("../assets/appName.png");

export default class LoginScreen extends Component {
    constructor(porps) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    handle
}