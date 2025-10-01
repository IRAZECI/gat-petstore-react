import React from 'react';

/**
 * @component IconLogoGat
 * @description Renderiza a imagem do logo "GAT" a partir de um arquivo PNG. Permite a passagem de classes CSS customizadas para maior flexibilidade de estilização.
 * @param {object} props - Propriedades do componente.
 * @param {string} [props.className] - Classes CSS adicionais para serem aplicadas ao elemento <img>.
 * @returns {JSX.Element} O elemento <img> do logo.
 */
// Componente reutilizável para renderizar a imagem do logo da GAT.
const IconLogoGat = (props) => (
    <img 
        src="/gatIcon2.png" 
        alt="Logo GAT" 
        // Combina classes de tamanho padrão com classes customizadas passadas via props para maior flexibilidade.
        className={`w-[160px] h-[160px] object-contain ${props.className || ''}`}
    />
);

/**
 * @component Footer
 * @description Renderiza o rodapé completo do site, que é composto por duas seções principais: uma seção de "Newsletter" com formulário de cadastro e o rodapé principal (`<footer>`) que inclui branding, links, informações de contato e uma barra final com dados legais.
 * @returns {JSX.Element} Um React Fragment contendo a seção de newsletter e o rodapé completo.
 */
function Footer() {
  // O componente retorna um React.Fragment (<>) para renderizar múltiplos elementos no mesmo nível.
  return (
    <>
      {/* ============================ */}
      {/* Seção de Newsletter     */}
      {/* ============================ */}
      <section className="newsletter-section">
        <div className="container mx-auto max-w-[1240px] px-6">
            {/* Grid que divide a seção em imagem (esquerda) e conteúdo (direita). */}
            <div className="newsletter-grid">
              {/* O contêiner da imagem é estilizado via CSS, geralmente com um background-image. */}
              <div className="newsletter-image">
              </div>
              <div className="newsletter-content">
                  <h2>NEWSLETTER</h2>
                  <h3>CADASTRE-SE E GANHE 10% OFF NA SUA PRIMEIRA COMPRA</h3>
                  {/* Formulário para captura de e-mails para a newsletter. */}
                  <form className="newsletter-form">
                    <input type="text" placeholder="NOME DO SEU PET" />
                    <input type="email" placeholder="SEU EMAIL" />
                    <button type="submit">CADASTRAR</button>
                  </form>
                  <p>Seja a primeira a receber lançamentos, novidades e promoções.</p>
              </div>
            </div>
            
        </div>
      </section>

      {/* ============================ */}
      {/* Rodapé Principal do Site   */}
      {/* ============================ */}
      <footer className="site-footer">
        {/* Container para centralizar e limitar a largura do conteúdo do rodapé. */}
        <div className="container mx-auto max-w-[1240px] px-6">
          <div className="footer-main-grid">
            {/* Coluna de Branding: Contém o logo e o texto de copyright. */}
            <div className="footer-branding md:mr-16 lg:mr-24"> 
              {/* Margem inferior para posicionar o logo adequadamente na coluna. */}
              <IconLogoGat className="text-white mb-12" /> 
              <p className="copyright">&copy; 2024, GAT. TODOS OS DIREITOS RESERVADOS.</p>
            </div>

            {/* Container para as colunas de links e informações. */}
            <div className="footer-links-container">
                {/* Coluna 1: Informações de Pagamento e Segurança. */}
                <div className="footer-column">
                  <h5>FORMAS DE PAGAMENTO</h5>
                  <div className="payment-icons">
                      <img src="/pagamentosIcones.png" alt="Formas de Pagamento Aceitas: Cartões, Boleto, Pix" className="w-full h-auto max-w-[150px]" />
                  </div>
                  <h5 className="mt-4">CERTIFICADOS E SEGURANÇA</h5>
                  <div className="security-icons">
                      <img src="/segurancaIcone.png" alt="Selos de Segurança e Certificados" className="w-full h-auto max-w-[150px] mt-2" />
                  </div>
                </div>

                {/* Coluna 2: Links de Ajuda e Suporte. */}
                <div className="footer-column">
                  <h5>AJUDA</h5>
                  <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Sobre nossos produtos</a></li>
                    <li><a href="#">Trocas e devoluções</a></li>
                    <li><a href="#">Entregas</a></li>
                    <li><a href="#">Indique e ganhe</a></li>
                    <li><a href="#">Garantias</a></li>
                  </ul>
                </div>

                {/* Coluna 3: Links de Navegação Principal do site. */}
                <div className="footer-column">
                  <ul>
                    <li><a href="#" className="footer-link-title">PRODUTOS</a></li>
                    <li><a href="#" className="footer-link-title">COLEÇÕES</a></li>
                    <li><a href="#" className="footer-link-title">LOOKBOOK</a></li>
                    <li><a href="#" className="footer-link-title">SOBRE</a></li>
                    <li><a href="#" className="footer-link-title">WISHLIST</a></li>
                    <li><a href="#" className="footer-link-title">BLOG</a></li>
                  </ul>
                </div>

                {/* Coluna 4: Informações de Contato e Redes Sociais. */}
                <div className="footer-column">
                  <h5>CONTATO</h5>
                  <p>WhatsApp - (51) 9999-9999</p>
                  <p>E-mail - ajuda@gat.com.br</p>
                  <h5 className="mt-4">REDES SOCIAIS</h5>
                  <div className="social-icons">
                      <img src="/redesociasimg.png" alt="Ícones das Redes Sociais" className="w-full h-auto max-w-[150px] mt-2" />
                  </div>
                </div>
            </div>
          </div>
        </div>
        {/* Barra inferior para informações legais e de endereço. */}
        <div className="footer-legal">
            {/* Container para alinhar o texto legal com o resto do layout. */}
            <div className="container mx-auto max-w-[1240px] px-6 flex justify-end">
              <p>GAT LTDA. | R. Ondina Carvalheira Peixoto, 3010 - Chácaras Palmeiras | Cataguases - MG | CEP 36774-550</p>
            </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;