import React from 'react';
import { tasks } from '../../data/tasks'
import TodoItem from '../TodoItem';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

const todolist = tasks.map((task) => <TodoItem key={task.id}>{task.name}</TodoItem>)

const TodoList = () => {
    return <SafeAreaView>
        <ScrollView style={styles.container}>
                {todolist}
        </ScrollView>
    </SafeAreaView>
};

const styles = StyleSheet.create({
    container: {
        width: `${100}%`,
        height: `${25}%`,
        backgroundColor: 'whitesmoke',
        marginTop: 10,
        marginBottom: 5,
        // backgroundColor: 'skyblue',
        // backgroundColor: 'aliceblue',
        overflow: 'hidden',
        overflowX: 'scroll'
        
    }
})

export default TodoList;