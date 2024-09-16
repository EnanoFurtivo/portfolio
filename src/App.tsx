import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/router';
import { useAppSelector } from '@/redux/hooks';
import { selectTheme } from '@/redux/local';
import { themes } from '@/themes/themes';

export const App: React.FC = () => {
  const themeKey = useAppSelector(selectTheme);

  return (
    <ConfigProvider theme={themes[themeKey]}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
};
