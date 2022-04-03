import './DarkMode.css';

const setDark = () => {
  localStorage.setItem('theme', 'dark');
  document.documentElement.setAttribute('data-theme', 'dark');
};

const setLight = () => {
  localStorage.setItem('theme', 'light');
  document.documentElement.setAttribute('data-theme', 'light');
};

const toggleTheme: changeEventHandler<HTMLInputElement> = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};

const DarkMode = () => {
  return (
    <div className='toggle-theme-wrapper'>
      <span></span>
      <label className='toggle-theme' htmlFor='checkbox'>
        <input type='checkbox' id='checkbox' onChange={toggleTheme} />

        <span className='slider round'></span>
      </label>
      <span>
      </span>
    </div>
  );
};

export default DarkMode;
