<script>
  function filtrarPorStatus() {
    const filtro = document.getElementById("statusFiltro").value;
    const linhas = document.querySelectorAll("#tabelaCandidatos tr");

    linhas.forEach(linha => {
      const status = linha.getAttribute("data-status");
      if (filtro === "todos" || status === filtro) {
        linha.style.display = "";
      } else {
        linha.style.display = "none";
      }
    });
  }
</script>