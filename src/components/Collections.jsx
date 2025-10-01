// src/components/Collections.jsx (presumido)

import React from 'react';

/**
 * @component Collections
 * @description Renderiza uma seção de página dedicada a exibir coleções de produtos.
 * O layout é assimétrico, com uma coluna à esquerda para um produto em destaque com
 * efeitos visuais de sobreposição, e uma coluna à direita mostrando o produto em
- * um contexto de "lifestyle" com um hotspot interativo. A seção também inclui
 * um cabeçalho com título e navegação.
 *
 * @returns {JSX.Element} A seção de coleções de produtos.
 *
 * @example
 * // Pode ser usada na página inicial ou em uma página de categorias.
 * import Collections from './components/Collections';
 *
 * function HomePage() {
 * return (
 * <div>
 * // ... outros componentes
 * <Collections />
 * // ... outros componentes
 * </div>
 * );
 * }
 */
function Collections() {
  return (
    <section className="collections-section">
      <div className="container mx-auto max-w-[1240px] px-6">
        {/* Cabeçalho da Seção: Título, link e controles de navegação. */}
        <div className="collections-header flex items-center">
          <div className="flex items-center gap-8">
            {/* Título da seção, que também funciona como um botão. */}
            <button className="font-sans font-bold text-xl text-black mr-4 hover:opacity-70 transition-opacity">COLEÇÕES</button>
            
            {/* Link para visualizar todas as coleções. */}
            <a href="#" className="font-sans text-sm uppercase underline">VER TODAS</a>
            
            {/* Botões de Navegação (funcionalidade de slider a ser implementada). */}
            <div className="flex items-center gap-4">
              <button className="arrow text-2xl">&larr;</button>
              <button className="arrow text-2xl">&rarr;</button>
            </div>
          </div>
        </div>

        {/* Grid Principal com Layout Assimétrico de Duas Colunas. */}
        <div className="collections-grid">
          {/* Coluna da Esquerda: Foco no Produto com sobreposição de elementos. */}
          <div className="collection-left">
            {/* Contêiner de posicionamento relativo para os elementos absolutos (título, imagem). */}
            <div className="product-showcase relative h-[500px]">
              
              {/* Título da coleção posicionado sobre a imagem usando z-index. */}
              <div className="collection-title-overlay absolute top-5 -left-10 z-20">
                <h3>MINIMALISMO</h3>
              </div>
              
              {/* Imagem principal do produto. */}
              <img 
                src="/hero-product-image.png" 
                alt="Móvel de madeira para gatos" 
                className="product-image absolute top-28 -left-10 z-10 scale-[1.4]"
              />
              
              {/* Elemento SVG decorativo. */}
              <svg className="decorative-dots absolute -bottom-12 -right-8" width="200" height="150" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1C1 83 199 1 199 149" stroke="#E0E0E0" strokeWidth="2" strokeDasharray="4 4"/>
              </svg>
            </div>
            <p className="collection-description">
              Also reality power discussion buy-in closest goto model. Have protocol at long practices low-hanging data most driver's.
            </p>
            <button className="explore-button">EXPLORAR</button>
          </div>

          {/* Coluna da Direita: Imagem de "lifestyle" com hotspot interativo. */}
          <div className="collection-right">
              <img 
                src="/collections-image-1.jpg" 
                alt="Gato dentro de um móvel ao lado da cama" 
                className="lifestyle-image"
              />
              {/* Hotspot: Ponto interativo (funcionalidade a ser implementada). */}
              <button className="hotspot">
                +
              </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Collections;