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
    // First ever visit this session: always base
    logoEl.src = logoImages[0];
    sessionStorage.setItem('logoInitialized', 'true');
  } else {
    // On refresh: any of the 3 logos randomly
    const randomIdx = Math.floor(Math.random() * logoImages.length);
    logoEl.src = logoImages[randomIdx];
  }
  // Sync hero logo if present
  syncHeroLogo(logoEl.src);
}

function syncHeroLogo(src) {
  const heroLogo = document.getElementById('hero-logo');
  if (heroLogo) heroLogo.src = src;
}

// ---- Logo Home Link (clears session so logo resets) ----

function initLogoLink() {
  const headerLeft = document.querySelector('.header-left');
  if (!headerLeft) return;
  headerLeft.style.cursor = 'pointer';
  headerLeft.addEventListener('click', function (e) {
    e.preventDefault();
    sessionStorage.removeItem('logoInitialized');
    window.location.href = 'https://ssmg4.github.io/CommandBlock';
  });
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
      closeAllDropdowns();
      if (!isOpen) {
        content.classList.add('show');
        dropbtn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown')) closeAllDropdowns();
  });
}

function closeAllDropdowns() {
  document.querySelectorAll('.dropdown-content.show').forEach(d => d.classList.remove('show'));
  document.querySelectorAll('.dropbtn').forEach(b => b.setAttribute('aria-expanded', 'false'));
}

// ---- Hamburger Menu (mobile) ----

