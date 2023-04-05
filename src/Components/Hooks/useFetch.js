import { useState, useEffect } from 'react';

function Hook(url) {
  const [pagina, setPagina] = useState(1);
  const [datos, setDatos] = useState([]);
  
  useEffect(() => {
    fetch(`${url}?page=${pagina}`)
      .then(response => response.json())
      .then(data => setDatos(data.results));
  }, [url, pagina]);
  
  function Paginasig(valor) {
    if (valor === 'siguiente' && pagina < 42) {
      setPagina(pagina + 1);
    } else if (valor === 'atras' && pagina > 1) {
      setPagina(pagina - 1);
    }
  }


  return { datos, pagina, Paginasig };
}

export default Hook;