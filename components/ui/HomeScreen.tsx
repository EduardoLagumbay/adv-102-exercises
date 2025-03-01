import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";
import ItemContext from "./ItemContext";

const HomeScreen: React.FC = () => {
  const { state, dispatch } = useContext(ItemContext);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  const handleAddOrUpdate = () => {
    if (editId) {
      dispatch({ type: "UPDATE_ITEM", payload: { id: editId, name: input } });
      setEditId(null);
    } else {
      dispatch({ type: "ADD_ITEM", payload: input });
    }
    setInput("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native CRUD</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter item"
        value={input}
        onChangeText={setInput}
      />
      <Button title={editId ? "Update Item" : "Add Item"} onPress={handleAddOrUpdate} />
      <FlatList
        data={state}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Button title="Edit" onPress={() => { setEditId(item.id); setInput(item.name); }} />
            <Button title="Delete" onPress={() => dispatch({ type: "DELETE_ITEM", payload: item.id })} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  input: { borderWidth: 1, padding: 8, marginBottom: 10 },
  item: { flexDirection: "row", justifyContent: "space-between", padding: 10, borderBottomWidth: 1 }
});

export default HomeScreen;
