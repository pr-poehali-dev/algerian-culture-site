import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const algeriaRegions = [
  { id: 1, name: 'الجزائر', description: 'المنطقة العاصمة بهندسة معمارية استعمارية غنية', specialty: 'قصبة الجزائر' },
  { id: 2, name: 'وهران', description: 'مدينة ساحلية بتأثيرات إسبانية', specialty: 'موسيقى الراي' },
  { id: 3, name: 'قسنطينة', description: 'مدينة الجسور المعلقة على هضبة صخرية', specialty: 'الجسور المعلقة' },
  { id: 4, name: 'تمنراست', description: 'قلب صحراء الساحل', specialty: 'جبال الهقار' },
  { id: 5, name: 'تلمسان', description: 'لؤلؤة الفن المغاربي', specialty: 'العمارة الأندلسية' },
  { id: 6, name: 'جميلة', description: 'الآثار الرومانية القديمة', specialty: 'المجمع الأثري' },
];

const cultures = [
  { title: 'موسيقى الراي', description: 'نوع شعبي نشأ في وهران، مزيج من الألحان العربية والبربرية والإسبانية', icon: 'Music' },
  { title: 'الثقافة القبائلية', description: 'ثقافة أمازيغية بتقاليد فريدة في صناعة الفخار والنسيج', icon: 'Palette' },
  { title: 'الرقصات التقليدية', description: 'من العربي البدوي إلى القبائلي أحواش', icon: 'Sparkles' },
];

const clothing = [
  { title: 'القراقو', description: 'السترة النسائية التقليدية بتطريز غني بخيوط ذهبية', icon: 'Shirt', image: 'https://cdn.poehali.dev/projects/8dbe3904-e103-4ace-bd77-4ba8b00d17ae/files/35b7984e-e902-4a7b-a766-a74d1191f0cf.jpg' },
  { title: 'البرنوس', description: 'عباءة صوفية بقلنسوة، حماية من رياح الصحراء', icon: 'Shield', image: 'https://cdn.poehali.dev/projects/8dbe3904-e103-4ace-bd77-4ba8b00d17ae/files/35b7984e-e902-4a7b-a766-a74d1191f0cf.jpg' },
  { title: 'الحايك', description: 'غطاء أبيض، أناقة في لف القماش', icon: 'Sparkle', image: 'https://cdn.poehali.dev/projects/8dbe3904-e103-4ace-bd77-4ba8b00d17ae/files/35b7984e-e902-4a7b-a766-a74d1191f0cf.jpg' },
];

const dishes = [
  { title: 'الكسكس', description: 'الطبق الوطني بالخضروات واللحم، يقدم في المناسبات العائلية', icon: 'Utensils', image: 'https://cdn.poehali.dev/projects/8dbe3904-e103-4ace-bd77-4ba8b00d17ae/files/f20324c1-5ced-4171-acc1-481f9535f171.jpg' },
  { title: 'الطاجين', description: 'طبق مطهو ببطء في إناء فخاري بنكهات غنية', icon: 'CookingPot', image: 'https://cdn.poehali.dev/projects/8dbe3904-e103-4ace-bd77-4ba8b00d17ae/files/f20324c1-5ced-4171-acc1-481f9535f171.jpg' },
  { title: 'المحجوبة', description: 'كريب جزائري محشو بالطماطم والبصل', icon: 'Pizza', image: 'https://cdn.poehali.dev/projects/8dbe3904-e103-4ace-bd77-4ba8b00d17ae/files/f20324c1-5ced-4171-acc1-481f9535f171.jpg' },
];

const scientists = [
  { name: 'ابن رشد', field: 'الفلسفة والطب', achievement: 'شروح أرسطو', years: '1126-1198' },
  { name: 'ابن خلدون', field: 'التاريخ وعلم الاجتماع', achievement: 'مؤسس علم الاجتماع', years: '1332-1406' },
  { name: 'البطروجي', field: 'علم الفلك', achievement: 'نموذج حركة الكواكب', years: 'القرن الثاني عشر' },
];

