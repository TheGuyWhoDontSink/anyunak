  function ellenoriz() {
      const nev = document.getElementById('nev').value.trim();
      const jelszo = document.getElementById('jelszo').value;
      const hiba = document.getElementById('hiba');

      if (nev === 'zsanett' && jelszo === '79illalico19') {
        window.location.href = './buli.html';
      } else {
        hiba.textContent = 'Hibás név vagy jelszó! 😅';
      }
    }