function initHamburger() {
  const btn = document.getElementById('hamburger-btn');
  const nav = document.querySelector('.header-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    nav.classList.toggle('open');
    btn.classList.toggle('open');
    btn.setAttribute('aria-expanded', nav.classList.contains('open'));
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
    footer_disclaimer: 'Not affiliated with Mojang Studios or Microsoft.',
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
    stats_editions: 'Editions tracked',
    stats_versions: 'Java versions',
    stats_years: 'Years of history',
    about_strip_heading: 'What is CommandBlock?',
    about_strip_p1: 'CommandBlock is a fan-made, open-source library dedicated to preserving and presenting everything about Minecraft. From the earliest Pre-Classic builds to the latest releases, from obscure handheld editions to deep modding guides, this site covers it all.',
    about_strip_p2: 'Built with pure HTML, CSS, and JavaScript, CommandBlock is lightweight, portable, and always accessible. No ads, no tracking, just information.',
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
    about_contribute_h: 'Contributing',
    about_contribute_p: 'CommandBlock is open to contributions. Open an issue for corrections or suggestions, or submit a pull request for new pages, data, or improvements. Help with translations and version history research is especially welcome.',
    about_license_h: 'License',
    about_license_p: 'CommandBlock is released under the MIT License. You are free to reuse, fork, and expand this project for your own Minecraft resources.',
    wiki_redirect: 'Redirecting to Minecraft Wiki...',
    wiki_click: 'If you are not redirected automatically, click here.',
  },

  fr: {
    nav_home:    'Accueil',
    nav_more:    'Plus',
    nav_about:   'A propos',
    nav_wiki:    'Wiki',
    nav_logo:    'Historique des logos',
    nav_java:    'Versions Java',
    nav_bedrock: 'Versions Bedrock',
    nav_editions:'Editions',
    nav_unofficial: 'Non officiel',
    nav_other:   'Autre',
    nav_modding: 'Modding',
    nav_mods:    'Mods',
    footer_copy: '2026 CommandBlock | Projet de fans non officiel',
    footer_disclaimer: "Non affilie a Mojang Studios ou Microsoft.",
    hero_title:  'CommandBlock',
    hero_subtitle: 'La bibliotheque Minecraft ultime. Historiques de versions, archives de logos, guides de modding et plus encore.',
    hero_cta:    'Explorer',
    features_heading: 'Explorer la bibliotheque',
    card_logo_title: 'Historique des logos',
    card_logo_desc: "Tous les logos Minecraft, du Pre-Classic a aujourd'hui.",
    card_java_title: 'Versions Java',
    card_java_desc: 'Journal complet de Indev a la derniere version.',
    card_bedrock_title: 'Versions Bedrock',
    card_bedrock_desc: 'Toutes les mises a jour Bedrock/PE depuis la 0.1.',
    card_editions_title: 'Editions',
    card_editions_desc: 'Consoles legacy, portables, chaque client officiel.',
    card_unofficial_title: 'Non officiel',
    card_unofficial_desc: 'Projets de fans, creepypastas et creations communautaires.',
    card_other_title: 'Autres experiences',
    card_other_desc: 'Dungeons, Legends, Classic et bien plus.',
    card_modding_title: 'Modding',
    card_modding_desc: 'Guides et ressources pour tout ce qui est modifie.',
    card_mods_title: 'Mods et hebergeurs',
    card_mods_desc: 'Modrinth, CurseForge et les meilleurs mods.',
    stats_editions: 'Editions suivies',
    stats_versions: 'Versions Java',
    stats_years: 'Annees d\'histoire',
    about_strip_heading: "Qu'est-ce que CommandBlock?",
    about_strip_p1: "CommandBlock est une bibliotheque open-source creee par des fans, dediee a tout ce qui concerne Minecraft. Des premiers builds Pre-Classic aux dernieres versions, ce site couvre tout.",
    about_strip_p2: "Construit avec HTML, CSS et JavaScript pur, CommandBlock est leger, portable et toujours accessible. Pas de publicites, pas de pistage, juste de l'information.",
    about_heading: 'A propos de CommandBlock',
    about_p: "CommandBlock est une bibliotheque complete sur Minecraft, creee par des fans, couvrant les historiques de versions, le modding et les projets communautaires. Sans affiliation avec Mojang ou Microsoft.",
    about_creator_h: 'A propos du createur',
    about_creator_p: 'Cree par SSMG4. Passionne de Minecraft, archiviste et developpeur web.',
    about_contact: 'Contact',
    about_project_h: 'A propos du projet',
    about_started: 'Debute: 2025',
    about_goal: "Objectif: Etre la source d'information la plus complete sur Minecraft",
    about_tech: 'Stack technique: HTML, CSS, JavaScript',
    about_opensource: 'Open source!',
    about_mc_h: 'A propos de Minecraft',
    about_mc_p: 'Minecraft est un jeu sandbox cree par Markus "Notch" Persson, developpe par Mojang Studios, maintenant propriete de Microsoft. Visitez le site officiel:',
    about_mojang_h: 'A propos de Mojang/Microsoft',
    about_mojang_p1: 'Mojang Studios est le studio de jeux suedois derriere Minecraft.',
    about_mojang_p2: 'Microsoft a acquis Mojang et Minecraft en 2014.',
    about_mojang_p3: "Toutes les marques et droits d'auteur appartiennent a leurs proprietaires respectifs.",
    about_credits_h: 'Credits et communaute',
    about_credits_wiki: 'Wiki Minecraft',
    about_credits_thanks: 'Merci a la communaute Minecraft pour des decennies de creativite!',
    about_contribute_h: 'Contribuer',
    about_contribute_p: "CommandBlock est ouvert aux contributions. Ouvrez une issue pour corrections ou suggestions, ou soumettez une pull request. L'aide pour les traductions est particulierement bienvenue.",
    about_license_h: 'Licence',
    about_license_p: 'CommandBlock est publie sous la licence MIT. Vous etes libre de reutiliser et d\'etendre ce projet.',
    wiki_redirect: 'Redirection vers le Wiki Minecraft...',
    wiki_click: "Si vous n'etes pas redirige automatiquement, cliquez ici.",
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
    stats_editions: '追跡エディション数',
    stats_versions: 'Javaバージョン数',
    stats_years: '歴史の年数',
    about_strip_heading: 'CommandBlockとは？',
    about_strip_p1: 'CommandBlockはMinecraftに関するすべてを保存し提示することに特化した、ファン制作のオープンソースライブラリです。最初のPre-Classicビルドから最新リリースまで、このサイトはすべてをカバーしています。',
    about_strip_p2: '純粋なHTML、CSS、JavaScriptで構築されており、軽量で移植性が高く、常にアクセス可能です。広告なし、トラッキングなし、情報のみ。',
    about_heading: 'CommandBlockについて',
    about_p: 'CommandBlockはMinecraftに関するファン制作のオールインワンライブラリです。MojangやMicrosoftとは無関係です。',
    about_creator_h: '制作者について',
    about_creator_p: 'SSMG4が制作。Minecraftファン、歴史アーカイバー、ウェブ開発者。',
    about_contact: '連絡先',
    about_project_h: 'プロジェクトについて',
    about_started: '開始: 2025年',
    about_goal: '目標: Minecraftに関するあらゆる情報を網羅する',
    about_tech: '技術スタック: HTML, CSS, JavaScript',
    about_opensource: 'オープンソース！',
    about_mc_h: 'Minecraftについて',
    about_mc_p: 'MinecraftはMarkus "Notch" Perssonが制作したサンドボックスゲームです。公式サイト:',
    about_mojang_h: 'Mojang/Microsoftについて',
    about_mojang_p1: 'Mojang StudiosはMinecraftを開発したスウェーデンのゲームスタジオです。',
    about_mojang_p2: 'MicrosoftはMojangとMinecraftを2014年に買収しました。',
    about_mojang_p3: 'すべての商標および著作権はそれぞれの所有者に帰属します。',
    about_credits_h: 'クレジットとコミュニティ',
    about_credits_wiki: 'Minecraftウィキ',
    about_credits_thanks: '数十年にわたる創造性に対してMinecraftコミュニティに感謝！',
    about_contribute_h: '貢献',
    about_contribute_p: 'CommandBlockは貢献を歓迎しています。修正や提案のIssueを開くか、新しいページやデータのPull Requestを送ってください。',
    about_license_h: 'ライセンス',
    about_license_p: 'CommandBlockはMITライセンスの下でリリースされています。自由に再利用・拡張できます。',
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
    footer_disclaimer: 'Не связан с Mojang Studios или Microsoft.',
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
    card_editions_desc: 'Устаревшие консоли, портативные, все клиенты.',
    card_unofficial_title: 'Неофициальное',
    card_unofficial_desc: 'Фан-проекты, криппипасты и работы сообщества.',
    card_other_title: 'Другие игры',
    card_other_desc: 'Dungeons, Legends, Classic и многое другое.',
    card_modding_title: 'Моддинг',
    card_modding_desc: 'Гайды и ресурсы по всему, что связано с модами.',
    card_mods_title: 'Моды и хостинг',
    card_mods_desc: 'Modrinth, CurseForge и лучшие моды.',
    stats_editions: 'Отслеживаемых изданий',
    stats_versions: 'Версий Java',
    stats_years: 'Лет истории',
    about_strip_heading: 'Что такое CommandBlock?',
    about_strip_p1: 'CommandBlock — это созданная фанатами open-source библиотека, посвящённая Minecraft. От первых Pre-Classic сборок до последних релизов, этот сайт охватывает всё.',
    about_strip_p2: 'Построен на чистом HTML, CSS и JavaScript. Лёгкий, портативный и всегда доступный. Без рекламы, без трекинга, только информация.',
    about_heading: 'О CommandBlock',
    about_p: 'CommandBlock — это созданная фанатами всеобъемлющая библиотека о Minecraft. Без связи с Mojang или Microsoft.',
    about_creator_h: 'О создателе',
    about_creator_p: 'Создано SSMG4. Фанат Minecraft, архивариус и веб-разработчик.',
    about_contact: 'Контакт',
    about_project_h: 'О проекте',
    about_started: 'Начало: 2025',
    about_goal: 'Цель: Быть самым полным источником информации о Minecraft',
    about_tech: 'Технологии: HTML, CSS, JavaScript',
    about_opensource: 'Открытый исходный код!',
    about_mc_h: 'О Minecraft',
    about_mc_p: 'Minecraft — песочница, созданная Маркусом "Notch" Перссоном, разработанная Mojang Studios. Официальный сайт:',
    about_mojang_h: 'О Mojang/Microsoft',
    about_mojang_p1: 'Mojang Studios — шведская игровая студия, создавшая Minecraft.',
    about_mojang_p2: 'Microsoft приобрела Mojang в 2014 году.',
    about_mojang_p3: 'Все торговые марки принадлежат их владельцам.',
    about_credits_h: 'Благодарности',
    about_credits_wiki: 'Вики Minecraft',
    about_credits_thanks: 'Особая благодарность сообществу Minecraft за десятилетия творчества!',
    about_contribute_h: 'Участие в проекте',
    about_contribute_p: 'CommandBlock открыт для вклада. Откройте issue или отправьте pull request. Помощь с переводами особенно приветствуется.',
    about_license_h: 'Лицензия',
    about_license_p: 'CommandBlock распространяется под лицензией MIT. Вы можете свободно использовать и расширять проект.',
    wiki_redirect: 'Перенаправление на Вики Minecraft...',
    wiki_click: 'Если перенаправление не произошло, нажмите здесь.',
  },

  es: {
    nav_home:    'Inicio',
    nav_more:    'Mas',
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
    footer_disclaimer: 'No afiliado a Mojang Studios ni a Microsoft.',
    hero_title:  'CommandBlock',
    hero_subtitle: 'La biblioteca de informacion de Minecraft mas completa. Historiales de versiones, archivos de logos, guias de modding y mas.',
    hero_cta:    'Explorar',
    features_heading: 'Explorar la biblioteca',
    card_logo_title: 'Historia del logo',
    card_logo_desc: 'Todos los logos de Minecraft, desde Pre-Classic hasta hoy.',
    card_java_title: 'Versiones Java',
    card_java_desc: 'Historial completo desde Indev hasta la ultima version.',
    card_bedrock_title: 'Versiones Bedrock',
    card_bedrock_desc: 'Todas las actualizaciones Bedrock/PE desde la 0.1.',
    card_editions_title: 'Ediciones',
    card_editions_desc: 'Consolas antiguas, portatiles, cada cliente oficial.',
    card_unofficial_title: 'No oficial',
    card_unofficial_desc: 'Proyectos de fans, creepypastas y creaciones comunitarias.',
    card_other_title: 'Otras experiencias',
    card_other_desc: 'Dungeons, Legends, Classic y mucho mas.',
    card_modding_title: 'Modding',
    card_modding_desc: 'Guias y recursos para todo lo relacionado con mods.',
    card_mods_title: 'Mods y hosts',
    card_mods_desc: 'Modrinth, CurseForge y los mejores mods.',
    stats_editions: 'Ediciones registradas',
    stats_versions: 'Versiones Java',
    stats_years: 'Anos de historia',
    about_strip_heading: 'Que es CommandBlock?',
    about_strip_p1: 'CommandBlock es una biblioteca open-source creada por fans dedicada a Minecraft. Desde los primeros builds Pre-Classic hasta los ultimos lanzamientos, este sitio lo cubre todo.',
    about_strip_p2: 'Construido con HTML, CSS y JavaScript puro. Ligero, portatil y siempre accesible. Sin anuncios, sin rastreo, solo informacion.',
    about_heading: 'Acerca de CommandBlock',
    about_p: 'CommandBlock es una biblioteca creada por fans sobre Minecraft, sin afiliacion con Mojang ni Microsoft.',
    about_creator_h: 'Acerca del creador',
    about_creator_p: 'Hecho por SSMG4. Entusiasta de Minecraft, archivista y desarrollador web.',
    about_contact: 'Contacto',
    about_project_h: 'Acerca del proyecto',
    about_started: 'Iniciado: 2025',
    about_goal: 'Objetivo: Ser la fuente de informacion mas completa sobre Minecraft',
    about_tech: 'Stack tecnologico: HTML, CSS, JavaScript',
    about_opensource: 'Codigo abierto!',
    about_mc_h: 'Acerca de Minecraft',
    about_mc_p: 'Minecraft es un juego sandbox creado por Markus "Notch" Persson. Visita el sitio oficial:',
    about_mojang_h: 'Acerca de Mojang/Microsoft',
    about_mojang_p1: 'Mojang Studios es el estudio sueco detras de Minecraft.',
    about_mojang_p2: 'Microsoft adquirio Mojang en 2014.',
    about_mojang_p3: 'Todas las marcas pertenecen a sus respectivos propietarios.',
    about_credits_h: 'Creditos y comunidad',
    about_credits_wiki: 'Wiki de Minecraft',
    about_credits_thanks: 'Un agradecimiento especial a la comunidad de Minecraft.',
    about_contribute_h: 'Contribuir',
    about_contribute_p: 'CommandBlock esta abierto a contribuciones. Abre un issue o envia un pull request. La ayuda con traducciones es especialmente bienvenida.',
    about_license_h: 'Licencia',
    about_license_p: 'CommandBlock se publica bajo la licencia MIT. Eres libre de reutilizar y ampliar este proyecto.',
    wiki_redirect: 'Redirigiendo al Wiki de Minecraft...',
    wiki_click: 'Si no eres redirigido automaticamente, haz clic aqui.',
  }
};

function applyTranslations(lang) {
  const t = translations[lang] || translations['en'];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
}

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
  document.querySelectorAll('.header-nav > a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && window.location.pathname.endsWith(href)) {
      link.style.borderBottom = '2px solid var(--color-accent)';
    }
  });
}

// ---- Init ----

window.addEventListener('DOMContentLoaded', () => {
  setLogo();
  initLogoLink();
  initDropdown();
  initHamburger();
  initTheme();
  initLanguage();
  highlightNav();
});
