import './footer.css';

const Footer = ()=>{
    return (
        <footer className='footer' style={{backgroundImage: 'url(/img/footer.png)'}}>

            <div className="footer-content contenedor">
                <div className="redes">
                    <a href="https://www.facebook.com/" target='_blank'>
                        <img src="./img/facebook.png" className='iconRedes' alt="Facebook" />
                    </a>
                    <a href="https://www.facebook.com/" target='_blank'>
                        <img src="./img/twitter.png" className='iconRedes' alt="Facebook" />
                    </a>
                    <a href="https://www.facebook.com/" target='_blank'>
                        <img src="./img/instagram.png" className='iconRedes' alt="Facebook" />
                    </a>
                    
                </div>
                <img src="/img/Logo.png" alt="logo" className='logo'/>
                <strong>Desarrollado por Alura</strong>
            </div>
        </footer>
    )
}

export default Footer;