import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, ActivityIndicator } from 'react-native';
import AuthNavigation from './AuthNavigation';
import TabNavigation from './TabNavigation';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { checkAuth } from '../../redux/slices/authSlice';

const Stack = createStackNavigator();

const RootNavigation: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoggedIn, isLoading } = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="orange" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
        ) : (
          <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;