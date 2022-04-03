import './DarkMode.css';

//DARK MODE
const setDark = () => {
  localStorage.setItem('theme', 'dark');
  document.documentElement.setAttribute('data-theme', 'dark');
};

//LIGHT MODE
const setLight = () => {
  localStorage.setItem('theme', 'light');
  document.documentElement.setAttribute('data-theme', 'light');
};

//Preferred user settings for dark mode or light mode.
const storedTheme = localStorage.getItem("theme");

const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark = storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
  setDark();
}


//TOGGLE FROM LIGHT TO DARK
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
        <input type='checkbox' id='checkbox' onChange={toggleTheme} 
        defaultChecked={defaultDark} />

        <span className='slider round'></span>
      </label>
      <span>
      </span>
    </div>
  );
};

export default DarkMode;
