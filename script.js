const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const openBtn = document.getElementById("registerBtn");
const closeBtn = document.getElementById("closeModal");
const toggleAuth = document.getElementById("toggleAuth");
const modalTitle = document.getElementById("modalTitle");
const startBtn = document.querySelector('.hero button'); // <-- НОВОЕ: получаем кнопку "Начать сейчас"

let isLogin = false;


openBtn.addEventListener("click", () => {
  modal.classList.add("show");
  overlay.classList.add("show");
});


startBtn.addEventListener("click", () => {
  modal.classList.add("show");
  overlay.classList.add("show");
});


closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  overlay.classList.remove("show");
});

overlay.addEventListener("click", () => {
  modal.classList.remove("show");
  bioModal.classList.remove("show");
  overlay.classList.remove("show");
});

toggleAuth.addEventListener("click", () => {
  isLogin = !isLogin;
  modalTitle.textContent = isLogin ? "Вход" : "Регистрация";
  toggleAuth.textContent = isLogin ? "Зарегистрироваться" : "Войти";
});

// Менторы
const mentorCardsContainer = document.querySelector(".mentor-cards");

const mentors = [
  {
    name: "Глеб Голубин.",
    role: "UI/UX дизайнер",
    img: "https://i.pravatar.cc/150?img=12",
    category: "design",
    bio: "Более 7 лет в дизайне. Работала с Яндексом и Mail.ru. Эксперт по Figma и пользовательскому опыту."
  },
  {
    name: "Дмитрий Петух.",
    role: "Senior Developer",
    img: "https://i.pravatar.cc/150?img=8",
    category: "it",
    bio: "10+ лет в backend-разработке. Специализируется на Python и микросервисах. Преподавал в Hexlet."
  },
  {
    name: "Мария Суповна.",
    role: "AI-инженер",
    img: "https://i.pravatar.cc/150?img=5",
    category: "it",
    bio: "Работает в сфере машинного обучения. Участвовала в проектах NVIDIA и OpenAI. Автор курса по нейросетям."
  },
  {
    name: "Игорь Войтенко.",
    role: "Бизнес-консультант",
    img: "https://i.pravatar.cc/150?img=15",
    category: "business",
    bio: "Консультант для стартапов и корпораций. Специалист по стратегиям роста и масштабированию бизнеса."
  },
  {
    name: "Елена Темнекова.",
    role: "Продукт-менеджер",
    img: "https://i.pravatar.cc/150?img=18",
    category: "business",
    bio: "Опыт более 6 лет в управлении цифровыми продуктами. Работала в Ozon и Avito."
  },
  {
    name: "Яна Юн.",
    role: "DevOps-инженер",
    img: "https://i.pravatar.cc/150?img=25",
    category: "it",
    bio: "Эксперт по CI/CD, Kubernetes и облакам. Помогал DevOps-направлению в Skyeng."
  },
  {
    name: "Арман Зиудинов.",
    role: "Маркетолог",
    img: "https://i.pravatar.cc/150?img=33",
    category: "business",
    bio: "Знает всё о digital-маркетинге. Проконсультировала более 50 брендов, включая IKEA и Сбер."
  },
  {
    name: "Соня Ким.",
    role: "Графический дизайнер",
    img: "https://i.pravatar.cc/150?img=39",
    category: "design",
    bio: "Более 12 лет в рекламе и брендинге. Премии Red Dot и Awwwards."
  },
  {
    name: "Ксения Лебедь.",
    role: "Frontend-разработчик",
    img: "https://i.pravatar.cc/150?img=44",
    category: "it",
    bio: "React, Vue, Tailwind. Делает интерфейсы, которые любят пользователи."
  },
  {
    name: "Максим Бошка.",
    role: "Мобильный разработчик",
    img: "https://i.pravatar.cc/150?img=52",
    category: "it",
    bio: "Flutter и Swift. Писал приложения для банков, доставки и гейминга."
  }
];


mentors.forEach((mentor, index) => {
  const card = document.createElement("div");
  card.className = "mentor-card";
  card.dataset.category = mentor.category;
  card.innerHTML = `
    <img src="${mentor.img}" />
    <h3>${mentor.name}</h3>
    <p>${mentor.role}</p>
    `
  ;
  card.addEventListener("click", () => showBio(mentor.name, mentor.bio));
  mentorCardsContainer.appendChild(card);
});


const filterButtons = document.querySelectorAll(".filter button");
const mentorCards = document.querySelectorAll(".mentor-card");
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.filter;
      document.querySelectorAll(".mentor-card").forEach(card => {
        if (category === "all" || card.dataset.category === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
  
  
  const bioModal = document.getElementById("bioModal");
  const bioName = document.getElementById("bioName");
  const bioText = document.getElementById("bioText");
  const closeBio = document.getElementById("closeBio");
  
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
 
  const sections = document.querySelectorAll('section');
  
  function checkScroll() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight * 0.8) {
        section.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('scroll', checkScroll);
  checkScroll(); 
  
  
  function showBio(name, bio) {
    bioName.textContent = name;
    bioText.textContent = bio;
    bioModal.style.display = 'flex';
    setTimeout(() => {
      bioModal.classList.add('show');
      overlay.classList.add('show');
    }, 10);
  }
  

  closeBio.addEventListener('click', () => {
    bioModal.classList.remove('show');
    overlay.classList.remove('show');
    setTimeout(() => {
      bioModal.style.display = 'none';
    }, 300);
  });