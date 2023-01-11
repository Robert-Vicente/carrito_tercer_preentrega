const productos = [
    {id:1, nombre:"Muzzarella", calorias:771, descripcion:"Muzzarella con salsa de tomates.", precio:900, imagen:"01-Muzzarella.jpg", categoria:"Pizza"},
    {id:2, nombre:"Muzzarella-con-Jamon", calorias:505, descripcion:"Muzzarella, jamón, salsa de tomate y aceitunas.", precio:800, imagen:"02-Muzzarella-con-Jamon.jpg", categoria:"Pizza"},
    {id:3, nombre:"Cantimpalo", calorias:513, descripcion:"Cantimpalo, salsa de tomate, muzzarella y aceitunas.", precio:900, imagen:"04-Cantimpalo.jpg", categoria:"Pizza"},
    {id:4, nombre:"Especial", calorias:238, descripcion:"Salsa de tomate, muzzarella, morrones, jamón y huevo", precio:600, imagen:"06-Especial.jpg", categoria:"Pizza"},
    {id:5, nombre:"Anchoas-Speziale", calorias:424, descripcion:"Anchoas, salsa de tomate, muzzarella, morrones y aceitunas.", precio:800, imagen:"07-Anchoas-Speziale.jpg", categoria:"Pizza"},
    {id:6, nombre:"Pollo-a-la-crema", calorias:339, descripcion:"Salsa de tomate, muzzarella, jamón y perejil.", precio:500, imagen:"09-Pollo-a-la-crema.jpg", categoria:"Pizza"},
    {id:7, nombre:"Palmitos", calorias:452, descripcion:"Palmitos, jamón, salsa de tomate y muzzarella.", precio:100, imagen:"15-Palmitos.jpg", categoria:"Pizza"},
    {id:8, nombre:"Funghetto-al-Oliva", calorias:359, descripcion:"Salsa de tomate, muzzarella, champignones salteados con aceite de oliva, ajo y panceta en trozos rehogada.", precio:750, imagen:"18-Funghetto-al-Oliva.jpg", categoria:"Pizza"},
    {id:9, nombre:"Siciliana", calorias:257, descripcion:"Salsa de tomate, muzzarella, rodajas de tomate, albahaca y aceitunas negras con hilos de aceite de oliva.", precio:985, imagen:"35-Siciliana.jpg", categoria:"Pizza"},
    {id:10, nombre:"Vegetal-Primaveral", calorias:100, descripcion:"Salsa de tomate, tomates en trozos, champignones, palmitos,espárragos, muzzarella, aceitunas verdes, negras y morrones.", precio:500, imagen:"37-Vegetal-Primaveral.jpg", categoria:"Pizza"},
    {id:11, nombre:"Del-Amor", calorias:131.9, descripcion:"Salsa de tomate, muzzarella, jamón crudo en tiritas, cebollas, aceitunas negras y morrones.", precio:980, imagen:"42-Del-Amor.jpg", categoria:"Pizza"},
    {id:12, nombre:"Rucula", calorias:200, descripcion:"Salsa de tomate, muzzarella, jamón crudo y hojas de rúcula.", precio:900, imagen:"43-Rucula.jpg", categoria:"Pizza"}
];

function guardarProductosLS(productos) {
    localStorage.setItem("productos", JSON.stringify(productos));
}

const cargarProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

guardarProductosLS(productos);