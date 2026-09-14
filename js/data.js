const PRODUCTOS = [
  {
    "codigo": "TC001",
    "categoria": "Tortas Cuadradas",
    "nombre": "Torta Cuadrada de Chocolate",
    "precio": 45000,
    "descripcion": "Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizable con mensajes especiales.",
    "tipo": "chocolate",
    "imagen": "../assets/img/TC001.jpg"
  },
  {
    "codigo": "TC002",
    "categoria": "Tortas Cuadradas",
    "nombre": "Torta Cuadrada de Frutas",
    "precio": 50000,
    "descripcion": "Una mezcla de frutas frescas y crema chantilly sobre un suave bizcocho de vainilla, ideal para celebraciones.",
    "tipo": "frutas",
    "imagen": "../assets/img/TC002.jpg"
  },
  {
    "codigo": "TT001",
    "categoria": "Tortas Circulares",
    "nombre": "Torta Circular de Vainilla",
    "precio": 40000,
    "descripcion": "Bizcocho de vainilla clásico relleno con crema pastelera y cubierto con un glaseado dulce, perfecto para cualquier ocasión.",
    "tipo": "vainilla",
    "imagen": "../assets/img/TT001.jpg"
  },
  {
    "codigo": "TT002",
    "categoria": "Tortas Circulares",
    "nombre": "Torta Circular de Manjar",
    "precio": 42000,
    "descripcion": "Torta tradicional chilena con manjar y nueces, un deleite para los amantes de los sabores dulces y clásicos.",
    "tipo": "manjar",
    "imagen": "../assets/img/TT002.jpg"
  },
  {
    "codigo": "PI001",
    "categoria": "Postres Individuales",
    "nombre": "Mousse de Chocolate",
    "precio": 5000,
    "descripcion": "Postre individual cremoso y suave, hecho con chocolate de alta calidad, ideal para los amantes del chocolate.",
    "tipo": "mousse",
    "imagen": "../assets/img/PI001.jpg"
  },
  {
    "codigo": "PI002",
    "categoria": "Postres Individuales",
    "nombre": "Tiramisú Clásico",
    "precio": 5500,
    "descripcion": "Un postre italiano individual con capas de café, mascarpone y cacao, perfecto para finalizar cualquier comida.",
    "tipo": "tiramisu",
    "imagen": "../assets/img/PI002.jpg"
  },
  {
    "codigo": "PSA001",
    "categoria": "Productos Sin Azúcar",
    "nombre": "Torta Sin Azúcar de Naranja",
    "precio": 48000,
    "descripcion": "Torta ligera y deliciosa, endulzada naturalmente, ideal para quienes buscan opciones más saludables.",
    "tipo": "naranja",
    "imagen": "../assets/img/PSA001.jpg"
  },
  {
    "codigo": "PSA002",
    "categoria": "Productos Sin Azúcar",
    "nombre": "Cheesecake Sin Azúcar",
    "precio": 47000,
    "descripcion": "Suave y cremoso, este cheesecake es una opción perfecta para disfrutar sin culpa.",
    "tipo": "cheesecake",
    "imagen": "../assets/img/PSA002.jpg"
  },
  {
    "codigo": "PT001",
    "categoria": "Pastelería Tradicional",
    "nombre": "Empanada de Manzana",
    "precio": 3000,
    "descripcion": "Pastelería tradicional rellena de manzanas especiadas, perfecta para un dulce desayuno o merienda.",
    "tipo": "manzana",
    "imagen": "../assets/img/PT001.jpg"
  },
  {
    "codigo": "PT002",
    "categoria": "Pastelería Tradicional",
    "nombre": "Tarta de Santiago",
    "precio": 6000,
    "descripcion": "Tradicional tarta española hecha con almendras, azúcar, y huevos, una delicia para los amantes de los postres clásicos.",
    "tipo": "santiago",
    "imagen": "../assets/img/PT002.jpg"
  },
  {
    "codigo": "PG001",
    "categoria": "Productos Sin Gluten",
    "nombre": "Brownie Sin Gluten",
    "precio": 4000,
    "descripcion": "Rico y denso, este brownie es perfecto para quienes necesitan evitar el gluten sin sacrificar el sabor.",
    "tipo": "brownie",
    "imagen": "../assets/img/PG001.jpg"
  },
  {
    "codigo": "PG002",
    "categoria": "Productos Sin Gluten",
    "nombre": "Pan Sin Gluten",
    "precio": 3500,
    "descripcion": "Suave y esponjoso, ideal para sándwiches o para acompañar cualquier comida.",
    "tipo": "pan",
    "imagen": "../assets/img/PG002.jpg"
  },
  {
    "codigo": "PV001",
    "categoria": "Productos Vegana",
    "nombre": "Torta Vegana de Chocolate",
    "precio": 50000,
    "descripcion": "Torta de chocolate húmeda y deliciosa, hecha sin productos de origen animal, perfecta para veganos.",
    "tipo": "vegano",
    "imagen": "../assets/img/PV001.jpg"
  },
  {
    "codigo": "PV002",
    "categoria": "Productos Vegana",
    "nombre": "Galletas Veganas de Avena",
    "precio": 4500,
    "descripcion": "Crujientes y sabrosas, estas galletas son una excelente opción para un snack saludable y vegano.",
    "tipo": "galletas",
    "imagen": "../assets/img/PV002.jpg"
  },
  {
    "codigo": "TE001",
    "categoria": "Tortas Especiales",
    "nombre": "Torta Especial de Cumpleaños",
    "precio": 55000,
    "descripcion": "Diseñada especialmente para celebraciones, personalizable con decoraciones y mensajes únicos.",
    "tipo": "cumpleanos",
    "imagen": "../assets/img/TE001.jpg"
  },
  {
    "codigo": "TE002",
    "categoria": "Tortas Especiales",
    "nombre": "Torta Especial de Boda",
    "precio": 60000,
    "descripcion": "Elegante y deliciosa, esta torta está diseñada para ser el centro de atención en cualquier boda.",
    "tipo": "boda",
    "imagen": "../assets/img/TE002.jpg"
  }
];

