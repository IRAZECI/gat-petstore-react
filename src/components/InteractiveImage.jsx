import React from 'react';

/**
 * @component InteractiveImage
 * @description Renderiza uma seção com uma imagem principal que contém múltiplos
 * "hotspots" (pontos interativos). Ao interagir com um hotspot (funcionalidade a
 * ser implementada), uma caixa de informações (popup) sobre um produto ou detalhe
 * da imagem seria exibida.
 * @returns {JSX.Element} A seção da imagem interativa.
 */
function InteractiveImage() {
  return (
    <section className="interactive-section">
      {/* Container principal que serve como referência de posicionamento para os hotspots. */}
      <div className="interactive-container">
        <img 
          src="/InteractiveImage1.png" 
          alt="Gatos em um ambiente com produtos da loja" 
          className="main-image"
        />

        {/* --- Hotspots --- */}
        {/* Cada botão é um ponto interativo posicionado de forma absoluta sobre a imagem. */}
        {/* As posições (top/left) são definidas inline, mas podem ser movidas para o CSS. */}
        <button className="hotspot" style={{ top: '55%', left: '25%' }}>1</button>
        <button className="hotspot" style={{ top: '60%', left: '40%' }}>2</button>
        <button className="hotspot" style={{ top: '25%', left: '45%' }}>3</button>
        <button className="hotspot" style={{ top: '40%', left: '65%' }}>4</button>
        <button className="hotspot" style={{ top: '65%', left: '55%' }}>5</button>

        {/* --- Caixa de Informação (Popup) --- */}
        {/* Este popup é projetado para aparecer quando um hotspot é ativado. */}
        {/* Atualmente, ele está sempre visível para fins de estilização. */}
        <div className="info-popup">
          <h3>Lorem Ipsum Dolor Sit</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Class aptent taciti sociosqu ad litora torquent per conubia nostra.
          </p>
          <button className="popup-button">VER SELEÇÃO</button>
        </div>
      </div>
    </section>
  );
}

export default InteractiveImage;

