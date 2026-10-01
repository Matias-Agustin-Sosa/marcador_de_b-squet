import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

// Definicion de las Props
interface BotonProps {
  titulo: string;
  color: string;
  disabled?: boolean;
  onPress: () => void;
}

export const BotonAccion: React.FC<BotonProps> = ({
    titulo,
    color,
    disabled = false, // Disabled opcional con valor por default
    onPress,
}) => {
    if(disabled === false){
        // Creo el Boton
        return (
            <Button 
            title = {titulo} 
            color={color} 
            onPress={onPress} 
            />
        )
    }
    else {
        // Creo el Boton Nuevo Partido con opacidad
        return (
            <TouchableOpacity activeOpacity={0.5}>
                <Button disabled={disabled}
                title = {titulo} 
                color={color} 
                onPress={onPress}
                />
            </TouchableOpacity>
        )
    }
}

export default BotonAccion;