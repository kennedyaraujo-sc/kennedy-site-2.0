(function () {
  'use strict';
  // Número do WhatsApp (DDI + DDD + número, só dígitos)
  var WHATSAPP = '5548991575011';
  var wa = function (text) { return 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(text); };

  // FAQ: abre uma pergunta por vez
  var faqButtons = document.querySelectorAll('.faq-q');
  faqButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var isOpen = btn.getAttribute('aria-expanded') === 'true';
      faqButtons.forEach(function (b) {
        b.setAttribute('aria-expanded', 'false');
        b.querySelector('.faq-i').textContent = '+';
        b.parentElement.querySelector('.faq-a').hidden = true;
      });
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        btn.querySelector('.faq-i').textContent = '\u2212';
        btn.parentElement.querySelector('.faq-a').hidden = false;
      }
    });
  });

  // Formulário -> WhatsApp
  var form = document.getElementById('form');
  var ok = document.getElementById('form-ok');
  var chips = document.querySelectorAll('.chip');
  var service = chips.length ? chips[0].dataset.service : '';
  var nome = document.getElementById('f-nome');
  var cont = document.getElementById('f-cont');
  var emp = document.getElementById('f-emp');

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      service = chip.dataset.service;
      chips.forEach(function (c) {
        var on = c === chip;
        c.classList.toggle('on', on);
        c.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var n = nome.value.trim(), c = cont.value.trim(), co = emp.value.trim();
    document.getElementById('err-nome').hidden = !!n;
    document.getElementById('err-cont').hidden = !!c;
    if (!n || !c) { return; }
    var msg = 'Olá, Kennedy! Meu nome é ' + n + (co ? ' (' + co + ')' : '') +
      '. Tenho interesse em ' + service.toLowerCase() + '. Meu contato: ' + c + '.';
    window.open(wa(msg), '_blank', 'noopener');
    document.getElementById('ok-name').textContent = n;
    document.getElementById('ok-service').textContent = service.toLowerCase();
    form.hidden = true;
    ok.hidden = false;
  });

  document.getElementById('form-reset').addEventListener('click', function () {
    form.reset();
    ok.hidden = true;
    form.hidden = false;
  });
})();
