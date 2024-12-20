import styles from './Nav.module.css';
const Nav=()=>{
    const { header, headerList , headerContainer , navBtn , navLogo , selected}=styles;
    return(
        <>
            <nav className={header}>
                <div className={headerContainer}>
                    <div className={navLogo}>
                        <a href="#" className={navLogo}>
                        <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
                        <h1>GeekFoods</h1>
                        </a>
                    </div>
                    <div className={headerList}>
                        <ul>
                            <li className={selected}>Home</li>
                            <li>Quote</li>
                            <li>Resturants</li>
                            <li>Foods</li>
                            <li>Contract</li>
                        </ul>
                    </div>
                    
                        <button className={`btn ${navBtn}`}>Get Started</button>
                    
                </div>
            </nav>
        </>
    )
}

export default Nav;