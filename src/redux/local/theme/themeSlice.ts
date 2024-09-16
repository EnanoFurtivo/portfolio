import { createSlice } from '@reduxjs/toolkit';
import storageKeys from '@/data/storageKeys.json';
import { persistLocalStorage, readLocalStorage } from '@/helpers/localStorage';
import { RootState } from '@/redux/store';
import { Theme } from '@/types';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: readLocalStorage<Theme>(storageKeys.theme) ?? 'dark',
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state === 'dark' ? 'light' : 'dark';
      persistLocalStorage(storageKeys.theme, newTheme);
      return newTheme;
    }
  }
});

export const { toggleTheme } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme;
export const themeReducer = themeSlice.reducer;
