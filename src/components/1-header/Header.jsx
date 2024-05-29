import { useEffect, useState } from 'react';
import './header.css';

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);


  return (
    <header className=' flex' >
      <button onClick={(showModel) => {
        setshowModal(true)

      }
      } className='menu icon-menu'>

      </button>
      <div />
      <nav>
        <ul className='flex'>
          <li><a href="#anchor-about">About</a></li>
          <li><a href="">Articles</a></li>
          <li><a href="#anchor-project">Projects</a></li>
          <li><a href="">Speaking</a></li>
        
      
          <li><a href="#anchor-contact">Contact</a></li>
        </ul>

      </nav>
      {/* <button className='mode flex' >
        <span className='icon-moon-o' />
      </button> */}
       <button
        onClick={() => {
          // Send value to LS
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          // get value from LS
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"> </span>
        ) : (
          <span className="icon-sun"> </span>
        )}
      </button>

      {showModal && (<div className="fixed">

        <ul className="model ">
          <li  >
            <button className="icon-x " onClick={() =>
              setshowModel(false)
            } /></li>
          <li ><a href="">About</a></li>
          <li ><a href="">Articles</a></li>
          <li><a href="">Projects</a></li>
          <li ><a href="">Speaking</a></li>
          <li ><a href="">Contact</a></li>
        </ul>
      </div>)}
    </header>
  )
}

export default Header
