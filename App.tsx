

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,

} from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

import RootNavigation from './src/navigation.js/rootNavigation';
function App({ children, title }: SectionProps): JSX.Element {

  return (
    // {/* <StatusBar
    //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //     backgroundColor={backgroundStyle.backgroundColor}
    //   /> */}
    < RootNavigation />
    // </SafeAreaView>
  );
}

export default App