import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

export default function App() {
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([
    {id:'1',title:'test 1'},
    {id:'2',title:'test 2'}
  ]);
  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  const removeTodo= (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const openTodo  = (id) => {
    setTodoId(id);
  };

  let content = (
        <MainScreen 
        todos={todos} 
        addTodo={addTodo} 
        removeTodo={removeTodo}
        openTodo={openTodo} />
  );
  if(todoId){
    const selectedTodo = todos.find(todo=>todo.id===todoId)
    content = (
      <TodoScreen 
      todo={selectedTodo} 
      goBack={()=>setTodoId(null)} />
);
  }

  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        {content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    //flex: 1,
    //flexDirection: 'column',
    //backgroundColor: '#fff',
    //alignItems: 'flex-end',
    //justifyContent: 'center'
  },
});
