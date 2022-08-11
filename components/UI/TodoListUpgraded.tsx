import React, { useState } from 'react';
import { tasks } from '../../data/tasks'
import TodoItemUpgraded from '../TodoItemUpgraded';
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



const TodoListUpgraded = () => {
    const [tasksData, setTasksData] = useState(tasks);
    const [isEditingTask, setIsEditingTask] = useState(0);
    const [clickedEdit, setClickedEdit] = useState(false);

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

    const deleteHandler = (event, taskId) => setTasksData(tasksData.filter((task) => task.id !== taskId));

    const editHandler = (event, task) => {
        setClickedEdit(!clickedEdit)
        return task.id === task.editId && !clickedEdit ? setIsEditingTask(task.id) : setIsEditingTask(0)
    }

    const updateTask = (updatedTasksData) => {
        setIsEditingTask(0)
        return setTasksData(updatedTasksData)
    }

    const todolist = tasksData.map((task) => <TodoItemUpgraded
        key={task.id}
        deleteTask={(event) => deleteHandler(event, task.id)}
        editTask={(event) => editHandler(event, task)}
        currentlyEditing={isEditingTask}
        editId={task.id}
        data={tasksData}
        updateData={updateTask}
        resetEdit={setClickedEdit}>
        {task.name}
    </TodoItemUpgraded>)

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
        height: 350,
        marginTop: 10,
        marginBottom: 5,
        backgroundColor: 'whitesmoke',
        overflow: 'hidden',
        overflowX: 'scroll'
    },
    buttonContainer: {
        width: `${100}%`,
        height: `${11}%`,
        display: `flex`,
        flexDirection: 'column',
        alignItems: `center`,
        justifyContent: `space-evenly`,
        // borderWidth: 1
    },
    textInput: {
        width: `${95}%`,
        height: 40,
        margin: 0,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: 6,
    },
    button: {
        margin: 0,
        width: `${30}%`,
        height: 80,
    },
})



export default TodoListUpgraded;