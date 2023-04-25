import React from 'react';
import { View, Text } from 'react-native';
import colors from '../../../constants/colors';

const Empty : React.FC = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.activeNav }}>
      <Text style={{ color: '#fff', fontSize: 24 }}>This is a placeholder</Text>
    </View>
  );
};

export default Empty;