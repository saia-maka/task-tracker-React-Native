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
import SelectDropdown from 'react-native-select-dropdown'




const Task = ({ children, editTask, deleteTask, currentlyEditing, editId, data, updateData, resetEdit, updateState }) => {
    const [task, setTask] = useState('')

    const updateTask = () => {
        const update = data.map((taskData) => {
            return taskData.id === editId ? { ...taskData, name: task } : taskData
        })
        resetEdit(false)
        setTask('')
        return updateData(update)
    }

    const EditForm = <View style={styles.formView}>
        <TextInput style={styles.textInput} value={task} onChangeText={setTask} placeholder='Edit task name' />
        <Button style={styles.updateButton} onPress={updateTask}>Update</Button>
    </View>

    const options = ['Done', 'In-progress', 'To-do']
    const dropdownText = () => 'Update state'
    const stateForm = <View style={styles.stateButtons}>
        <SelectDropdown
            defaultButtonText='Update state'
            buttonStyle={{ borderWidth: 1 }}
            data={options}
            onSelect={(selectedItem, index) => {
                updateState(selectedItem, editId)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return 'Update state'
            }}
            rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
            }}
        />
    </View>

    return <SafeAreaView>
        <ScrollView>
            <Text style={styles.text}>
                {children}
            </Text>
            {stateForm}
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
        borderRadius: 3
    },
    buttonContainer: {
        width: `${100}%`,
        height: 100,
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
        borderRadius: 3,
    },
    updateButton: {
        width: `${50}%`,
        height: `${70}%`,
        marginTop: 2,
    },
    stateButtons: {
        width: `${95}%`,
        display: 'flex',
        alignSelf: 'center',
        alignItems: 'flex-end',
        height: 60
    }
})

export default Task;