const history = [
  { period: 'نوميديا', years: '202 ق.م', event: 'مملكة الأمازيغ تحت قيادة ماسينيسا' },
  { period: 'العصر الروماني', years: '146 ق.م', event: 'الجزائر تصبح جزءاً من الإمبراطورية الرومانية' },
  { period: 'الفتح الإسلامي', years: '647م', event: 'انتشار الإسلام في المنطقة' },
  { period: 'العصر العثماني', years: '1516-1830', event: 'الجزائر تحت الحكم العثماني' },
  { period: 'الاستعمار الفرنسي', years: '1830-1962', event: 'فترة الحكم الفرنسي' },
  { period: 'الاستقلال', years: '1962', event: 'الجزائر تنال استقلالها' },
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
    <div className="min-h-screen bg-background" dir="rtl">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">🇩🇿 الجزائر</h1>
            <div className="flex gap-6">
              {['home', 'map', 'culture', 'clothing', 'dishes', 'history', 'scientists', 'gallery'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'الرئيسية'}
                  {section === 'map' && 'الخريطة'}
                  {section === 'culture' && 'الثقافة'}
                  {section === 'clothing' && 'الأزياء'}
                  {section === 'dishes' && 'الأطباق'}
                  {section === 'history' && 'التاريخ'}
                  {section === 'scientists' && 'العلماء'}
                  {section === 'gallery' && 'المعرض'}
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
            backgroundImage: `url('https://cdn.poehali.dev/projects/8dbe3904-e103-4ace-bd77-4ba8b00d17ae/files/ed144c47-418b-484d-8f89-44b9238dce1c.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background" />
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">الجزائر</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            اكتشف الثقافة الغنية والتاريخ العريق وتقاليد بلد الألف لون
          </p>
          <Button size="lg" onClick={() => scrollToSection('map')} className="bg-primary hover:bg-primary/90">
            استكشف <Icon name="ArrowDown" className="mr-2" size={20} />
          </Button>
        </div>
      </section>

      <section id="map" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">خريطة تفاعلية للمناطق</h2>
            <p className="text-muted-foreground text-lg">اضغط على المنطقة لمعرفة المزيد</p>
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
                  <span className="font-semibold">الميزة:</span>
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
            <h2 className="text-4xl font-bold mb-4">الثقافة</h2>
            <p className="text-muted-foreground text-lg">التراث الثقافي المتعدد الأوجه للجزائر</p>
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
            <h2 className="text-4xl font-bold mb-4">الأزياء التقليدية</h2>
            <p className="text-muted-foreground text-lg">أناقة الزي الجزائري</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {clothing.map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${item.image}')`,
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

      <section id="dishes" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">الأطباق التقليدية</h2>
            <p className="text-muted-foreground text-lg">نكهات المطبخ الجزائري الأصيل</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {dishes.map((dish, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${dish.image}')`,
                  }}
                />
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name={dish.icon} size={24} className="text-accent" />
                    <CardTitle>{dish.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{dish.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="history" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">التاريخ</h2>
            <p className="text-muted-foreground text-lg">رحلة عبر العصور</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative border-r-2 border-primary pr-8 space-y-8">
              {history.map((item, index) => (
                <div key={index} className="relative animate-fade-in">
                  <div className="absolute -right-[41px] w-8 h-8 rounded-full bg-primary flex items-center justify-center">
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

      <section id="scientists" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">العلماء المشهورون</h2>
            <p className="text-muted-foreground text-lg">العقول العظيمة من الجزائر والمغرب العربي</p>
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

      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">المعرض</h2>
            <p className="text-muted-foreground text-lg">رحلة بصرية عبر الجزائر</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                url: 'https://cdn.poehali.dev/projects/8dbe3904-e103-4ace-bd77-4ba8b00d17ae/files/a11f1145-e370-4b5e-b097-e2cfc7e6dff5.jpg',
                title: 'العمارة',
              },
              {
                url: 'https://cdn.poehali.dev/projects/8dbe3904-e103-4ace-bd77-4ba8b00d17ae/files/35b7984e-e902-4a7b-a766-a74d1191f0cf.jpg',
                title: 'الأزياء التقليدية',
              },
              {
                url: 'https://cdn.poehali.dev/projects/8dbe3904-e103-4ace-bd77-4ba8b00d17ae/files/ed144c47-418b-484d-8f89-44b9238dce1c.jpg',
                title: 'المناظر الطبيعية',
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
          <h3 className="text-2xl font-bold mb-4">🇩🇿 الجزائر</h3>
          <p className="text-primary-foreground/80 mb-6">
            اكتشف جمال وغنى الثقافة الجزائرية
          </p>
          <div className="flex justify-center gap-6">
            <Icon name="Facebook" size={24} className="cursor-pointer hover:opacity-80 transition-opacity" />
            <Icon name="Instagram" size={24} className="cursor-pointer hover:opacity-80 transition-opacity" />
            <Icon name="Twitter" size={24} className="cursor-pointer hover:opacity-80 transition-opacity" />
          </div>
          <p className="mt-8 text-sm text-primary-foreground/60">© 2024 جميع الحقوق محفوظة</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
