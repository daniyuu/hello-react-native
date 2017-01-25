import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Navigator
} from 'react-native';

import {styles} from './styles/CommonStyleSheet';
import Bananas from './components/Bananas';
import BlinkApp from './components/Blink';
import Flexbox from './components/Flexbox';
import MyScene from './components/MyScene';

// export default class App extends Component {
//     render() {
//         return (
//             <ScrollView>
//                 <Navigator
//                     initialRoute={{title: "My Initial Scene", index:0}}
//                     renderScene={(route, navigator) =>{
//                         return <MyScene title={route.title}/>
//                     }}
//                 />
//                 <Text style={styles.welcome}>
//                     Welcome to React Native!
//                 </Text>
//                 <Bananas/>
//                 <BlinkApp/>
//                 <Flexbox/>
//                 <Flexbox/>
//             </ScrollView>
//         )
//     }
// }

export default class App extends Component {
    render() {
        return (

            <Navigator
                initialRoute={{title: "My Initial Scene", index:0}}
                renderScene={(route, navigator) =>
                    <MyScene
                        title={route.title}

                        onForward={()=>{
                            const nextIndex = route.index + 1;
                            navigator.push({
                                title: 'Scene ' + nextIndex,
                                index: nextIndex
                            });
                        }}

                        onBack = {() => {
                            if(route.index > 0) {
                                navigator.pop();
                            }
                        }
                        }

                    />

                    }
            />

        )
    }
}
