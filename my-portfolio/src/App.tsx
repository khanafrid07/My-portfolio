import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contacts'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'

function App() {

  const [theme, setTheme] = useState<string>("dark");

  const handleTheme = () => {
    setTheme((prev: string) => (prev === "dark" ? "light" : "dark"))
  };
  console.log(theme)

  useEffect(() => {

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

  }, [theme]);

  return (
    <>
      <div className="
        min-h-screen
        bg-white
        text-black
        dark:bg-slate-950
        dark:text-white
        transition-colors duration-300
      ">

        <Toaster position='top-center' />

        <Navbar
          handleTheme={handleTheme}
          theme={theme}
        />

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />

      </div>
    </>
  );
}

export default App;