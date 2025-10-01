import React from 'react';

/**
 * @component Hero
 * @description Renderiza a seção "hero" principal da página, que é a primeira
 * área de conteúdo visual de destaque. Inclui um título, subtítulo, botão de
 * call-to-action, uma imagem de produto e controles de carrossel.
 * @returns {JSX.Element} O componente da seção hero.
 */
const Hero = () => {
  return (
    // Container principal da seção hero.
    <div className="hero-container">
      {/* Coluna da esquerda com as informações textuais. */}
      <div className="hero-info">
        
        {/* Wrapper para o título, permitindo o efeito de sobreposição com o círculo. */}
        <div className="hero-title-wrapper">
          {/* Elemento circular decorativo posicionado atrás do título. */}
          <div className="hero-title-bg-circle"></div>
          {/* Título principal da seção. */}
          <h1 className="hero-title">
            NOVA<br/>COLEÇÃO
          </h1>
        </div>

        <p className="hero-subtitle">
          Móveis para seu gato <span className="font-semibold">esgatanhar</span> sem dó!
        </p>
        <button className="hero-button">
          VER COLEÇÃO
        </button>
      </div>
      {/* Coluna da direita com a imagem do produto e controles. */}
      <div className="hero-image-wrapper">
        <img src="/hero-product-image.png" alt="Produto GAT em destaque" className="hero-image" />
        {/* Controles de navegação para o carrossel de imagens. */}
        <div className="carousel-controls">
          <button className="arrow">&larr;</button>
          <div className="dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <button className="arrow">&rarr;</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
