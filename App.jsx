import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';

// Material Design
import {
  Provider as PaperProvider,
  DefaultTheme,
  Headline,
} from 'react-native-paper';

// Componentes
import Header from './src/components/header';
import LastNews from './src/components/last-news';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'white',
  },
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        PlayfairDisplay: require('./assets/fonts/PlayfairDisplay-VariableFont_wght.ttf'),
        Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
      });

      setIsLoading(false);
    };

    loadFonts();
  }, []);

  if (!isLoading) {
    return (
      <PaperProvider theme={theme}>
        <Header />
        <LastNews />
      </PaperProvider>
    );
  }

  return <Headline>Cargando...</Headline>;
};

export default App;
