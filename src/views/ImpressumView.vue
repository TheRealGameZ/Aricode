<script>
export default {
  mounted() {
    document.getElementById('headerContainer').classList.add('headerHeightSmall');
  }
}

</script>

<template>
    <div class="row">
        <header class="text-center">
          <h2>Impressum</h2>
          <div class="horizontalLine"></div>
        </header>
        <div class="container">
          <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
          <p>Andreas Richter<br />
            Lange Str. 28<br />
            07603 Gera</p>

          <h2>Kontakt</h2>
          <p>Telefon: 017641577221<br />
            E-Mail: Andreas_Richter22@gmx.net</p>

          <p>Quelle: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a></p>
        </div>
    </div>
  </template>