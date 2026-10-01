function setLang(lang){
  document.body.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang === 'ja' ? 'ja' : 'en');
  const btnEn = document.getElementById('btn-en');
  const btnJa = document.getElementById('btn-ja');
  if (btnEn) btnEn.classList.toggle('active', lang === 'en');
  if (btnJa) btnJa.classList.toggle('active', lang === 'ja');
  document.querySelectorAll('input, textarea').forEach(el => {
    const ph = lang === 'ja' ? el.getAttribute('data-ja-ph') : el.getAttribute('data-en-ph');
    if (ph) el.setAttribute('placeholder', ph);
  });
  localStorage.setItem('bridgebee-lang', lang);
}
