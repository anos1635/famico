import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.products': 'Produits',
    'nav.newProducts': 'Nouveautés',
    'nav.moments': 'Moments',
    'nav.distributor': 'Devenir distributeur',
    'nav.location': 'Localisation',
    'nav.history': 'Notre Histoire',
    'nav.shop': 'Boutique',

    // Hero
    'hero.title': 'CAFÉ',
    'hero.subtitle': 'L\'Excellence du Café Algérien',
    'hero.description': 'Depuis 1973, nous torréfions avec passion un café authentique, intense et raffiné pour les amateurs de vrai goût.',
    'hero.discoverProducts': 'Découvrir nos produits',
    'hero.ourHistory': 'Notre histoire',

    // Products
    'products.title': 'BOUTIQUE FAMICO',
    'products.description': 'Découvrez la sélection de cafés FAMICO, soigneusement torréfiés pour offrir une qualité et un goût exceptionnels. Commandez facilement en ligne et recevez votre café directement chez vous.',
    'products.accessShop': 'ACCÉDER À LA BOUTIQUE',

    // New Products
    'newProducts.title': 'découvrez le nouveau produit famico',

    // Moments
    'moments.title': 'Moments FAMICO',
    'moments.description': 'Chaque tasse de café FAMICO accompagne vos instants du quotidien.',
    'moments.descriptionEn': 'Every cup of FAMICO coffee enhances your everyday moments.',
    'moments.atHome': 'À la maison',
    'moments.atCafe': 'Au café',
    'moments.atWork': 'Au travail',
    'moments.sharedMoments': 'Moments de partage',
    'moments.artOfCoffee': 'L\'art du café',
    'moments.craftsmanship': 'Savoir-faire FAMICO',

    // History
    'history.title': 'Notre Histoire',
    'history.subtitle': 'Plus de 50 ans d\'excellence',
    'history.description': 'Depuis 1973, FAMICO perpétue la tradition du café algérien avec passion et savoir-faire.',
    'history.content1': 'Fondée en 1973, FAMICO est née de la passion pour le café authentique et de qualité. Notre entreprise familiale s\'est développée au fil des décennies pour devenir une référence dans l\'art de la torréfaction en Algérie.',
    'history.content2': 'Nous sélectionnons avec soin les meilleurs grains de café du monde entier, que nous torréfions selon des méthodes traditionnelles transmises de génération en génération. Cette expertise nous permet d\'offrir à nos clients un café d\'exception, riche en arômes et en saveurs.',
    'history.content3': 'Aujourd\'hui, FAMICO continue d\'innover tout en préservant ses valeurs fondamentales : qualité, authenticité et respect de la tradition. Notre engagement envers l\'excellence nous guide dans chaque étape de notre processus de production.',

    // Distributor
    'distributor.title': 'Devenir distributeur FAMICO',
    'distributor.description': 'Rejoignez le réseau FAMICO et proposez un café de qualité à vos clients.',
    'distributor.descriptionEn': 'Become a FAMICO distributor and grow your business with premium coffee.',
    'distributor.companyName': 'Nom de l\'entreprise',
    'distributor.fullName': 'Nom & Prénom',
    'distributor.email': 'Email',
    'distributor.phone': 'Téléphone',
    'distributor.location': 'Pays / Ville',
    'distributor.activity': 'Type d\'activité',
    'distributor.message': 'Message',
    'distributor.messagePlaceholder': 'Parlez-nous de votre projet...',
    'distributor.submit': 'Envoyer la demande',
    'distributor.select': 'Sélectionner',
    'distributor.cafe': 'Café / Coffee shop',
    'distributor.hotel': 'Hôtel / Restaurant',
    'distributor.office': 'Bureau / Entreprise',
    'distributor.reseller': 'Revendeur / Distributeur',
    'distributor.other': 'Autre',

    // Location
    'location.title': 'FAMICO Factory',
    'location.description': 'Retrouvez notre site de production et nos bureaux.',
    'location.descriptionEn': 'Find our production site and offices.',

    // Footer
    'footer.navigation': 'Navigation',
    'footer.information': 'Information',
    'footer.paymentMethods': 'Moyens de paiement',
    'footer.followUs': 'Suivez-nous',
    'footer.privacyPolicy': 'Politique de confidentialité',
    'footer.cookiePolicy': 'Politique des cookies',
    'footer.termsOfService': 'Conditions d\'utilisation',
    'footer.sustainability': 'Développement durable',
    'footer.copyright': '© 2024 FAMICO Group. Tous droits réservés.',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.newProducts': 'New Products',
    'nav.moments': 'Moments',
    'nav.distributor': 'Become Distributor',
    'nav.location': 'Location',
    'nav.history': 'Our History',
    'nav.shop': 'Shop',

    // Hero
    'hero.title': 'COFFEE',
    'hero.subtitle': 'The Excellence of Algerian Coffee',
    'hero.description': 'Since 1973, we have been passionately roasting authentic, intense and refined coffee for true taste lovers.',
    'hero.discoverProducts': 'Discover our products',
    'hero.ourHistory': 'Our history',

    // Products
    'products.title': 'FAMICO SHOP',
    'products.description': 'Discover the selection of FAMICO coffees, carefully roasted to offer exceptional quality and taste. Order easily online and receive your coffee directly at home.',
    'products.accessShop': 'ACCESS THE SHOP',

    // New Products
    'newProducts.title': 'discover the new famico product',

    // Moments
    'moments.title': 'FAMICO Moments',
    'moments.description': 'Every cup of FAMICO coffee enhances your everyday moments.',
    'moments.descriptionEn': 'Chaque tasse de café FAMICO accompagne vos instants du quotidien.',
    'moments.atHome': 'At home',
    'moments.atCafe': 'At the coffee shop',
    'moments.atWork': 'At work',
    'moments.sharedMoments': 'Shared moments',
    'moments.artOfCoffee': 'The art of coffee',
    'moments.craftsmanship': 'FAMICO craftsmanship',

    // History
    'history.title': 'Our History',
    'history.subtitle': 'Over 50 years of excellence',
    'history.description': 'Since 1973, FAMICO has perpetuated the tradition of Algerian coffee with passion and expertise.',
    'history.content1': 'Founded in 1973, FAMICO was born from a passion for authentic, quality coffee. Our family business has grown over the decades to become a reference in the art of roasting in Algeria.',
    'history.content2': 'We carefully select the best coffee beans from around the world, which we roast using traditional methods passed down from generation to generation. This expertise allows us to offer our customers exceptional coffee, rich in aromas and flavors.',
    'history.content3': 'Today, FAMICO continues to innovate while preserving its fundamental values: quality, authenticity and respect for tradition. Our commitment to excellence guides us in every step of our production process.',

    // Distributor
    'distributor.title': 'Become a FAMICO distributor',
    'distributor.description': 'Join the FAMICO network and offer quality coffee to your customers.',
    'distributor.descriptionEn': 'Rejoignez le réseau FAMICO et proposez un café de qualité à vos clients.',
    'distributor.companyName': 'Company name',
    'distributor.fullName': 'Full Name',
    'distributor.email': 'Email',
    'distributor.phone': 'Phone',
    'distributor.location': 'Country / City',
    'distributor.activity': 'Type of activity',
    'distributor.message': 'Message',
    'distributor.messagePlaceholder': 'Tell us about your project...',
    'distributor.submit': 'Send request',
    'distributor.select': 'Select',
    'distributor.cafe': 'Café / Coffee shop',
    'distributor.hotel': 'Hotel / Restaurant',
    'distributor.office': 'Office / Company',
    'distributor.reseller': 'Reseller / Distributor',
    'distributor.other': 'Other',

    // Location
    'location.title': 'FAMICO Factory',
    'location.description': 'Find our production site and offices.',
    'location.descriptionEn': 'Retrouvez notre site de production et nos bureaux.',

    // Footer
    'footer.navigation': 'Navigation',
    'footer.information': 'Information',
    'footer.paymentMethods': 'Payment Methods',
    'footer.followUs': 'Follow Us',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.cookiePolicy': 'Cookie Policy',
    'footer.termsOfService': 'Terms of Service',
    'footer.sustainability': 'Sustainability',
    'footer.copyright': '© 2024 FAMICO Group. All rights reserved.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};