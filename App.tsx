import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";


type Equipo = 'local' | 'visitante';

const App: React.FC = () => {

  const [marcadorLocal, setLocal] = useState<number>(0);
  const [marcadorVisitante, setVisitante] = useState<number>(0);

  const anotar = (equipo: Equipo, puntos: number) => {
    if(equipo === "local"){
      setLocal(prev => prev + puntos);
    }
    else{
      setVisitante(prev => prev + puntos);
    }
  };

  const nuevoPartido = () => {
    setLocal(0);
    setVisitante(0);
  }



  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Tablero de Basquet</Text>

      <View style={styles.tablero}>

        <View style={styles.equipoCard}>
          <Text style={styles.equipo}>Equipo Loocal</Text>
          <Text style={styles.equipo}>{marcadorLocal}</Text>
          <View style={styles.botonesGroup}>
            <Button title="+1" onPress={() => anotar('local', 1)} />
            <Button title="+2" onPress={() => anotar('local', 2)} />
            <Button title="+3" onPress={() => anotar('local', 3)} />
          </View>
        </View>

        <View style={styles.equipoCard}>
          <Text style={styles.equipo}>Eqipo Visitante</Text>
          <Text style={styles.equipo}>{marcadorVisitante}</Text>
          <View style={styles.botonesGroup}>
            <Button title="+1" onPress={() => anotar('visitante', 1)} />
            <Button title="+2" onPress={() => anotar('visitante', 2)} />
            <Button title="+3" onPress={() => anotar('visitante', 3)} />
          </View>
        </View>

      </View>

      <View style={styles.resetContainer}>
        <Button title="Nuevo partido" color="#020202" onPress={nuevoPartido} />
      </View>

    </View>

  );
};


const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#fb7e08',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#fff',
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 8,
  },

  tablero: {
    flexDirection: 'row',
    //width: '90%',
    justifyContent: 'space-between',
  },

  equipoCard: {
    //flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '45%',
    marginHorizontal: 5,
    padding: 15,
    borderRadius: 8,
  },

  equipo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },

  botonesGroup: {
    gap: 10,
    width: '100%',
  },

  resetContainer: {
    marginTop: 40,
  },
})

export default App;