type Translation = {
    de: Record<string, string>;
    en: Record<string, string>;
};

const PageLayoutTranslation: Translation = {
    de: {
        // Navbar
        'nav.home': 'Startseite',
        'nav.projects': 'Projekte',
        'nav.news': 'Neuigkeiten',
        'nav.contact': 'Kontakt',


        // Footer
        'footer.useful_links': 'Nützliche Links',
        'footer.help': 'Hilfe',
        'footer.imprint': 'Impressum',
        'footer.privacy_policy': 'Datenschutzerklärung',
    },
    en: {
        // Navbar
        'nav.home': 'Home',
        'nav.projects': 'Projects',
        'nav.news': 'News',
        'nav.contact': 'Contact',


        // Footer
        'footer.useful_links': 'Useful links',
        'footer.help': 'Help',
        'footer.imprint': 'Imprint',
        'footer.privacy_policy': 'Privacy policy',
    },
};

export default PageLayoutTranslation;