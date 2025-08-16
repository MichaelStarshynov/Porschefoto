const cars = [
  {
    name: "Porsche Taycan",
    image: "https://i.postimg.cc/SRWCVTGw/e1849bfa-ec4c-4f2b-aca5-76cf490089a5.jpg",
    details: "The Porsche Taycan is a fully electric luxury sports car made by Porsche. It was first introduced in 2019 as Porsche’s answer to the future of electric driving. The Taycan has a sleek, aerodynamic design and offers incredible acceleration, going from 0 to 100 km/h in under 3 seconds. It runs on powerful electric motors and has a high-tech battery that provides a long driving range. The Taycan proves that electric cars can be both fast and exciting, without any emissions.",
    extraImg: [
      "https://i.postimg.cc/Nf76DQvj/IMG-20250717-161620.jpg"
    ]
  },
  {
    name: "Custom Porsche Panamera",
    image: "https://i.postimg.cc/QtG2vV3v/b6cc06cd-d336-4112-a88f-3b68a3297b43.jpg",
    details: "The Porsche Panamera is a luxury sports sedan that combines high performance with sophisticated design. It offers a range of powerful engines, including hybrid options, with top speeds reaching up to 325 km/h. The interior is equipped with advanced technology and provides a spacious, high-end experience for both driver and passengers. Produced in Germany since 2009, the Panamera has evolved through three generations. Recently, one Panamera reached a speed of 321 km/h on the German autobahn, far exceeding typical speed limits.",
    extraImg: [
      "https://i.postimg.cc/jjK69r1Z/69039366-ecbc-4d9b-ad72-043798c4c988.jpg",
      "https://i.postimg.cc/44M6GcMK/bfa759a7-ca9c-422c-8383-8cd7eb6eb0ec.jpg"
    ]
  },
  {
    name: "Porsche Panamera",
    image: "https://i.postimg.cc/nccVyj3C/927da486-0c77-49bc-b0a7-87216567ac0a.jpg",
    details: "The black Porsche Panamera in the photo exudes elegance and power. Its sleek, aerodynamic design and bold front end make it instantly recognizable. Large alloy wheels and signature headlights highlight its sporty character. Sunlight reflecting off the body emphasizes the car’s luxurious finish. This Panamera perfectly blends performance with prestige, standing out even when parked.",
    extraImg: [
      "https://i.postimg.cc/02KygKRy/999ff8a9-d2d5-40f7-bf27-a40170fd6e5d.jpg",
       "https://i.postimg.cc/qRkWNnhK/422d882d-4995-4f8b-853e-31e4771cc83b.jpg",
       "https://i.postimg.cc/xCTFf2hy/bbf5ccbd-b647-4b96-b44c-339aed651966.jpg"
    ]
  },
  {
    name: "Porsche Cayenne",
    image: "https://i.postimg.cc/Cxv69HwD/1000045155.jpg",
    details: "The Porsche Cayenne is a luxury SUV that combines sporty performance with everyday practicality. It features powerful engine options, including turbocharged V6s, V8s, and plug-in hybrids. With sharp handling and a refined interior, it delivers a true Porsche driving experience. The Cayenne accelerates quickly and offers advanced technology and safety features. It’s a versatile choice for drivers who want both comfort and excitement.",
    extraImg: [
      "https://i.postimg.cc/Z5r3SMtn/330b5350-5890-441c-9474-eaeed1f1a248.jpg",
      "https://i.postimg.cc/qMqKj8DW/0.jpg",
      "https://i.postimg.cc/ZKXWHXdy/e04cfc6c-928f-4c41-a1d8-0c5c26cb7b96.jpg"
    ]
  },
  {
    name: "Porsche 911 Carrera S",
    image: "https://i.postimg.cc/52YQYkGR/0.jpg",
    details: "Porsche 911 Carrera S is a perfect blend of everyday comfort and sports car performance. It features a 3.0-liter twin-turbo boxer engine delivering 480 horsepower and accelerating from 0 to 100 km/h in just 3.3 seconds. The sleek design, wide stance, and signature headlights give it a timeless yet aggressive look. Inside, the cabin offers advanced tech, premium materials, and a driver-focused layout. Whether on winding roads or city streets, the Carrera S delivers precision, excitement, and unmistakable Porsche character.",
    extraImg: [
      "https://i.postimg.cc/BbbnWjfV/0.jpg",
      "https://i.postimg.cc/YS72rnwg/4f6ed8d1-eb04-477b-b820-9b09f08139c3.jpg",
      "https://i.postimg.cc/7Z0Yyvjw/f3644abc-f4f9-409e-aef0-f1dc6f22151f.jpg"
    ]
  },
  {
    name: "Porsche Macan",
    image: "https://i.postimg.cc/xd4PL0mb/515125fb-2d7f-4592-a3bc-818e142bf47a.jpg",
    details: "The Porsche Macan is a compact luxury SUV that blends everyday practicality with true sports car performance. Originally launched in 2014, it quickly became Porsche’s best-selling model worldwide. The Macan offers a range of powerful engines, including turbocharged V6s and fully electric variants, with acceleration as quick as 3.3 seconds from 0 to 100 km/h. Its sleek, coupe-like design and precise handling deliver a dynamic driving experience. Inside, the Macan features premium materials, advanced infotainment, and a driver-focused layout that reflects Porsche’s racing heritage.",
  extraImg: [
   "https://i.postimg.cc/vZP7dQ3S/59cfe1c0-c3fe-456b-8246-d1f9dea2f9a0.jpg"
  ]
  
  
  
  },
  
];

