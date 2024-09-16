import { Outlet } from 'react-router-dom';
import { Layout, theme } from 'antd';
import { useEffect } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { selectTheme } from '@/redux/local';

const { Content, Footer } = Layout;
const { useToken } = theme;

export const MainLayout: React.FC = () => {
  const { token } = useToken();
  const theme = useAppSelector(selectTheme);

  useEffect(() => {
    // Fix for motion scroll showing a white background when scrolling
    document.documentElement.style.setProperty('--background-color', token.colorBgLayout);
  }, [theme]);

  return (
    <Layout>
      <Content className="flex justify-center">
        <div className="max-w-6xl">
          <Outlet />
        </div>
      </Content>
      <Footer className="text-center">© {new Date().getFullYear()} Luciano Martin Godoy Romanutti. All rights reserved.</Footer>
    </Layout>
  );
};
