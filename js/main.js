// Nav background on scroll
var nav = document.getElementById('nav');
window.addEventListener('scroll', function () {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Mobile menu
var toggle = document.getElementById('navToggle');
var links = document.getElementById('navLinks');
toggle.addEventListener('click', function () {
  links.classList.toggle('open');
});
links.querySelectorAll('a').forEach(function (a) {
  a.addEventListener('click', function () {
    links.classList.remove('open');
  });
});

// Duplicate carousel items for seamless infinite loop
var track = document.getElementById('carouselTrack');
track.innerHTML += track.innerHTML;

// ============================================================
// LANGUAGE TOGGLE (English ↔ Spanish)
// ============================================================
// To add translations for a new episode:
// 1. Add data-i18n="epN-title", data-i18n="epN-desc", etc. to the HTML
// 2. Add the matching keys below in both 'en' and 'es'

var translations = {
  en: {
    // Nav
    'nav-idea': 'The Idea',
    'nav-about': 'About',
    'nav-people': 'People',
    'nav-connect': 'Connect',

    // Hero
    'hero-eyebrow': 'Meaningful Reciprocity',
    'hero-heading': 'Welcome to the<br><span class="accent">Ayni</span> Community',
    'hero-lede': 'We believe in the power of sharing and helping each other grow — a space for stories, lessons, and ideas that move in cycles through community.',
    'hero-scroll': 'Scroll',

    // Video
    'video-label': 'Watch',
    'video-title': 'What is Ayni?',

    // About
    'about-label': 'The Host',
    'about-heading': 'Hi, I’m Juan Ortega',
    'about-p1': 'I’m an Ecuadorian Fulbright scholar and a graduate student in Artificial Intelligence and Robotics at Carnegie Mellon University. My work sits at the intersection of technology and human connection — I research how machines can offer emotional support without making us less human.',
    'about-p2': 'Ayni was born from a simple belief: that the stories, lessons, and wisdom people carry are too valuable to disappear. I started this as a space to capture real conversations with people building, learning, and leading around the world.',
    'about-signature': 'Technology should become more human, not the other way around.',

    // Gallery
    'gallery-label': 'Moments',
    'gallery-title': 'Along the Way',
    'carousel-g1': 'Fulbright Seminar — Houston',
    'carousel-g2': 'Race to the Moon — NASA',
    'carousel-g3': 'Fulbright LATAM',
    'carousel-g4': 'Fellow Fulbrighters',
    'carousel-g5': 'Fulbright Ecuador',
    'carousel-g6': 'Fulbright Session',

    // Episodes section
    'episodes-label': 'The People',
    'episodes-title': 'Conversations',

    // Episode 1
    'ep1-status': 'Episode 1 · Live',
    'ep1-title': 'From Fulbright to the United Nations',
    'ep1-desc': 'Binetou applied to Fulbright not knowing where it would take her. It led her to Lehigh University, and eventually to representing her school at the UN General Assembly. A conversation about taking the leap and what becomes possible when you do.',
    'ep1-watch': 'Watch Episode',

    // Episode 2
    'ep2-status': 'Airs June 3rd',
    'ep2-title': 'Authenticity & Water Diplomacy',
    'ep2-desc': 'A conversation about staying true to yourself, the path into water diplomacy, and what it takes to apply for Fulbright from a place few people expect.',
    'ep2-soon': 'Coming Soon',

    // Episode 3
    'ep3-status': 'Airs June 6th',
    'ep3-title': 'Change, Risk & Starting Over',
    'ep3-desc': 'A conversation about going from psychology to economics to healthcare data science, why change will always be scary, and how starting over in a new field can be the best decision you make.',
    'ep3-soon': 'Coming Soon',

    // Episode 4
    'ep4-status': 'Airs June 10th',
    'ep4-title': 'Aviation & Building a Nation',
    'ep4-desc': 'A conversation about growing up watching planes land in a small town in Timor Leste, becoming an air traffic controller, and what it means to build an aviation career in one of the youngest nations in the world.',
    'ep4-soon': 'Coming Soon',

    // Footer
    'foot-tag': 'Meaningful Reciprocity',
    'foot-copyright': '© 2026 Ayni. All rights reserved.'
  },

  es: {
    // Nav
    'nav-idea': 'La Idea',
    'nav-about': 'Sobre',
    'nav-people': 'Personas',
    'nav-connect': 'Contacto',

    // Hero
    'hero-eyebrow': 'Reciprocidad Significativa',
    'hero-heading': 'Bienvenidos a la<br>Comunidad <span class="accent">Ayni</span>',
    'hero-lede': 'Creemos en el poder de compartir y ayudarnos mutuamente a crecer — un espacio para historias, lecciones e ideas que se mueven en ciclos a través de la comunidad.',
    'hero-scroll': 'Scroll',

    // Video
    'video-label': 'Mira',
    'video-title': '¿Qué es Ayni?',

    // About
    'about-label': 'El Anfitrión',
    'about-heading': 'Hola, soy Juan Ortega',
    'about-p1': 'Soy becario ecuatoriano Fulbright y estudiante de posgrado en Inteligencia Artificial y Robótica en Carnegie Mellon University. Mi trabajo se enfoca en la intersección de la tecnología y la conexión humana — investigo cómo los robots y la IA pueden ofrecer apoyo emocional sin hacernos menos humanos.',
    'about-p2': 'Ayni nació de una creencia simple: que las historias, lecciones y sabiduría que las personas llevan consigo son demasiado valiosas para desaparecer. Empecé esto como un espacio para capturar conversaciones reales con personas que construyen, aprenden y lideran alrededor del mundo.',
    'about-signature': 'La tecnología debería volverse más humana, no al revés.',

    // Gallery
    'gallery-label': 'Momentos',
    'gallery-title': 'En el Camino',
    'carousel-g1': 'Seminario Fulbright — Houston',
    'carousel-g2': 'Carrera a la Luna — NASA',
    'carousel-g3': 'Fulbright LATAM',
    'carousel-g4': 'Compañeros Fulbrighters',
    'carousel-g5': 'Fulbright Ecuador',
    'carousel-g6': 'Sesión Fulbright',

    // Episodes section
    'episodes-label': 'Personas',
    'episodes-title': 'Conversaciones',

    // Episode 1
    'ep1-status': 'Episodio 1 · Activo',
    'ep1-title': 'De Fulbright a las Naciones Unidas',
    'ep1-desc': 'Binetou aplicó a Fulbright sin saber a dónde la llevaría. La llevó a Lehigh University, y eventualmente a representar a su universidad en la Asamblea General de la ONU. Una conversación sobre dar el salto y lo que se vuelve posible cuando lo haces.',
    'ep1-watch': 'Ver Episodio',

    // Episode 2
    'ep2-status': 'Sale el 3 de junio',
    'ep2-title': 'Autenticidad y Diplomacia del Agua',
    'ep2-desc': 'Una conversación sobre ser fiel a ti mismo, el camino hacia la diplomacia del agua, y lo que se necesita para aplicar a Fulbright desde un lugar que pocos esperan.',
    'ep2-soon': 'Próximamente',

    // Episode 3
    'ep3-status': 'Sale el 6 de junio',
    'ep3-title': 'Cambio, Riesgo y Empezar de Nuevo',
    'ep3-desc': 'Una conversación sobre pasar de psicología a economía a ciencia de datos en salud, por qué el cambio siempre dará miedo, y cómo empezar de nuevo en un campo diferente puede ser la mejor decisión que tomes.',
    'ep3-soon': 'Próximamente',

    // Episode 4
    'ep4-status': 'Sale el 10 de junio',
    'ep4-title': 'Aviación y Construir una Nación',
    'ep4-desc': 'Una conversación sobre crecer viendo aviones aterrizar en un pequeño pueblo de Timor-Leste, convertirse en controladora de tráfico aéreo, y lo que significa construir una carrera en aviación en una de las naciones más jóvenes del mundo.',
    'ep4-soon': 'Próximamente',

    // Footer
    'foot-tag': 'Reciprocidad Significativa',
    'foot-copyright': '© 2026 Ayni. Todos los derechos reservados.'
  }
};

// Current language state
var currentLang = 'en';

function setLanguage(lang) {
  var strings = translations[lang];
  if (!strings) return;

  // Update all elements with data-i18n (textContent)
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (strings[key] !== undefined) {
      el.textContent = strings[key];
    }
  });

  // Update all elements with data-i18n-html (innerHTML — for tags like <br>, <span>)
  document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-html');
    if (strings[key] !== undefined) {
      el.innerHTML = strings[key];
    }
  });

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Update toggle button
  var btn = document.getElementById('langToggle');
  if (lang === 'es') {
    btn.textContent = 'ENG';
    btn.classList.add('active');
    btn.setAttribute('aria-label', 'Switch to English');
  } else {
    btn.textContent = 'ESP';
    btn.classList.remove('active');
    btn.setAttribute('aria-label', 'Cambiar a español');
  }

  currentLang = lang;

  // Remember preference
  try { localStorage.setItem('ayni-lang', lang); } catch (e) {}
}

// Toggle handler
document.getElementById('langToggle').addEventListener('click', function () {
  setLanguage(currentLang === 'en' ? 'es' : 'en');
});

// Restore saved preference on load
try {
  var saved = localStorage.getItem('ayni-lang');
  if (saved === 'es') {
    setLanguage('es');
  }
} catch (e) {}
