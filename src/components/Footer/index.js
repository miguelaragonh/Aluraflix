import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        {' '}
        <a href="https://www.alura.com/">
          React Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
