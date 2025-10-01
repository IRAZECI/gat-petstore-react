// src/components/BenefitsBar.jsx

import React from 'react';

/**
 * @component BenefitIcon
 * @description Renderiza um ícone SVG estático em formato de estrela.
 * Este ícone é utilizado para acompanhar visualmente os benefícios secundários.
 * @returns {JSX.Element} O elemento SVG do ícone de estrela.
 */
const BenefitIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/**
 * @component BenefitsBar
 * @description Um componente de UI que renderiza uma seção horizontal para destacar os principais
 * benefícios ou propostas de valor. A barra é visualmente dividida em uma área
 * de benefício principal, três benefícios secundários e um ticker de texto animado
 * na parte inferior para anúncios ou informações adicionais.
 *
 * @returns {JSX.Element} A seção completa da barra de benefícios.
 *
 * @example
 * // Para usar em qualquer página, basta importar e renderizar o componente.
 * import BenefitsBar from './components/BenefitsBar';
 *
 * function HomePage() {
 * return (
 * <div>
 * <BenefitsBar />
 * // ... resto da página
 * </div>
 * );
 * }
 */
function BenefitsBar() {
  return (
    // O wrapper principal define a cor de fundo da seção.
    <div className="benefits-bar-wrapper bg-[#fcfcfc]">
      {/* Container para centralizar o conteúdo, seguindo o padrão do layout. */}
      <div className="container mx-auto">
        {/* Seção que agrupa os blocos de benefícios. */}
        <section className="benefits-container">
          {/* 1. Benefício Principal: destaque com número. */}
          <div className="benefit-main">
            <span className="benefit-number">10</span>
            <div className="benefit-text">
              <h2 className="benefit-title">Benefício Principal</h2>
              <p className="benefit-description">Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>

          {/* 2. Benefícios Secundários: layout repetido para consistência. */}
          <div className="benefit-secondary">
            <BenefitIcon />
            <div className="benefit-text">
              <h3 className="benefit-title-secondary">Benefício Secundário</h3>
              <p className="benefit-description">Lorem ipsum dolor sit amet, consectetur al muad'lib.</p>
            </div>
          </div>
          <div className="benefit-secondary">
            <BenefitIcon />
            <div className="benefit-text">
              <h3 className="benefit-title-secondary">Benefício Secundário</h3>
              <p className="benefit-description">Lorem ipsum dolor sit amet, consectetur al muad'lib.</p>
            </div>
          </div>
          <div className="benefit-secondary">
            <BenefitIcon />
            <div className="benefit-text">
              <h3 className="benefit-title-secondary">Benefício Secundário</h3>
              <p className="benefit-description">Lorem ipsum dolor sit amet, consectetur al muad'lib.</p>
            </div>
          </div>
        </section>

        {/* 3. Ticker de Notícias: faixa com animação de rolagem contínua. */}
        <div className="ticker-wrap">
          <div className="ticker-move">
            <span>Benefício Terciário 🐾</span>
            <span>Lisan Al Gaib 🐾</span>
            <span>Benefício Terciário 🐾</span>
            <span>Lisan Al Gaib 🐾</span>
            {/* O conteúdo é duplicado para garantir o efeito de loop suave na animação CSS. */}
            <span>Benefício Terciário 🐾</span>
            <span>Lisan Al Gaib 🐾</span>
            <span>Benefício Terciário 🐾</span>
            <span>Lisan Al Gaib 🐾</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BenefitsBar;