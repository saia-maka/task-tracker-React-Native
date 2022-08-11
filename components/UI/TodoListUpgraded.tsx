import React, { useState } from 'react';
import { tasks } from '../../data/tasks'
import TodoItemUpgraded from '../TodoItemUpgraded';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';



const TodoListUpgraded = () => {
    const [tasksData, setTasksData] = useState(tasks);
    const [isEditingTask, setIsEditingTask] = useState(0);
    const [clickedEdit, setClickedEdit] = useState(false);

    const deleteHandler = (event, taskId) => setTasksData(tasksData.filter((task) => task.id !== taskId));

    const editHandler = (event, task) => {
        console.log(task.id === task.editId, task.id, task.editId)
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

    const styles = StyleSheet.create({
        container: {
            width: `${100}%`,
            height: `${25}%`,
            marginTop: 10,
            marginBottom: 5,
            backgroundColor: 'whitesmoke',
            overflow: 'hidden',
            overflowX: 'scroll'
        }
    })

    return <SafeAreaView>
        <ScrollView style={styles.container}>
            {todolist}
        </ScrollView>
    </SafeAreaView>
};



export default TodoListUpgraded;