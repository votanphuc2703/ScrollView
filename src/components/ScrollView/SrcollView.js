import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

export default class SrcollView extends Component {

    arrayItem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    ShowItem = () => {
        return this.arrayItem.map(item => {
            return <View style={[styles.Item,{backgroundColor:`#${Math.floor(Math.random() * 999)}`}]}>
                <Text style={styles.Text}> Item {item} </Text>
            </View>
        })  
    }
    render() {
        return (
            <>
                <ScrollView>
                    {this.ShowItem()}
                </ScrollView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    Item: {
        flex: 1,
        // backgroundColor: Math.floor(Math.random() * 256)
        margin: 10,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height:100
    },
    Text:{
        fontSize:20,
        fontWeight:'bold'
    }
})
