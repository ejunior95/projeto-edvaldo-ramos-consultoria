import './index.css'

export default function NavBarComponent() {
    return(
        <>
            <nav>
                <div className="container-logo">
                    <h1>LOGO</h1>
                </div>
                <div className="container-menu">
                    <ul className="menu">
                        <li><a href="#">Opção 01</a></li>
                        <li><a href="#">Opção 02</a></li>
                        <li><a href="#">Opção 03</a></li>
                        <li><a href="#">Opção 04</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
};