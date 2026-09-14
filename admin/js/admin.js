document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.getElementById("adminProducts");

  function renderProducts() {
    if (!tbody) return;
    tbody.innerHTML = getProductos()
      .map(
        (p) => `
          <tr>
            <td>${p.codigo}</td>
            <td>${p.nombre}</td>
            <td>${p.categoria}</td>
            <td>$${Number(p.precio || 0).toLocaleString("es-CL")}</td>
            <td>
              <div class="actions">
                <a
                  class="btn secondary"
                  href="producto-form.html?codigo=${p.codigo}"
                >
                  Editar
                </a>
                <button
                  class="btn"
                  onclick="eliminarProductoAdmin('${p.codigo}')"
                >
                  Eliminar
                </button>
              </div>
            </td>
          </tr>
        `
      )
      .join("");
  }

  window.eliminarProductoAdmin = function (codigo) {
    if (!confirm(`¿Desea eliminar el producto ${codigo}?`)) return;
    eliminarProducto(codigo);

    const sc = document.getElementById("statProducts");
    if (sc) sc.textContent = getProductos().length;

    renderProducts();
  };

  renderProducts();

  const sp = document.getElementById("statProducts");
  if (sp) sp.textContent = getProductos().length;

  const cc = document.getElementById("statCategories");
  if (cc) cc.textContent = CATEGORIAS.length;

  const cart = JSON.parse(
    localStorage.getItem("dulceEncantoCart") || "[]"
  ).reduce((s, p) => s + p.qty, 0);

  const sc = document.getElementById("statCart");
  if (sc) sc.textContent = cart;

  const pf = document.getElementById("adminProductForm");

  if (pf) {
    pf.categoria.innerHTML =
      '<option value="">Seleccione una categoría</option>' +
      CATEGORIAS.map((c) => `<option>${c}</option>`).join("");

    const codigoUrl = new URLSearchParams(location.search).get("codigo");

    if (codigoUrl) {
      const p = getProductos().find((x) => x.codigo === codigoUrl);

      if (p) {
        document.querySelector("h1").textContent = `Editar producto ${p.codigo}`;
        pf.codigo.value = p.codigo;
        pf.codigo.readOnly = true;
        pf.nombre.value = p.nombre || "";
        pf.descripcion.value = p.descripcion || "";
        pf.precio.value = p.precio ?? "";
        pf.stock.value = p.stock ?? "";
        pf.critico.value = p.stockCritico ?? "";
        pf.categoria.value = p.categoria || "";
        pf.imagen.value = p.imagen || "";
      }
    }
  }
});