export const PRODUCTOS = [
  {
    codigo: "TC001",
    categoria: "Tortas Cuadradas",
    nombre: "Torta Cuadrada de Chocolate",
    precio: 45000,
    descripcion:
      "Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizable con mensajes especiales.",
    tipo: "chocolate",
    imagen: "/assets/img/TC001.jpg",
  },
  {
    codigo: "TC002",
    categoria: "Tortas Cuadradas",
    nombre: "Torta Cuadrada de Frutas",
    precio: 50000,
    descripcion:
      "Una mezcla de frutas frescas y crema chantilly sobre un suave bizcocho de vainilla, ideal para celebraciones.",
    tipo: "frutas",
    imagen: "/assets/img/TC002.jpg",
  },
  {
    codigo: "TT001",
    categoria: "Tortas Circulares",
    nombre: "Torta Circular de Vainilla",
    precio: 40000,
    descripcion:
      "Bizcocho de vainilla clásico relleno con crema pastelera y cubierto con un glaseado dulce, perfecto para cualquier ocasión.",
    tipo: "vainilla",
    imagen: "/assets/img/TT001.jpg",
  },
  {
    codigo: "TT002",
    categoria: "Tortas Circulares",
    nombre: "Torta Circular de Manjar",
    precio: 42000,
    descripcion:
      "Torta tradicional chilena con manjar y nueces, un deleite para los amantes de los sabores dulces y clásicos.",
    tipo: "manjar",
    imagen: "/assets/img/TT002.jpg",
  },
  {
    codigo: "PI001",
    categoria: "Postres Individuales",
    nombre: "Mousse de Chocolate",
    precio: 5000,
    descripcion:
      "Postre individual cremoso y suave, hecho con chocolate de alta calidad, ideal para los amantes del chocolate.",
    tipo: "mousse",
    imagen: "/assets/img/PI001.jpg",
  },
  {
    codigo: "PI002",
    categoria: "Postres Individuales",
    nombre: "Tiramisú Clásico",
    precio: 5500,
    descripcion:
      "Un postre italiano individual con capas de café, mascarpone y cacao, perfecto para finalizar cualquier comida.",
    tipo: "tiramisu",
    imagen: "/assets/img/PI002.jpg",
  },
  {
    codigo: "PSA001",
    categoria: "Productos Sin Azúcar",
    nombre: "Torta Sin Azúcar de Naranja",
    precio: 48000,
    descripcion:
      "Torta ligera y deliciosa, endulzada naturalmente, ideal para quienes buscan opciones más saludables.",
    tipo: "naranja",
    imagen: "/assets/img/PSA001.jpg",
  },
  {
    codigo: "PSA002",
    categoria: "Productos Sin Azúcar",
    nombre: "Cheesecake Sin Azúcar",
    precio: 47000,
    descripcion:
      "Suave y cremoso, este cheesecake es una opción perfecta para disfrutar sin culpa.",
    tipo: "cheesecake",
    imagen: "/assets/img/PSA002.jpg",
  },
  {
    codigo: "PT001",
    categoria: "Pastelería Tradicional",
    nombre: "Empanada de Manzana",
    precio: 3000,
    descripcion:
      "Pastelería tradicional rellena de manzanas especiadas, perfecta para un dulce desayuno o merienda.",
    tipo: "manzana",
    imagen: "/assets/img/PT001.jpg",
  },
  {
    codigo: "PT002",
    categoria: "Pastelería Tradicional",
    nombre: "Tarta de Santiago",
    precio: 6000,
    descripcion:
      "Tradicional tarta española hecha con almendras, azúcar y huevos, una delicia para los amantes de los postres clásicos.",
    tipo: "santiago",
    imagen: "/assets/img/PT002.jpg",
  },
  {
    codigo: "PG001",
    categoria: "Productos Sin Gluten",
    nombre: "Brownie Sin Gluten",
    precio: 4000,
    descripcion:
      "Rico y denso, este brownie es perfecto para quienes necesitan evitar el gluten sin sacrificar el sabor.",
    tipo: "brownie",
    imagen: "/assets/img/PG001.jpg",
  },
  {
    codigo: "PG002",
    categoria: "Productos Sin Gluten",
    nombre: "Pan Sin Gluten",
    precio: 3500,
    descripcion:
      "Suave y esponjoso, ideal para sándwiches o para acompañar cualquier comida.",
    tipo: "pan",
    imagen: "/assets/img/PG002.jpg",
  },
  {
    codigo: "PV001",
    categoria: "Productos Vegana",
    nombre: "Torta Vegana de Chocolate",
    precio: 50000,
    descripcion:
      "Torta de chocolate húmeda y deliciosa, hecha sin productos de origen animal, perfecta para veganos.",
    tipo: "vegano",
    imagen: "/assets/img/PV001.jpg",
  },
  {
    codigo: "PV002",
    categoria: "Productos Vegana",
    nombre: "Galletas Veganas de Avena",
    precio: 4500,
    descripcion:
      "Crujientes y sabrosas, estas galletas son una excelente opción para un snack saludable y vegano.",
    tipo: "galletas",
    imagen: "/assets/img/PV002.jpg",
  },
  {
    codigo: "TE001",
    categoria: "Tortas Especiales",
    nombre: "Torta Especial de Cumpleaños",
    precio: 55000,
    descripcion:
      "Diseñada especialmente para celebraciones, personalizable con decoraciones y mensajes únicos.",
    tipo: "cumpleanos",
    imagen: "/assets/img/TE001.jpg",
  },
  {
    codigo: "TE002",
    categoria: "Tortas Especiales",
    nombre: "Torta Especial de Boda",
    precio: 60000,
    descripcion:
      "Elegante y deliciosa, esta torta está diseñada para ser el centro de atención en cualquier boda.",
    tipo: "boda",
    imagen: "/assets/img/TE002.jpg",
  },
];

