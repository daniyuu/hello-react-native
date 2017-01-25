import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import {styles} from './../styles/CommonStyleSheet';

export default class FlexBox extends Component {
    constructor() {
        super();
        this.state = {posType: 0};

        setInterval(() => {
            this.setState({posType: (this.state.posType + 1) % 3});
        }, 1000);
    }

    render() {
        let posStyle = {flex: 1, flexDirection: 'row'};
        if (this.state.posType == 0) {
            posStyle = {flex: 1, flexDirection: 'row'};
        } else if (this.state.posType == 1) {
            posStyle = {
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            };
        } else {
            posStyle = {
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            };
        }
        return (
            <View style={posStyle}>
                <View style={styles.powderblueBlock}/>
                <View style={styles.skyblueBlock}/>
                <View style={styles.steelblueBlock}/>
            </View>

        );
    }
};
