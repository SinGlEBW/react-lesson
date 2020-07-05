const ADD_PRODUCT = "ADD_PRODUCT";
const SHOW_PRODUCT = "SHOW_PRODUCT";
const SET_PRODUCT_MENU = "SET_PRODUCT_MENU";

let submenu = {
  ptf: [
    {
      id: 1,
      title: { phone: "Смартфоны и гаджеты" },
      link: [
        { id: 1.1, name: "Смартфоны", src: "/image/phone/HUAWEI_Y7_2019.jpg" },
        {
          id: 1.2,
          name: "Смарт часы и браслеты",
          src: "/image/phone/Honor_20_Lite.png",
        },
        {
          id: 1.3,
          name: "Сотовые телефоны",
          src: "/image/phone/Xiaomi_redmi_note-7_Pro.jpg",
        },
      ],
    },
    {
      id: 2,
      title: { tablet: "Планшеты, электронные книги" },
      link: [
        { id: 2.1, name: "Планшеты", src: "/image/phone/HUAWEI_Y7_2019.jpg" },
        {
          id: 2.2,
          name: "Электронные книги",
          src: "/image/phone/Honor_20_Lite.png",
        },
        {
          id: 2.3,
          name: "Аксессуары для планшетов",
          src: "/image/phone/Xiaomi_redmi_note-7_Pro.jpg",
        },
      ],
    },
    {
      id: 3,
      title: { photoEquipment: "Фототехника" },
      link: [
        {
          id: 3.1,
          name: "Фотоаппараты",
          src: "/image/phone/HUAWEI_Y7_2019.jpg",
        },
        {
          id: 3.2,
          name: "Экшн-камеры и аксессуары",
          src: "/image/phone/Honor_20_Lite.png",
        },
        {
          id: 3.3,
          name: "Видеокамеры",
          src: "/image/phone/Xiaomi_redmi_note-7_Pro.jpg",
        },
      ],
    },
  ],
  pc: [
    {
      id: 1,
      title: { computers: "Компьютеры ноутбуки и ПО" },
      link: [
        {
          id: 2.1,
          name: "Системные блоки",
          src: "/image/phone/HUAWEI_Y7_2019.jpg",
        },
        { id: 2.2, name: "Ноутбуки", src: "/image/phone/Honor_20_Lite.png" },
        {
          id: 2.3,
          name: "Моноблоки",
          src: "/image/phone/Xiaomi_redmi_note-7_Pro.jpg",
        },
      ],
    },
    {
      id: 2,
      title: { parts: "Комплектующие для ПК" },
      link: [
        { id: 2.1, name: "Процессоры", src: "/image/phone/HUAWEI_Y7_2019.jpg" },
        {
          id: 2.2,
          name: "Материнские платы",
          src: "/image/phone/Honor_20_Lite.png",
        },
        {
          id: 2.3,
          name: "Видеокарты",
          src: "/image/phone/Xiaomi_redmi_note-7_Pro.jpg",
        },
      ],
    },
    {
      id: 3,
      title: { periphery: "Периферия и Аксессуары" },
      link: [
        { id: 3.1, name: "Мониторы", src: "/image/phone/HUAWEI_Y7_2019.jpg" },
        { id: 3.2, name: "Клавиатуры", src: "/image/phone/Honor_20_Lite.png" },
        {
          id: 3.3,
          name: "Мыши",
          src: "/image/phone/Xiaomi_redmi_note-7_Pro.jpg",
        },
      ],
    },
  ],
  tvAudioVideo: [
    {
      id: 1,
      title: { tv: "Телевизоры и Аксессуары" },
      link: [
        { id: 3.1, name: "Телевизоры", src: "/image/phone/HUAWEI_Y7_2019.jpg" },
        {
          id: 3.2,
          name: "Кронштейны для телевизоров",
          src: "/image/phone/Honor_20_Lite.png",
        },
        {
          id: 3.3,
          name: "Тумбы и стойки для TV",
          src: "/image/phone/Xiaomi_redmi_note-7_Pro.jpg",
        },
      ],
    },
    {
      id: 2,
      title: { hobbies: "Игры и хобби" },
      link: [
        { id: 2.1, name: "Видеоигры", src: "/image/phone/HUAWEI_Y7_2019.jpg" },
        {
          id: 2.2,
          name: "Microsoft Xbox",
          src: "/image/phone/Honor_20_Lite.png",
        },
        {
          id: 2.3,
          name: "Play Station",
          src: "/image/phone/Xiaomi_redmi_note-7_Pro.jpg",
        },
      ],
    },
    {
      id: 3,
      title: { audioEquipment: "Аудиотехника" },
      link: [
        {
          id: 3.1,
          name: "Наушники и гарнитуры",
          src: "/image/phone/HUAWEI_Y7_2019.jpg",
        },
        {
          id: 3.2,
          name: "Домашняя акустика",
          src: "/image/phone/Honor_20_Lite.png",
        },
        {
          id: 3.3,
          name: "Портативная акустика",
          src: "/image/phone/Xiaomi_redmi_note-7_Pro.jpg",
        },
      ],
    },
  ],
  accessory: [
    {
      id: 1,
      title: { forMobileDevices: "Для мобильных устройств" },
      link: [
        {
          id: 4.1,
          name: "Наушники и гарнитуры",
          src: "/image/phone/HUAWEI_Y7_2019.jpg",
        },
        { id: 4.2, name: "Чехлы", src: "/image/phone/Honor_20_Lite.png" },
        {
          id: 4.3,
          name: "Защитные плёнки и стёкла",
          src: "/image/phone/Xiaomi_redmi_note-7_Pro.jpg",
        },
      ],
    },
    {
      id: 2,
      title: { forComputersAndLaptops: "Для компьютеров и ноутбуков" },
      link: [
        {
          id: 2.1,
          name: "USB флешки и жесткие диски",
          src: "/image/phone/HUAWEI_Y7_2019.jpg",
        },
        {
          id: 2.2,
          name: "Сумки и рюкзаки для ноутбуков",
          src: "/image/phone/Honor_20_Lite.png",
        },
        {
          id: 2.3,
          name: "Манипуляторы и аксессуары",
          src: "/image/phone/Xiaomi_redmi_note-7_Pro.jpg",
        },
      ],
    },
    {
      id: 3,
      title: { forHomeAppliances: "Для бытовой техники" },
      link: [
        {
          id: 3.1,
          name: "Для пылесосов",
          src: "/image/phone/HUAWEI_Y7_2019.jpg",
        },
        {
          id: 3.2,
          name: "Для ухода за одеждой",
          src: "/image/phone/Honor_20_Lite.png",
        },
        {
          id: 3.3,
          name: "Для приготовления напитков",
          src: "/image/phone/Xiaomi_redmi_note-7_Pro.jpg",
        },
      ],
    },
  ],
};

