import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        contact: 'Contact',
        admin: 'Admin Panel',
        signIn: 'Sign In',
        signOut: 'Sign Out'
      },
      
      // Common
      common: {
        loading: 'Loading',
        save: 'Save',
        cancel: 'Cancel',
        edit: 'Edit',
        delete: 'Delete',
        view: 'View',
        create: 'Create',
        update: 'Update',
        submit: 'Submit',
        close: 'Close',
        back: 'Back',
        next: 'Next',
        previous: 'Previous',
        search: 'Search',
        filter: 'Filter',
        all: 'All',
        featured: 'Featured',
        demo: 'Demo',
        code: 'Code',
        viewDemo: 'View Demo',
        viewCode: 'View Code',
        downloadResume: 'Download Resume',
        sendMessage: 'Send Message',
        readMore: 'Read More',
        showLess: 'Show Less'
      },

      // Home Page
      home: {
        heroTitle: 'Creative Developer',
        heroSubtitle: 'Transforming ideas into exceptional digital experiences with modern technologies and innovative solutions.',
        viewMyWork: 'View My Work',
        skillsTitle: 'Technologies I Work With',
        skillsSubtitle: 'Leveraging cutting-edge technologies to build scalable, performant, and user-friendly applications.'
      },

      // About Page
      about: {
        title: 'About Me',
        subtitle: 'Passionate full-stack developer with a love for creating exceptional digital experiences that make a difference in people\'s lives.',
        greeting: 'Hi, I\'m a Creative Developer',
        description1: 'With over 5 years of experience in web development, I specialize in creating modern, responsive, and user-friendly applications. I\'m passionate about clean code, innovative solutions, and continuous learning.',
        description2: 'My journey started with a curiosity about how websites work, and it has evolved into a career focused on building digital experiences that solve real-world problems. I believe in the power of technology to make life better and more efficient.',
        description3: 'When I\'m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.',
        skillsTitle: 'Skills & Expertise',
        skillsSubtitle: 'A comprehensive toolkit for building modern web applications and solving complex problems.',
        stats: {
          projectsCompleted: 'Projects Completed',
          happyClients: 'Happy Clients',
          yearsExperience: 'Years Experience',
          cupsOfCoffee: 'Cups of Coffee'
        },
        skillCategories: {
          frontend: 'Frontend',
          backend: 'Backend',
          tools: 'Tools',
          softSkills: 'Soft Skills'
        }
      },

      // Projects Page
      projects: {
        title: 'My Projects',
        subtitle: 'A collection of projects showcasing my expertise in modern web development, from interactive applications to complex systems.',
        projectCount: '{{count}} project',
        projectCount_plural: '{{count}} projects',
        noProjects: 'No projects found in this category.',
        categories: {
          web: 'Web Development',
          mobile: 'Mobile App',
          desktop: 'Desktop App',
          api: 'API/Backend',
          design: 'Design',
          other: 'Other'
        }
      },

      // Contact Page
      contact: {
        title: 'Get In Touch',
        subtitle: 'Have a project in mind or just want to chat? I\'d love to hear from you. Send me a message and I\'ll respond as soon as possible.',
        form: {
          title: 'Send Message',
          fullName: 'Full Name',
          emailAddress: 'Email Address',
          subject: 'Subject',
          message: 'Message',
          namePlaceholder: 'John Doe',
          emailPlaceholder: 'john@example.com',
          subjectPlaceholder: 'Project Inquiry',
          messagePlaceholder: 'Tell me about your project...'
        },
        info: {
          title: 'Contact Information',
          subtitle: 'Feel free to reach out through any of these channels. I\'m always excited to discuss new opportunities and interesting projects.',
          location: 'Location',
          phone: 'Phone',
          email: 'Email',
          responseTime: 'Response Time',
          locationValue: 'San Francisco, CA',
          locationDesc: 'Available for remote work worldwide',
          phoneValue: '+1 (555) 123-4567',
          phoneDesc: 'Mon-Fri from 8am to 5pm PST',
          emailValue: 'hello@portfolio.com',
          emailDesc: 'Send me an email anytime!',
          responseTimeValue: '24 hours',
          responseTimeDesc: 'Average response time',
          basedIn: 'Based in San Francisco',
          availableFor: 'Available for remote work and local meetups'
        },
        success: 'Message sent successfully! I\'ll get back to you soon.',
        error: 'Failed to send message. Please try again.'
      },

      // Auth Pages
      auth: {
        login: {
          title: 'Welcome Back',
          subtitle: 'Sign in to access your admin panel',
          email: 'Email Address',
          password: 'Password',
          emailPlaceholder: 'admin@example.com',
          passwordPlaceholder: 'Enter your password',
          signIn: 'Sign In',
          noAccount: 'Don\'t have an account?',
          signUp: 'Sign up',
          demoCredentials: 'Demo Credentials',
          demoNote: 'Use these credentials to test the admin panel',
          welcomeBack: 'Welcome back!'
        },
        signup: {
          title: 'Create Account',
          subtitle: 'Sign up to get admin access',
          email: 'Email Address',
          password: 'Password',
          confirmPassword: 'Confirm Password',
          emailPlaceholder: 'your@email.com',
          passwordPlaceholder: 'Create a password',
          confirmPasswordPlaceholder: 'Confirm your password',
          createAccount: 'Create Account',
          hasAccount: 'Already have an account?',
          signIn: 'Sign in',
          success: 'Account created successfully! Please check your email to verify your account.'
        }
      },

      // Admin Panel
      admin: {
        dashboard: {
          title: 'Admin Dashboard',
          subtitle: 'Manage your portfolio content and monitor site performance',
          tabs: {
            overview: 'Overview',
            projects: 'Projects',
            messages: 'Messages',
            settings: 'Settings'
          },
          stats: {
            totalProjects: 'Total Projects',
            messages: 'Messages',
            visitors: 'Visitors',
            pageViews: 'Page Views'
          },
          recentProjects: 'Recent Projects',
          addProject: 'Add Project',
          manageProjects: 'Manage Projects',
          addNewProject: 'Add New Project',
          contactMessages: 'Contact Messages',
          siteSettings: 'Site Settings',
          noProjectsYet: 'No projects yet',
          createFirstProject: 'Create your first project to get started.',
          messageManagement: 'Message management interface will be implemented here.',
          siteSettingsInterface: 'Site settings interface will be implemented here.'
        },
        projects: {
          form: {
            title: 'Add New Project',
            editTitle: 'Edit Project',
            projectTitle: 'Project Title',
            category: 'Category',
            technologies: 'Technologies (comma-separated)',
            featuredProject: 'Featured Project',
            demoUrl: 'Demo URL (optional)',
            githubUrl: 'GitHub URL (optional)',
            imageUrl: 'Image URL (optional)',
            imagePreview: 'Image Preview',
            suggestedImages: 'Suggested Images',
            shortDescription: 'Short Description',
            detailedContent: 'Detailed Content (optional)',
            titlePlaceholder: 'My Awesome Project',
            technologiesPlaceholder: 'React, TypeScript, Tailwind CSS',
            demoUrlPlaceholder: 'https://myproject.com',
            githubUrlPlaceholder: 'https://github.com/username/repo',
            imageUrlPlaceholder: 'https://example.com/image.jpg',
            descriptionPlaceholder: 'Brief description of your project...',
            contentPlaceholder: 'Detailed description, features, technical details...',
            createProject: 'Create Project',
            updateProject: 'Update Project',
            created: 'Project created successfully',
            updated: 'Project updated successfully',
            createError: 'Failed to create project',
            updateError: 'Failed to update project'
          },
          list: {
            created: 'Created',
            updated: 'Updated',
            viewDetails: 'View Details',
            editProject: 'Edit Project',
            deleteProject: 'Delete Project',
            clickToConfirm: 'Click again to confirm',
            deleted: 'Project deleted successfully',
            deleteError: 'Failed to delete project'
          },
          view: {
            category: 'Category',
            created: 'Created',
            updated: 'Updated',
            description: 'Description',
            detailedContent: 'Detailed Content',
            technologiesUsed: 'Technologies Used',
            projectLinks: 'Project Links',
            status: 'Status',
            regular: 'Regular'
          }
        }
      },

      // Form Validation
      validation: {
        required: 'This field is required',
        email: 'Invalid email address',
        minLength: 'Must be at least {{min}} characters',
        maxLength: 'Must be no more than {{max}} characters',
        url: 'Must be a valid URL',
        passwordMatch: 'Passwords must match',
        nameMin: 'Name must be at least 2 characters',
        messageMin: 'Message must be at least 10 characters',
        titleMin: 'Title must be at least 3 characters',
        descriptionMin: 'Description must be at least 10 characters',
        technologiesRequired: 'At least one technology is required'
      },

      // Footer
      footer: {
        tagline: 'Crafting digital experiences with modern technologies and creative solutions.',
        quickLinks: 'Quick Links',
        connect: 'Connect',
        madeWith: 'Made with',
        and: 'and',
        react: 'React',
        allRightsReserved: 'All rights reserved.'
      }
    }
  },
  es: {
    translation: {
      // Navigation
      nav: {
        home: 'Inicio',
        about: 'Acerca de',
        projects: 'Proyectos',
        contact: 'Contacto',
        admin: 'Panel de Admin',
        signIn: 'Iniciar Sesión',
        signOut: 'Cerrar Sesión'
      },
      
      // Common
      common: {
        loading: 'Cargando',
        save: 'Guardar',
        cancel: 'Cancelar',
        edit: 'Editar',
        delete: 'Eliminar',
        view: 'Ver',
        create: 'Crear',
        update: 'Actualizar',
        submit: 'Enviar',
        close: 'Cerrar',
        back: 'Atrás',
        next: 'Siguiente',
        previous: 'Anterior',
        search: 'Buscar',
        filter: 'Filtrar',
        all: 'Todos',
        featured: 'Destacado',
        demo: 'Demo',
        code: 'Código',
        viewDemo: 'Ver Demo',
        viewCode: 'Ver Código',
        downloadResume: 'Descargar CV',
        sendMessage: 'Enviar Mensaje',
        readMore: 'Leer Más',
        showLess: 'Mostrar Menos'
      },

      // Home Page
      home: {
        heroTitle: 'Desarrollador Creativo',
        heroSubtitle: 'Transformando ideas en experiencias digitales excepcionales con tecnologías modernas y soluciones innovadoras.',
        viewMyWork: 'Ver Mi Trabajo',
        skillsTitle: 'Tecnologías con las que Trabajo',
        skillsSubtitle: 'Aprovechando tecnologías de vanguardia para construir aplicaciones escalables, eficientes y fáciles de usar.'
      },

      // About Page
      about: {
        title: 'Acerca de Mí',
        subtitle: 'Desarrollador full-stack apasionado con amor por crear experiencias digitales excepcionales que marcan la diferencia en la vida de las personas.',
        greeting: 'Hola, soy un Desarrollador Creativo',
        description1: 'Con más de 5 años de experiencia en desarrollo web, me especializo en crear aplicaciones modernas, responsivas y fáciles de usar. Me apasiona el código limpio, las soluciones innovadoras y el aprendizaje continuo.',
        description2: 'Mi viaje comenzó con curiosidad sobre cómo funcionan los sitios web, y ha evolucionado hacia una carrera enfocada en construir experiencias digitales que resuelven problemas del mundo real. Creo en el poder de la tecnología para hacer la vida mejor y más eficiente.',
        description3: 'Cuando no estoy programando, puedes encontrarme explorando nuevas tecnologías, contribuyendo a proyectos de código abierto, o compartiendo conocimiento con la comunidad de desarrolladores.',
        skillsTitle: 'Habilidades y Experiencia',
        skillsSubtitle: 'Un conjunto completo de herramientas para construir aplicaciones web modernas y resolver problemas complejos.',
        stats: {
          projectsCompleted: 'Proyectos Completados',
          happyClients: 'Clientes Satisfechos',
          yearsExperience: 'Años de Experiencia',
          cupsOfCoffee: 'Tazas de Café'
        },
        skillCategories: {
          frontend: 'Frontend',
          backend: 'Backend',
          tools: 'Herramientas',
          softSkills: 'Habilidades Blandas'
        }
      },

      // Projects Page
      projects: {
        title: 'Mis Proyectos',
        subtitle: 'Una colección de proyectos que muestran mi experiencia en desarrollo web moderno, desde aplicaciones interactivas hasta sistemas complejos.',
        projectCount: '{{count}} proyecto',
        projectCount_plural: '{{count}} proyectos',
        noProjects: 'No se encontraron proyectos en esta categoría.',
        categories: {
          web: 'Desarrollo Web',
          mobile: 'App Móvil',
          desktop: 'App de Escritorio',
          api: 'API/Backend',
          design: 'Diseño',
          other: 'Otro'
        }
      },

      // Contact Page
      contact: {
        title: 'Ponte en Contacto',
        subtitle: '¿Tienes un proyecto en mente o solo quieres charlar? Me encantaría saber de ti. Envíame un mensaje y te responderé lo antes posible.',
        form: {
          title: 'Enviar Mensaje',
          fullName: 'Nombre Completo',
          emailAddress: 'Dirección de Email',
          subject: 'Asunto',
          message: 'Mensaje',
          namePlaceholder: 'Juan Pérez',
          emailPlaceholder: 'juan@ejemplo.com',
          subjectPlaceholder: 'Consulta de Proyecto',
          messagePlaceholder: 'Cuéntame sobre tu proyecto...'
        },
        info: {
          title: 'Información de Contacto',
          subtitle: 'No dudes en contactarme a través de cualquiera de estos canales. Siempre estoy emocionado de discutir nuevas oportunidades y proyectos interesantes.',
          location: 'Ubicación',
          phone: 'Teléfono',
          email: 'Email',
          responseTime: 'Tiempo de Respuesta',
          locationValue: 'San Francisco, CA',
          locationDesc: 'Disponible para trabajo remoto en todo el mundo',
          phoneValue: '+1 (555) 123-4567',
          phoneDesc: 'Lun-Vie de 8am a 5pm PST',
          emailValue: 'hello@portfolio.com',
          emailDesc: '¡Envíame un email cuando quieras!',
          responseTimeValue: '24 horas',
          responseTimeDesc: 'Tiempo promedio de respuesta',
          basedIn: 'Basado en San Francisco',
          availableFor: 'Disponible para trabajo remoto y reuniones locales'
        },
        success: '¡Mensaje enviado exitosamente! Te responderé pronto.',
        error: 'Error al enviar el mensaje. Por favor intenta de nuevo.'
      },

      // Auth Pages
      auth: {
        login: {
          title: 'Bienvenido de Vuelta',
          subtitle: 'Inicia sesión para acceder a tu panel de administración',
          email: 'Dirección de Email',
          password: 'Contraseña',
          emailPlaceholder: 'admin@ejemplo.com',
          passwordPlaceholder: 'Ingresa tu contraseña',
          signIn: 'Iniciar Sesión',
          noAccount: '¿No tienes una cuenta?',
          signUp: 'Regístrate',
          demoCredentials: 'Credenciales de Demo',
          demoNote: 'Usa estas credenciales para probar el panel de administración',
          welcomeBack: '¡Bienvenido de vuelta!'
        },
        signup: {
          title: 'Crear Cuenta',
          subtitle: 'Regístrate para obtener acceso de administrador',
          email: 'Dirección de Email',
          password: 'Contraseña',
          confirmPassword: 'Confirmar Contraseña',
          emailPlaceholder: 'tu@email.com',
          passwordPlaceholder: 'Crear una contraseña',
          confirmPasswordPlaceholder: 'Confirma tu contraseña',
          createAccount: 'Crear Cuenta',
          hasAccount: '¿Ya tienes una cuenta?',
          signIn: 'Iniciar sesión',
          success: '¡Cuenta creada exitosamente! Por favor revisa tu email para verificar tu cuenta.'
        }
      },

      // Admin Panel
      admin: {
        dashboard: {
          title: 'Panel de Administración',
          subtitle: 'Gestiona el contenido de tu portafolio y monitorea el rendimiento del sitio',
          tabs: {
            overview: 'Resumen',
            projects: 'Proyectos',
            messages: 'Mensajes',
            settings: 'Configuración'
          },
          stats: {
            totalProjects: 'Total de Proyectos',
            messages: 'Mensajes',
            visitors: 'Visitantes',
            pageViews: 'Vistas de Página'
          },
          recentProjects: 'Proyectos Recientes',
          addProject: 'Agregar Proyecto',
          manageProjects: 'Gestionar Proyectos',
          addNewProject: 'Agregar Nuevo Proyecto',
          contactMessages: 'Mensajes de Contacto',
          siteSettings: 'Configuración del Sitio',
          noProjectsYet: 'Aún no hay proyectos',
          createFirstProject: 'Crea tu primer proyecto para comenzar.',
          messageManagement: 'La interfaz de gestión de mensajes se implementará aquí.',
          siteSettingsInterface: 'La interfaz de configuración del sitio se implementará aquí.'
        },
        projects: {
          form: {
            title: 'Agregar Nuevo Proyecto',
            editTitle: 'Editar Proyecto',
            projectTitle: 'Título del Proyecto',
            category: 'Categoría',
            technologies: 'Tecnologías (separadas por comas)',
            featuredProject: 'Proyecto Destacado',
            demoUrl: 'URL de Demo (opcional)',
            githubUrl: 'URL de GitHub (opcional)',
            imageUrl: 'URL de Imagen (opcional)',
            imagePreview: 'Vista Previa de Imagen',
            suggestedImages: 'Imágenes Sugeridas',
            shortDescription: 'Descripción Corta',
            detailedContent: 'Contenido Detallado (opcional)',
            titlePlaceholder: 'Mi Proyecto Increíble',
            technologiesPlaceholder: 'React, TypeScript, Tailwind CSS',
            demoUrlPlaceholder: 'https://miproyecto.com',
            githubUrlPlaceholder: 'https://github.com/usuario/repo',
            imageUrlPlaceholder: 'https://ejemplo.com/imagen.jpg',
            descriptionPlaceholder: 'Breve descripción de tu proyecto...',
            contentPlaceholder: 'Descripción detallada, características, detalles técnicos...',
            createProject: 'Crear Proyecto',
            updateProject: 'Actualizar Proyecto',
            created: 'Proyecto creado exitosamente',
            updated: 'Proyecto actualizado exitosamente',
            createError: 'Error al crear el proyecto',
            updateError: 'Error al actualizar el proyecto'
          },
          list: {
            created: 'Creado',
            updated: 'Actualizado',
            viewDetails: 'Ver Detalles',
            editProject: 'Editar Proyecto',
            deleteProject: 'Eliminar Proyecto',
            clickToConfirm: 'Haz clic de nuevo para confirmar',
            deleted: 'Proyecto eliminado exitosamente',
            deleteError: 'Error al eliminar el proyecto'
          },
          view: {
            category: 'Categoría',
            created: 'Creado',
            updated: 'Actualizado',
            description: 'Descripción',
            detailedContent: 'Contenido Detallado',
            technologiesUsed: 'Tecnologías Utilizadas',
            projectLinks: 'Enlaces del Proyecto',
            status: 'Estado',
            regular: 'Regular'
          }
        }
      },

      // Form Validation
      validation: {
        required: 'Este campo es obligatorio',
        email: 'Dirección de email inválida',
        minLength: 'Debe tener al menos {{min}} caracteres',
        maxLength: 'No debe tener más de {{max}} caracteres',
        url: 'Debe ser una URL válida',
        passwordMatch: 'Las contraseñas deben coincidir',
        nameMin: 'El nombre debe tener al menos 2 caracteres',
        messageMin: 'El mensaje debe tener al menos 10 caracteres',
        titleMin: 'El título debe tener al menos 3 caracteres',
        descriptionMin: 'La descripción debe tener al menos 10 caracteres',
        technologiesRequired: 'Se requiere al menos una tecnología'
      },

      // Footer
      footer: {
        tagline: 'Creando experiencias digitales con tecnologías modernas y soluciones creativas.',
        quickLinks: 'Enlaces Rápidos',
        connect: 'Conectar',
        madeWith: 'Hecho con',
        and: 'y',
        react: 'React',
        allRightsReserved: 'Todos los derechos reservados.'
      }
    }
  },
  fr: {
    translation: {
      // Navigation
      nav: {
        home: 'Accueil',
        about: 'À Propos',
        projects: 'Projets',
        contact: 'Contact',
        admin: 'Panneau Admin',
        signIn: 'Se Connecter',
        signOut: 'Se Déconnecter'
      },
      
      // Common
      common: {
        loading: 'Chargement',
        save: 'Sauvegarder',
        cancel: 'Annuler',
        edit: 'Modifier',
        delete: 'Supprimer',
        view: 'Voir',
        create: 'Créer',
        update: 'Mettre à jour',
        submit: 'Soumettre',
        close: 'Fermer',
        back: 'Retour',
        next: 'Suivant',
        previous: 'Précédent',
        search: 'Rechercher',
        filter: 'Filtrer',
        all: 'Tous',
        featured: 'En Vedette',
        demo: 'Démo',
        code: 'Code',
        viewDemo: 'Voir la Démo',
        viewCode: 'Voir le Code',
        downloadResume: 'Télécharger CV',
        sendMessage: 'Envoyer Message',
        readMore: 'Lire Plus',
        showLess: 'Montrer Moins'
      },

      // Home Page
      home: {
        heroTitle: 'Développeur Créatif',
        heroSubtitle: 'Transformer les idées en expériences numériques exceptionnelles avec des technologies modernes et des solutions innovantes.',
        viewMyWork: 'Voir Mon Travail',
        skillsTitle: 'Technologies avec Lesquelles Je Travaille',
        skillsSubtitle: 'Exploiter les technologies de pointe pour construire des applications évolutives, performantes et conviviales.'
      },

      // About Page
      about: {
        title: 'À Propos de Moi',
        subtitle: 'Développeur full-stack passionné avec un amour pour créer des expériences numériques exceptionnelles qui font la différence dans la vie des gens.',
        greeting: 'Salut, je suis un Développeur Créatif',
        description1: 'Avec plus de 5 ans d\'expérience en développement web, je me spécialise dans la création d\'applications modernes, responsives et conviviales. Je suis passionné par le code propre, les solutions innovantes et l\'apprentissage continu.',
        description2: 'Mon parcours a commencé par une curiosité sur le fonctionnement des sites web, et a évolué vers une carrière axée sur la construction d\'expériences numériques qui résolvent des problèmes du monde réel. Je crois au pouvoir de la technologie pour améliorer et rendre la vie plus efficace.',
        description3: 'Quand je ne code pas, vous pouvez me trouver en train d\'explorer de nouvelles technologies, de contribuer à des projets open-source, ou de partager des connaissances avec la communauté des développeurs.',
        skillsTitle: 'Compétences et Expertise',
        skillsSubtitle: 'Une boîte à outils complète pour construire des applications web modernes et résoudre des problèmes complexes.',
        stats: {
          projectsCompleted: 'Projets Terminés',
          happyClients: 'Clients Satisfaits',
          yearsExperience: 'Années d\'Expérience',
          cupsOfCoffee: 'Tasses de Café'
        },
        skillCategories: {
          frontend: 'Frontend',
          backend: 'Backend',
          tools: 'Outils',
          softSkills: 'Compétences Douces'
        }
      },

      // Projects Page
      projects: {
        title: 'Mes Projets',
        subtitle: 'Une collection de projets présentant mon expertise en développement web moderne, des applications interactives aux systèmes complexes.',
        projectCount: '{{count}} projet',
        projectCount_plural: '{{count}} projets',
        noProjects: 'Aucun projet trouvé dans cette catégorie.',
        categories: {
          web: 'Développement Web',
          mobile: 'App Mobile',
          desktop: 'App Bureau',
          api: 'API/Backend',
          design: 'Design',
          other: 'Autre'
        }
      },

      // Contact Page
      contact: {
        title: 'Entrer en Contact',
        subtitle: 'Vous avez un projet en tête ou voulez juste discuter ? J\'aimerais avoir de vos nouvelles. Envoyez-moi un message et je répondrai dès que possible.',
        form: {
          title: 'Envoyer un Message',
          fullName: 'Nom Complet',
          emailAddress: 'Adresse Email',
          subject: 'Sujet',
          message: 'Message',
          namePlaceholder: 'Jean Dupont',
          emailPlaceholder: 'jean@exemple.com',
          subjectPlaceholder: 'Demande de Projet',
          messagePlaceholder: 'Parlez-moi de votre projet...'
        },
        info: {
          title: 'Informations de Contact',
          subtitle: 'N\'hésitez pas à me contacter par l\'un de ces canaux. Je suis toujours ravi de discuter de nouvelles opportunités et de projets intéressants.',
          location: 'Localisation',
          phone: 'Téléphone',
          email: 'Email',
          responseTime: 'Temps de Réponse',
          locationValue: 'San Francisco, CA',
          locationDesc: 'Disponible pour le travail à distance dans le monde entier',
          phoneValue: '+1 (555) 123-4567',
          phoneDesc: 'Lun-Ven de 8h à 17h PST',
          emailValue: 'hello@portfolio.com',
          emailDesc: 'Envoyez-moi un email à tout moment !',
          responseTimeValue: '24 heures',
          responseTimeDesc: 'Temps de réponse moyen',
          basedIn: 'Basé à San Francisco',
          availableFor: 'Disponible pour le travail à distance et les rencontres locales'
        },
        success: 'Message envoyé avec succès ! Je vous répondrai bientôt.',
        error: 'Échec de l\'envoi du message. Veuillez réessayer.'
      },

      // Auth Pages
      auth: {
        login: {
          title: 'Bon Retour',
          subtitle: 'Connectez-vous pour accéder à votre panneau d\'administration',
          email: 'Adresse Email',
          password: 'Mot de Passe',
          emailPlaceholder: 'admin@exemple.com',
          passwordPlaceholder: 'Entrez votre mot de passe',
          signIn: 'Se Connecter',
          noAccount: 'Vous n\'avez pas de compte ?',
          signUp: 'S\'inscrire',
          demoCredentials: 'Identifiants de Démo',
          demoNote: 'Utilisez ces identifiants pour tester le panneau d\'administration',
          welcomeBack: 'Bon retour !'
        },
        signup: {
          title: 'Créer un Compte',
          subtitle: 'Inscrivez-vous pour obtenir un accès administrateur',
          email: 'Adresse Email',
          password: 'Mot de Passe',
          confirmPassword: 'Confirmer le Mot de Passe',
          emailPlaceholder: 'votre@email.com',
          passwordPlaceholder: 'Créer un mot de passe',
          confirmPasswordPlaceholder: 'Confirmez votre mot de passe',
          createAccount: 'Créer un Compte',
          hasAccount: 'Vous avez déjà un compte ?',
          signIn: 'Se connecter',
          success: 'Compte créé avec succès ! Veuillez vérifier votre email pour vérifier votre compte.'
        }
      },

      // Admin Panel
      admin: {
        dashboard: {
          title: 'Tableau de Bord Admin',
          subtitle: 'Gérez le contenu de votre portfolio et surveillez les performances du site',
          tabs: {
            overview: 'Aperçu',
            projects: 'Projets',
            messages: 'Messages',
            settings: 'Paramètres'
          },
          stats: {
            totalProjects: 'Total des Projets',
            messages: 'Messages',
            visitors: 'Visiteurs',
            pageViews: 'Vues de Page'
          },
          recentProjects: 'Projets Récents',
          addProject: 'Ajouter un Projet',
          manageProjects: 'Gérer les Projets',
          addNewProject: 'Ajouter un Nouveau Projet',
          contactMessages: 'Messages de Contact',
          siteSettings: 'Paramètres du Site',
          noProjectsYet: 'Pas encore de projets',
          createFirstProject: 'Créez votre premier projet pour commencer.',
          messageManagement: 'L\'interface de gestion des messages sera implémentée ici.',
          siteSettingsInterface: 'L\'interface des paramètres du site sera implémentée ici.'
        },
        projects: {
          form: {
            title: 'Ajouter un Nouveau Projet',
            editTitle: 'Modifier le Projet',
            projectTitle: 'Titre du Projet',
            category: 'Catégorie',
            technologies: 'Technologies (séparées par des virgules)',
            featuredProject: 'Projet en Vedette',
            demoUrl: 'URL de Démo (optionnel)',
            githubUrl: 'URL GitHub (optionnel)',
            imageUrl: 'URL d\'Image (optionnel)',
            imagePreview: 'Aperçu de l\'Image',
            suggestedImages: 'Images Suggérées',
            shortDescription: 'Description Courte',
            detailedContent: 'Contenu Détaillé (optionnel)',
            titlePlaceholder: 'Mon Projet Génial',
            technologiesPlaceholder: 'React, TypeScript, Tailwind CSS',
            demoUrlPlaceholder: 'https://monprojet.com',
            githubUrlPlaceholder: 'https://github.com/utilisateur/repo',
            imageUrlPlaceholder: 'https://exemple.com/image.jpg',
            descriptionPlaceholder: 'Brève description de votre projet...',
            contentPlaceholder: 'Description détaillée, fonctionnalités, détails techniques...',
            createProject: 'Créer le Projet',
            updateProject: 'Mettre à Jour le Projet',
            created: 'Projet créé avec succès',
            updated: 'Projet mis à jour avec succès',
            createError: 'Échec de la création du projet',
            updateError: 'Échec de la mise à jour du projet'
          },
          list: {
            created: 'Créé',
            updated: 'Mis à Jour',
            viewDetails: 'Voir les Détails',
            editProject: 'Modifier le Projet',
            deleteProject: 'Supprimer le Projet',
            clickToConfirm: 'Cliquez à nouveau pour confirmer',
            deleted: 'Projet supprimé avec succès',
            deleteError: 'Échec de la suppression du projet'
          },
          view: {
            category: 'Catégorie',
            created: 'Créé',
            updated: 'Mis à Jour',
            description: 'Description',
            detailedContent: 'Contenu Détaillé',
            technologiesUsed: 'Technologies Utilisées',
            projectLinks: 'Liens du Projet',
            status: 'Statut',
            regular: 'Régulier'
          }
        }
      },

      // Form Validation
      validation: {
        required: 'Ce champ est requis',
        email: 'Adresse email invalide',
        minLength: 'Doit contenir au moins {{min}} caractères',
        maxLength: 'Ne doit pas dépasser {{max}} caractères',
        url: 'Doit être une URL valide',
        passwordMatch: 'Les mots de passe doivent correspondre',
        nameMin: 'Le nom doit contenir au moins 2 caractères',
        messageMin: 'Le message doit contenir au moins 10 caractères',
        titleMin: 'Le titre doit contenir au moins 3 caractères',
        descriptionMin: 'La description doit contenir au moins 10 caractères',
        technologiesRequired: 'Au moins une technologie est requise'
      },

      // Footer
      footer: {
        tagline: 'Créer des expériences numériques avec des technologies modernes et des solutions créatives.',
        quickLinks: 'Liens Rapides',
        connect: 'Se Connecter',
        madeWith: 'Fait avec',
        and: 'et',
        react: 'React',
        allRightsReserved: 'Tous droits réservés.'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;