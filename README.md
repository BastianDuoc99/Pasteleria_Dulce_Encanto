# Pastelería Dulce Encanto — Evaluación 1

Proyecto frontend preparado para trabajar en Visual Studio Code (VS Code), basado en:
- Instrucciones Oficiales Evaluación 1 (HTML, CSS, JavaScript, navegación, formularios, carrito y administración).
- Forma C: Caso Pastelería Dulce Encanto.

## Estructura
- `index.html`: Home pública.
- `productos.html`: catálogo dinámico desde `js/data.js`.
- `producto-detalle.html`: detalle por código.
- `carrito.html`: carrito con `localStorage`.
- `registro.html`: registro con validaciones.
- `login.html`: inicio de sesión con validaciones.
- `nosotros.html`: misión, visión e historia.
- `blogs.html`, `blog1.html`, `blog2.html`: listado y 2 detalles de blog.
- `contacto.html`: formulario con validaciones.
- `admin/`: Home, mantenedor de productos y usuarios, formularios de creación.
- `css/styles.css`: estilos externos responsivos.
- `js/data.js`: arreglo de productos y categorías.
- `js/main.js`: catálogo, navegación, carrito y localStorage.
- `js/validaciones.js`: reglas JavaScript de formularios.
- `assets/img/logo.svg`: logo local.

## Ejecutar en VS Code
1. Descomprime el proyecto.
2. Abre la carpeta en Visual Studio Code.
3. Abre `index.html` con Live Server (recomendado) o desde el navegador.
4. Para administración entra a `admin/index.html`.

## Reglas implementadas
- Correo: solo `@duoc.cl`, `@profesor.duoc.cl` y `@gmail.com` en login/contacto cuando se informa correo.
- Login: correo requerido, máximo 100 caracteres; contraseña requerida de 4 a 10.
- Contacto: nombre requerido máx. 100; comentario requerido máx. 500.
- Usuario: RUN sin puntos ni guion, 7–9 caracteres, nombre/apellidos/correo/dirección según requisitos.
- Producto admin: código requerido mínimo 3; nombre máx. 100; descripción opcional máx. 500; precio mínimo 0 y decimal; stock entero mínimo 0; stock crítico entero mínimo 0; categoría obligatoria.
- Carrito: agregar/eliminar/modificar y persistencia mediante `localStorage`.
- Catálogo: arreglo JavaScript con los 16 productos de la Forma C.

## Nota académica
Esta entrega es una propuesta frontend funcional. Las reglas de negocio de descuentos, cumpleaños, autenticación real, boletas, seguimiento de pedidos, permisos de servidor y base de datos no se implementan como backend porque la Evaluación 1 solicita una base frontend con HTML/CSS/JavaScript y validaciones.
