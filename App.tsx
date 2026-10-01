import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import PanelEquipo from './components/PanelEquipo';
import BotonAccion from './components/BotonAccion'

/* 
  1) El estado debe vivir en el padre, porque si cada './PanelEquipo' guardara su propio estado en un useState local, 
  el componente padre no podria comparar ambos puntajes para calcular quien va ganando (consigna del Ejercicio 3), 
  mostrar la leyenda de diferencia ni deshabilitar el boton de "Nuevo partido". Al tener el estado en el padre, 
  la pantalla principal centraliza los datos y puede pasárselos a los hijos.
*/

type Equipo = 'local' | 'visitante';

const App: React.FC = () => {
  {/* Constantes que almacenan los puntos de cada equipo */}
  const [marcadorLocal, setLocal] = useState<number>(0);
  const [marcadorVisitante, setVisitante] = useState<number>(0);

  {/* Funcion para sumar puntos a los equipos */}
  const anotar = (equipo: Equipo, puntos: number) => {
    if (equipo === 'local') {
      setLocal(prev => prev + puntos);
    } else {
      setVisitante(prev => prev + puntos);
    }
  };

  {/* Funcion que recetea los puntos de los equipos */}
  const nuevoPartido = () => {
    setLocal(0);
    setVisitante(0);
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Tablero de Básquet</Text>

      <View style={styles.tablero}>
        {/* Panel Local: Azul */}
        <PanelEquipo
          nombre="Local"
          puntos={marcadorLocal}
          color="#2563eb"
          onAnotar={(punto) => anotar('local', punto)}
        />

        {/* Panel Visitante: Rojo */}
        <PanelEquipo
          nombre="Visitante"
          puntos={marcadorVisitante}
          color="#dc2626"
          onAnotar={(punto) => anotar('visitante', punto)}
        />
      </View>

       {/* Boton de nuevo partido */}
      <View style={styles.resetContainer}>
        <BotonAccion titulo="Nuevo partido" color="#020202" onPress={nuevoPartido} />
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
    width: '95%',
  },
  resetContainer: {
    marginTop: 40,
  },
});

export default App;