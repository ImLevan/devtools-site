export interface Tool {
  title: string;
  description: string;
  icon: string;
  imgtitle: string;
  href: string;
  tooltype: string;
}

export const allTools: Tool[] = [
  {
    title: "ILoveImg",
    description: "Online tool for image editing, converter, changing formats, image compressor.",
    icon: "../src/assets/img/iloveimg.svg",
    imgtitle: "iloveimg",
    href: 'https://www.iloveimg.com/es',
    tooltype: 'images'
  },
  {
    title: "Tabler Icons",
    description: "Free and open source icons designed to make your website or app attractive, visually consistent and simply beautiful.",
    icon: "../src/assets/img/tabler.ico",
    imgtitle: "tabler-icons",
    href: 'https://tabler.io/icons',
    tooltype: 'icons'
  },
  {
    title: "ILovePdf",
    description: "Every tool you need to use PDFs, at your fingertips. All are 100% FREE and easy to use! Merge, split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks.",
    icon: "../src/assets/img/ilovepdf.svg",
    imgtitle: "ilovepdf",
    href: 'https://www.ilovepdf.com/',
    tooltype: 'media-files'
  },
  {
    title: "Online-convert",
    description: "Free online file converter, convert media files online from one format into another.",
    icon: "../src/assets/img/oc.svg",
    imgtitle: "online-convert",
    href: 'https://www.online-convert.com/',
    tooltype: 'media-files'
  },
  {
    title: "Radix-ui",
    description: "An open source component library optimized for fast development, easy maintenance, and accessibility. Just import and go—no configuration required.",
    icon: "../src/assets/img/radix-ui.svg",
    imgtitle: "radix-ui",
    href: 'https://www.radix-ui.com/',
    tooltype: 'components-ui'
  },
  {
    title: "Material UI",
    description: "Material UI is an open-source React component library that implements Google's Material Design. It's comprehensive and can be used in production out of the box.",
    icon: "../src/assets/img/mui.svg",
    imgtitle: "mui",
    href: 'https://mui.com/material-ui/',
    tooltype: 'components-ui'
  },
  {
    title: "Park UI",
    description: "Park UI, beautifully designed components built for your choice of JS and CSS frameworks.",
    icon: "../src/assets/img/park-ui.svg",
    imgtitle: "park-ui",
    href: 'https://park-ui.com/',
    tooltype: 'components-ui'
  },
  {
    title: "Quicktype",
    description: "Generate models and serializers from JSON, schema, and GraphQL for working with data quickly & safely in any programming language.",
    icon: "../src/assets/img/quicktype.svg",
    imgtitle: "quicktype",
    href: 'https://quicktype.io/',
    tooltype: 'code'
  },
  {
    title: "UIVerse",
    description: "Universe of UI; Hundreds of Open Source UI elements. Create, share, and use beautiful custom elements made with CSS or Tailwind.",
    icon: "../src/assets/img/uiverse.svg",
    imgtitle: "uiverse",
    href: 'https://uiverse.io/',
    tooltype: 'components-ui'
  },
  {
    title: "Readme.so",
    description: "Our simple editor allows you to quickly add and customize all the sections you need for your project's readme.",
    icon: "../src/assets/img/readme-so.svg",
    imgtitle: "readme-so",
    href: 'https://readme.so/',
    tooltype: 'code'
  },
  {
    title: "Squoosh",
    description: "Squoosh is the ultimate image optimizer that allows you to compress and compare images with different codecs in your browser.",
    icon: "../src/assets/img/squoosh.svg",
    imgtitle: "squoosh",
    href: 'https://squoosh.app/',
    tooltype: 'images'
  },
  {
    title: "Coolors",
    description: "Create the perfect palette or get inspired by thousands of beautiful color schemes.",
    icon: "../src/assets/img/colors.svg",
    imgtitle: "coolors",
    href: 'https://coolors.co/',
    tooltype: 'colors'
  },
  {
    title: "Image extractor",
    description: "Find all relevant images on an website. This includes background images, dynamically loaded or embedded images and SVG elements.",
    icon: "../src/assets/img/img-extractor.svg",
    imgtitle: "extract",
    href: 'https://extract.pics/',
    tooltype: 'images'
  },
  {
    title: "Photopea",
    description: "Photopea is a web-based photo and graphics editor. It is used for image editing, illustrations, web design or conversion between different image formats. Photopea is an online advertising-supported software.",
    icon: "../src/assets/img/photopea.svg",
    imgtitle: "photopea",
    href: 'https://www.photopea.com/',
    tooltype: 'images'
  },
  {
    title: "Freepik",
    description: "Freepik is an image bank with its own production company that offers more than 10 million graphic resources.",
    icon: "../src/assets/img/freepik.svg",
    imgtitle: "freepik",
    href: 'https://www.freepik.com',
    tooltype: 'images'
  },
  {
    title: "Web code tools",
    description: "The best code generators for developers. Code generators for front-end development.",
    icon: "../src/assets/img/web-code-tools.svg",
    imgtitle: "web-code-tools",
    href: 'https://webcode.tools/',
    tooltype: 'code'
  },
  {
    title: "Cool Backgrounds",
    description: "Cool Backgrounds is a collection of tools to create compelling, colorful images for blogs, social media, and websites.",
    icon: "../src/assets/img/cool-backgrounds.svg",
    imgtitle: "cool-backgrounds",
    href: 'https://coolbackgrounds.io/',
    tooltype: 'images'
  },
  {
    title: "CSS Gradient",
    description: "CSS Gradient is a designstripe project that lets you create free gradient backgrounds for your website.",
    icon: "../src/assets/img/css-gradient.svg",
    imgtitle: "css-gradient",
    href: 'https://cssgradient.io/',
    tooltype: 'code'
  },
  {
    title: "UptimeRobot",
    description: "The world's leading uptime monitoring service. Be the first to know that your website is down!.",
    icon: "../src/assets/img/uptimerobot.svg",
    imgtitle: "uptimerobot",
    href: 'https://uptimerobot.com/',
    tooltype: 'web-monitor'
  },
  {
    title: "Neon",
    description: "Neon is Serverless Postgres built for the cloud. Neon separates compute and storage to offer modern developer features such as autoscaling, branching, bottomless storage, and more.",
    icon: "../src/assets/img/neon.svg",
    imgtitle: "neontech",
    href: 'https://neon.tech/',
    tooltype: 'deploys'
  },
  {
    title: "Railway",
    description: "Railway is the cloud for building, shipping, and monitoring applications. No Platform Engineer required. Instant Deployments, Effortless Scale.",
    icon: "../src/assets/img/railway.svg",
    imgtitle: "railway",
    href: 'https://railway.app/',
    tooltype: 'deploys'
  },
  {
    title: "Fl0",
    description: "Deploy backend applications and databases in minutes.Powerful, fully managed deployment platform.",
    icon: "../src/assets/img/fl0.svg",
    imgtitle: "fl0",
    href: 'https://www.fl0.com/',
    tooltype: 'deploys'
  },
  {
    title: "Vercel",
    description: "Vercel is the Frontend Cloud. Build, scale, and secure a faster, personalized web. Develop with your favorite tools. ",
    icon: "../src/assets/img/vercel.svg",
    imgtitle: "vercel",
    href: 'https://vercel.com/',
    tooltype: 'deploys'
  },
  {
    title: "Fly.io",
    description: "Fly.io transforms containers into micro-VMs that run on our hardware in 30+ regions on six continents.",
    icon: "../src/assets/img/fly.svg",
    imgtitle: "fly.io",
    href: 'https://fly.io/',
    tooltype: 'deploys'
  },
  {
    title: "PlanetScale",
    description: "PlanetScale is a MySQL-compatible database that brings you scale, performance, and reliability — without sacrificing developer experience.",
    icon: "../src/assets/img/planetscale.svg",
    imgtitle: "planetscale",
    href: 'https://planetscale.com/',
    tooltype: 'deploys'
  },
  {
    title: "React-Symbols",
    description: "React-Symbols is a library for React with the icons of the VSCode theme Symbols by Miguel Solorio. +100 files & folders icons.",
    icon: "../src/assets/img/react-symbols.svg",
    imgtitle: "react-symbols",
    href: 'https://react-symbols.vercel.app/',
    tooltype: 'icons'
  },
  {
    title: "Google Fonts",
    description: "Google Fonts is a computer font and web font service owned by Google. This includes free and open source font families, an interactive web directory for browsing the library",
    icon: "../src/assets/img/googlefonts.svg",
    imgtitle: "google-fonts",
    href: 'https://fonts.google.com/',
    tooltype: 'fonts'
  },
  {
    title: "Fontsource",
    description: "Fontsource is a collection of open-source fonts that are packaged into individual NPM packages for self-hosting in your web applications.",
    icon: "../src/assets/img/fontsource.svg",
    imgtitle: "fontsource",
    href: 'https://fontsource.org/',
    tooltype: 'fonts'
  },
  {
    title: "Render",
    description: "Render helps software teams ship products fast and at any scale. Build, deploy, and scale your apps with unparalleled ease from your first user to your billionth.",
    icon: "../src/assets/img/render.svg",
    imgtitle: "render",
    href: 'https://render.com/',
    tooltype: 'deploys'
  }
  // add more tools here
];
