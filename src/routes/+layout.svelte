<script>
  import "../styles/app.css";
</script>

<svelte:head>
  <title>Typesvelte</title>
</svelte:head>

<div class="layout">
  <nav><h1>Typesvelte</h1></nav>
  <main><slot /></main>
</div>

<style>
  h1 {
    font-family: "Lexend Deca", sans-serif;
    font-size: 1.8rem;
    color: var(--fg-200);
    letter-spacing: 2px;
  }

  .layout {
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
    align-items: center;
    padding: 2rem;
  }
</style>
