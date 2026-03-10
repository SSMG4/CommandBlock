// ---- Logo Randomization ----

const logoImages = [
  'assets/base.png',
  'assets/chain.png',
  'assets/repeater.png'
];

function setLogo() {
  const logoEl = document.getElementById('logo');
  if (!logoEl) return;
  if (!sessionStorage.getItem('logoInitialized')) {
    logoEl.src = logoImages[0];
    sessionStorage.setItem('logoInitialized', 'true');
  } else {
    const randomIdx = Math.floor(Math.random() * (logoImages.length - 1)) + 1;
    logoEl.src = logoImages[randomIdx];
  }
}

// ---- Dropdown ----

function initDropdown() {
  const dropbtns = document.querySelectorAll('.dropbtn');
  dropbtns.forEach(dropbtn => {
    const dropdown = dropbtn.closest('.dropdown');
    const content = dropdown ? dropdown.querySelector('.dropdown-content') : null;
    if (!content) return;

    dropbtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      const isOpen = content.classList.contains('show');
      // Close all dropdowns first
      document.querySelectorAll('.dropdown-content.show').forEach(d => d.classList.remove('show'));
      document.querySelectorAll('.dropbtn').forEach(b => b.setAttribute('aria-expanded', 'false'));
      if (!isOpen) {
        content.classList.add('show');
        dropbtn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown-content.show').forEach(d => d.classList.remove('show'));
      document.querySelectorAll('.dropbtn').forEach(b => b.setAttribute('aria-expanded', 'false'));
    }
  });
}

// ---- Theme Switching ----

function setTheme(theme) {
  document.body.className = 'theme-' + theme;
  localStorage.setItem('theme', theme);
}

function initTheme() {
  const themeSwitcher = document.getElementById('theme-switcher');
  if (!themeSwitcher) return;
  const savedTheme = localStorage.getItem('theme') || 'light';
  themeSwitcher.value = savedTheme;
  setTheme(savedTheme);
  themeSwitcher.addEventListener('change', (e) => setTheme(e.target.value));
}

// ---- Translations ----

