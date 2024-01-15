import React, {useState} from 'react';
import {Modal, StyleSheet, Text, Pressable, View} from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        statusBarTranslucent={true}    //Voi olla oma androidi buginen, mutta ei mitää vaikutusta stausbariin. Muuttuu täysin valkoiseksi kun modal aukeaa
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.container}>
          <View style={styles.containerModal}>
            <Text>This is modal...</Text>            
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textClose}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text>Show Modal message</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
  },
  containerModal: {     // Valmiita tyylejä
    margin: 20,
    backgroundColor: 'grey',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textClose: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
