import ThemeBtn from '../theme-btn/theme-btn.component';

const NavBar = () => {
  return (
    <div className="flex justify-between items-center pt-2">
      <h1 className="text-4xl font-bold dark:text-gray-100">Notes</h1>
      <ThemeBtn />
    </div>
  );
};

export default NavBar;
