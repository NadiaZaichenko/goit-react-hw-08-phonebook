import { Switch, Space, ConfigProvider } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { BsSun, BsMoon } from 'react-icons/bs';
import { selectTheme } from 'redux/theme/selector';
import { setTheme } from 'redux/theme/slice';

const switcherTheme = {
  token: {
    colorPrimary: '#d7fff1',
    colorTextTertiary: '#00506b',
    fontSize: 26,
  },
};

 export function Switcher() {
  const themeMode = useSelector(selectTheme);
  const dispatch = useDispatch();

  const themeToggle = () => {
    if (themeMode === 'light') {
      dispatch(setTheme('dark'));
    } else {
      dispatch(setTheme('light'));
    }
  };

  return (
    <ConfigProvider theme={switcherTheme}>
      <Space direction="vertical">
        <Switch
          checkedChildren={<BsSun color="#00506b" />}
          unCheckedChildren={<BsMoon color="#d7fff1" />}
          defaultChecked={false}
          onChange={themeToggle}
        />
      </Space>
    </ConfigProvider>
  );
}