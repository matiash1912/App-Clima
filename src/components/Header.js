import { Link } from "react-router-dom";

const Header = () => {
    
    const switchMenu = () => {
        const menuBurg = document.getElementById("menu-burg");
        
        if(menuBurg.classList.contains("menu-burg")){
            menuBurg.classList.remove("menu-burg")
        } else{
            menuBurg.classList.add("menu-burg")
        }

        const menu = document.createElement("DIV")
        menu.classList.add("menu")
        menu.innerHTML = "<a href=\"/ \">Hoy</a><a href=\"/cada-hora \">Cada Hora</a><a href=\"/diario \">Esta Semana</a>"

        const selectHeader = document.querySelector(".header")
        const selectMenu = document.querySelector(".menu")

        if(!menuBurg.classList.contains("menu-burg")){
            selectHeader.insertAdjacentElement("afterend",menu)
        } else{
            selectMenu.remove()
        }
    }

    return(
        <div className="header-bg">
            <div className="header centrado">
                <h3>Maty's Weather</h3>
                <svg onClick={() => switchMenu()} 
                
                id="menu-burg" className="menu-burg" viewBox="0 0 100 80" width="40" height="40">
                    <rect width="100" height="15"></rect>
                    <rect y="30" width="100" height="15"></rect>
                    <rect y="60" width="100" height="15"></rect>
                </svg>
                <nav>
                    <Link to="/">Hoy</Link>
                    <Link to="/cada-hora">Cada Hora</Link>
                    <Link to="/diario">Esta Semana</Link>
                </nav>
            </div>
        </div>

    )
}

export default Header;