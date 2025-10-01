import React from 'react';

// --- Ícones SVG ---
// Coleção de componentes de ícones SVG reutilizáveis para a UI.

/** @component IconGrid @description Renderiza um ícone SVG de "grade" para menus ou categorias. */
const IconGrid = (props) => (
  <svg viewBox="0 0 24 24" {...props}><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
);

/** @component IconTag @description Renderiza um ícone SVG de "etiqueta" para seções como coleções. */
const IconTag = (props) => (
  <svg viewBox="0 0 24 24" {...props}><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
);

/** @component IconSearch @description Renderiza um ícone SVG de "busca" (lupa). */
const IconSearch = (props) => (
  <svg viewBox="0 0 24 24" {...props}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);

/** @component IconUser @description Renderiza um ícone SVG de "usuário" para a área de login/perfil. */
const IconUser = (props) => (
  <svg viewBox="0 0 24 24" {...props}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);

/** @component IconShoppingBag @description Renderiza um ícone SVG de "sacola de compras". */
const IconShoppingBag = (props) => (
  <svg viewBox="0 0 24 24" {...props}><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-2z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
);

/** @component IconLogo @description Renderiza o logo principal da "GAT" em formato SVG. */
const IconLogo = (props) => (
    <svg viewBox="0 0 24 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M19.6176 5.50567C18.7949 3.29606 18.3753 2.17483 17.9385 2.18643C17.3145 2.20189 17.2137 3.75326 15.8677 5.70091C15.1534 6.73516 13.7115 8.85777 12.1898 8.72824C10.6777 8.59969 9.66779 6.3002 8.82007 4.37283C7.60658 1.61325 7.70067 0.0657528 7.11888 0.00195855C6.25101 -0.0937329 5.81707 3.32699 3.29217 8.08353C1.17624 12.0697 0.182604 12.1142 0.020358 14C-0.301255 17.7339 3.23745 21.6727 7.11408 23.2801C11.5226 25.1089 15.5931 23.6 16.6425 23.168C20.5527 21.5586 24.5417 17.5956 23.9407 14.3856C23.7343 13.2818 23.1093 12.9329 22.2846 11.7208C21.9083 11.1679 21.5118 10.3666 21.0634 9.39712C20.4212 8.00814 20.3741 7.53838 19.6167 5.50373L19.6176 5.50567ZM9.04664 14.085C9.0044 15.676 7.97044 17.4671 7.01616 17.4178C6.0638 17.3685 5.34473 15.4953 5.29865 14.0589C5.24777 12.4747 5.98508 10.4923 6.93648 10.4265C7.91187 10.3589 9.09464 12.3046 9.04664 14.086V14.085ZM12.8369 20.913C12.2436 21.6543 12.0074 21.7432 11.8144 21.7432C11.6733 21.7432 11.3997 21.6959 10.791 20.913C10.0566 19.9686 9.51226 19.2659 9.76859 18.7729C10.0288 18.2752 10.9523 18.2858 11.7789 18.2955C12.5786 18.3042 13.6932 18.3177 13.9371 18.8831C14.1195 19.3046 13.6913 19.84 12.8359 20.912L12.8369 20.913ZM18.5357 14.4291C18.4137 15.7814 17.5718 17.4304 16.6473 17.4178C15.7016 17.4052 14.9317 15.6586 14.8203 14.3102C14.6744 12.5559 15.5557 10.4662 16.5244 10.4265C17.5267 10.384 18.7065 12.5288 18.5347 14.4301L18.5357 14.4291Z"/>
    </svg>
);


/**
 * @component Header
 * @description Renderiza o cabeçalho fixo do site, contendo logo, navegação principal,
 * barra de busca e ícones de ação do usuário. É projetado para ser responsivo.
 * @returns {JSX.Element} O elemento <header> completo.
 */
const Header = () => {
  // Objeto com propriedades padrão para ser aplicado aos ícones, garantindo consistência visual.
  const iconProps = {
    width:"20", height:"20", fill:"none", stroke:"currentColor", 
    strokeWidth:"2", strokeLinecap:"round", strokeLinejoin:"round"
  };

  return (
    <header className="bg-gat-dark text-white font-sans absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center h-[46px] max-w-[1240px] px-6 border-b border-white/20">
        
        {/* Bloco Esquerdo: Logo da marca e menu de navegação. */}
        <div className="flex items-center gap-12">
          {/* Logo principal com link para a página inicial. */}
          <a href="/" className="block flex-shrink-0 mt-1">
            <img src="/herogat.png" alt="Logo da Gat" className="h-8 w-auto" />
          </a>
          
          {/* Navegação principal, oculta em telas pequenas e visível a partir do breakpoint 'md'. */}
          <nav className="hidden md:flex items-center gap-8 text-gat-text-light font-sans">
            <a href="#" className="flex items-center gap-2 text-sm font-normal hover:text-white transition-colors">
              <IconGrid {...iconProps} />
              <span>produtos</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-sm font-normal hover:text-white transition-colors">
              <IconTag {...iconProps} />
              <span>coleções</span>
            </a>
            <a href="#" className="text-sm font-normal hover:text-white transition-colors">blog</a>
            <a href="#" className="text-sm font-normal hover:text-white transition-colors">lookbook</a>
            <a href="#" className="text-sm font-normal hover:text-white transition-colors">sobre a Gat</a>
            <a href="#" className="text-sm font-normal hover:text-white transition-colors">wishlist</a>
          </nav>
        </div>

        {/* Bloco Direito: Barra de busca e ícones de ação. */}
        <div className="flex items-center gap-6">
          {/* Campo de busca, visível apenas em telas grandes ('lg' e acima). */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <IconSearch {...iconProps} className="text-white/60" />
            </div>
            <input 
              type="text" 
              placeholder="digite aqui o que procura" 
              className="bg-white/10 border border-white/30 rounded-full py-2 pl-10 pr-4 w-72 
                         text-sm text-white placeholder-white/60 
                         focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          {/* Ícones de ação: Perfil do usuário e sacola de compras. */}
          <div className="flex items-center gap-5 text-white">
            <a href="#" className="hover:opacity-80 transition-opacity"><IconUser {...iconProps} className="w-6 h-6"/></a>
            <a href="#" className="relative hover:opacity-80 transition-opacity">
              <IconShoppingBag {...iconProps} className="w-6 h-6"/>
              {/* Notificação de itens no carrinho, posicionada sobre o ícone. */}
              <span className="absolute -top-2 -right-2 w-5 h-5 
                               bg-gat-notification rounded-full text-xs text-white font-bold 
                               flex items-center justify-center 
                               border-2 border-gat-dark">
                1
              </span>
            </a>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
