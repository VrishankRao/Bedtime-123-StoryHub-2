import React from 'react';
import {Text, View, TextInput, TouchableOpacity, StyleSheet, Alert, Dimensions, KeyboardAvoidingView, ToastAndroid} from 'react-native';
import db from '../config.js';
//import firebase from 'firebase';
import * as firebase from 'firebase';

export default class WriteScreen extends React.Component{

    constructor(){
        super();
        this.state={
            title:'',
            author:'',
            writing:''
        }
    }

    submitStory=async()=>{
        await db.collection("story").doc("story01").update({
            'title':this.state.title,
            'author':this.state.author,
            'writing':this.state.writing
        })
    }

    alertMessage=async()=>{
            ToastAndroid.show("Your changes were saved.", ToastAndroid.LONG);
    }


    render(){
        return(
            <KeyboardAvoidingView>
            <View style={styling.bg}>
                <Text style={styling.heading}>Writing screen</Text>
                <TextInput
                style={styling.titleAndAuthor}
                placeholder="Title of the book/story"
                multiline={false}
                onChangeText={(text)=>{
                    this.setState({
                      title: text
                    })
                  }}/>
                <TextInput
                style={styling.titleAndAuthor}
                placeholder="Author of the book/story"
                multiline={false}
                onChangeText={(text)=>{
                    this.setState({
                      author: text
                    })
                  }}/>
                <TextInput
                style={styling.writing}
                placeholder="Story"
                multiline={true}
                onChangeText={(text)=>{
                    this.setState({
                      writing: text
                    })
                  }}/>
                <TouchableOpacity 
                style={styling.submit}
                onPress={()=>{
                    this.submitStory();
                    this.alertMessage();
                }}>
                    <Text style={styling.submitText}>Submit</Text>
                </TouchableOpacity>   
            </View>
            </KeyboardAvoidingView>
        )
    }
}
    
const styling = StyleSheet.create({
    writing:{
        width: Dimensions.get('screen').width-150,
        height: 300,
        fontSize: 18,
        marginTop:50,
        paddingLeft:10,
        color: 'black',
        alignSelf: 'center',
        fontFamily: 'georgia',
        borderColor:'black',
        borderWidth:0.25
    },
    submit:{
        width: Dimensions.get('screen').width-500,
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
        color:'black',
        alignSelf:'center'
    },
    heading:{
        fontWeight:'bold',
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 40,
        fontStyle:'italic',
        fontFamily: 'georgia',
        color: 'black'
    },
    bg:{
        backgroundColor:'#92DCF2'
    },
    titleAndAuthor:{
        width: Dimensions.get('screen').width-150,
        height: 50,
        fontSize: 18,
        marginTop:30,
        paddingLeft:10,
        color: 'black',
        alignSelf: 'center',
        fontFamily: 'georgia',
        borderColor:'black',
        borderWidth:0.25
    }
})