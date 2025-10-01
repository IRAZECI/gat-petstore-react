# GAT E-commerce Frontend
# 📖 Sobre o Projeto
Este repositório contém o código-fonte do frontend para o e-commerce da GAT. O projeto é construído com React e foca em uma experiência de usuário visualmente rica e componentizada, projetada para destacar produtos de design para pets.

# ✨ Funcionalidades Principais
O projeto é dividido em seções modulares e reutilizáveis, cada uma com um propósito específico:

Header Completo: Cabeçalho fixo com logo, navegação principal responsiva, barra de busca e ícones de ação do usuário (perfil e sacola de compras com notificação).

Seção Hero Dinâmica: Banner principal de alto impacto visual com título, subtítulo e um botão de call-to-action para destacar coleções.

Barra de Benefícios: Uma faixa informativa que destaca os diferenciais da marca, acompanhada de um ticker de notícias com animação de rolagem contínua.

Seção de Coleções: Apresenta coleções de produtos em um layout assimétrico e moderno, utilizando sobreposição de elementos e pontos interativos (hotspots).

Produtos em Destaque: Exibe os produtos mais populares em uma grade, com cards detalhados (preço, cores, tags) e um sistema de filtros por categoria.

Imagem Interativa: Uma seção que permite ao usuário explorar produtos dentro de uma imagem de ambiente através de hotspots clicáveis.

Conteúdo com Vídeo: Bloco de conteúdo para apresentar a marca ou produtos através de um vídeo em destaque.

Engajamento Comunitário: Incentiva a interação da comunidade com uma hashtag e exibe fotos de usuários em uma galeria com rolagem infinita.

Rodapé Abrangente: Inclui um formulário de inscrição para newsletter e um rodapé completo com links de navegação, informações de contato, selos de segurança e dados legais.

# 🏛️ Arquitetura e Componentes
A interface é construída a partir de componentes React independentes e de propósito único, localizados em src/components/.

Componente

Arquivo

Descrição

Header

src/components/Header.jsx

Barra de navegação principal do site, contendo o logo, menu, busca e ícones de usuário.

Hero

src/components/Hero.jsx

A seção de banner principal da página inicial, com imagem de produto e CTA.

BenefitsBar

src/components/BenefitsBar.jsx

Exibe os principais benefícios da marca em um layout de grid e inclui um ticker animado.

Collections

src/components/Collections.jsx

Seção de layout assimétrico para destacar coleções específicas com imagens e descrições.

FeaturedSection

src/components/FeaturedSection.jsx

Apresenta uma grade de produtos "queridinhos", utilizando o sub-componente ProductCard, e botões de filtro por categoria.

InteractiveImage

src/components/InteractiveImage.jsx

Uma imagem principal com múltiplos hotspots interativos que, futuramente, exibirão informações de produtos.

ContentVideo

src/components/ContentVideo.jsx

Uma seção de duas colunas para destacar um vídeo promocional ao lado de um título de impacto.

CommunitySection

src/components/CommunitySection.jsx

Promove a interação da comunidade através de uma galeria de imagens com efeito de rolagem infinita.

Footer

src/components/Footer.jsx

Renderiza a seção de newsletter e o rodapé completo do site com todas as informações e links necessários.

# 🎨 Estilização
A estilização do projeto é centralizada no arquivo src/styles/main.css. O arquivo está organizado em blocos de estilo que correspondem diretamente aos componentes React, facilitando a manutenção e a localização de regras CSS.

A abordagem utiliza classes CSS puras, com um design system consistente para cores, fontes e espaçamento, garantindo uma identidade visual coesa em toda a aplicação.

# 🚀 Como Começar
Siga os passos abaixo para configurar e rodar o projeto em seu ambiente de desenvolvimento local.

Pré-requisitos
Node.js (versão 16 ou superior)

npm ou Yarn

Instalação e Execução
Clone o repositório:

git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)

Navegue até o diretório do projeto:

cd seu-repositorio

Instale as dependências:

npm install

Inicie o servidor de desenvolvimento:

npm run dev

Após executar esses comandos, a aplicação estará disponível em http://localhost:5173 (ou outra porta indicada no terminal).
