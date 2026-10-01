import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import PanelEquipo from './components/PanelEquipo';
import BotonAccion from './components/BotonAccion'

type Equipo = 'local' | 'visitante';

const App: React.FC = () => {
  {/* Constantes que almacenan los puntos de cada equipo */}
  const [marcadorLocal, setLocal] = useState<number>(0);
  const [marcadorVisitante, setVisitante] = useState<number>(0);

  {/* Funcion para sumar puntos a los equipos */}
  const anotar = (equipo: Equipo, puntos: number) => {
    if (equipo === 'local') {
      setLocal(prev => prev + puntos);
    } 
    else {
      setVisitante(prev => prev + puntos);
    }
  };

  {/* Funcion que recetea los puntos de los equipos */}
  const nuevoPartido = () => {
    setLocal(0);
    setVisitante(0);
  };

  {/* Funcion para determinar ganador */}
  const resultado = () => {
    const diferencia = Math.abs(marcadorLocal - marcadorVisitante);

    if (marcadorLocal > marcadorVisitante) {
      return {Diferencia: `Gana el equipo Local por ${diferencia}`, Local: true , Visitante: false};
    }
    else if (marcadorLocal < marcadorVisitante) {
      return {Diferencia: `Gana el equipo Visitante por ${diferencia}`, Local: false , Visitante: true};
    }
    else{
      return {Diferencia: 'Empate', Gana: false};
    }
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Tablero de Básquet</Text>

      <View style={styles.tablero}>
        {/* Panel Local: Azul */}
        <PanelEquipo
          nombre="Local"
          puntos={marcadorLocal}
          color="#2563eb"
          gana={Boolean(resultado().Local)}
          onAnotar={(punto) => anotar('local', punto)}
        />

        {/* Panel Visitante: Rojo */}
        <PanelEquipo
          nombre="Visitante"
          puntos={marcadorVisitante}
          color="#dc2626"
          gana={Boolean(resultado().Visitante)}
          onAnotar={(punto) => anotar('visitante', punto)}
        />
      </View>

       {/* Boton de nuevo partido */}
      <View style={styles.resetContainer}>
        {/* Coloco una condicion para bloquer el boton (disabled) */}
        <BotonAccion titulo="Nuevo partido" color="#020202" disabled={marcadorLocal === 0 && marcadorVisitante === 0} onPress={nuevoPartido} />
      </View>

      <Text style={styles.marcador}>{resultado().Diferencia}</Text>
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
    width: '95%',
  },
  resetContainer: {
    marginTop: 40,
  },
  marcador: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    color: '#04ff3e',
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 8,
  },
});

export default App;