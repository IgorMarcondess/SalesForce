import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Função que mapeia atalhos de teclado para a navegação
  const handleKeyDown = (event) => {
    console.log('Evento de tecla capturado:', event.code); // Log para verificar se o evento é capturado

    // Verifica se a tecla Ctrl está pressionada
    if (event.ctrlKey) {
      event.preventDefault();  // Impede o comportamento padrão do navegador

      if (event.code === 'Digit1') {
        console.log('Navegando para Página Inicial');
        router.push('/Componentes/PaginaInicial/page');  // Navegação para a Página Inicial
      } else if (event.code === 'Digit3') {
        console.log('Navegando para Trailfinder');
        router.push('/trailfinder/page');  // Navegação para a página Trailfinder
      }
    }
  };

  useEffect(() => {
    // Adiciona o listener de teclas na montagem do componente
    const addKeyListener = () => {
      console.log('Adicionando listener de teclas');
      window.addEventListener('keydown', handleKeyDown);
    };

    // Remove o listener de teclas quando o componente é desmontado
    const removeKeyListener = () => {
      console.log('Removendo listener de teclas');
      window.removeEventListener('keydown', handleKeyDown);
    };

    addKeyListener();  // Adiciona o listener

    return () => {
      removeKeyListener();  // Remove o listener ao desmontar o componente
    };
  }, []);  // O array vazio garante que o useEffect seja executado uma vez quando o componente for montado

  return <Component {...pageProps} />;
}

export default MyApp;
