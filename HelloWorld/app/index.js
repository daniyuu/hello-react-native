import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import {styles} from './styles/CommonStyleSheet';
import Bananas from './components/Bananas';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Bananas/>
            </View>
        )
    }
}

class Clock extends Component {
    // 初始化
    constructor(props) {
        super(props);
        // state 只用于存放可变的数据
        this.state = {date: new Date()};
    }
    // 初始化完成后执行
    componentDidMount() {
        setInterval(()=>{
            // 告诉 react do what
            // 而 JQueryer 的思维通常的 how do，这在 react 里面是不用考虑的。
            // 不用直接修改 state xxxxx this.state = new Date() xxxxxx
            // setState 在修改 state 参数后会自动调用 render 方法。
            this.setState({
                date: new Date()
            })
        },100)
    }
    render() {
        return (
            <div>
                <h2>北京时间： { this.state.date.toLocaleTimeString() }</h2>
            </div>
        );
    }
}
// ReactDOM.render 渲染指令
ReactDOM.render(
    // date 数据
    <Clock />,
    document.getElementById('js-main')
);

