// src/components/FeaturedSection.jsx

import React from 'react';

/**
 * @component ProductCard
 * @description Um sub-componente reutilizável que exibe as informações de um único produto
 * em um layout de card. Inclui imagem, tags de promoção, nome, preços e amostras de cores.
 * @param {object} props - As propriedades do componente.
 * @param {string} props.name - O nome do produto.
 * @param {string} props.oldPrice - O preço original (sem desconto).
 * @param {string} props.newPrice - O preço atual (com desconto).
 * @param {string} props.imageUrl - A URL da imagem do produto.
 * @param {string[]} props.colors - Um array de strings hexadecimais representando as cores disponíveis.
 * @returns {JSX.Element} O card de produto.
 */
function ProductCard({ name, oldPrice, newPrice, imageUrl, colors }) {
  return (
    // O container do card é relativo para posicionar as tags promocionais.
    <div className="product-card relative pt-8">
      
      {/* Tags de promoção (ex: "OFF", "Lançamento") posicionadas absolutamente no topo. */}
      <div className="product-tags absolute top-0 left-4 z-10">
        <span className="tag-off text-xs">10% OFF</span>
        <span className="tag-new text-xs">LANÇAMENTO</span>
      </div>

      {/* Container da imagem do produto. */}
      <div className="product-image-container mt-8">
        <img src={imageUrl} alt={name} className="product-image" />
      </div>

      {/* Bloco de informações do produto. */}
      <div className="product-info">
        <h3 className="product-name text-lg">{name}</h3>
        <div className="product-price">
          <span className="old-price text-base">{oldPrice}</span>
          <span className="new-price text-base">{newPrice}</span>
        </div>
        <div className="color-swatches">
          {/* Mapeia o array de cores para renderizar as amostras. */}
          {colors.map((color, index) => (
            <span 
              key={index} 
              className="color-swatch cursor-pointer transition-transform hover:scale-125" 
              style={{ backgroundColor: color }}>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * @component FeaturedSection
 * @description Renderiza a seção principal de "produtos em destaque" (Queridinhos).
 * A seção é dividida em duas partes: uma grade de produtos em destaque e uma área
 * de navegação por categorias.
 * @returns {JSX.Element} A seção de produtos em destaque.
 */
function FeaturedSection() {
  // Em uma aplicação real, estes dados seriam buscados de uma API.
  const products = [
    { name: "TOCA TÚNEL MÓDULOS", oldPrice: "R$600", newPrice: "R$540", imageUrl: "/hero-product-image.png", colors: ["#A0522D", "#DC143C", "#4682B4", "#2E8B57"] },
    { name: "TOCA TÚNEL MÓDULOS", oldPrice: "R$600", newPrice: "R$540", imageUrl: "/hero-product-image.png", colors: ["#A0522D", "#DC143C", "#4682B4", "#2E8B57"] },
    { name: "TOCA TÚNEL MÓDULOS", oldPrice: "R$600", newPrice: "R$540", imageUrl: "/hero-product-image.png", colors: ["#A0522D", "#DC143C", "#4682B4", "#2E8B57"] }
  ];

  return (
    <section className="featured-section">
      <div className="container mx-auto max-w-[1240px] px-6">
        {/* Container principal com layout flexível de duas colunas (em telas médias e maiores). */}
        <div className="favorites-container flex flex-col md:flex-row items-start gap-8 mt-4">
          
          {/* Coluna da Esquerda: Cabeçalho da seção. */}
          <div className="favorites-header w-full md:w-1/5">
              <div className="title-background-circle"></div>
              <h2 className="favorites-title text-4xl">QUERIDINHO<br/>DELES</h2>
              <button className="view-all-button text-sm">VER TUDO</button>
          </div>

          {/* Coluna da Direita: Grade de produtos. */}
          <div className="products-grid w-full md:w-4/5 md:pl-24 md:mt-12">
              {products.map((product, index) => (
                  <ProductCard key={index} {...product} />
              ))}
          </div>
        </div>

        {/* Seção secundária para navegação por categorias. */}
        <div className="categories-container">
          <h3 className="categories-title">NAVEGUE PELAS CATEGORIAS</h3>
          <div className="category-buttons">
            <button className="category-button">CLÁSSICO</button>
            <button className="category-button">MINIMALISMO</button>
            <button className="category-button">MAXIMALISMO</button>
            <button className="category-button">BOHO</button>
            <button className="category-button">VER TUDO</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;