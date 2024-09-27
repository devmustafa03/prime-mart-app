import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  id: string;
  email: string;
}

interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
}

interface Credentials {
  email: string;
  password: string;
}

export const loginUser = createAsyncThunk<User, Credentials, { rejectValue: string }>(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const username = email.split('@')[0];
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const user = await response.json();
      await AsyncStorage.setItem('token', user.id.toString());
      return user;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const registerUser = createAsyncThunk<User, Credentials, { rejectValue: string }>(
  'auth/register',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      const id = Date.now().toString(); // Generate a unique ID
      const user = { id, email, password };
      await AsyncStorage.setItem('user', JSON.stringify(user));

      // Create a token (in a real app, this would be done server-side)
      const token = btoa(JSON.stringify({ id, email }));
      await AsyncStorage.setItem('token', token);

      return { id, email };
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async () => {
    await AsyncStorage.removeItem('token');
  }
);

export const checkAuth = createAsyncThunk<User, void, { rejectValue: string }>(
  'auth/check',
  async (_, { rejectWithValue }) => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        const user = JSON.parse(atob(token));
        return user;
      }
      return rejectWithValue('No token found');
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? 'An error occurred';
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? 'An error occurred';
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.user = null;
      })
      .addCase(checkAuth.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.isLoggedIn = false;
        state.user = null;
      });
  },
});

export default authSlice.reducer;