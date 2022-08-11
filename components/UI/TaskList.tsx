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
            state: 'To-do'
        }
        setTasksData([...tasksData, newTodo])
        setNewTask('')
    }

    const updateTaskState = (newState, id) => {
        const updatedTodos = tasksData.map((task) => {
            return task.id === id ? {...task, state: newState} : {...task}
        })
        return setTasksData(updatedTodos)
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
        resetEdit={setClickedEdit}
        updateState={updateTaskState}>
        {`${task.name}   -`} {
            <Text style={task.state === 'Done' ? { color: 'green' } :
                task.state === 'To-do' ? { color: 'red' } :
                    task.state === 'In-progress' ? { color: 'orange' } :
                        { color: 'black' }}>
                {`   ${task.state}`}
            </Text>
        }
    </Task>)

    const options = ['All', 'To-do', 'In-progress', 'Done']
    const taskMenu = <View style={styles.menuContainer}>
        <SelectDropdown
            buttonStyle={{ borderWidth: 1 }}
            defaultButtonText='All Tasks'
            data={options}
            onSelect={(selectedItem, index) => {
                setFilter(selectedItem)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
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
        height: 500,
        marginTop: 10,
        marginBottom: 5,
        backgroundColor: 'whitesmoke',
        overflow: 'hidden',
        overflowX: 'scroll'
    },
    buttonContainer: {
        width: `${100}%`,
        height: 135,
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
        borderRadius: 2,
    },
    button: {
        width: `${30}%`,
        height: 80,
    },
    menuContainer: {
        // backgroundColor: 'dodgerblue',
        width: `${95}%`,
        height: `auto`,
        display: 'flex',
        alignSelf: 'center',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: 10
    },
})



export default TaskList;