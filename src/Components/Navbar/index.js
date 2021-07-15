import './index.css'

const NavbarComponent = () => {

    return (
        <>
            <div class="ui secondary menu ">
                <a class="active item">
                    <img src='https://image.flaticon.com/icons/png/512/3256/3256114.png'></img>
                </a>
                <a class="item">
                    Aulas
                </a>
                <a class="item">
                    Desenolvedores
                </a>
                <div class="right menu item">
                    <div class="ui primary button">Logout</div>
                    <div class="item menu">
                        <div class="ui secondary button">Sign Up</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarComponent