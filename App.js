import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BookingProvider } from './src/context/BookingContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <BookingProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </BookingProvider>
  );
}