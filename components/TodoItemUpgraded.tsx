import React, { useState } from 'react'
import type { Node } from 'react';
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


const TodoItemUpgraded = ({ children, editTask, deleteTask, currentlyEditing, editId, data, updateData, resetEdit }) => {
const [task, setTask] = useState('')

    const updateTask = () => {
        const update = data.map((taskData) => {
            return taskData.id === editId ? {...taskData, name: task} : taskData
        })
        resetEdit(false)
        setTask('')
        return updateData(update)
    }

    const EditForm = <View style={styles.formView}>
            <TextInput style={styles.textInput} value={task} onChangeText={setTask} placeholder='Edit task name'/>
            <Button style={styles.updateButton} onPress={updateTask}>Update</Button>
        </View>

    return <SafeAreaView>
        <ScrollView>
            <Text style={styles.text}>
                {children}
            </Text>
            <View style={styles.buttonContainer}>
                <Button style={styles.button} onPress={editTask}>
                    Edit
                </Button>
                <Button style={styles.button} onPress={deleteTask}>
                    Delete
                </Button>
            {currentlyEditing === editId ? EditForm : ''}
            </View>
        </ScrollView>
    </SafeAreaView>
}

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
        margin: 12,
        textTransform: 'capitalize',
        width: 'auto',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: 6
    },
    buttonContainer: {
        width: `${100}%`,
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 5
    },
    button: {
        width: `auto`,
        height: `${80}%`,
        margin: 5
    },
    formView: {
        width: `${59}%`,
        height: 80,
        marginTop: 2,
        marginBottom: 2
    },
    textInput: {
        width: `${100}%`,
        height: `${40}%`,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: 6,
    },
    updateButton: {
        width: `${50}%`,
        height: `${70}%`,
        marginTop: 2,
    }
})

export default TodoItemUpgraded;