import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { loginUser, registerUser, logoutUser } from '../redux/slices/authSlice';

export const useUserStore = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, isLoggedIn, isLoading, error } = useSelector((state: RootState) => state.auth);

  return {
    user,
    isLoggedIn,
    isLoading,
    error,
    login: (credentials: { email: string; password: string }) => dispatch(loginUser(credentials)),
    register: (credentials: { email: string; password: string }) => dispatch(registerUser(credentials)),
    logout: () => dispatch(logoutUser()),
  };
};

// Helper function to get the current user
export const getCurrentUser = () => {
  const state = useUserStore();
  return state.user;
};

// Helper function to check if the user is logged in
export const isLoggedIn = () => {
  const state = useUserStore();
  return state.isLoggedIn;
};