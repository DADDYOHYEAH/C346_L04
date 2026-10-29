import React from 'react';
import { View, Text, Image } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Boat = ({ name, description, icon_name, poster }) => {
  return (
    <View>
      <Text>
        <FontAwesome6 name={icon_name} size={20} color="#B23B23" />
        {name}
      </Text>
      <Text>{description}</Text>
      <Image source={poster} style={{ width: 400, height: 300 }} />
    </View>
  );
};

export default Boat;