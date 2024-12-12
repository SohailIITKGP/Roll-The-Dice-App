import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import * as Haptics from 'expo-haptics'; // Import expo-haptics

import DiceOne from '../assets/images/One.png';
import DiceTwo from '../assets/images/Two.png';
import DiceThree from '../assets/images/Three.png';
import DiceFour from '../assets/images/Four.png';
import DiceFive from '../assets/images/Five.png';
import DiceSix from '../assets/images/Six.png';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({ imageUrl }) => (
  <View>
    <Image style={styles.diceImage} source={imageUrl} />
  </View>
);

export default function DiceRollerApp() {
  const [diceImage, setDiceImage] = useState(DiceOne);

  const diceImages = [DiceOne, DiceTwo, DiceThree, DiceFour, DiceFive, DiceSix];

  const rollDiceOnTap = () => {
    const randomNumber = Math.floor(Math.random() * 6);
    console.log("Random number is",randomNumber);
    setDiceImage(diceImages[randomNumber]);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.rollDiceBtnText}>Roll the dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
