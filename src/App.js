import React, { useEffect, useState } from 'react';
import moonIcon from './assets/images/moon.svg'
import sunIcon from './assets/images/sun.svg'



const App = () => {
  const [darkTheme, setDarkTheme] = useState(false)


  useEffect(() => {
    if (window.localStorage.getItem('DarkTheme') !== null) {
      setDarkTheme(JSON.parse(window.localStorage.getItem('DarkTheme')))
    }
  }, [])


  useEffect(() => {
    if (darkTheme === true) {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }


    window.localStorage.setItem('DarkTheme', JSON.stringify(darkTheme))

  }, [darkTheme])



  return (
    <div className="px-60 py-48 mx-auto text-center cursor-pointer  bg-gray-100 dark:bg-gray-700">
      <div onClick={() => setDarkTheme(!darkTheme)}>
        <img src={darkTheme ? sunIcon : moonIcon} alt="icon"
          className="mx-auto m-6"
        />
      </div>
      <h1 className="text-5xl rounded-md p-10 font-bold bg-white dark:bg-gray-600 text-gray-700 dark:text-white">
        I ❤ TailwindCSS
      </h1>
    </div>
  );
}

export default App;
