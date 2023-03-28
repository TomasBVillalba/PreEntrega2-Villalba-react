import React, { useEffect, useState } from 'react';
import styles from "./itemlistcontainer.module.scss"
import { useParams, Link, Navigate } from 'react-router-dom';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {categoriaNombre} = useParams();


    if (categoriaNombre) {
        useEffect(() => {
    fetch("/src/data/stockProductos.json")
    .then((response) => response.json())
    .then ((data) => setProductos(data.filter((producto) => producto.categoria.nombre === categoriaNombre)));
        
    }, [categoriaNombre]);
    } else {
        useEffect(() => {
            fetch("./src/data/stockProductos.json")
                .then((response) => response.json())
                .then((data) => setProductos(data))
        }, []);
    }
    return (
        <div  className={styles.contenedor_productos}>
            {productos.map((producto) => (
                <Link key={producto.id} to={`/item/${producto.id}`}>
                    <img className={styles.producto} src={producto.imagen} alt={producto.titulo}/>
                            <div  producto = {producto} className={styles.informacion}>
                                <span className={styles.tipo_de_envio}>Envio con normalidad</span>
                                <br />
                                <span className={styles.descripcion}>{producto.titulo}</span>
                                <span className={styles.precio}>${producto.precio}</span>
                                <span className={styles.envio}>Envio gratis</span>
                                <button className={styles.producto_agregar} id={producto.id}>Agregar</button>
                            </div>
            
                </Link>

            ))}
        </div>
    )

    
}

export default ItemListContainer;
