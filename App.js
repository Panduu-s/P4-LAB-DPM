import React, { useState } from "react";

import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";

const App = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const teamA = "Tim A";
  const teamB = "Tim B";

  const addScoreA = () => {
    setScoreA(scoreA + 1);
  };

  const subtractScoreA = () => {
    if (scoreA > 0) {
      setScoreA(scoreA - 1);
    }
  };

  const addScoreB = () => {
    setScoreB(scoreB + 1);
  };

  const subtractScoreB = () => {
    if (scoreB > 0) {
      setScoreB(scoreB - 1);
    }
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  const checkWinner = () => {
    if (scoreA > 8) {
      Alert.alert(`${teamA} Menang!`);
      resetScores();
    } else if (scoreB > 8) {
      Alert.alert(`${teamB} Menang!`);
      resetScores();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>

        {teamA} <Text style={styles.vsText}>VS</Text> {teamB}
      </Text>
      <View style={styles.scoreContainer}>


        <View style={styles.scoreBox}>
          <Text style={styles.score}>{scoreA}</Text>
        </View>
        <View style={styles.scoreBox}>
          <Text style={styles.score}>{scoreB}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>{teamA}</Text>
          <View style={styles.buttonGroup}>


            <TouchableOpacity
              style={[styles.button, styles.addButton]}
              onPress={() => {
                addScoreA();
                checkWinner();
              }}


            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.subtractButton]}
              onPress={subtractScoreA}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>{teamB}</Text>
          <View style={styles.buttonGroup}>


            <TouchableOpacity
              style={[styles.button, styles.addButton]}
              onPress={() => {
                addScoreB();
                checkWinner();
              }}


            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.subtractButton]}
              onPress={subtractScoreB}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.resetButton}
        onPress={resetScores}
      >
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#1a1a1a",
    padding: 20,
  },
  title: {

    fontSize: 32,
    fontWeight: "bold",

    marginBottom: 30,
    color: "#ffffff",
  },
  vsText: {
    color: "#ff6b6b",
    fontSize: 28,
  },
  scoreContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",

    marginBottom: 40,
  },
  scoreBox: {
    backgroundColor: "#2a2a2a",
    padding: 20,
    borderRadius: 15,
    minWidth: 120,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  score: {

    fontSize: 60,
    fontWeight: "bold",

    color: "#ffffff",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 30,
  },
  teamContainer: {
    alignItems: "center",
  },
  teamName: {

    fontSize: 24,
    fontWeight: "bold",

    marginBottom: 15,
    color: "#ffffff",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",

    width: 140,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  addButton: {
    backgroundColor: "#4CAF50",
  },
  subtractButton: {
    backgroundColor: "#f44336",
  },
  buttonText: {
    fontSize: 30,
    color: "#ffffff",
    fontWeight: "bold",
  },
  resetButton: {
    backgroundColor: "#ff6b6b",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 20,
  },
  resetButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});


export default App;