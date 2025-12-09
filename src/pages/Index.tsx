import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "consultation", "testimonials", "contacts"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: "Salad",
      title: "Индивидуальное питание",
      description: "Персональный план питания с учетом ваших целей, предпочтений и образа жизни"
    },
    {
      icon: "HeartPulse",
      title: "Коррекция веса",
      description: "Безопасное снижение или набор веса с поддержкой здоровья организма"
    },
    {
      icon: "Apple",
      title: "Здоровое питание",
      description: "Обучение принципам сбалансированного рациона для всей семьи"
    },
    {
      icon: "Activity",
      title: "Спортивное питание",
      description: "Оптимизация рациона для достижения спортивных результатов"
    }
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      text: "За 3 месяца работы с нутрициологом я не только достигла желаемого веса, но и улучшила общее самочувствие. Очень благодарна за профессиональный подход!",
      rating: 5
    },
    {
      name: "Мария Сидорова",
      text: "Индивидуальная программа питания помогла мне наладить отношения с едой. Теперь я ем осознанно и с удовольствием!",
      rating: 5
    },
    {
      name: "Елена Иванова",
      text: "Профессиональный подход и постоянная поддержка - это то, что помогло мне добиться результата. Рекомендую!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-mint/20 to-lavender/20">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">NutriLife</h1>
            <div className="hidden md:flex gap-6">
              {[
                { id: "home", label: "Главная" },
                { id: "about", label: "Обо мне" },
                { id: "services", label: "Услуги" },
                { id: "consultation", label: "Консультации" },
                { id: "testimonials", label: "Отзывы" },
                { id: "contacts", label: "Контакты" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-foreground ${
                    activeSection === item.id ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                Путь к здоровью начинается с питания
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Помогу вам составить индивидуальный рацион, который подарит энергию, здоровье и отличное самочувствие
              </p>
              <Button 
                size="lg" 
                onClick={() => scrollToSection("consultation")}
                className="bg-foreground text-white hover:bg-foreground/90 rounded-full px-8"
              >
                Записаться на консультацию
              </Button>
            </div>
            <div className="animate-slide-up">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-mint rounded-full opacity-50 blur-3xl"></div>
                <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-lavender rounded-full opacity-50 blur-3xl"></div>
                <img 
                  src="/placeholder.svg" 
                  alt="Здоровое питание" 
                  className="relative rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Обо мне</h2>
            <div className="w-20 h-1 bg-foreground mx-auto rounded-full"></div>
          </div>
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-mint to-lavender p-1">
                    <img 
                      src="/placeholder.svg" 
                      alt="Нутрициолог" 
                      className="w-full h-full rounded-full object-cover bg-white"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">Сертифицированный нутрициолога
Потапкина Татьяна
</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Более 7 лет я помогаю людям находить баланс в питании и достигать своих целей. 
                    Имею высшее медицинское образование и международные сертификаты в области нутрициологии.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Мой подход основан на научных данных и индивидуальном подходе к каждому клиенту. 
                    Верю, что здоровое питание должно быть не только полезным, но и вкусным!
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Award" size={20} className="text-foreground" />
                      <span>7+ лет опыта</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Users" size={20} className="text-foreground" />
                      <span>300+ клиентов</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="GraduationCap" size={20} className="text-foreground" />
                      <span>Международные сертификаты</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Услуги</h2>
            <div className="w-20 h-1 bg-foreground mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Комплексный подход к вашему здоровью с учетом индивидуальных особенностей
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-mint to-lavender flex items-center justify-center mb-6">
                    <Icon name={service.icon} size={28} className="text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="consultation" className="py-20 px-4 bg-gradient-to-br from-mint/30 to-peach/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Записаться на консультацию</h2>
            <div className="w-20 h-1 bg-foreground mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6">
              Оставьте заявку, и я свяжусь с вами в ближайшее время
            </p>
          </div>
          <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Ваше имя</label>
                  <Input 
                    placeholder="Введите ваше имя" 
                    className="border-gray-200 focus:border-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Телефон</label>
                  <Input 
                    placeholder="+7 (___) ___-__-__" 
                    className="border-gray-200 focus:border-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="border-gray-200 focus:border-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Комментарий</label>
                  <Textarea 
                    placeholder="Расскажите о своих целях и пожеланиях" 
                    rows={4}
                    className="border-gray-200 focus:border-foreground"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-foreground text-white hover:bg-foreground/90 rounded-full py-6 text-lg"
                >
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Отзывы клиентов</h2>
            <div className="w-20 h-1 bg-foreground mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg bg-white/80 backdrop-blur hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{testimonial.text}</p>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Контакты</h2>
            <div className="w-20 h-1 bg-foreground mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur text-center">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-mint to-lavender flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} className="text-foreground" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Телефон</h3>
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur text-center">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-mint to-lavender flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={24} className="text-foreground" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Email</h3>
                <p className="text-muted-foreground">info@nutrilife.ru</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur text-center">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-mint to-lavender flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" size={24} className="text-foreground" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Telegram</h3>
                <p className="text-muted-foreground">@nutrilife</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-foreground text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm opacity-80">© 2024 NutriLife. Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;