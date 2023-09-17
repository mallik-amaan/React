import * as React from 'react';
import {View,Text} from 'react-native';

export default function Footer () {
    return <View
    style={{
    flex:0.2,
    backgroundColor:'F4CE14',
    }}
    >
        <Text
        style={{
            padding: 10,
            fontSize: 20,
            color: 'black',
            textAlign: 'center',
        }}
        >
        All Rights Reserved By Little Lemon @ 2023
        </Text>
    </View>
}