import {
  StyleSheet,
  Text,
  View,
  Modal,
  SafeAreaView,
  Button,
} from "react-native";
import React, { useState } from "react";

const ModalPratice = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Modal
        animationType="fade"
        transparent={false}
        visible={showModal}
        onRequsetClose={() => alert("Model has been closed.")}
      >
        <View style={[styles.container]}>
          <View style={styles.modalView}>
            <Text style={styles.textStyle}>คุณลืมปิดไฟในห้อง!!!</Text>
            <Button
              title="กรุณากดปุ่มเพื่อปิดไฟ"
              color="pink"
              onPress={() => setShowModal(!showModal)}
            />
          </View>
        </View>
      </Modal>
      <View style={[styles.container, styles.modalBg]}>
        <Text style={[styles.textStyle , styles.textcolor01]}>ไฟในห้องปิดอยู่</Text>
        <Button
          title="กรุณากดปุ่มเพื่อเปิดไฟอีกครั้ง"
          color="#2F4F4F"
          onPress={() => setShowModal(!showModal)}
        />
      </View>
    </SafeAreaView>
  );
};

export default ModalPratice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  modalBg: {
    backgroundColor: "gray",
  },
  textcolor01: {
    color: "white",
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
