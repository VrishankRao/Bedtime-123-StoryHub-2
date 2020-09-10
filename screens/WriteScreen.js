import React from 'react';
import {Text, View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default class WriteScreen extends React.Component{
    render(){
        return(
            <View style={styling.bg}>
                <Text style={styling.heading}>Writing screen</Text>
                <TextInput
                style={styling.writing}
                placeholder="Write a story"
                multiline={true}/>
                <TouchableOpacity style={styling.submit}>
                    <Text style={styling.submitText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
    
const styling = StyleSheet.create({
    writing:{
        width: 1000,
        height: 500,
        borderWidth: 1,
        fontSize: 18,
        margin:10,
        paddingLeft:10,
        color: 'white',
        alignSelf: 'center',
        fontFamily: 'georgia',
        borderColor:'white'
    },
    submit:{
        width: 100,
        height: 30,
        borderWidth: 1,
        margin:10,
        paddingLeft:10,
        backgroundColor:'#3ED716',
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    submitText:{
        fontSize: 24,
        color:'black'
    },
    heading:{
        fontWeight:'bold',
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 40,
        fontStyle:'italic',
        fontFamily: 'comfortaa',
        color: 'white'
    },
    bg:{
        backgroundColor:'#ad0945'
    }
})