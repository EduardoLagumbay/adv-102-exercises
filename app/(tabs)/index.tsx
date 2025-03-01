import { View, Text } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "black",
    }}>
      <Text style={{fontSize: 25, fontWeight: 600, color: "white", textAlign: 'center'}}>{`Eduardo Jr. Lagumbay \n BSIT - 2nd year`}</Text>
    </View>
  );
}
