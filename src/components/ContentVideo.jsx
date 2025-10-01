// src/components/ContentVideo.jsx

import React from 'react';

/**
 * @component ContentVideo
 * @description Renderiza uma seção de conteúdo que destaca um vídeo.
 * A estrutura é dividida em duas partes: uma superior com um título e a miniatura
 * de um vídeo (com um botão de play), e uma inferior com um parágrafo descritivo
 * e um botão de "call-to-action".
 * @returns {JSX.Element} A seção de conteúdo com vídeo.
 * @example
 * <ContentVideo />
 */
function ContentVideo() {
  return (
    <section className="content-video-section">
      {/* Parte superior da seção, com layout de duas colunas. */}
      <div className="content-video-top">
        {/* Coluna da Esquerda: Título principal com um elemento decorativo. */}
        <div className="content-title-block">
          <div className="decorative-circle"></div>
          <h2>
            Decorar<br/>
            Arranhar &<br/>
            Relaxar
          </h2>
        </div>
        
        {/* Coluna da Direita: Thumbnail do vídeo com um botão de play sobreposto. */}
        <div className="video-thumbnail-block">
          <img 
            src="/ContentVideo1.jpg" 
            alt="Gato relaxando" 
            className="video-thumbnail"
          />
          <button className="play-button">
            {/* O ícone de "Play" é provavelmente estilizado via CSS. */}
          </button>
        </div>
      </div>

      {/* Parte inferior da seção, contendo texto e um botão de call-to-action. */}
      <div className="content-video-bottom">
        <p>
          Hammer can low idea of. Lunch able design items needle here stop drive. / or devil pants game close. Prioritize out key view / vendor we've. 4-blocker gave shift ideal based post.
        </p>
        <button className="more-about-button">MAIS SOBRE A GAT</button>
      </div>
    </section>
  );
}

export default ContentVideo;