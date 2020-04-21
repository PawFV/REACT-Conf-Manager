import React, { Component } from 'react';
import './styles/Footer.css'
import { IoIosHeart } from 'react-icons/io';
import { MdCopyright } from 'react-icons/md'

class Footer extends Component {
    render() {
        return (
            <footer className="Footer">

                <p> <span className="Footer__title">TechLove</span> <span className="Footer__title--span2 font-weight-bold">Conf</span> 2020 <MdCopyright className="Footer__ico" /> <span className="Footer__title--responsive">Todos los derechos reservados</span></p>
                <p>Designed with <IoIosHeart className="Footer__ico" /> by
                <a href="https://pawfv.github.io/"
                        target="_blank" rel='noreferrer noopener'>Paw</a>
                </p>
            </footer>
        );
    }
}

export default Footer;