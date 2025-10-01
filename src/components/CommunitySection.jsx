// src/components/CommunitySection.jsx

import React from 'react';

/**
 * @component GalleryItem
 * @description Um sub-componente de apresentação para um único item na galeria da comunidade.
 * Exibe uma imagem com uma sobreposição que mostra o número de curtidas.
 * @param {object} props - As propriedades do componente.
 * @param {string} props.imageUrl - A URL da imagem a ser exibida.
 * @param {string | number} props.likes - O número de curtidas a ser exibido.
 * @returns {JSX.Element} Um item da galeria com imagem e overlay de curtidas.
 */
function GalleryItem({ imageUrl, likes }) {
  return (
    <div className="gallery-item">
      <img src={imageUrl} alt="Foto da comunidade de gatos" />
      <div className="likes-overlay">
        <span>❤️</span> {likes}
      </div>
    </div>
  );
}

/**
 * @component CommunitySection
 * @description Renderiza uma seção de página para incentivar o engajamento da comunidade.
 * Apresenta um cabeçalho com uma hashtag de campanha e uma galeria de imagens
 * em rolagem horizontal infinita para exibir conteúdo gerado pelos usuários.
 * @returns {JSX.Element} A seção da comunidade.
 * @example
 * <CommunitySection />
 */
function CommunitySection() {
  // Dados estáticos das imagens da galeria.
  const images = [
    { src: "/Comunidade1.jpg", likes: "10mil" },
    { src: "/Comunidade2.jpg", likes: "12mil" },
    { src: "/Comunidade3.jpg", likes: "8mil" },
    { src: "/Comunidade4.jpg", likes: "15mil" },
    { src: "/Comunidade5.jpg", likes: "9mil" },
  ];

  // A lista de imagens é duplicada para criar o efeito de loop contínuo na animação CSS.
  const galleryContent = [...images, ...images];

  return (
    <section className="community-section">
      {/* Cabeçalho com o chamado para ação e a hashtag principal. */}
      <div className="community-header">
        <p>Faça parte da comunidade de gatunos que amam design e papelão compartilhando a hashtag:</p>
        <h2>#Adoradores<span className="hashtag-highlight">DePapelão</span></h2>
      </div>

      {/* Galeria com animação de rolagem horizontal. */}
      <div className="community-gallery">
        <div className="gallery-track">
          {galleryContent.map((item, index) => (
            <GalleryItem key={index} imageUrl={item.src} likes={item.likes} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommunitySection;