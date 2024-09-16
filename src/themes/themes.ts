import { ThemeConfig } from 'antd';
import { Theme } from '@/types';
import { dark } from './dark';
import { light } from './light';

export const themes: Record<Theme, ThemeConfig> = {
  dark: dark,
  light: light
};
