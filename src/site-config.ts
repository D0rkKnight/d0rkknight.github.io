export const siteConfig = {
  author: 'Hanzen Shou',
  title: 'Hanzen\'s Portfolio',
  subtitle: 'Portfolio site for Hanzen Shou',
  description: 'A Portfolio site outlining some of my accomplishments and projects',
  image: {
    src: '/hero.jpg',
    alt: 'Website Main Image',
  },
  email: 'shouhanzen@gmail.com',
  socialLinks: [
    {
      text: 'GitHub',
      href: 'https://github.com/shouhanzen',
      icon: 'i-simple-icons-github',
      header: 'i-ri-github-line',
    },
    // {
    //   text: 'Twitter',
    //   href: '',
    //   icon: 'i-simple-icons-x',
    //   header: 'i-ri-twitter-x-line',
    // },
    {
      text: 'Linkedin',
      href: 'https://www.linkedin.com/in/hanzen-shou-36b130183/',
      icon: 'i-simple-icons-linkedin',
    },
    // {
    //   text: 'Instagram',
    //   href: '',
    //   icon: 'i-simple-icons-instagram',
    // },
    // {
    //   text: 'Youtube',
    //   href: '',
    //   icon: 'i-simple-icons-youtube',
    // },
  ],
  header: {
    logo: {
      src: '/favicon.svg',
      alt: 'Logo Image',
    },
    navLinks: [
      // {
      //   text: 'Blog',
      //   href: '/blog',
      // },
      // {
      //   text: 'Notes',
      //   href: '/blog/notes',
      // },
      // {
      //   text: 'Talks',
      //   href: '/blog/talks',
      // },
      // {
      //   text: 'Projects',
      //   href: '/projects',
      // },
    ],
  },
  page: {
    blogLinks: [
      {
        text: 'Blog',
        href: '/blog',
      },
      {
        text: 'Notes',
        href: '/blog/notes',
      },
      {
        text: 'Talks',
        href: '/blog/talks',
      },
    ],
  },
  footer: {
    navLinks: [
      {
        text: 'Posts Props',
        href: '/posts-props',
      },
      {
        text: 'Markdown Style',
        href: '/md-style',
      },
      // {
      //   text: 'View on Astro',
      //   href: 'https://astro.build/themes/details/vitesse-theme-for-astro/',
      // },
      {
        text: 'Theme GitHub Repository',
        href: 'https://github.com/kevinwong865/astro-theme-vitesse',
      },
    ],
  },
}

export default siteConfig
