import { Link } from 'react-router-dom';

function ButtonD({ tamanho, texto }) {
  // Mapeamento dos tamanhos para classes Tailwind CSS
  const tamanhoClasses = {
    'small': 'w-20',
    'medium': 'w-32',
    'large': 'w-64',
    // Adicione outros tamanhos conforme necessário
  };

  // Verifica se o tamanho passado é válido, caso contrário, usa 'medium' como padrão
  const tamanhoClasse = tamanhoClasses[tamanho] || 'w-32';

  // Classes de estilo do botão
  const classes = `bg-pink-600 text-white h-12 rounded-md flex items-center justify-center p-3 ${tamanhoClasse}`;

  return (
    <div className={classes}>
      <Link>{texto}</Link>
    </div>
  );
}

export default ButtonD;
