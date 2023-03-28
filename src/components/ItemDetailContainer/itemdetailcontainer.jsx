import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./itemdetailcontainer.module.scss";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const {id} = useParams();
    

    useEffect(() => {
    fetch(`/src/data/stockProductos.json`)
    .then((response) => response.json())
    .then ((data) => setProducto(data.find((producto) => producto.id == id)));
    }, [id])
    

return (
        <div className={styles.contenedor_productos}>
            
                <img className={styles.producto} src={producto.imagen} alt={producto.titulo}/>
                        <div  className={styles.informacion}>
                            <span className={styles.tipo_de_envio}>Envio con normalidad</span>
                            <br />
                            <span className={styles.descripcion}>{producto.titulo}</span>
                            <span className={styles.precio}>${producto.precio}</span>
                            <span className={styles.envio}>Envio gratis</span>
                            <button className={styles.producto_agregar} id={producto.id}>Agregar</button>
                        </div>
        </div>
)
}

export default ItemDetailContainer;