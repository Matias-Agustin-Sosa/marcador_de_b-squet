import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

// Definicion de las Props
interface BotonProps {
  titulo: string;
  color: string;
  onPress: () => void;
}

export const BotonAccion: React.FC<BotonProps> = ({
    titulo,
    color,
    onPress,
}) => {
    // Creo el Boton
    return (
        <Button 
        title = {titulo} 
        color={color} 
        onPress={onPress} 
        />
    )
}

export default BotonAccion;