const CATEGORIAS = [
  "Pastelería Tradicional",
  "Postres Individuales",
  "Productos Sin Azúcar",
  "Productos Sin Gluten",
  "Productos Vegana",
  "Tortas Circulares",
  "Tortas Cuadradas",
  "Tortas Especiales"
];

const REGIONES = [
  {
    nombre: "Región de Arica y Parinacota",
    comunas: ["Arica", "Camarones", "Putre", "General Lagos"]
  },
  {
    nombre: "Región de Tarapacá",
    comunas: ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"]
  },
  {
    nombre: "Región de Antofagasta",
    comunas: ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"]
  },
  {
    nombre: "Región de Atacama",
    comunas: ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
  },
  {
    nombre: "Región de Coquimbo",
    comunas: ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paihuano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"]
  },
  {
    nombre: "Región de Valparaíso",
    comunas: ["Valparaíso", "Casablanca", "Concón", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "San Esteban", "La Ligua", "Cabildo", "Petorca", "Zapallar", "Quillota", "La Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "Santo Domingo", "San Felipe", "Catemu", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"]
  },
  {
    nombre: "Región Metropolitana de Santiago",
    comunas: ["Santiago", "Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Curacaví", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"]
  },
  {
    nombre: "Región del Libertador General Bernardo O'Higgins",
    comunas: ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente de Tagua Tagua", "Pichilemu", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Santa Cruz"]
  },
  {
    nombre: "Región del Maule",
    comunas: ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
  },
  {
    nombre: "Región de Ñuble",
    comunas: ["Chillán", "Bulnes", "Cobquecura", "Coelemu", "Coihueco", "Chillán Viejo", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"]
  },
  {
    nombre: "Región del Biobío",
    comunas: ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío"]
  },
  {
    nombre: "Región de La Araucanía",
    comunas: ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre Las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"]
  },
  {
    nombre: "Región de Los Ríos",
    comunas: ["Valdivia", "Corral", "Futrono", "La Unión", "Lago Ranco", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "Río Bueno"]
  },
  {
    nombre: "Región de Los Lagos",
    comunas: ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Chaitén", "Futaleufú", "Hualaihué", "Palena", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo"]
  },
  {
    nombre: "Región de Aysén del General Carlos Ibáñez del Campo",
    comunas: ["Coyhaique", "Lago Verde", "Aysén", "Cisnes", "Guaitecas", "Chile Chico", "Río Ibáñez", "Cochrane", "O'Higgins", "Tortel"]
  },
  {
    nombre: "Región de Magallanes y de la Antártica Chilena",
    comunas: ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
  }
];

const PRODUCTOS_KEY = "dulceEncantoProducts";
const PRODUCTOS_ELIMINADOS_KEY = "dulceEncantoDeleted";

function getProductos() {
  const mapa = new Map();
  PRODUCTOS.forEach((p) => mapa.set(p.codigo, p));
  const eliminados = JSON.parse(
    localStorage.getItem(PRODUCTOS_ELIMINADOS_KEY) || "[]"
  );
  eliminados.forEach((c) => mapa.delete(c));
  JSON.parse(localStorage.getItem(PRODUCTOS_KEY) || "[]").forEach((p) => {
    if (p && p.codigo) mapa.set(p.codigo, p);
  });
  return Array.from(mapa.values());
}

function guardarProducto(p) {
  const guardados = JSON.parse(
    localStorage.getItem(PRODUCTOS_KEY) || "[]"
  );
  const i = guardados.findIndex((x) => x.codigo === p.codigo);
  if (i >= 0) {
    guardados[i] = p;
  } else {
    guardados.push(p);
  }
  localStorage.setItem(PRODUCTOS_KEY, JSON.stringify(guardados));
}

function eliminarProducto(codigo) {
  const guardados = JSON.parse(
    localStorage.getItem(PRODUCTOS_KEY) || "[]"
  ).filter((x) => x.codigo !== codigo);
  localStorage.setItem(PRODUCTOS_KEY, JSON.stringify(guardados));
  const eliminados = JSON.parse(
    localStorage.getItem(PRODUCTOS_ELIMINADOS_KEY) || "[]"
  );
  if (!eliminados.includes(codigo)) {
    eliminados.push(codigo);
  }
  localStorage.setItem(
    PRODUCTOS_ELIMINADOS_KEY,
    JSON.stringify(eliminados)
  );
}