const translations = {
  en: {
    nav_home:    'Home',
    nav_more:    'More',
    nav_about:   'About',
    nav_wiki:    'Wiki',
    nav_logo:    'Logo History',
    nav_java:    'Java Versions',
    nav_bedrock: 'Bedrock Versions',
    nav_editions:'Editions',
    nav_unofficial: 'Unofficial',
    nav_other:   'Other',
    nav_modding: 'Modding',
    nav_mods:    'Mods',
    footer_copy: '2026 CommandBlock | Unofficial Fan Project',
    footer_disclaimer: 'This project is not affiliated with Mojang Studios or Microsoft.',
    hero_title:  'CommandBlock',
    hero_subtitle: 'The ultimate Minecraft information library. Version histories, logo archives, modding guides, and more.',
    hero_cta:    'Explore',
    features_heading: 'Explore the Library',
    card_logo_title: 'Logo History',
    card_logo_desc: 'Every Minecraft logo, from Pre-Classic to today.',
    card_java_title: 'Java Versions',
    card_java_desc: 'Full changelog from Indev to the latest release.',
    card_bedrock_title: 'Bedrock Versions',
    card_bedrock_desc: 'All Bedrock/PE updates, from 0.1 onward.',
    card_editions_title: 'Editions',
    card_editions_desc: 'Legacy consoles, handhelds, every official client.',
    card_unofficial_title: 'Unofficial',
    card_unofficial_desc: 'Fan projects, creepypastas, and community builds.',
    card_other_title: 'Other Experiences',
    card_other_desc: 'Dungeons, Legends, Classic, and beyond.',
    card_modding_title: 'Modding',
    card_modding_desc: 'Guides and resources for all things modded.',
    card_mods_title: 'Mods and Hosts',
    card_mods_desc: 'Modrinth, CurseForge, and the best mods around.',
    about_heading: 'About CommandBlock',
    about_p: 'CommandBlock is a fan-created, all-in-one library about Minecraft, covering everything from version histories to modding and community projects. This site is for fans, by fans, with no affiliation with Mojang or Microsoft.',
    about_creator_h: 'About the Creator',
    about_creator_p: 'Made by SSMG4. Minecraft enthusiast, history archivist, and web developer.',
    about_contact: 'Contact',
    about_project_h: 'About the Project',
    about_started: 'Started: 2025',
    about_goal: 'Goal: To be the most comprehensive info source for all things Minecraft',
    about_tech: 'Tech Stack: HTML, CSS, JavaScript',
    about_opensource: 'Open source!',
    about_mc_h: 'About Minecraft',
    about_mc_p: 'Minecraft is a sandbox game created by Markus "Notch" Persson, developed by Mojang Studios, and now owned by Microsoft. Visit the official site:',
    about_mojang_h: 'About Mojang/Microsoft',
    about_mojang_p1: 'Mojang Studios is the Swedish game studio behind Minecraft.',
    about_mojang_p2: 'Microsoft acquired Mojang and Minecraft in 2014.',
    about_mojang_p3: 'All trademarks and copyrights belong to their respective owners.',
    about_credits_h: 'Credits and Community',
    about_credits_wiki: 'Minecraft Wiki',
    about_credits_thanks: 'Special thanks to the Minecraft community for decades of creativity!',
    wiki_redirect: 'Redirecting to Minecraft Wiki...',
    wiki_click: 'If you are not redirected automatically, click here.',
  },

  fr: {
    nav_home:    'Accueil',
    nav_more:    'Plus',
    nav_about:   'À propos',
    nav_wiki:    'Wiki',
    nav_logo:    'Historique des logos',
    nav_java:    'Versions Java',
    nav_bedrock: 'Versions Bedrock',
    nav_editions:'Éditions',
    nav_unofficial: 'Non officiel',
    nav_other:   'Autre',
    nav_modding: 'Modding',
    nav_mods:    'Mods',
    footer_copy: '2026 CommandBlock | Projet de fans non officiel',
    footer_disclaimer: "Ce projet n'est pas affilié à Mojang Studios ou Microsoft.",
    hero_title:  'CommandBlock',
    hero_subtitle: 'La bibliothèque Minecraft ultime. Historiques de versions, archives de logos, guides de modding et plus encore.',
    hero_cta:    'Explorer',
    features_heading: 'Explorer la bibliothèque',
    card_logo_title: 'Historique des logos',
    card_logo_desc: 'Tous les logos Minecraft, du Pre-Classic à aujourd\'hui.',
    card_java_title: 'Versions Java',
    card_java_desc: 'Journal complet de Indev à la dernière version.',
    card_bedrock_title: 'Versions Bedrock',
    card_bedrock_desc: 'Toutes les mises à jour Bedrock/PE depuis la 0.1.',
    card_editions_title: 'Éditions',
    card_editions_desc: 'Consoles legacy, portables, chaque client officiel.',
    card_unofficial_title: 'Non officiel',
    card_unofficial_desc: 'Projets de fans, creepypastas et créations communautaires.',
    card_other_title: 'Autres expériences',
    card_other_desc: 'Dungeons, Legends, Classic et bien plus.',
    card_modding_title: 'Modding',
    card_modding_desc: 'Guides et ressources pour tout ce qui est modifié.',
    card_mods_title: 'Mods et hébergeurs',
    card_mods_desc: 'Modrinth, CurseForge et les meilleurs mods.',
    about_heading: 'À propos de CommandBlock',
    about_p: "CommandBlock est une bibliothèque complète sur Minecraft, créée par des fans, couvrant les historiques de versions, le modding et les projets communautaires. Ce site est fait par des fans, sans affiliation avec Mojang ou Microsoft.",
    about_creator_h: 'À propos du créateur',
    about_creator_p: 'Créé par SSMG4. Passionné de Minecraft, archiviste et développeur web.',
    about_contact: 'Contact',
    about_project_h: 'À propos du projet',
    about_started: 'Débuté: 2025',
    about_goal: 'Objectif: Être la source d\'information la plus complète sur Minecraft',
    about_tech: 'Stack technique: HTML, CSS, JavaScript',
    about_opensource: 'Open source!',
    about_mc_h: 'À propos de Minecraft',
    about_mc_p: 'Minecraft est un jeu sandbox créé par Markus "Notch" Persson, développé par Mojang Studios, maintenant propriété de Microsoft. Visitez le site officiel:',
    about_mojang_h: 'À propos de Mojang/Microsoft',
    about_mojang_p1: 'Mojang Studios est le studio de jeux suédois derrière Minecraft.',
    about_mojang_p2: 'Microsoft a acquis Mojang et Minecraft en 2014.',
    about_mojang_p3: 'Toutes les marques et droits d\'auteur appartiennent à leurs propriétaires respectifs.',
    about_credits_h: 'Crédits et communauté',
    about_credits_wiki: 'Wiki Minecraft',
    about_credits_thanks: 'Merci à la communauté Minecraft pour des décennies de créativité!',
    wiki_redirect: 'Redirection vers le Wiki Minecraft...',
    wiki_click: 'Si vous n\'êtes pas redirigé automatiquement, cliquez ici.',
  },

  jp: {
    nav_home:    'ホーム',
    nav_more:    'もっと見る',
    nav_about:   '概要',
    nav_wiki:    'ウィキ',
    nav_logo:    'ロゴの歴史',
    nav_java:    'Javaバージョン',
    nav_bedrock: 'Bedrockバージョン',
    nav_editions:'エディション',
    nav_unofficial: '非公式',
    nav_other:   'その他',
    nav_modding: 'MOD制作',
    nav_mods:    'MOD',
    footer_copy: '2026 CommandBlock | 非公式ファンプロジェクト',
    footer_disclaimer: 'このプロジェクトはMojang StudiosまたはMicrosoftとは無関係です。',
    hero_title:  'CommandBlock',
    hero_subtitle: '究極のMinecraft情報ライブラリ。バージョン履歴、ロゴアーカイブ、MODガイドなど。',
    hero_cta:    '探索する',
    features_heading: 'ライブラリを探索',
    card_logo_title: 'ロゴの歴史',
    card_logo_desc: 'Pre-Classicから現在までのすべてのMinecraftロゴ。',
    card_java_title: 'Javaバージョン',
    card_java_desc: 'IndevからLatestまでの全変更履歴。',
    card_bedrock_title: 'Bedrockバージョン',
    card_bedrock_desc: '0.1以降のすべてのBedrock/PEアップデート。',
    card_editions_title: 'エディション',
    card_editions_desc: 'レガシーコンソール、携帯端末、すべての公式クライアント。',
    card_unofficial_title: '非公式',
    card_unofficial_desc: 'ファンプロジェクト、クリーピーパスタ、コミュニティ作品。',
    card_other_title: 'その他の体験',
    card_other_desc: 'Dungeons、Legends、Classicなど。',
    card_modding_title: 'MOD制作',
    card_modding_desc: 'すべてのMOD関連ガイドとリソース。',
    card_mods_title: 'MODとホスト',
    card_mods_desc: 'Modrinth、CurseForge、そして人気MOD一覧。',
    about_heading: 'CommandBlockについて',
    about_p: 'CommandBlockはMinecraftに関するファン制作のオールインワンライブラリです。バージョン履歴からMOD、コミュニティプロジェクトまで幅広くカバーしています。MojangやMicrosoftとは無関係です。',
    about_creator_h: '制作者について',
    about_creator_p: 'SSMG4が制作。Minecraftファン、歴史アーカイバー、ウェブ開発者。',
    about_contact: '連絡先',
    about_project_h: 'プロジェクトについて',
    about_started: '開始: 2025年',
    about_goal: '目標: Minecraftに関するあらゆる情報を網羅する',
    about_tech: '技術スタック: HTML, CSS, JavaScript',
    about_opensource: 'オープンソース！',
    about_mc_h: 'Minecraftについて',
    about_mc_p: 'MinecraftはMarkus "Notch" Perssonが制作し、Mojang Studiosが開発した、現在はMicrosoftが所有するサンドボックスゲームです。公式サイト:',
    about_mojang_h: 'Mojang/Microsoftについて',
    about_mojang_p1: 'Mojang StudiosはMinecraftを開発したスウェーデンのゲームスタジオです。',
    about_mojang_p2: 'MicrosoftはMojangとMinecraftを2014年に買収しました。',
    about_mojang_p3: 'すべての商標および著作権はそれぞれの所有者に帰属します。',
    about_credits_h: 'クレジットとコミュニティ',
    about_credits_wiki: 'Minecraftウィキ',
    about_credits_thanks: '数十年にわたる創造性に対してMinecraftコミュニティに感謝！',
    wiki_redirect: 'Minecraftウィキにリダイレクト中...',
    wiki_click: '自動的にリダイレクトされない場合はここをクリック。',
  },

  ru: {
    nav_home:    'Главная',
    nav_more:    'Ещё',
    nav_about:   'О сайте',
    nav_wiki:    'Вики',
    nav_logo:    'История логотипов',
    nav_java:    'Версии Java',
    nav_bedrock: 'Версии Bedrock',
    nav_editions:'Издания',
    nav_unofficial: 'Неофициальное',
    nav_other:   'Другое',
    nav_modding: 'Моддинг',
    nav_mods:    'Моды',
    footer_copy: '2026 CommandBlock | Неофициальный фан-проект',
    footer_disclaimer: 'Этот проект не связан с Mojang Studios или Microsoft.',
    hero_title:  'CommandBlock',
    hero_subtitle: 'Главная библиотека информации о Minecraft. Истории версий, архивы логотипов, гайды по моддингу и многое другое.',
    hero_cta:    'Изучить',
    features_heading: 'Изучите библиотеку',
    card_logo_title: 'История логотипов',
    card_logo_desc: 'Все логотипы Minecraft от Pre-Classic до наших дней.',
    card_java_title: 'Версии Java',
    card_java_desc: 'Полная история от Indev до последнего релиза.',
    card_bedrock_title: 'Версии Bedrock',
    card_bedrock_desc: 'Все обновления Bedrock/PE, начиная с 0.1.',
    card_editions_title: 'Издания',
    card_editions_desc: 'Устаревшие консоли, портативные устройства, все клиенты.',
    card_unofficial_title: 'Неофициальное',
    card_unofficial_desc: 'Фан-проекты, криппипасты и работы сообщества.',
    card_other_title: 'Другие игры',
    card_other_desc: 'Dungeons, Legends, Classic и многое другое.',
    card_modding_title: 'Моддинг',
    card_modding_desc: 'Гайды и ресурсы по всему, что связано с модами.',
    card_mods_title: 'Моды и хостинг',
    card_mods_desc: 'Modrinth, CurseForge и лучшие моды.',
    about_heading: 'О CommandBlock',
    about_p: 'CommandBlock — это созданная фанатами всеобъемлющая библиотека о Minecraft, охватывающая истории версий, моддинг и проекты сообщества. Сайт создан фанатами для фанатов, без связи с Mojang или Microsoft.',
    about_creator_h: 'О создателе',
    about_creator_p: 'Создано SSMG4. Фанат Minecraft, архивариус истории и веб-разработчик.',
    about_contact: 'Контакт',
    about_project_h: 'О проекте',
    about_started: 'Начало: 2025',
    about_goal: 'Цель: Быть самым полным источником информации о Minecraft',
    about_tech: 'Технологии: HTML, CSS, JavaScript',
    about_opensource: 'Открытый исходный код!',
    about_mc_h: 'О Minecraft',
    about_mc_p: 'Minecraft — песочница, созданная Маркусом "Notch" Перссоном, разработанная Mojang Studios, теперь принадлежащая Microsoft. Официальный сайт:',
    about_mojang_h: 'О Mojang/Microsoft',
    about_mojang_p1: 'Mojang Studios — шведская игровая студия, создавшая Minecraft.',
    about_mojang_p2: 'Microsoft приобрела Mojang и Minecraft в 2014 году.',
    about_mojang_p3: 'Все торговые марки и авторские права принадлежат их владельцам.',
    about_credits_h: 'Благодарности и сообщество',
    about_credits_wiki: 'Вики Minecraft',
    about_credits_thanks: 'Особая благодарность сообществу Minecraft за десятилетия творчества!',
    wiki_redirect: 'Перенаправление на Вики Minecraft...',
    wiki_click: 'Если перенаправление не произошло автоматически, нажмите здесь.',
  },

  es: {
    nav_home:    'Inicio',
    nav_more:    'Más',
    nav_about:   'Acerca de',
    nav_wiki:    'Wiki',
    nav_logo:    'Historia del logo',
    nav_java:    'Versiones Java',
    nav_bedrock: 'Versiones Bedrock',
    nav_editions:'Ediciones',
    nav_unofficial: 'No oficial',
    nav_other:   'Otro',
    nav_modding: 'Modding',
    nav_mods:    'Mods',
    footer_copy: '2026 CommandBlock | Proyecto de fans no oficial',
    footer_disclaimer: 'Este proyecto no está afiliado a Mojang Studios ni a Microsoft.',
    hero_title:  'CommandBlock',
    hero_subtitle: 'La biblioteca de información de Minecraft más completa. Historiales de versiones, archivos de logos, guías de modding y más.',
    hero_cta:    'Explorar',
    features_heading: 'Explorar la biblioteca',
    card_logo_title: 'Historia del logo',
    card_logo_desc: 'Todos los logos de Minecraft, desde Pre-Classic hasta hoy.',
    card_java_title: 'Versiones Java',
    card_java_desc: 'Historial completo desde Indev hasta la última versión.',
    card_bedrock_title: 'Versiones Bedrock',
    card_bedrock_desc: 'Todas las actualizaciones Bedrock/PE desde la 0.1.',
    card_editions_title: 'Ediciones',
    card_editions_desc: 'Consolas antiguas, portátiles, cada cliente oficial.',
    card_unofficial_title: 'No oficial',
    card_unofficial_desc: 'Proyectos de fans, creepypastas y creaciones comunitarias.',
    card_other_title: 'Otras experiencias',
    card_other_desc: 'Dungeons, Legends, Classic y mucho más.',
    card_modding_title: 'Modding',
    card_modding_desc: 'Guías y recursos para todo lo relacionado con mods.',
    card_mods_title: 'Mods y hosts',
    card_mods_desc: 'Modrinth, CurseForge y los mejores mods.',
    about_heading: 'Acerca de CommandBlock',
    about_p: 'CommandBlock es una biblioteca creada por fans sobre Minecraft, cubriendo todo, desde historiales de versiones hasta modding y proyectos comunitarios. Este sitio es de fans para fans, sin afiliación con Mojang ni Microsoft.',
    about_creator_h: 'Acerca del creador',
    about_creator_p: 'Hecho por SSMG4. Entusiasta de Minecraft, archivista de historia y desarrollador web.',
    about_contact: 'Contacto',
    about_project_h: 'Acerca del proyecto',
    about_started: 'Iniciado: 2025',
    about_goal: 'Objetivo: Ser la fuente de información más completa sobre Minecraft',
    about_tech: 'Stack tecnológico: HTML, CSS, JavaScript',
    about_opensource: 'Código abierto!',
    about_mc_h: 'Acerca de Minecraft',
    about_mc_p: 'Minecraft es un juego sandbox creado por Markus "Notch" Persson, desarrollado por Mojang Studios y ahora propiedad de Microsoft. Visita el sitio oficial:',
    about_mojang_h: 'Acerca de Mojang/Microsoft',
    about_mojang_p1: 'Mojang Studios es el estudio de juegos sueco detrás de Minecraft.',
    about_mojang_p2: 'Microsoft adquirió Mojang y Minecraft en 2014.',
    about_mojang_p3: 'Todas las marcas registradas y derechos de autor pertenecen a sus respectivos propietarios.',
    about_credits_h: 'Créditos y comunidad',
    about_credits_wiki: 'Wiki de Minecraft',
    about_credits_thanks: 'Un agradecimiento especial a la comunidad de Minecraft por décadas de creatividad.',
    wiki_redirect: 'Redirigiendo al Wiki de Minecraft...',
    wiki_click: 'Si no eres redirigido automáticamente, haz clic aquí.',
  }
};

// ---- Apply Translations ----

function applyTranslations(lang) {
  const t = translations[lang] || translations['en'];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-href]').forEach(el => {
    const key = el.getAttribute('data-i18n-href');
    if (t[key] !== undefined) el.href = t[key];
  });
}

// ---- Language Switching ----

function initLanguage() {
  const langSwitcher = document.getElementById('lang-switcher');
  if (!langSwitcher) return;
  const savedLang = localStorage.getItem('lang') || 'en';
  langSwitcher.value = savedLang;
  applyTranslations(savedLang);

  langSwitcher.addEventListener('change', (e) => {
    localStorage.setItem('lang', e.target.value);
    applyTranslations(e.target.value);
  });
}

// ---- Navigation Highlight ----

function highlightNav() {
  const navLinks = document.querySelectorAll('.header-nav > a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && window.location.pathname.endsWith(href)) {
      link.style.fontWeight = '900';
      link.style.borderBottom = '2px solid var(--color-accent)';
    }
  });
}

// ---- Init ----

window.addEventListener('DOMContentLoaded', () => {
  setLogo();
  initDropdown();
  initTheme();
  initLanguage();
  highlightNav();
});