// Создаём заголовок
function createSection(tag, id, text) {
  const el = document.createElement(tag);
  if (id) el.id = id;
  if (text) el.textContent = text;
  document.body.appendChild(el);
  return el;
}

createSection('h1', null, "The World of Porsche");

// Контейнер для контента
const content = document.createElement('div');
content.id = 'content';
document.body.appendChild(content);

// Страницы
const pages = {
  home: {
    title: "Welcome at the world of Porsche!",
    text: 'Thism site is going about collection of fotos, where you can fin me and the porsche car.'
  },
  gallery: {
    title: "Porsche foto's:"
  },
  about: {
    title: "This site is made to show growing collection of my photos with Porsche",
    text: 'More about my you can find here'
  }
};

// Навигация
const nav = document.createElement('nav');
nav.id = 'nav';
document.body.insertBefore(nav, content);

// Кнопки навигации
for (let key in pages) {
  const btn = document.createElement('button');
  btn.textContent = key.charAt(0).toUpperCase() + key.slice(1);
  btn.className = 'nav-btn';
  btn.onclick = () => showPage(key);
  nav.appendChild(btn);
}

let previousPage = 'home';

function showPage(key) {
  const page = pages[key];
  previousPage = key;
  content.style.opacity = 0;

  setTimeout(() => {
    content.innerHTML = `<h1>${page.title}</h1>`;

    if (page.text) {
      const textBlock = document.createElement('p');
      textBlock.className = 'page-text';
      textBlock.innerHTML = page.text;
      content.appendChild(textBlock);
    }

    if (key === 'gallery') {
      const galleryDiv = document.createElement('div');
      galleryDiv.className = 'gallery';

      cars.forEach(car => {
        const card = document.createElement('div');
        card.className = 'car-card';

        card.innerHTML = `
          <img src="${car.image}" alt="${car.name}">
          <h2>${car.name}</h2>
        `;

        card.style.cursor = 'pointer';
        card.onclick = () => showCarDetails(car);

        galleryDiv.appendChild(card);
      });

      content.appendChild(galleryDiv);
    }

    content.style.opacity = 1;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 300);
}

function showCarDetails(car) {
  previousPage = 'gallery';
  content.style.opacity = 0;

  setTimeout(() => {
    let html = `
      <button id="back-btn">← Назад</button>
      <h1>${car.name}</h1>
      <img src="${car.image}" alt="${car.name}" class="main-car-img">
      <p>${car.details}</p>
    `;

    if (car.extraImg && car.extraImg.length > 0) {
      html += `<h2 style="text-align:center; margin-top:40px;">More Photos</h2>`;
      html += `<div class="extra-gallery">`;
      car.extraImg.forEach(img => {
        html += `
          <div class="extra-card">
            <img src="${img}" alt="Extra view of ${car.name}">
          </div>
        `;
      });
      html += `</div>`;
    }

    content.innerHTML = html;

    document.getElementById('back-btn').onclick = () => showPage(previousPage);

    content.style.opacity = 1;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 300);
}

// Запуск с главной страницы
showPage('home');
