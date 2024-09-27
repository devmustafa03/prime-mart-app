import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginUser } from '../redux/slices/authSlice';
import { useAppDispatch } from '../hooks/hooks';

export const useAuth = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      const userJson = await AsyncStorage.getItem('user');
      if (userJson) {
        const user = JSON.parse(userJson);
        dispatch(loginUser({ email: user.email, password: '' }));
      }
    };

    checkAuth();
  }, [dispatch]);

  return null;
};