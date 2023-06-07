import { useEffect } from 'react';

const ThemeBtn = () => {
  useEffect(() => {
    if (localStorage.theme === 'dark')
      document.documentElement.classList.add('dark');
  }, []);

  const themeChangeHandler = () => {
    if (localStorage.theme === 'light') {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
    } else {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={themeChangeHandler}
      className="p-1 h-7 text-sm rounded-lg bg-gray-200"
    >
      Toggle mode
    </button>
  );
};

export default ThemeBtn;