export const CATEGORIAS = [
  "Pastelería Tradicional",
  "Postres Individuales",
  "Productos Sin Azúcar",
  "Productos Sin Gluten",
  "Productos Vegana",
  "Tortas Circulares",
  "Tortas Cuadradas",
  "Tortas Especiales",
];

export const PRODUCTOS_KEY = "dulceEncantoProducts";
export const PRODUCTOS_ELIMINADOS_KEY = "dulceEncantoDeleted";

export function formatearCLP(valor) {
  return `$${Number(valor || 0).toLocaleString("es-CL")} CLP`;
}

export function getProductos() {
  if (typeof localStorage === "undefined") return [...PRODUCTOS];

  const mapa = new Map(PRODUCTOS.map((producto) => [producto.codigo, producto]));

  const eliminados = JSON.parse(
    localStorage.getItem(PRODUCTOS_ELIMINADOS_KEY) || "[]"
  );
  eliminados.forEach((codigo) => mapa.delete(codigo));

  const guardados = JSON.parse(localStorage.getItem(PRODUCTOS_KEY) || "[]");
  guardados.forEach((producto) => {
    if (producto?.codigo) mapa.set(producto.codigo, producto);
  });

  return Array.from(mapa.values());
}

export function guardarProducto(producto) {
  if (typeof localStorage === "undefined") return;

  const guardados = JSON.parse(localStorage.getItem(PRODUCTOS_KEY) || "[]");
  const indice = guardados.findIndex((item) => item.codigo === producto.codigo);

  if (indice >= 0) {
    guardados[indice] = producto;
  } else {
    guardados.push(producto);
  }

  localStorage.setItem(PRODUCTOS_KEY, JSON.stringify(guardados));

  const eliminados = JSON.parse(
    localStorage.getItem(PRODUCTOS_ELIMINADOS_KEY) || "[]"
  ).filter((codigo) => codigo !== producto.codigo);
  localStorage.setItem(PRODUCTOS_ELIMINADOS_KEY, JSON.stringify(eliminados));
}

export function eliminarProducto(codigo) {
  if (typeof localStorage === "undefined") return;

  const guardados = JSON.parse(localStorage.getItem(PRODUCTOS_KEY) || "[]").filter(
    (item) => item.codigo !== codigo
  );
  localStorage.setItem(PRODUCTOS_KEY, JSON.stringify(guardados));

  const eliminados = JSON.parse(
    localStorage.getItem(PRODUCTOS_ELIMINADOS_KEY) || "[]"
  );
  if (!eliminados.includes(codigo)) eliminados.push(codigo);
  localStorage.setItem(PRODUCTOS_ELIMINADOS_KEY, JSON.stringify(eliminados));
}
