import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { THEME } from "../theme";
import { AppCard } from "../components/ui/Card";
import { AppTextBold } from "../components/ui/AppTextBold";
import { EditModal } from "../components/EditModal";
export const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {
  const [modal, setModal] = useState(false);
  const saveHandler = title =>{
    onSave(todo.id, title)
    setModal(false)

  }

  return (
    <View>
      <EditModal
        value={todo.title}
        visible={modal}
        onCancel={() => setModal(false)}
        onSave={saveHandler}
      ></EditModal>
      <AppCard style={styles.card}>
        <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
        <Button title="Ред." onPress={() => setModal(true)}></Button>
      </AppCard>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="Назад" color={THEME.GREY_COLOR} onPress={goBack} />
        </View>
        <View style={styles.button}>
          <Button
            title="Удалить"
            color={THEME.DANGER_COLOR}
            onPress={() => onRemove(todo.id)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
  button: {
    width: "40%",
  },
  title: {
    fontSize: 20,
  },
});
