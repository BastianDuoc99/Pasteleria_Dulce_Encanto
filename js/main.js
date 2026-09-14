document.addEventListener("DOMContentLoaded", () => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const cartKey = "dulceEncantoCart";
  const MAX_UNIDADES_POR_PRODUCTO = 10;

  function getCart() {
    return JSON.parse(localStorage.getItem(cartKey) || "[]");
  }

  function saveCart(c) {
    localStorage.setItem(cartKey, JSON.stringify(c));
    updateCartCount();
  }

  function updateCartCount() {
    const n = getCart().reduce((s, p) => s + p.qty, 0);
    $$(".cart-count").forEach((x) => (x.textContent = n));
  }

  window.agregarAlCarrito = function (codigo) {
    const p = getProductos().find((x) => x.codigo === codigo);
    if (!p) return;

    const c = getCart();
    const item = c.find((x) => x.codigo === codigo);

    if (item) {
      if (item.qty >= MAX_UNIDADES_POR_PRODUCTO) {
        toast(
          `Máximo ${MAX_UNIDADES_POR_PRODUCTO} unidades de ${p.nombre} por pedido.`
        );
        return;
      }
      item.qty++;
    } else {
      c.push({ ...p, qty: 1 });
    }

    saveCart(c);
    toast(`${p.nombre} fue añadido al carrito.`);
  };

  window.toast = function (msg) {
    let t = $("#toast");

    if (!t) {
      t = document.createElement("div");
      t.id = "toast";
      t.style.cssText =
        "position:fixed;right:20px;bottom:20px;z-index:100;background:#8B4513;color:#fff;padding:14px 18px;border-radius:12px;box-shadow:0 8px 24px #0002";
      document.body.appendChild(t);
    }

    t.textContent = msg;
    t.hidden = false;
    clearTimeout(window._toast);
    window._toast = setTimeout(() => (t.hidden = true), 2200);
  };

  $$(".menu-toggle").forEach((b) =>
    b.addEventListener("click", () =>
      $(".navlinks")?.classList.toggle("open")
    )
  );

  updateCartCount();

  const grid = $("#productGrid");

  if (grid) {
    const search = $("#search");
    const cat = $("#categoryFilter");

    cat.innerHTML =
      '<option value="">Todas las categorías</option>' +
      CATEGORIAS.map((c) => `<option>${c}</option>`).join("");

    function render() {
      const q = (search.value || "").toLowerCase();
      const cv = cat.value;

      const list = getProductos().filter(
        (p) =>
          (!q ||
            `${p.nombre} ${p.descripcion} ${p.codigo}`
              .toLowerCase()
              .includes(q)) &&
          (!cv || p.categoria === cv)
      );

      grid.innerHTML = list.length
        ? list.map(productCard).join("")
        : `<div class="empty" style="grid-column:1/-1">
            No se encontraron productos.
          </div>`;
    }

    search.addEventListener("input", render);
    cat.addEventListener("change", render);
    render();
  }

  const featured = $("#featuredProducts");

  if (featured) {
    featured.innerHTML = getProductos()
      .slice(0, 8)
      .map(productCard)
      .join("");
  }

  function productCard(p) {
    return `
      <article class="card">
        <a href="producto-detalle.html?codigo=${p.codigo}">
          <div class="product-art">
            <img
              src="${p.imagen || "../assets/img/Pasteleria.jpg"}"
              alt="${p.nombre}"
            >
          </div>
        </a>
        <div class="card-body">
          <span class="pill">${p.categoria}</span>
          <h3>${p.nombre}</h3>
          <p class="muted">${(p.descripcion || "").slice(0, 100)}…</p>
          <div class="price">
            $${Number(p.precio || 0).toLocaleString("es-CL")} CLP
          </div>
          <div class="actions">
            <a
              class="btn small secondary"
              href="producto-detalle.html?codigo=${p.codigo}"
            >
              Ver detalle
            </a>
            <button
              class="btn small"
              onclick="agregarAlCarrito('${p.codigo}')"
            >
              Añadir
            </button>
          </div>
        </div>
      </article>
    `;
  }

  const detail = $("#detail");

  if (detail) {
    const code =
      new URLSearchParams(location.search).get("codigo") || "TC001";

    const p =
      getProductos().find((x) => x.codigo === code) ||
      getProductos()[0];

    detail.innerHTML = `
      <div class="detail-art">
        <img
          src="${p.imagen || "../assets/img/Pasteleria.jpg"}"
          alt="${p.nombre}"
        >
      </div>
      <div>
        <span class="pill">${p.categoria}</span>
        <h1 style="font-family:'Pacifico';font-weight:400">
          ${p.nombre}
        </h1>
        <p class="price" style="font-size:1.6rem">
          $${Number(p.precio || 0).toLocaleString("es-CL")} CLP
        </p>
        <p>${p.descripcion || "Producto de Pastelería Dulce Encanto."}</p>
        <div class="notice">
          <strong>Personalización:</strong>
          las tortas pueden incorporar mensajes especiales según el
          requerimiento del cliente.
        </div>
        <div class="actions">
          <button
            class="btn"
            onclick="agregarAlCarrito('${p.codigo}')"
          >
            Añadir al carrito
          </button>
          <a class="btn secondary" href="carrito.html">
            Ver carrito
          </a>
        </div>
      </div>
    `;
  }

  const cart = $("#cart");

  if (cart) {
    renderCart();

    function renderCart() {
      const c = getCart();

      if (!c.length) {
        cart.innerHTML = `
          <div class="empty">
            <h2>Tu carrito está vacío</h2>
            <p>Agrega algunas delicias para comenzar.</p>
            <a class="btn" href="productos.html">Ver productos</a>
          </div>
        `;

        $("#cartTotal").textContent = "$0 CLP";
        return;
      }

      cart.innerHTML = c
        .map(
          (p) => `
            <div class="cart-row">
              <div>
                <strong>${p.nombre}</strong>
                <div class="muted">${p.codigo}</div>
              </div>

              <div class="quantity">
                <button onclick="changeQty('${p.codigo}',-1)">−</button>
                <input value="${p.qty}" readonly>
                <button onclick="changeQty('${p.codigo}',1)">+</button>
              </div>

              <strong>
                $${(p.precio * p.qty).toLocaleString("es-CL")}
              </strong>

              <button
                class="btn small secondary"
                onclick="removeItem('${p.codigo}')"
              >
                Eliminar
              </button>
            </div>
          `
        )
        .join("");

      $("#cartTotal").textContent =
        "$" +
        c
          .reduce((s, p) => s + p.precio * p.qty, 0)
          .toLocaleString("es-CL") +
        " CLP";
    }

    window.changeQty = (code, d) => {
      const c = getCart();
      const i = c.find((x) => x.codigo === code);

      if (!i) return;

      const nuevo = i.qty + d;

      if (nuevo > MAX_UNIDADES_POR_PRODUCTO) {
        toast(
          `Máximo ${MAX_UNIDADES_POR_PRODUCTO} unidades de ${i.nombre} por pedido.`
        );
        return;
      }

      if (nuevo <= 0) {
        window.removeItem(code);
        return;
      }

      i.qty = nuevo;
      saveCart(c);
      renderCart();
    };

    window.removeItem = (code) => {
      saveCart(getCart().filter((x) => x.codigo !== code));
      renderCart();
    };
  }

  const year = $("#year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});