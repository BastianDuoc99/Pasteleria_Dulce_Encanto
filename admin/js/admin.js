document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.getElementById("adminProducts");

  if (tbody) {
    tbody.innerHTML = PRODUCTOS.map(
      (p) => `
        <tr>
          <td>${p.codigo}</td>
          <td>${p.nombre}</td>
          <td>${p.categoria}</td>
          <td>$${p.precio.toLocaleString("es-CL")}</td>
          <td>
            <a
              class="btn secondary"
              href="producto-form.html?codigo=${p.codigo}"
            >
              Editar
            </a>
          </td>
        </tr>
      `
    ).join("");
  }

  const cp = document.getElementById("statProducts");

  if (cp) {
    cp.textContent = PRODUCTOS.length;
  }

  const cc = document.getElementById("statCategories");

  if (cc) {
    cc.textContent = CATEGORIAS.length;
  }

  const cart = JSON.parse(
    localStorage.getItem("milSaboresCart") || "[]"
  ).reduce((s, p) => s + p.qty, 0);

  const sc = document.getElementById("statCart");

  if (sc) {
    sc.textContent = cart;
  }

  const pf = document.getElementById("adminProductForm");

  if (pf) {
    pf.categoria.innerHTML = CATEGORIAS.map(
      (c) => `<option>${c}</option>`
    ).join("");

    pf.addEventListener("submit", (e) => {
      e.preventDefault();
      document.getElementById("productSuccess").textContent =
        "Producto validado y guardado en modo demostración.";
      document.getElementById("productSuccess").hidden = false;
    });
  }

  const uf = document.getElementById("adminUserForm");

  if (uf) {
    uf.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Usuario validado y guardado en modo demostración.");
    });
  }
});