let products = {
  menu: [
    {
      id: 1,
      name: { phone: "Смартфоны и гаджеты" },
      src: "/image/icons/mobile.svg",
      submenu: submenu.ptf,
    },
    {
      id: 2,
      name: { accessory: "Аксессуары" },
      src: "/image/icons/tablet.svg",
      submenu: submenu.accessory,
    },
    {
      id: 3,
      name: { computers: "Компьютеры" },
      src: "/image/icons/monitor.svg",
      submenu: submenu.pc,
    },
    {
      id: 4,
      name: { television: "ТВ и развлечения" },
      src: "/image/icons/laptop.svg",
      submenu: submenu.tvAudioVideo,
    },
  ],

  phone: [
    { id: 1, name: "Huawei", src: "/image/phone/HUAWEI_Y7_2019.jpg" },
    { id: 2, name: "Honor", src: "/image/phone/Honor_20_Lite.png" },
    { id: 3, name: "Xiaomi", src: "/image/phone/Xiaomi_redmi_note-7_Pro.jpg" },
  ],
  tablet: [
    { id: 1, name: "ASUS" },
    { id: 2, name: "Cube" },
    { id: 3, name: "Acer" },
  ],
  phoneFILTER: [
    { id: 1, name: "Huawei", src: "./image/phone/HUAWEI_Y7_2019.jpg" },
  ],
};
export const productReducer = (stateProducts = products, action) => {
  let searchProducts = (nameProducts) => {
    return {
      ...stateProducts,
      phoneFILTER: stateProducts.phone.map((item) => {
        if (item.name === nameProducts) return { ...item };
      }),
    };
  };
  switch (action.type) {
    case ADD_PRODUCT:
      stateProducts.setText = action.text;
      return stateProducts;

    case SHOW_PRODUCT:
      return searchProducts(action.name);
    case SET_PRODUCT_MENU:
      return {
        ...stateProducts, [action.menuList]: action.menuList
      };

    default:
      return stateProducts;
  }
};

export const inProductsAction = (text) => ({ type: ADD_PRODUCT, text });
export const showProductsAction = (text) => ({ type: SHOW_PRODUCT, text });
export const setProductMenu = (name, data) => ({ type: SET_PRODUCT_MENU, name, data });

/*
  Reducer - это чистая функция которая принимает старый state и action, если надо модифицирует работая 
  с копией и возвращает эту копию state
  Что бы изменить в массиве лишь один элемент, то по массиву можно пробежаться найти нужный
  элемент и заменить. Не забываем что объекты передаются ссылками, а примитивы копируются.
  Так же 2 одинаковых свойства заменяют друг друга

  На уровне контейнера мы всегда заполняем данными функцию action и передаём её в dispatch 
*/
