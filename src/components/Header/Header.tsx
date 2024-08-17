import React from 'react';

import Logo from '../../assets/img/Logo HS.svg'
const Header: React.FC = () => {
  return (
    <header className='flex justify-center items-center gap-3 py-2 px-16 bg-slate-800 w-full h-[75px] md:gap-30 xl:gap-96'>
      <div className='flex justify-self-start'>
      <img src={Logo} alt="logo" className='w-15 ' />
        </div>
      <nav>
        <ul className="text-center">
          <li className="justify-center flex gap-4 text-white text-[20px] md:text-[20px]">
            <a href="#home" className="font-size-3">Início</a>
            <a href="#about" className="#">Projetos</a>
            <a href="#contact" className="#">Cursos</a>           
            <a href="#contact" className="#">Certificações</a>            
            <a href="#contact" className="#">Redes Sociais</a>            
          </li>
        </ul>
      </nav>

    </header>
  );
}

export default Header;
