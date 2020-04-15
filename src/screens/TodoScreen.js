import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export const TodoScreen = ({goBack, todo}) => {
  return (
    <View>
      <Text>{todo.title}</Text>
      <Button title="назад" onPress={goBack}></Button>
    </View>
  )
}

const styles = StyleSheet.create({})
