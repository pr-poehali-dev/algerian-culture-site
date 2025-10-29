import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const algeriaRegions = [
  { id: 1, name: 'Алжир', description: 'Столичный регион с богатой колониальной архитектурой', specialty: 'Касба Алжира' },
  { id: 2, name: 'Оран', description: 'Портовый город с испанским влиянием', specialty: 'Музыка рай' },
  { id: 3, name: 'Константина', description: 'Город мостов на скалистом плато', specialty: 'Подвесные мосты' },
  { id: 4, name: 'Таманрассет', description: 'Сердце пустыни Сахара', specialty: 'Горы Ахаггар' },
  { id: 5, name: 'Тлемсен', description: 'Жемчужина магрибского искусства', specialty: 'Андалузская архитектура' },
  { id: 6, name: 'Джемила', description: 'Древнеримские руины', specialty: 'Археологический комплекс' },
];

const cultures = [
  { title: 'Музыка рай', description: 'Народный жанр, зародившийся в Оране, смешение арабских, берберских и испанских мелодий', icon: 'Music' },
  { title: 'Кабильская культура', description: 'Берберская культура с уникальными традициями гончарства и ткачества', icon: 'Palette' },
  { title: 'Традиционные танцы', description: 'От бедуинского гербы до кабильского абруа', icon: 'Sparkles' },
];

const clothing = [
  { title: 'Кaраку', description: 'Традиционная женская куртка с богатой вышивкой золотыми нитками', icon: 'Shirt' },
  { title: 'Бурнус', description: 'Шерстяной плащ с капюшоном, защита от пустынных ветров', icon: 'Shield' },
  { title: 'Хайк', description: 'Белое покрывало, элегантное драпирование ткани', icon: 'Sparkle' },
];

const scientists = [
  { name: 'Ибн Рушд', field: 'Философия и медицина', achievement: 'Комментарии к Аристотелю', years: '1126-1198' },
  { name: 'Ибн Халдун', field: 'История и социология', achievement: 'Основатель социологии', years: '1332-1406' },
  { name: 'Аль-Битруджи', field: 'Астрономия', achievement: 'Модель движения планет', years: 'XII век' },
];

const history = [
  { period: 'Нумидия', years: '202 г. до н.э.', event: 'Царство берберов под руководством Масиниссы' },
  { period: 'Римская эпоха', years: '146 г. до н.э.', event: 'Алжир становится частью Римской империи' },
  { period: 'Исламское завоевание', years: '647 г.', event: 'Распространение ислама в регионе' },
  { period: 'Османская эпоха', years: '1516-1830', event: 'Алжир под властью Османской империи' },
  { period: 'Французская колонизация', years: '1830-1962', event: 'Период французского правления' },
  { period: 'Независимость', years: '1962', event: 'Алжир обретает независимость' },
];

