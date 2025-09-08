export type Language = 'en' | 'ru' | 'uz';

export interface Translations {
  nav: {
    home: string;
    about: string;
    features: string;
    examTypes: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    requestDemo: string;
    getStarted: string;
  };
  about: {
    title: string;
    description: string;
    expertTeam: string;
    expertTeamDesc: string;
    securityFirst: string;
    securityFirstDesc: string;
    innovation: string;
    innovationDesc: string;
  };
  mission: {
    title: string;
    subtitle: string;
    aimTitle: string;
    aimDescription: string;
    goalsTitle: string;
    goal1: string;
    goal2: string;
    goal3: string;
    goal4: string;
  };
  examTypes: {
    soonStatus: string;
    title: string;
    subtitle: string;
    bsbTitle: string;
    bsbDesc: string;
    chsbTitle: string;
    chsbDesc: string;
    customTitle: string;
    customDesc: string;
  };
  features: {
    title: string;
    subtitle: string;
    scheduling: string;
    schedulingDesc: string;
    roleAccess: string;
    roleAccessDesc: string;
    examCreation: string;
    examCreationDesc: string;
    taskManagement: string;
    taskManagementDesc: string;
    analytics: string;
    analyticsDesc: string;
    userManagement: string;
    userManagementDesc: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    office: string;
    requestDemo: string;
    getStarted: string;
    noCard: string;
  };
  modal: {
    contactUs: string;
    requestDemo: string;
    getStartedNow: string;
    fullName: string;
    emailAddress: string;
    institutionName: string;
    message: string;
    sendMessage: string;
    enterName: string;
    enterEmail: string;
    enterInstitution: string;
    tellUsNeeds: string;
  };
  footer: {
    description: string;
    platform: string;
    support: string;
    company: string;
    features: string;
    security: string;
    integrations: string;
    documentation: string;
    helpCenter: string;
    training: string;
    about: string;
    blog: string;
    careers: string;
    privacy: string;
    copyright: string;
  };
  carousel: {
    modernExam: string;
    modernExamDesc: string;
    teacherDashboard: string;
    teacherDashboardDesc: string;
    collaborative: string;
    collaborativeDesc: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      features: "Features",
      examTypes: "Exam Types",
      contact: "Contact"
    },
    hero: {
      title: "Transform Your Exam Management",
      subtitle: "Empowering schools and educators to manage BSB, CHSB, and other exams efficiently and securely with MyExamly's comprehensive platform.",
      requestDemo: "Request Demo",
      getStarted: "Get Started Now"
    },
    about: {
      title: "Who We Are",
      description: "MyExamly is a dedicated team of education and technology specialists transforming how exams are managed. We provide comprehensive tools for teachers, administrators, and superadmins to create, conduct, and evaluate exams with confidence and precision.",
      expertTeam: "Expert Team",
      expertTeamDesc: "Education and technology specialists",
      securityFirst: "Security First",
      securityFirstDesc: "Commitment to integrity and trust",
      innovation: "Innovation",
      innovationDesc: "Continuous platform advancement"
    },
    mission: {
      title: "Our Mission & Vision",
      subtitle: "Simplifying and modernizing exam management to create transparent, efficient, and secure assessment experiences.",
      aimTitle: "Our Aim",
      aimDescription: "To make exam management seamless, transparent, and reliable for every school, class, and subject. We address the challenges of traditional exam processes by introducing efficiency, security, and clarity to educational assessments.",
      goalsTitle: "Our Goals",
      goal1: "Drive efficiency, fairness, and transparency",
      goal2: "Provide insightful analytics and reporting",
      goal3: "Ensure security and accessibility for all",
      goal4: "Support diverse exam types and institutions"
    },
    examTypes: {
      soonStatus:"Coming soon",
      title: "Supported Exam Types",
      subtitle: "Comprehensive support for various assessment types to meet your educational institution's unique needs.",
      bsbTitle: "BSB",
      bsbDesc: "Baseline and entry assessments designed to evaluate initial student capabilities and establish learning benchmarks for educational planning.",
      chsbTitle: "CHSB",
      chsbDesc: "Quarterly and milestone assessments that track student progress throughout academic periods and measure learning outcomes.",
      customTitle: "Custom Types",
      customDesc: "Customizable exam formats that adapt to your institution's specific requirements, subjects, and evaluation criteria."
    },
    features: {
      title: "Powerful Features",
      subtitle: "Comprehensive tools designed to streamline every aspect of exam management and administration.",
      scheduling: "Automated Scheduling",
      schedulingDesc: "Intelligent exam scheduling with automatic notifications and conflict detection.",
      roleAccess: "Role-Based Access",
      roleAccessDesc: "Secure, multi-role permissions for teachers, admins, and superadmins.",
      examCreation: "Exam Creation",
      examCreationDesc: "Intuitive tools for creating customized exams with various question types.",
      taskManagement: "Task Management",
      taskManagementDesc: "Comprehensive problem management and automated grading systems.",
      analytics: "Analytics & Reports",
      analyticsDesc: "Advanced analytics dashboards with detailed performance insights.",
      userManagement: "User Management",
      userManagementDesc: "Complete user and role management with granular permissions."
    },
    testimonials: {
      title: "What Educators Say",
      subtitle: "Trusted by educational institutions worldwide"
    },
    contact: {
      title: "Ready to Transform Your Exam Management?",
      subtitle: "Join thousands of educators who have already revolutionized their assessment processes with MyExamly.",
      email: "Email",
      phone: "Phone",
      office: "Office",
      requestDemo: "Request Demo",
      getStarted: "Get Started Now",
      noCard: "No credit card required • Free 30-day trial"
    },
    modal: {
      contactUs: "Contact Us",
      requestDemo: "Request Demo",
      getStartedNow: "Get Started Now",
      fullName: "Full Name",
      emailAddress: "Email Address",
      institutionName: "Institution Name",
      message: "Message",
      sendMessage: "Send Message",
      enterName: "Enter your name",
      enterEmail: "Enter your email",
      enterInstitution: "Enter institution name",
      tellUsNeeds: "Tell us about your needs..."
    },
    footer: {
      description: "Transforming exam management for educational institutions worldwide.",
      platform: "Platform",
      support: "Support",
      company: "Company",
      features: "Features",
      security: "Security",
      integrations: "Integrations",
      documentation: "Documentation",
      helpCenter: "Help Center",
      training: "Training",
      about: "About",
      blog: "Blog",
      careers: "Careers",
      privacy: "Privacy",
      copyright: "© 2025 MyExamly. All rights reserved."
    },
    carousel: {
      modernExam: "Modern Exam Environment",
      modernExamDesc: "Seamless digital assessment experience",
      teacherDashboard: "Teacher Dashboard",
      teacherDashboardDesc: "Comprehensive exam management tools",
      collaborative: "Collaborative Learning",
      collaborativeDesc: "Enhanced educational outcomes"
    }
  },
  ru: {
    nav: {
      home: "Главная",
      about: "О нас",
      features: "Возможности",
      examTypes: "Типы экзаменов",
      contact: "Контакты"
    },
    hero: {
      title: "Трансформируйте управление экзаменами",
      subtitle: "Предоставляем школам и преподавателям возможность эффективно и безопасно управлять экзаменами BSB, CHSB и другими с помощью комплексной платформы MyExamly.",
      requestDemo: "Запросить демо",
      getStarted: "Начать сейчас"
    },
    about: {
      title: "Кто мы",
      description: "MyExamly - это преданная команда специалистов в области образования и технологий, трансформирующая способы управления экзаменами. Мы предоставляем комплексные инструменты для учителей, администраторов и суперадминистраторов для создания, проведения и оценки экзаменов с уверенностью и точностью.",
      expertTeam: "Команда экспертов",
      expertTeamDesc: "Специалисты в области образования и технологий",
      securityFirst: "Безопасность прежде всего",
      securityFirstDesc: "Приверженность целостности и доверию",
      innovation: "Инновации",
      innovationDesc: "Постоянное развитие платформы"
    },
    mission: {
      title: "Наша миссия и видение",
      subtitle: "Упрощение и модернизация управления экзаменами для создания прозрачных, эффективных и безопасных процессов оценки.",
      aimTitle: "Наша цель",
      aimDescription: "Сделать управление экзаменами простым, прозрачным и надежным для каждой школы, класса и предмета. Мы решаем проблемы традиционных экзаменационных процессов, внедряя эффективность, безопасность и ясность в образовательные оценки.",
      goalsTitle: "Наши цели",
      goal1: "Повышение эффективности, справедливости и прозрачности",
      goal2: "Предоставление содержательной аналитики и отчетности",
      goal3: "Обеспечение безопасности и доступности для всех",
      goal4: "Поддержка различных типов экзаменов и учреждений"
    },
    examTypes: {
      soonStatus: "Скоро",
      title: "Поддерживаемые типы экзаменов",
      subtitle: "Комплексная поддержка различных типов оценивания для удовлетворения уникальных потребностей вашего образовательного учреждения.",
      bsbTitle: "BSB",
      bsbDesc: "Базовые и вступительные оценки, предназначенные для оценки начальных способностей студентов и установления учебных ориентиров для планирования образования.",
      chsbTitle: "CHSB",
      chsbDesc: "Четвертные и промежуточные оценки, которые отслеживают прогресс студентов в течение учебных периодов и измеряют результаты обучения.",
      customTitle: "Пользовательские типы",
      customDesc: "Настраиваемые форматы экзаменов, которые адаптируются к специфическим требованиям, предметам и критериям оценки вашего учреждения."
    },
    features: {
      title: "Мощные возможности",
      subtitle: "Комплексные инструменты, разработанные для оптимизации всех аспектов управления экзаменами и администрирования.",
      scheduling: "Автоматическое планирование",
      schedulingDesc: "Интеллектуальное планирование экзаменов с автоматическими уведомлениями и обнаружением конфликтов.",
      roleAccess: "Доступ на основе ролей",
      roleAccessDesc: "Безопасные многоуровневые разрешения для учителей, администраторов и суперадминистраторов.",
      examCreation: "Создание экзаменов",
      examCreationDesc: "Интуитивные инструменты для создания настраиваемых экзаменов с различными типами вопросов.",
      taskManagement: "Управление задачами",
      taskManagementDesc: "Комплексное управление проблемами и автоматизированные системы оценивания.",
      analytics: "Аналитика и отчеты",
      analyticsDesc: "Расширенные аналитические панели с подробными сведениями о производительности.",
      userManagement: "Управление пользователями",
      userManagementDesc: "Полное управление пользователями и ролями с детальными разрешениями."
    },
    testimonials: {
      title: "Что говорят преподаватели",
      subtitle: "Нам доверяют образовательные учреждения по всему миру"
    },
    contact: {
      title: "Готовы трансформировать управление экзаменами?",
      subtitle: "Присоединяйтесь к тысячам преподавателей, которые уже революционизировали свои процессы оценки с помощью MyExamly.",
      email: "Электронная почта",
      phone: "Телефон",
      office: "Офис",
      requestDemo: "Запросить демо",
      getStarted: "Начать сейчас",
      noCard: "Кредитная карта не требуется • Бесплатный 30-дневный пробный период"
    },
    modal: {
      contactUs: "Связаться с нами",
      requestDemo: "Запросить демо",
      getStartedNow: "Начать сейчас",
      fullName: "Полное имя",
      emailAddress: "Адрес электронной почты",
      institutionName: "Название учреждения",
      message: "Сообщение",
      sendMessage: "Отправить сообщение",
      enterName: "Введите ваше имя",
      enterEmail: "Введите ваш email",
      enterInstitution: "Введите название учреждения",
      tellUsNeeds: "Расскажите нам о ваших потребностях..."
    },
    footer: {
      description: "Трансформируем управление экзаменами для образовательных учреждений по всему миру.",
      platform: "Платформа",
      support: "Поддержка",
      company: "Компания",
      features: "Возможности",
      security: "Безопасность",
      integrations: "Интеграции",
      documentation: "Документация",
      helpCenter: "Центр помощи",
      training: "Обучение",
      about: "О нас",
      blog: "Блог",
      careers: "Карьера",
      privacy: "Конфиденциальность",
      copyright: "© 2025 MyExamly. Все права защищены."
    },
    carousel: {
      modernExam: "Современная экзаменационная среда",
      modernExamDesc: "Бесшовный цифровой опыт оценивания",
      teacherDashboard: "Панель учителя",
      teacherDashboardDesc: "Комплексные инструменты управления экзаменами",
      collaborative: "Совместное обучение",
      collaborativeDesc: "Улучшенные образовательные результаты"
    }
  },
  uz: {
    nav: {
      home: "Bosh sahifa",
      about: "Biz haqimizda",
      features: "Imkoniyatlar",
      examTypes: "Imtihon turlari",
      contact: "Aloqa"
    },
    hero: {
      title: "Baholashni boshqarishda qulaylik va zamonaviylik",
      subtitle: "MyExamly ning mukammal platformasi orqali maktablar va pedagoglarga BSB, CHSB hamda boshqa turdagi imtihonlarni yuqori samaradorlik va xavfsizlik bilan boshqarish imkoniyati taqdim etiladi.",
      requestDemo: "Demo olish",
      getStarted: "Hoziroq boshlang"
    },
    about: {
      title: "Biz haqimizda",
      description: "MyExamly — bu ta’lim va axborot texnologiyalari sohasida yuqori malakali mutaxassislardan tashkil topgan jamoa bo‘lib, imtihonlarni boshqarishning zamonaviy metodologiyalarini ishlab chiqishga ixtisoslashgan. Biz ta’lim muassasalari uchun ishonchli, aniq va samarali imtihonlarni yaratish, o‘tkazish hamda baholash imkonini beruvchi keng qamrovli vositalarni taklif etamiz.",
      expertTeam: "Mutaxassislar jamoasi",
      expertTeamDesc: "Ta’lim va IT bo‘yicha yetuk ekspertlar",
      securityFirst: "Xavfsizlik ustuvorligi",
      securityFirstDesc: "Halollik va ishonchlilik tamoyillariga sodiqlik",
      innovation: "Innovatsiya",
      innovationDesc: "Platformaning uzluksiz takomillashuvi"
    },
    mission: {
      title: "Maqsadimiz va konseptual tamoyillarimiz",
      subtitle: "Samaradorlik va xavfsizlik uchun imtihonlarni boshqarishda zamonaviy yechim.",
      aimTitle: "Bizning maqsadimiz",
      aimDescription: "Har bir ta’lim muassasasi, sinf va fan uchun imtihonlarni uzluksiz va ishonchli boshqarishni ta’minlaymiz. Biz an’anaviy imtihon jarayonidagi muammolarni bartaraf etib, baholash tizimiga samaradorlik, xavfsizlik va aniqlik olib kiramiz.",
      goalsTitle: "Bizning ustuvor maqsadlarimiz",
      goal1: "Samaradorlik, adolatlilik va shaffoflikni yuksaltirish",
      goal2: "Keng qamrovli tahliliy ma’lumot va hisobotlar taqdim etish",
      goal3: "Barcha foydalanuvchilar uchun xavfsizlik va teng kirishni ta’minlash",
      goal4: "Turli imtihon turlari va ta’lim muassasalarini qo‘llab-quvvatlash"
    },
    examTypes: {
       soonStatus: "Tez kunda",
      title: "Platformada mavjud imtihon shakllari",
      subtitle: "Ta’lim muassasangizning o‘ziga xos ehtiyojlarini inobatga olgan holda turli baholash usullarini keng qamrovli qo‘llab-quvvatlaymiz.",
      bsbTitle: "BSB",
      bsbDesc: "O’quvchilarning boshlang‘ich bilim va ko‘nikmalarini baholash hamda ta’limiy rejalashtirish uchun mezonlarni belgilashga mo‘ljallangan dastlabki testlar.",
      chsbTitle: "CHSB",
      chsbDesc: "Bu baholash shakli talabalarning bilim darajasi, ko‘nikmalari va o‘quv jarayonidagi barqaror rivojlanishini muntazam nazorat qilishga xizmat qiladi.",
      customTitle: "Moslashtirilgan shakllar",
      customDesc: "Muassasangizning o‘ziga xos talablari, fanlari va baholash mezonlariga moslashuvchi individual imtihon formatlari."
    },
    features: {
      title: "Asosiy imkoniyatlar",
      subtitle: "Imtihonlarni boshqarish va ma’muriy jarayonlarni optimallashtirish uchun ishlab chiqilgan kompleks vositalar majmuasi.",
      scheduling: "Avtomatlashtirilgan rejalashtirish",
      schedulingDesc: "Avtomatik xabarnomalar va ziddiyatlarni aniqlash imkoniyatiga ega aqlli imtihon jadvalini tuzish.",
      roleAccess: "Rol asosida boshqaruv",
      roleAccessDesc: "Tizim ikki bosqichli autentifikatsiya, shifrlangan ma’lumot almashinuvi va doimiy xavfsizlik nazorati orqali himoyalangan bo‘lib, foydalanuvchilarning vakolat doirasidan tashqariga chiqishi qat’iyan cheklanadi.",
      examCreation: "Imtihon yaratish",
      examCreationDesc: "Turli savol turlarini qo‘llab-quvvatlovchi intuitiv imtihon tuzish vositalari.",
      taskManagement: "Topshiriqlarni boshqarish",
      taskManagementDesc: "Keng qamrovli topshiriqlarni boshqarish va avtomatlashtirilgan baholash tizimlari.",
      analytics: "Tahlil va hisobotlar",
      analyticsDesc: "Batafsil natijaviy tahlillar bilan kengaytirilgan analitik panellar.",
      userManagement: "Foydalanuvchi boshqaruvi",
      userManagementDesc: "Keng imkoniyatli foydalanuvchi va rol boshqaruvi mexanizmlari."
    },
    testimonials: {
      title: "Pedagoglar fikrlari",
      subtitle: "Mahalliy ta’lim standartlariga mos va ishonchli deb topilgan."
    },
    contact: {
      title: "Imtihon boshqaruvingizni yangi darajaga olib chiqishga tayyormisiz?",
      subtitle: "MyExamly yordamida baholash jarayonlarini allaqachon soddalashtirgan va samarali qilgan yuzlab ta’lim muassasalari safiga qo‘shiling.",
      email: "Elektron pochta",
      phone: "Telefon",
      office: "Ofis",
      requestDemo: "Demo olish",
      getStarted: "Hoziroq boshlang",
      noCard: "* 30 kunlik bepul sinov"
    },
    modal: {
      contactUs: "Biz bilan bog‘laning",
      requestDemo: "Demo olish",
      getStartedNow: "Darhol boshlash",
      fullName: "To‘liq ism",
      emailAddress: "Elektron pochta manzili",
      institutionName: "Muassasa nomi",
      message: "Xabar",
      sendMessage: "Xabar yuborish",
      enterName: "Ismingizni kiriting",
      enterEmail: "Elektron pochtangizni kiriting",
      enterInstitution: "Muassasa nomini kiriting",
      tellUsNeeds: "Ehtiyojlaringiz haqida batafsil yozing..."
    },
    footer: {
      description: "O‘zbekiston ta’lim tizimi uchun imtihon boshqaruvining innovatsion yechimi.",
      platform: "Platforma",
      support: "Qo‘llab-quvvatlash",
      company: "Kompaniya",
      features: "Imkoniyatlar",
      security: "Xavfsizlik",
      integrations: "Integratsiyalar",
      documentation: "Hujjatlar",
      helpCenter: "Yordam markazi",
      training: "Trening",
      about: "Biz haqimizda",
      blog: "Blog",
      careers: "Karyera",
      privacy: "Maxfiylik",
      copyright: "© 2025 MyExamly. Barcha huquqlar himoyalangan."
    },
    carousel: {
      modernExam: "Zamonaviy imtihon muhiti",
      modernExamDesc: "Uzluksiz raqamli baholash tajribasi",
      teacherDashboard: "O‘qituvchi paneli",
      teacherDashboardDesc: "Imtihonlarni boshqarish uchun keng qamrovli vositalar",
      collaborative: "Hamkorlikda ta’lim",
      collaborativeDesc: "Yaxshilangan pedagogik natijalar"
    }
  }
    
};

export const getTranslations = (lang: Language): Translations => {
  return translations[lang] || translations.en;
};

export const getLanguageOptions = () => [
  { code: 'en' as Language, label: 'ENG' },
  { code: 'ru' as Language, label: 'РУС' },
  { code: 'uz' as Language, label: 'UZB' }
];
