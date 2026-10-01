import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import BotonAccion from './BotonAccion'

// Definicion de las Props
interface PanelEquipoProps {
  nombre: string;
  puntos: number;
  color: string;
  onAnotar: (puntos: number) => void;
}

export const PanelEquipo: React.FC<PanelEquipoProps> = ({
  nombre,
  puntos,
  color,
  onAnotar,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.nombre}>{nombre}</Text>
      
      {/* Aplicamos el color dinamico recibido por props al numero */}
      <Text style={[styles.puntaje, { color }]}>
        {puntos}
      </Text>

      <View style={styles.botonesGroup}>
        {/* Cada Button notifica cuantos puntos se anotaron. */}
        <BotonAccion 
          titulo="+1" 
          color={color} 
          onPress={() => onAnotar(1)} 
        />
        <BotonAccion 
          titulo="+2" 
          color={color} 
          onPress={() => onAnotar(2)} 
        />
        <BotonAccion 
          titulo="+3" 
          color={color} 
          onPress={() => onAnotar(3)} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginHorizontal: 8,
    padding: 15,
    borderRadius: 8,
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  puntaje: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  botonesGroup: {
    gap: 10,
    width: '100%',
  },
});

export default PanelEquipo;