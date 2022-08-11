import React, { useState } from 'react';
import { tasks } from '../../data/tasks'
import Task from '../Task'
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
import SelectDropdown from 'react-native-select-dropdown'



const TaskList = () => {
    const [tasksData, setTasksData] = useState(tasks);
    const [isEditingTask, setIsEditingTask] = useState(0);
    const [clickedEdit, setClickedEdit] = useState(false);

    const [newTask, setNewTask] = useState('')

    const [filter, setFilter] = useState('All')
    const filteredData = tasksData.filter((task) => {
        return filter === 'All' ? task.state !== 'All' : task.state === filter
    })

    const addNewTask = () => {
        const newTodo = {
            id: (tasksData.length) + 1,
            editId: (tasksData.length) + 1,
            name: newTask,
            state: 'todo'
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

    const todolist = filteredData.map((task) => <Task
        key={task.id}
        deleteTask={(event) => deleteHandler(event, task.id)}
        editTask={(event) => editHandler(event, task)}
        currentlyEditing={isEditingTask}
        editId={task.id}
        data={tasksData}
        updateData={updateTask}
        resetEdit={setClickedEdit}>
        {task.name}
    </Task>)

    const options = ['All', 'To-do', 'In-progress', 'Done']
    const taskMenu = <View style={styles.menuContainer}>
        {/* <SelectDropdown data={options}/> */}
        <SelectDropdown
            data={options}
            onSelect={(selectedItem, index) => {
                // console.log(selectedItem, index)
                console.log(selectedItem, '>>>>>>>>')
                setFilter(selectedItem)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                console.log(selectedItem)
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                console.log(item)
                return item
            }}
        />
    </View>

    return <SafeAreaView>
        <ScrollView style={styles.container}>
            {taskMenu}
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
    menuContainer: {
        backgroundColor: 'dodgerblue',
        width: `${100}%`,
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
})



export default TaskList;