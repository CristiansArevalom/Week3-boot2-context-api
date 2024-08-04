import styles from './../styles/error-page.module.css';
import {useEffect} from 'react'; //invocando hoock

/*
Los modulos los vamos a usar para un componente en especificio.
se podria reutilizar el codigo pero puede dar problemas en ejecució n por el nombre de las clases
que se generan en automatico
Los modulos sirven para un solo componenteya que sran independietes
a los etilos de otra aplicación

*/
export const ErrorPage = () => {

useEffect(()=>{
//guardar el estilo original del body
const originalBodyClassName = document.body.className;
//Aplicar la clase del body de lapagina de error
document.body.className =`${styles.errorPageBody}`;

//Limpiar el estilo del body al desmontar el componente

return()=>{
    document.body.className = originalBodyClassName;
}

},[]) //Arreglo de dependecia vacio, significa que solo se ejecutara una vez

  return (
    <div className={styles.customBodyClass}>
      <section id="not-found">
        <div className={styles.circles}>
          <p>404<br />
            <small>Página no encontrada</small>
          </p>
          <span className={`${styles.circle} ${styles.big}`}></span>
          <span className={`${styles.circle} ${styles.med}`}></span>
          <span className={`${styles.circle} ${styles.small}`}></span>
        </div>
      </section>
    </div>

  )
}