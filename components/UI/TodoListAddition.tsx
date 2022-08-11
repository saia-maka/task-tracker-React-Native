import React, { useState } from 'react';
import { tasks } from '../../data/tasks'
import TodoItem from '../TodoItem';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    View,
} from 'react-native';
import { Button } from "@rneui/themed";


const TodoListAddition = () => {
    const [tasksData, setTasksData] = useState(tasks)
    const [newTask, setNewTask] = useState('')

    const addNewTask = () => {
        const newTodo = {
            id: (tasksData.length) + 1,
            editId: (tasksData.length) + 1,
            name: newTask
        }
        setTasksData([...tasksData, newTodo])
        setNewTask('')
    }
    
    const addTaskForm = <View style={styles.buttonContainer}>
        <TextInput style={styles.textInput} placeholder='Enter a new task' value={newTask} onChangeText={setNewTask} />
        <Button style={styles.button} onPress={addNewTask}>
            Add Task
        </Button>
    </View>

    const todolist = tasksData.map((task) => <TodoItem key={task.id}>{task.name}</TodoItem>)

    return <SafeAreaView>
        <ScrollView style={styles.container}>
            {addTaskForm}
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
        overflow: 'hidden',
        overflowX: 'scroll'
    },
    buttonContainer: {
        width: `${100}%`,
        height: `${18}%`,
        display: `flex`,
        flexDirection: 'column',
        alignItems: `center`,
        justifyContent: `space-between`,
    },
    textInput: {
        width: `${95}%`,
        height: 40,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: 6,
    },
    button: {
        width: `${30}%`,
        height: 80,
    },
})

export default TodoListAddition;