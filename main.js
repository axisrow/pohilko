(() => {
  const LOCALE_STORAGE_KEY = "pohilko:locale";
  const SUPPORTED_LOCALES = ["ru", "en", "zh"];
  const PRIMARY_NAV = ["collection", "gallery", "process", "gold", "request"];
  const FOOTER_NAV = ["process", "gold", "collection", "gallery", "request"];
  const NAV_HREFS = {
    collection: "#collection",
    gallery: "#gallery",
    process: "#process",
    gold: "#gold",
    request: "#request"
  };
  const PROCESS_IMAGES = {
    handwork: "assets/process-handwork.webp",
    goldLeaf: "assets/process-gold-leaf.webp",
    detailControl: "assets/process-detail-control.webp"
  };
  const ZODIAC_IMAGES = {
    aries: "assets/zodiac/aries.webp",
    taurus: "assets/zodiac/taurus.webp",
    gemini: "assets/zodiac/gemini.webp",
    cancer: "assets/zodiac/cancer.webp",
    leo: "assets/zodiac/leo.webp",
    virgo: "assets/zodiac/virgo.webp",
    libra: "assets/zodiac/libra.webp",
    scorpio: "assets/zodiac/scorpio.webp",
    sagittarius: "assets/zodiac/sagittarius.webp",
    capricorn: "assets/zodiac/capricorn.webp",
    aquarius: "assets/zodiac/aquarius.webp",
    pisces: "assets/zodiac/pisces.webp"
  };
  const TRANSLATE_ICON = `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 5.5h8.5M8.2 3v2.5M10.8 5.5c-.7 2.1-2.3 4.2-5.2 6.6M6.2 8.2c1.1 1.5 2.4 2.7 4 3.6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13.2 20.5l1.1-2.8m0 0 2.3-5.9 2.3 5.9m-4.6 0h4.6M21 20.5l-1.1-2.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;

  const CONTENT = {
    locales: {
      ru: {
        shortLabel: "RU",
        label: "Русский",
        htmlLang: "ru",
        ogLocale: "ru_RU",
        meta: {
          title: "Скульптура в золоте — шоколадные скульптуры ручной работы",
          description: "Коллекционные шоколадные скульптуры ручной работы с покрытием из пищевого золота 24 карата."
        },
        brand: {
          aria: "Скульптура в золоте",
          title: "Скульптура в золоте",
          note: "Chocolate atelier"
        },
        nav: {
          aria: "Основная навигация",
          footerAria: "Разделы сайта",
          labels: {
            collection: "Коллекция",
            gallery: "Галерея",
            process: "Процесс",
            gold: "Золото 24К",
            request: "Заявка"
          }
        },
        header: {
          cta: "Запросить работу",
          languageAria: "Перевод",
          menuOpen: "Открыть меню",
          menuClose: "Закрыть меню"
        },
        hero: {
          eyebrow: "Пищевое золото 24 карата",
          title: "Скульптуры из шоколада в золоте",
          text: "Коллекционные десерты ручной работы с ювелирной детализацией и финальным покрытием из пищевого золота.",
          actions: [
            { href: "#request", label: "Запросить работу", primary: true },
            { href: "#process", label: "Смотреть процесс" }
          ],
          proofAria: "Ключевые особенности",
          proof: ["Ручная форма", "Контроль каждой детали", "Финальный слой 24К"]
        },
        statement: {
          aria: "Подход ателье",
          text: "Мы работаем с шоколадом так же точно, как ювелиры работают с золотом: форма, время и контроль решают всё."
        },
        process: {
          eyebrow: "Процесс",
          title: "Точность видна в поверхности",
          text: "Каждая работа проходит путь от пластики шоколадной формы до финального контроля рельефа. Золото не маскирует объект, а подчёркивает его скульптурность.",
          steps: [
            {
              number: "01",
              image: "handwork",
              alt: "Ручная работа над шоколадной скульптурой",
              title: "Ручная лепка",
              text: "Силуэт и рельеф собираются вручную, чтобы повтор не выглядел серийным."
            },
            {
              number: "02",
              image: "goldLeaf",
              alt: "Нанесение пищевого золота на шоколад",
              title: "Выдержка формы",
              text: "Шоколад стабилизируется до покрытия, чтобы золото легло ровно и сохранило фактуру."
            },
            {
              number: "03",
              image: "detailControl",
              alt: "Контроль детали готовой золотой скульптуры",
              title: "Финальный контроль",
              text: "Мастер проверяет грани, стыки и отражение света до передачи коллекционеру."
            }
          ]
        },
        gold: {
          eyebrow: "Золото 24К",
          title: "Финальный слой формы",
          text: "Мы используем пищевое золото не как декор ради блеска, а как последний материал скульптуры. Оно фиксирует рельеф, собирает свет и превращает шоколад в объект коллекционирования.",
          actions: [
            { href: "#request", label: "Заказать скульптуру", primary: true },
            { href: "#collection", label: "Обсудить коллекцию" }
          ]
        },
        collection: {
          eyebrow: "Коллекция",
          title: "Предмет, который держит паузу",
          text: "Лев, конь, птица или персональный символ создаются как центральный объект стола, подарка или закрытого события. Масштаб и пластика подбираются под повод, а не под каталог.",
          metricsAria: "Параметры работы",
          metrics: [
            { value: "24К", label: "пищевое золото" },
            { value: "1", label: "экземпляр — без серийных повторов" },
            { value: "12", label: "образов в коллекции «Зодиак»" }
          ]
        },
        gallery: {
          eyebrow: "Галерея",
          title: "Знаки зодиака в золоте",
          text: "Двенадцать образов созданы как коллекционные шоколадные скульптуры: каждый знак читается через форму, рельеф и работу света, без символов и лишних деталей.",
          items: [
            { slug: "aries", title: "Овен", alt: "Золотая шоколадная скульптура знака Овен" },
            { slug: "taurus", title: "Телец", alt: "Золотая шоколадная скульптура знака Телец" },
            { slug: "gemini", title: "Близнецы", alt: "Золотая шоколадная скульптура знака Близнецы" },
            { slug: "cancer", title: "Рак", alt: "Золотая шоколадная скульптура знака Рак" },
            { slug: "leo", title: "Лев", alt: "Золотая шоколадная скульптура знака Лев" },
            { slug: "virgo", title: "Дева", alt: "Золотая шоколадная скульптура знака Дева" },
            { slug: "libra", title: "Весы", alt: "Золотая шоколадная скульптура знака Весы" },
            { slug: "scorpio", title: "Скорпион", alt: "Золотая шоколадная скульптура знака Скорпион" },
            { slug: "sagittarius", title: "Стрелец", alt: "Золотая шоколадная скульптура знака Стрелец" },
            { slug: "capricorn", title: "Козерог", alt: "Золотая шоколадная скульптура знака Козерог" },
            { slug: "aquarius", title: "Водолей", alt: "Золотая шоколадная скульптура знака Водолей" },
            { slug: "pisces", title: "Рыбы", alt: "Золотая шоколадная скульптура знака Рыбы" }
          ]
        },
        request: {
          eyebrow: "Заявка",
          title: "Опишите будущую скульптуру",
          text: "Расскажите о поводе, желаемом образе и сроках — мастер вернётся с предложением формы, масштаба и стоимости. Пары строк достаточно, остальное обсудим лично.",
          form: {
            fields: [
              { name: "name", label: "Имя", control: "input", autocomplete: "name" },
              { name: "contact", label: "Контакт", control: "input", type: "text", placeholder: "Телефон, e-mail или Telegram" },
              { name: "brief", label: "Образ или повод", control: "textarea" }
            ],
            submit: "Подготовить заявку",
            note: "Данные останутся в браузере. Реальной отправки нет."
          }
        },
        footer: {
          copyright: "© 2026 Скульптура в золоте"
        },
        validation: {
          required: "Заполните поле.",
          contact: "Укажите телефон, e-mail или Telegram.",
          success: "Заявка подготовлена. Реальная отправка не выполнялась.",
          error: "Проверьте поля перед подготовкой заявки."
        }
      },
      en: {
        shortLabel: "EN",
        label: "English",
        htmlLang: "en",
        ogLocale: "en_US",
        meta: {
          title: "Sculpture in Gold — handmade chocolate sculptures",
          description: "Collectible handmade chocolate sculptures finished with edible 24-karat gold."
        },
        brand: {
          aria: "Sculpture in Gold",
          title: "Sculpture in Gold",
          note: "Chocolate atelier"
        },
        nav: {
          aria: "Primary navigation",
          footerAria: "Site sections",
          labels: {
            collection: "Collection",
            gallery: "Gallery",
            process: "Process",
            gold: "24K Gold",
            request: "Request"
          }
        },
        header: {
          cta: "Request a piece",
          languageAria: "Translation",
          menuOpen: "Open menu",
          menuClose: "Close menu"
        },
        hero: {
          eyebrow: "24-karat edible gold",
          title: "Chocolate sculptures in gold",
          text: "Handmade collectible desserts with jewel-like detailing and a final finish of edible gold.",
          actions: [
            { href: "#request", label: "Request a piece", primary: true },
            { href: "#process", label: "See the process" }
          ],
          proofAria: "Key features",
          proof: ["Hand-shaped form", "Every detail controlled", "Final 24K layer"]
        },
        statement: {
          aria: "Atelier approach",
          text: "We work with chocolate with the same precision jewelers bring to gold: form, timing and control decide everything."
        },
        process: {
          eyebrow: "Process",
          title: "Precision shows on the surface",
          text: "Each piece moves from sculpting the chocolate form to the final inspection of the relief. Gold does not hide the object; it emphasizes its sculptural character.",
          steps: [
            {
              number: "01",
              image: "handwork",
              alt: "Hand shaping a chocolate sculpture",
              title: "Hand sculpting",
              text: "The silhouette and relief are built by hand, so a repeated motif never feels mass-produced."
            },
            {
              number: "02",
              image: "goldLeaf",
              alt: "Applying edible gold to chocolate",
              title: "Form resting",
              text: "The chocolate stabilizes before gilding, letting the gold settle evenly and preserve the texture."
            },
            {
              number: "03",
              image: "detailControl",
              alt: "Inspecting the detail of a finished gold sculpture",
              title: "Final inspection",
              text: "The maker checks edges, joins and the reflection of light before the piece is handed to the collector."
            }
          ]
        },
        gold: {
          eyebrow: "24K Gold",
          title: "The final layer of form",
          text: "We use edible gold not as decoration for shine, but as the final material of the sculpture. It fixes the relief, gathers light and turns chocolate into a collectible object.",
          actions: [
            { href: "#request", label: "Order a sculpture", primary: true },
            { href: "#collection", label: "Discuss a collection" }
          ]
        },
        collection: {
          eyebrow: "Collection",
          title: "An object that holds the pause",
          text: "A lion, horse, bird or personal symbol is created as the central object for a table, gift or private event. Scale and shape are chosen for the occasion, not pulled from a catalogue.",
          metricsAria: "Work parameters",
          metrics: [
            { value: "24K", label: "edible gold" },
            { value: "1", label: "one-of-a-kind piece — no serial repeats" },
            { value: "12", label: "figures in the Zodiac collection" }
          ]
        },
        gallery: {
          eyebrow: "Gallery",
          title: "Zodiac signs in gold",
          text: "Twelve figures are created as collectible chocolate sculptures: each sign is read through form, relief and light, without symbols or extra details.",
          items: [
            { slug: "aries", title: "Aries", alt: "Golden chocolate sculpture of the Aries sign" },
            { slug: "taurus", title: "Taurus", alt: "Golden chocolate sculpture of the Taurus sign" },
            { slug: "gemini", title: "Gemini", alt: "Golden chocolate sculpture of the Gemini sign" },
            { slug: "cancer", title: "Cancer", alt: "Golden chocolate sculpture of the Cancer sign" },
            { slug: "leo", title: "Leo", alt: "Golden chocolate sculpture of the Leo sign" },
            { slug: "virgo", title: "Virgo", alt: "Golden chocolate sculpture of the Virgo sign" },
            { slug: "libra", title: "Libra", alt: "Golden chocolate sculpture of the Libra sign" },
            { slug: "scorpio", title: "Scorpio", alt: "Golden chocolate sculpture of the Scorpio sign" },
            { slug: "sagittarius", title: "Sagittarius", alt: "Golden chocolate sculpture of the Sagittarius sign" },
            { slug: "capricorn", title: "Capricorn", alt: "Golden chocolate sculpture of the Capricorn sign" },
            { slug: "aquarius", title: "Aquarius", alt: "Golden chocolate sculpture of the Aquarius sign" },
            { slug: "pisces", title: "Pisces", alt: "Golden chocolate sculpture of the Pisces sign" }
          ]
        },
        request: {
          eyebrow: "Request",
          title: "Describe the future sculpture",
          text: "Tell us about the occasion, desired image and timing. The maker will return with a proposal for form, scale and price. A few lines are enough; the rest can be discussed personally.",
          form: {
            fields: [
              { name: "name", label: "Name", control: "input", autocomplete: "name" },
              { name: "contact", label: "Contact", control: "input", type: "text", placeholder: "Phone, email or Telegram" },
              { name: "brief", label: "Image or occasion", control: "textarea" }
            ],
            submit: "Prepare request",
            note: "The data stays in your browser. No real submission is sent."
          }
        },
        footer: {
          copyright: "© 2026 Sculpture in Gold"
        },
        validation: {
          required: "Please fill out this field.",
          contact: "Enter a phone number, email or Telegram handle.",
          success: "The request is prepared. No real submission was sent.",
          error: "Check the fields before preparing the request."
        }
      },
      zh: {
        shortLabel: "中文",
        label: "简体中文",
        htmlLang: "zh-CN",
        ogLocale: "zh_CN",
        meta: {
          title: "金色雕塑 — 手工巧克力雕塑",
          description: "覆以24K食用金箔的收藏级手工巧克力雕塑。"
        },
        brand: {
          aria: "金色雕塑",
          title: "金色雕塑",
          note: "巧克力工坊"
        },
        nav: {
          aria: "主导航",
          footerAria: "网站栏目",
          labels: {
            collection: "系列",
            gallery: "图库",
            process: "工艺",
            gold: "24K金",
            request: "咨询"
          }
        },
        header: {
          cta: "咨询定制",
          languageAria: "翻译",
          menuOpen: "打开菜单",
          menuClose: "关闭菜单"
        },
        hero: {
          eyebrow: "24K食用金",
          title: "覆金巧克力雕塑",
          text: "手工制作的收藏级甜点，拥有珠宝般的细节，并以食用金完成最后一道表面。",
          actions: [
            { href: "#request", label: "咨询定制", primary: true },
            { href: "#process", label: "查看工艺" }
          ],
          proofAria: "核心特点",
          proof: ["手工塑形", "逐处细节把控", "最终24K金层"]
        },
        statement: {
          aria: "工坊理念",
          text: "我们对待巧克力，就像珠宝匠对待黄金：形态、时间和控制决定一切。"
        },
        process: {
          eyebrow: "工艺",
          title: "精度会显现在表面",
          text: "每件作品都从巧克力形体塑造走到浮雕细节的最终检查。金层不是遮盖对象，而是强调它的雕塑感。",
          steps: [
            {
              number: "01",
              image: "handwork",
              alt: "手工塑造巧克力雕塑",
              title: "手工塑形",
              text: "轮廓和浮雕由手工完成，让重复主题也不会显得像批量产品。"
            },
            {
              number: "02",
              image: "goldLeaf",
              alt: "在巧克力上覆以食用金",
              title: "形体稳定",
              text: "覆金前先让巧克力稳定，使金层均匀贴合并保留纹理。"
            },
            {
              number: "03",
              image: "detailControl",
              alt: "检查完成的金色雕塑细节",
              title: "最终检查",
              text: "交付收藏者之前，制作者会检查边缘、衔接和光线反射。"
            }
          ]
        },
        gold: {
          eyebrow: "24K金",
          title: "形体的最后一层",
          text: "我们使用食用金，不是为了单纯装饰光泽，而是把它作为雕塑的最后一种材料。它固定浮雕、聚拢光线，并让巧克力成为可收藏的对象。",
          actions: [
            { href: "#request", label: "订制雕塑", primary: true },
            { href: "#collection", label: "讨论系列" }
          ]
        },
        collection: {
          eyebrow: "系列",
          title: "能让时间停顿的对象",
          text: "狮子、马、鸟或个人符号，都可以成为餐桌、礼物或私密活动的中心作品。尺度和造型按场合选择，而不是从目录中套用。",
          metricsAria: "作品参数",
          metrics: [
            { value: "24K", label: "食用金" },
            { value: "1", label: "独一件作品，不做批量复刻" },
            { value: "12", label: "「十二星座」系列形象" }
          ]
        },
        gallery: {
          eyebrow: "图库",
          title: "金色十二星座",
          text: "十二个形象被制作成收藏级巧克力雕塑：每个星座都通过形体、浮雕和光线被读出，不依赖符号或多余细节。",
          items: [
            { slug: "aries", title: "白羊座", alt: "白羊座金色巧克力雕塑" },
            { slug: "taurus", title: "金牛座", alt: "金牛座金色巧克力雕塑" },
            { slug: "gemini", title: "双子座", alt: "双子座金色巧克力雕塑" },
            { slug: "cancer", title: "巨蟹座", alt: "巨蟹座金色巧克力雕塑" },
            { slug: "leo", title: "狮子座", alt: "狮子座金色巧克力雕塑" },
            { slug: "virgo", title: "处女座", alt: "处女座金色巧克力雕塑" },
            { slug: "libra", title: "天秤座", alt: "天秤座金色巧克力雕塑" },
            { slug: "scorpio", title: "天蝎座", alt: "天蝎座金色巧克力雕塑" },
            { slug: "sagittarius", title: "射手座", alt: "射手座金色巧克力雕塑" },
            { slug: "capricorn", title: "摩羯座", alt: "摩羯座金色巧克力雕塑" },
            { slug: "aquarius", title: "水瓶座", alt: "水瓶座金色巧克力雕塑" },
            { slug: "pisces", title: "双鱼座", alt: "双鱼座金色巧克力雕塑" }
          ]
        },
        request: {
          eyebrow: "咨询",
          title: "描述未来的雕塑",
          text: "告诉我们场合、想要的形象和时间安排。制作者会返回关于形体、尺度和价格的方案。几行文字就够，其余可以再单独沟通。",
          form: {
            fields: [
              { name: "name", label: "姓名", control: "input", autocomplete: "name" },
              { name: "contact", label: "联系方式", control: "input", type: "text", placeholder: "电话、邮箱或 Telegram" },
              { name: "brief", label: "造型或场合", control: "textarea" }
            ],
            submit: "准备咨询",
            note: "数据只会保留在浏览器中，不会真的发送。"
          }
        },
        footer: {
          copyright: "© 2026 金色雕塑"
        },
        validation: {
          required: "请填写此字段。",
          contact: "请填写电话、邮箱或 Telegram。",
          success: "咨询内容已准备好。不会真的发送。",
          error: "准备咨询前请检查字段。"
        }
      }
    }
  };

  const state = {
    locale: getInitialLocale(),
    formValues: {},
    invalidFields: new Set(),
    formStatus: "idle"
  };

  const qs = (selector) => document.querySelector(selector);
  const qsa = (selector) => Array.from(document.querySelectorAll(selector));

  function getInitialLocale() {
    const params = new URLSearchParams(window.location.search);
    const urlLocale = normalizeLocale(params.get("lang"));
    if (urlLocale) return urlLocale;

    try {
      const storedLocale = normalizeLocale(window.localStorage.getItem(LOCALE_STORAGE_KEY));
      if (storedLocale) return storedLocale;
    } catch (_error) {
      // Storage may be unavailable in private or file contexts.
    }

    const browserLocale = normalizeLocale(window.navigator.language);
    return browserLocale || "ru";
  }

  function normalizeLocale(value) {
    if (!value) return "";
    const locale = value.toLowerCase();
    if (SUPPORTED_LOCALES.includes(locale)) return locale;
    if (locale.startsWith("zh")) return "zh";
    if (locale.startsWith("en")) return "en";
    if (locale.startsWith("ru")) return "ru";
    return "";
  }

  function localeData() {
    return CONTENT.locales[state.locale] || CONTENT.locales.ru;
  }

  function setText(selector, value) {
    const node = qs(selector);
    if (node) node.textContent = value;
  }

  function setMeta(selector, value) {
    const node = qs(selector);
    if (node) node.setAttribute("content", value);
  }

  function cloneTemplate(id) {
    return document.getElementById(id).content.firstElementChild.cloneNode(true);
  }

  function renderPage() {
    const data = localeData();

    renderMeta(data);
    renderHeader(data);
    renderHero(data);
    renderStatement(data);
    renderProcess(data);
    renderGold(data);
    renderCollection(data);
    renderGallery(data);
    renderRequest(data);
    renderFooter(data);
  }

  function renderMeta(data) {
    document.documentElement.lang = data.htmlLang;
    document.documentElement.dir = "ltr";
    document.title = data.meta.title;
    setMeta('meta[name="description"]', data.meta.description);
    setMeta('meta[property="og:title"]', data.meta.title);
    setMeta('meta[property="og:description"]', data.meta.description);
    setMeta('meta[property="og:locale"]', data.ogLocale);
    setMeta('meta[name="twitter:title"]', data.meta.title);
    setMeta('meta[name="twitter:description"]', data.meta.description);
  }

  function renderHeader(data) {
    const brandLink = qs("#brand-link");
    if (brandLink) brandLink.setAttribute("aria-label", data.brand.aria);

    setText("#brand-title", data.brand.title);
    setText("#brand-note", data.brand.note);

    const primaryNav = qs("#primary-nav");
    if (primaryNav) {
      renderPrimaryNav(primaryNav, data);
    }

    const headerLocaleMenu = qs("#header-locale-menu");
    if (headerLocaleMenu) renderLocaleMenu(headerLocaleMenu, data, "header");

    const headerCta = qs("#header-cta");
    if (headerCta) headerCta.textContent = data.header.cta;

    syncNavToggleLabel();
  }

  function renderPrimaryNav(container, data) {
    container.setAttribute("aria-label", data.nav.aria);

    const links = document.createElement("div");
    links.className = "nav-links";
    PRIMARY_NAV.forEach((key) => {
      const link = cloneTemplate("nav-link-template");
      link.href = NAV_HREFS[key];
      link.textContent = data.nav.labels[key];
      links.append(link);
    });

    const extras = document.createElement("div");
    extras.className = "menu-extras";

    const menuCta = cloneTemplate("action-button-template");
    menuCta.href = "#request";
    menuCta.className = "button button-primary menu-cta";
    menuCta.textContent = data.header.cta;

    extras.append(menuCta);
    container.replaceChildren(links, extras);
  }

  function renderNav(container, order, labels) {
    const fragment = document.createDocumentFragment();
    order.forEach((key) => {
      const link = cloneTemplate("nav-link-template");
      link.href = NAV_HREFS[key];
      link.textContent = labels[key];
      fragment.append(link);
    });
    container.replaceChildren(fragment);
  }

  function renderLocaleMenu(container, data, scope) {
    const controlsId = `${scope}-locale-options`;
    const toggle = document.createElement("button");
    toggle.className = "locale-toggle";
    toggle.type = "button";
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-haspopup", "menu");
    toggle.setAttribute("aria-controls", controlsId);
    toggle.setAttribute("aria-label", data.header.languageAria);
    toggle.title = data.header.languageAria;
    toggle.innerHTML = TRANSLATE_ICON;

    const options = document.createElement("div");
    options.className = "locale-options";
    options.id = controlsId;
    options.setAttribute("role", "menu");
    options.setAttribute("aria-label", data.header.languageAria);

    SUPPORTED_LOCALES.forEach((locale) => {
      const localeConfig = CONTENT.locales[locale];
      const option = document.createElement("button");
      option.className = "locale-option";
      option.type = "button";
      option.dataset.locale = locale;
      option.setAttribute("role", "menuitemradio");
      option.setAttribute("aria-checked", String(locale === state.locale));

      const shortLabel = document.createElement("span");
      shortLabel.className = "locale-option-short";
      shortLabel.textContent = localeConfig.shortLabel;

      const name = document.createElement("span");
      name.className = "locale-option-name";
      name.textContent = localeConfig.label;

      option.append(shortLabel, name);
      options.append(option);
    });

    container.replaceChildren(toggle, options);
  }

  function renderHero(data) {
    setText("#hero-eyebrow", data.hero.eyebrow);
    setText("#hero-title", data.hero.title);
    setText("#hero-text", data.hero.text);

    renderActions(qs("#hero-actions"), data.hero.actions);

    const proof = qs("#hero-proof");
    if (proof) {
      proof.setAttribute("aria-label", data.hero.proofAria);
      const fragment = document.createDocumentFragment();
      data.hero.proof.forEach((item) => {
        const node = document.createElement("span");
        node.className = "proof-item";
        node.textContent = item;
        fragment.append(node);
      });
      proof.replaceChildren(fragment);
    }
  }

  function renderActions(container, actions) {
    if (!container) return;
    const fragment = document.createDocumentFragment();
    actions.forEach((action) => {
      const link = cloneTemplate("action-button-template");
      link.href = action.href;
      link.className = action.primary ? "button button-primary" : "button";
      link.textContent = action.label;
      fragment.append(link);
    });
    container.replaceChildren(fragment);
  }

  function renderStatement(data) {
    const statement = qs("#statement");
    if (statement) statement.setAttribute("aria-label", data.statement.aria);
    setText("#statement-text", data.statement.text);
  }

  function renderProcess(data) {
    setText("#process-eyebrow", data.process.eyebrow);
    setText("#process-title", data.process.title);
    setText("#process-text", data.process.text);

    const grid = qs("#process-grid");
    if (!grid) return;

    const fragment = document.createDocumentFragment();
    data.process.steps.forEach((step) => {
      const card = cloneTemplate("process-card-template");
      const image = card.querySelector("img");
      image.src = PROCESS_IMAGES[step.image];
      image.alt = step.alt;
      card.querySelector(".process-kicker").textContent = step.number;
      card.querySelector("h3").textContent = step.title;
      card.querySelector(".process-copy").textContent = step.text;
      fragment.append(card);
    });
    grid.replaceChildren(fragment);
  }

  function renderGold(data) {
    setText("#gold-eyebrow", data.gold.eyebrow);
    setText("#gold-title", data.gold.title);
    setText("#gold-text", data.gold.text);
    renderActions(qs("#gold-actions"), data.gold.actions);
  }

  function renderCollection(data) {
    setText("#collection-eyebrow", data.collection.eyebrow);
    setText("#collection-title", data.collection.title);
    setText("#collection-text", data.collection.text);

    const metrics = qs("#metrics-grid");
    if (!metrics) return;

    metrics.setAttribute("aria-label", data.collection.metricsAria);
    const fragment = document.createDocumentFragment();
    data.collection.metrics.forEach((metric) => {
      const node = cloneTemplate("metric-template");
      node.querySelector("strong").textContent = metric.value;
      node.querySelector("span").textContent = metric.label;
      fragment.append(node);
    });
    metrics.replaceChildren(fragment);
  }

  function renderGallery(data) {
    setText("#gallery-eyebrow", data.gallery.eyebrow);
    setText("#gallery-title", data.gallery.title);
    setText("#gallery-text", data.gallery.text);

    const grid = qs("#gallery-grid");
    if (!grid) return;

    const fragment = document.createDocumentFragment();
    data.gallery.items.forEach((item) => {
      const card = cloneTemplate("gallery-card-template");
      const image = card.querySelector("img");
      image.src = ZODIAC_IMAGES[item.slug];
      image.alt = item.alt;
      card.querySelector("figcaption").textContent = item.title;
      fragment.append(card);
    });
    grid.replaceChildren(fragment);
  }

  function renderRequest(data) {
    setText("#request-eyebrow", data.request.eyebrow);
    setText("#request-title", data.request.title);
    setText("#request-text", data.request.text);
    renderForm(data);
  }

  function renderForm(data) {
    const form = qs("#request-form");
    if (!form) return;

    const fragment = document.createDocumentFragment();
    data.request.form.fields.forEach((field) => {
      const node = cloneTemplate("form-field-template");
      const label = node.querySelector("label");
      const input = node.querySelector("input");
      const textarea = node.querySelector("textarea");
      const error = node.querySelector(".field-error");
      const control = field.control === "textarea" ? textarea : input;
      const unused = field.control === "textarea" ? input : textarea;

      unused.remove();
      label.setAttribute("for", field.name);
      label.textContent = field.label;
      control.id = field.name;
      control.name = field.name;
      control.required = true;
      control.value = state.formValues[field.name] || "";
      if (field.type) control.type = field.type;
      if (field.autocomplete) control.autocomplete = field.autocomplete;
      if (field.placeholder) control.placeholder = field.placeholder;
      error.dataset.errorFor = field.name;

      control.addEventListener("input", () => {
        state.formValues[field.name] = control.value;
        if (control.getAttribute("aria-invalid") === "true") validateField(control);
      });

      fragment.append(node);
    });

    const submit = document.createElement("button");
    submit.className = "button button-primary";
    submit.type = "submit";
    submit.textContent = data.request.form.submit;
    fragment.append(submit);

    const note = document.createElement("p");
    note.className = "form-note";
    note.setAttribute("role", "status");
    note.setAttribute("aria-live", "polite");
    fragment.append(note);

    form.replaceChildren(fragment);
    form.addEventListener("submit", onFormSubmit, { once: true });

    state.invalidFields.forEach((name) => {
      const control = form.elements[name];
      if (control) validateField(control);
    });
    updateFormNote();
  }

  function onFormSubmit(event) {
    event.preventDefault();
    captureFormState();
    const isValid = validateAllFields();
    state.formStatus = isValid ? "success" : "error";
    updateFormNote();

    const form = qs("#request-form");
    if (form) form.addEventListener("submit", onFormSubmit, { once: true });
  }

  function validateAllFields() {
    const form = qs("#request-form");
    if (!form) return true;
    return Array.from(form.querySelectorAll("input, textarea")).map(validateField).every(Boolean);
  }

  function validateField(field) {
    const data = localeData();
    const value = field.value.trim();
    let message = "";

    if (!value) {
      message = data.validation.required;
    } else if (field.name === "contact" && value.length < 5) {
      message = data.validation.contact;
    }

    setFieldError(field, message);
    if (message) {
      state.invalidFields.add(field.name);
    } else {
      state.invalidFields.delete(field.name);
    }

    return !message;
  }

  function setFieldError(field, message) {
    const form = qs("#request-form");
    const error = form ? form.querySelector(`[data-error-for="${field.name}"]`) : null;
    if (error) error.textContent = message;
    field.setAttribute("aria-invalid", message ? "true" : "false");
  }

  function updateFormNote() {
    const data = localeData();
    const note = qs(".form-note");
    if (!note) return;

    note.classList.toggle("success", state.formStatus === "success");
    if (state.formStatus === "success") {
      note.textContent = data.validation.success;
    } else if (state.formStatus === "error") {
      note.textContent = data.validation.error;
    } else {
      note.textContent = data.request.form.note;
    }
  }

  function renderFooter(data) {
    setText("#footer-copyright", data.footer.copyright);

    const footerNav = qs("#footer-nav");
    if (footerNav) {
      footerNav.setAttribute("aria-label", data.nav.footerAria);
      renderNav(footerNav, FOOTER_NAV, data.nav.labels);
    }
  }

  function syncNavToggleLabel() {
    const header = qs(".site-header");
    const navToggle = qs(".nav-toggle");
    if (!header || !navToggle) return;

    const data = localeData();
    const isOpen = header.classList.contains("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? data.header.menuClose : data.header.menuOpen);
  }

  function setNavOpen(open) {
    const header = qs(".site-header");
    if (!header) return;
    header.classList.toggle("nav-open", open);
    if (!open) closeLocaleMenus();
    syncNavToggleLabel();
  }

  function setLocaleMenuOpen(menu, open) {
    if (!menu) return;
    menu.classList.toggle("locale-open", open);
    const toggle = menu.querySelector(".locale-toggle");
    if (toggle) toggle.setAttribute("aria-expanded", String(open));
  }

  function closeLocaleMenus(except = null) {
    qsa(".locale-menu.locale-open").forEach((menu) => {
      if (menu !== except) setLocaleMenuOpen(menu, false);
    });
  }

  function captureFormState() {
    const form = qs("#request-form");
    if (!form) return;

    form.querySelectorAll("input, textarea").forEach((field) => {
      state.formValues[field.name] = field.value;
      if (field.getAttribute("aria-invalid") === "true") {
        state.invalidFields.add(field.name);
      }
    });
  }

  function setLocale(locale) {
    const normalized = normalizeLocale(locale);
    if (!normalized || normalized === state.locale) return;

    captureFormState();
    state.locale = normalized;
    persistLocale(normalized);
    updateUrlLocale(normalized);
    renderPage();
  }

  function persistLocale(locale) {
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch (_error) {
      // Storage may be unavailable in private or file contexts.
    }
  }

  function updateUrlLocale(locale) {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", locale);
      window.history.replaceState({}, "", url);
    } catch (_error) {
      // Some embedded file contexts may reject history updates.
    }
  }

  function bindStaticEvents() {
    const navToggle = qs(".nav-toggle");
    const siteNav = qs("#primary-nav");

    if (navToggle) {
      navToggle.addEventListener("click", () => {
        const header = qs(".site-header");
        setNavOpen(!header.classList.contains("nav-open"));
      });
    }

    if (siteNav) {
      siteNav.addEventListener("click", (event) => {
        if (event.target.closest("a")) setNavOpen(false);
      });
    }

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setNavOpen(false);
    });

    document.addEventListener("click", (event) => {
      const localeToggle = event.target.closest(".locale-toggle");
      if (localeToggle) {
        const menu = localeToggle.closest(".locale-menu");
        const shouldOpen = !menu.classList.contains("locale-open");
        closeLocaleMenus(menu);
        setLocaleMenuOpen(menu, shouldOpen);
        return;
      }

      const localeOption = event.target.closest(".locale-option");
      if (localeOption) {
        setLocale(localeOption.dataset.locale);
        closeLocaleMenus();
        return;
      }

      closeLocaleMenus();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderPage();
    persistLocale(state.locale);
    bindStaticEvents();
  });
})();