const Index = () => {
  const [selectedRegion, setSelectedRegion] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">🇩🇿 Алжир</h1>
            <div className="flex gap-6">
              {['home', 'map', 'culture', 'clothing', 'history', 'scientists', 'gallery'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'map' && 'Карта'}
                  {section === 'culture' && 'Культура'}
                  {section === 'clothing' && 'Одежда'}
                  {section === 'history' && 'История'}
                  {section === 'scientists' && 'Ученые'}
                  {section === 'gallery' && 'Галерея'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/8dbe3904-e103-4ace-bd77-4ba8b00d17ae/files/0962f8c4-9e54-4e8c-af49-d53f1ed96002.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background" />
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">Алжир</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Откройте для себя богатую культуру, историю и традиции страны тысячи цветов
          </p>
          <Button size="lg" onClick={() => scrollToSection('map')} className="bg-primary hover:bg-primary/90">
            Исследовать <Icon name="ArrowDown" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section id="map" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Интерактивная карта регионов</h2>
            <p className="text-muted-foreground text-lg">Нажмите на регион, чтобы узнать больше</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {algeriaRegions.map((region) => (
              <Card
                key={region.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  selectedRegion === region.id ? 'ring-2 ring-primary shadow-xl' : ''
                }`}
                onClick={() => setSelectedRegion(region.id)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {region.name}
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </CardTitle>
                  <CardDescription>{region.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    {region.specialty}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedRegion && (
            <Card className="animate-scale-in bg-card border-primary/50">
              <CardHeader>
                <CardTitle className="text-2xl">
                  {algeriaRegions.find((r) => r.id === selectedRegion)?.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">
                  {algeriaRegions.find((r) => r.id === selectedRegion)?.description}
                </p>
                <div className="flex items-center gap-2">
                  <Icon name="Star" size={20} className="text-accent" />
                  <span className="font-semibold">Особенность:</span>
                  <span>{algeriaRegions.find((r) => r.id === selectedRegion)?.specialty}</span>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <section id="culture" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Культура</h2>
            <p className="text-muted-foreground text-lg">Многогранное культурное наследие Алжира</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cultures.map((culture, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 animate-fade-in">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={culture.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle>{culture.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{culture.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="clothing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Традиционная одежда</h2>
            <p className="text-muted-foreground text-lg">Элегантность алжирского костюма</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {clothing.map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://cdn.poehali.dev/projects/8dbe3904-e103-4ace-bd77-4ba8b00d17ae/files/682a2bc9-3599-423e-a61f-2fa0007a57ff.jpg')`,
                  }}
                />
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name={item.icon} size={24} className="text-accent" />
                    <CardTitle>{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="history" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">История</h2>
            <p className="text-muted-foreground text-lg">Путешествие сквозь века</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-primary pl-8 space-y-8">
              {history.map((item, index) => (
                <div key={index} className="relative animate-fade-in">
                  <div className="absolute -left-[41px] w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Icon name="Calendar" size={16} className="text-primary-foreground" />
                  </div>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle>{item.period}</CardTitle>
                        <Badge variant="outline">{item.years}</Badge>
                      </div>
                      <CardDescription className="text-base">{item.event}</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="scientists" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Выдающиеся ученые</h2>
            <p className="text-muted-foreground text-lg">Великие умы Алжира и Магриба</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {scientists.map((scientist, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                    <Icon name="GraduationCap" size={32} className="text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">{scientist.name}</CardTitle>
                  <CardDescription className="text-base font-semibold text-secondary">
                    {scientist.field}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">{scientist.achievement}</p>
                  <Badge variant="outline">{scientist.years}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Галерея</h2>
            <p className="text-muted-foreground text-lg">Визуальное путешествие по Алжиру</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                url: 'https://cdn.poehali.dev/projects/8dbe3904-e103-4ace-bd77-4ba8b00d17ae/files/a11f1145-e370-4b5e-b097-e2cfc7e6dff5.jpg',
                title: 'Архитектура',
              },
              {
                url: 'https://cdn.poehali.dev/projects/8dbe3904-e103-4ace-bd77-4ba8b00d17ae/files/682a2bc9-3599-423e-a61f-2fa0007a57ff.jpg',
                title: 'Традиционная одежда',
              },
              {
                url: 'https://cdn.poehali.dev/projects/8dbe3904-e103-4ace-bd77-4ba8b00d17ae/files/0962f8c4-9e54-4e8c-af49-d53f1ed96002.jpg',
                title: 'Пейзажи',
              },
            ].map((image, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">🇩🇿 Алжир</h3>
          <p className="text-primary-foreground/80 mb-6">
            Откройте для себя красоту и богатство алжирской культуры
          </p>
          <div className="flex justify-center gap-6">
            <Icon name="Facebook" size={24} className="cursor-pointer hover:opacity-80 transition-opacity" />
            <Icon name="Instagram" size={24} className="cursor-pointer hover:opacity-80 transition-opacity" />
            <Icon name="Twitter" size={24} className="cursor-pointer hover:opacity-80 transition-opacity" />
          </div>
          <p className="mt-8 text-sm text-primary-foreground/60">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
