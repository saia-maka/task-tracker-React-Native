import React from 'react'
import type { Node } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

const TodoItem = ({ children }) => {

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: 100,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'lightblue'
        },
        text: {
            fontSize: 20,
            fontWeight: 'bold',
            padding: 10,
            margin: 14,
            textTransform: 'capitalize',
            width: 'auto',
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'black',
            borderRadius: 6
        }
        // backgroundColor: 'blue',
    })

    return <SafeAreaView>
        <ScrollView>
            <Text style={styles.text}>
                {children}
            </Text>
        </ScrollView>
    </SafeAreaView>
}

export default TodoItem;