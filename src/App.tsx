import { ConfigProvider, App as AntdApp, theme } from "antd";
import { RouterProvider } from "react-router-dom";
import router from './router'


function App() {
  const isDark = false;

  const themeConfig = {
    token: {},
    algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
  };

  return (
    <ConfigProvider theme={themeConfig}>
      <AntdApp>
        <RouterProvider router={router} />
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
