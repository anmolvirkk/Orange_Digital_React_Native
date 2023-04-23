import React from 'react';
import { View, Text } from 'react-native';
import Colors from '../../../constants/Colors';

const Empty = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.activeNav }}>
      <Text style={{ color: '#fff', fontSize: 24 }}>This is a placeholder</Text>
    </View>
  );
};

export default Empty;