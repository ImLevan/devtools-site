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
    icon: "/iloveimg.svg",
    imgtitle: "iloveimg",
    href: 'https://www.iloveimg.com/es',
    tooltype: 'images'
  },
  {
    title: "Tabler Icons",
    description: "Free and open source icons designed to make your website or app attractive, visually consistent and simply beautiful.",
    icon: "/tabler.ico",
    imgtitle: "tabler-icons",
    href: 'https://tabler.io/icons',
    tooltype: 'icons'
  },
  {
    title: "ILovePdf",
    description: "Every tool you need to use PDFs, at your fingertips. All are 100% FREE and easy to use! Merge, split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks.",
    icon: "/ilovepdf.svg",
    imgtitle: "ilovepdf",
    href: 'https://www.ilovepdf.com/',
    tooltype: 'media-files'
  },
  {
    title: "Online-convert",
    description: "Free online file converter, convert media files online from one format into another.",
    icon: "/oc.svg",
    imgtitle: "online-convert",
    href: 'https://www.online-convert.com/',
    tooltype: 'media-files'
  },
  {
    title: "Radix-ui",
    description: "An open source component library optimized for fast development, easy maintenance, and accessibility. Just import and go—no configuration required.",
    icon: "/radix-ui.svg",
    imgtitle: "radix-ui",
    href: 'https://www.radix-ui.com/',
    tooltype: 'components-ui'
  },
  {
    title: "Material UI",
    description: "Material UI is an open-source React component library that implements Google's Material Design. It's comprehensive and can be used in production out of the box.",
    icon: "/mui.svg",
    imgtitle: "mui",
    href: 'https://mui.com/material-ui/',
    tooltype: 'components-ui'
  },
  {
    title: "Park UI",
    description: "Park UI, beautifully designed components built for your choice of JS and CSS frameworks.",
    icon: "/park-ui.svg",
    imgtitle: "park-ui",
    href: 'https://park-ui.com/',
    tooltype: 'components-ui'
  },
  {
    title: "Quicktype",
    description: "Generate models and serializers from JSON, schema, and GraphQL for working with data quickly & safely in any programming language.",
    icon: "/quicktype.svg",
    imgtitle: "quicktype",
    href: 'https://quicktype.io/',
    tooltype: 'code'
  },
  {
    title: "UIVerse",
    description: "Universe of UI; Hundreds of Open Source UI elements. Create, share, and use beautiful custom elements made with CSS or Tailwind.",
    icon: "/uiverse.svg",
    imgtitle: "uiverse",
    href: 'https://uiverse.io/',
    tooltype: 'components-ui'
  },
  {
    title: "Readme.so",
    description: "Our simple editor allows you to quickly add and customize all the sections you need for your project's readme.",
    icon: "/readme-so.svg",
    imgtitle: "readme-so",
    href: 'https://readme.so/',
    tooltype: 'code'
  },
  {
    title: "Squoosh",
    description: "Squoosh is the ultimate image optimizer that allows you to compress and compare images with different codecs in your browser.",
    icon: "/squoosh.svg",
    imgtitle: "squoosh",
    href: 'https://squoosh.app/',
    tooltype: 'images'
  },
  {
    title: "Coolors",
    description: "Create the perfect palette or get inspired by thousands of beautiful color schemes.",
    icon: "/colors.svg",
    imgtitle: "coolors",
    href: 'https://coolors.co/',
    tooltype: 'colors'
  },
  {
    title: "Image extractor",
    description: "Find all relevant images on an website. This includes background images, dynamically loaded or embedded images and SVG elements.",
    icon: "/img-extractor.svg",
    imgtitle: "extract",
    href: 'https://extract.pics/',
    tooltype: 'images'
  },
  {
    title: "Photopea",
    description: "Photopea is a web-based photo and graphics editor. It is used for image editing, illustrations, web design or conversion between different image formats. Photopea is an online advertising-supported software.",
    icon: "/photopea.svg",
    imgtitle: "photopea",
    href: 'https://www.photopea.com/',
    tooltype: 'images'
  },
  {
    title: "Freepik",
    description: "Freepik is an image bank with its own production company that offers more than 10 million graphic resources.",
    icon: "/freepik.svg",
    imgtitle: "freepik",
    href: 'https://www.freepik.com',
    tooltype: 'images'
  },
  {
    title: "Web code tools",
    description: "The best code generators for developers. Code generators for front-end development.",
    icon: "/web-code-tools.svg",
    imgtitle: "web-code-tools",
    href: 'https://webcode.tools/',
    tooltype: 'code'
  },
  {
    title: "Cool Backgrounds",
    description: "Cool Backgrounds is a collection of tools to create compelling, colorful images for blogs, social media, and websites.",
    icon: "/cool-backgrounds.svg",
    imgtitle: "cool-backgrounds",
    href: 'https://coolbackgrounds.io/',
    tooltype: 'images'
  },
  {
    title: "CSS Gradient",
    description: "CSS Gradient is a designstripe project that lets you create free gradient backgrounds for your website.",
    icon: "/css-gradient.svg",
    imgtitle: "css-gradient",
    href: 'https://cssgradient.io/',
    tooltype: 'code'
  },
  {
    title: "UptimeRobot",
    description: "The world's leading uptime monitoring service. Be the first to know that your website is down!.",
    icon: "/uptimerobot.svg",
    imgtitle: "uptimerobot",
    href: 'https://uptimerobot.com/',
    tooltype: 'web-monitor'
  },
  {
    title: "Neon",
    description: "Neon is Serverless Postgres built for the cloud. Neon separates compute and storage to offer modern developer features such as autoscaling, branching, bottomless storage, and more.",
    icon: "/neon.svg",
    imgtitle: "neontech",
    href: 'https://neon.tech/',
    tooltype: 'deploys'
  },
  {
    title: "Railway",
    description: "Railway is the cloud for building, shipping, and monitoring applications. No Platform Engineer required. Instant Deployments, Effortless Scale.",
    icon: "/railway.svg",
    imgtitle: "railway",
    href: 'https://railway.app/',
    tooltype: 'deploys'
  },
  {
    title: "Fl0",
    description: "Deploy backend applications and databases in minutes.Powerful, fully managed deployment platform.",
    icon: "/fl0.svg",
    imgtitle: "fl0",
    href: 'https://www.fl0.com/',
    tooltype: 'deploys'
  },
  {
    title: "Vercel",
    description: "Vercel is the Frontend Cloud. Build, scale, and secure a faster, personalized web. Develop with your favorite tools. ",
    icon: "/vercel.svg",
    imgtitle: "vercel",
    href: 'https://vercel.com/',
    tooltype: 'deploys'
  },
  {
    title: "Fly.io",
    description: "Fly.io transforms containers into micro-VMs that run on our hardware in 30+ regions on six continents.",
    icon: "/fly.svg",
    imgtitle: "fly.io",
    href: 'https://fly.io/',
    tooltype: 'deploys'
  },
  {
    title: "PlanetScale",
    description: "PlanetScale is a MySQL-compatible database that brings you scale, performance, and reliability — without sacrificing developer experience.",
    icon: "/planetscale.svg",
    imgtitle: "planetscale",
    href: 'https://planetscale.com/',
    tooltype: 'deploys'
  },
  {
    title: "React-Symbols",
    description: "React-Symbols is a library for React with the icons of the VSCode theme Symbols by Miguel Solorio. +100 files & folders icons.",
    icon: "/react-symbols.svg",
    imgtitle: "react-symbols",
    href: 'https://react-symbols.vercel.app/',
    tooltype: 'icons'
  },
  {
    title: "Google Fonts",
    description: "Google Fonts is a computer font and web font service owned by Google. This includes free and open source font families, an interactive web directory for browsing the library",
    icon: "/googlefonts.svg",
    imgtitle: "google-fonts",
    href: 'https://fonts.google.com/',
    tooltype: 'fonts'
  },
  {
    title: "Fontsource",
    description: "Fontsource is a collection of open-source fonts that are packaged into individual NPM packages for self-hosting in your web applications.",
    icon: "/fontsource.svg",
    imgtitle: "fontsource",
    href: 'https://fontsource.org/',
    tooltype: 'fonts'
  },
  {
    title: "Render",
    description: "Render helps software teams ship products fast and at any scale. Build, deploy, and scale your apps with unparalleled ease from your first user to your billionth.",
    icon: "/render.svg",
    imgtitle: "render",
    href: 'https://render.com/',
    tooltype: 'deploys'
  },
  {
    title: "Visual Studio Code",
    description: "Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications. Free. Built on open source. Runs everywhere.",
    icon: "/vscode.svg",
    imgtitle: "vscode",
    href: 'https://code.visualstudio.com/',
    tooltype: 'code-editors'
  },
  {
    title: "Sublime Text",
    description: "Sublime Text is a sophisticated text editor for code, markup and prose. You'll love the slick user interface, extraordinary features and amazing performance.",
    icon: "/sublime.svg",
    imgtitle: "sublimetext",
    href: 'https://www.sublimetext.com/',
    tooltype: 'code-editors'
  },
  {
    title: "Notepad++",
    description: "Notepad++ is a free source code editor and Notepad replacement that supports several languages. Running in the MS Windows environment, its use is governed by GNU General Public License.",
    icon: "/notepad.svg",
    imgtitle: "notepad",
    href: 'https://notepad-plus-plus.org/',
    tooltype: 'code-editors'
  },
  {
    title: "IntelliJ IDEA",
    description: "IntelliJ IDEA is undoubtedly the top-choice IDE for software developers. It makes Java and Kotlin development a more productive and enjoyable experience.",
    icon: "/intellij.svg",
    imgtitle: "intellij",
    href: 'https://www.jetbrains.com/idea/',
    tooltype: 'ides'
  },
  {
    title: "Android Studio",
    description: "Android Studio and SDK Tools — Get the official Integrated Development Environment (IDE) for Android app development.",
    icon: "/androidstudio.svg",
    imgtitle: "androidstudio",
    href: 'https://developer.android.com/studio?hl=es-419',
    tooltype: 'ides'
  },
  {
    title: "Eclipse IDE",
    description: "Eclipse is a software platform composed of a set of cross-platform open source programming tools for developing what the project calls 'Rich Client Applications'.",
    icon: "/eclipse.svg",
    imgtitle: "eclipse",
    href: 'https://eclipseide.org/',
    tooltype: 'ides'
  },
  {
    title: "Apache NetBeans",
    description: "NetBeans is a free integrated development environment, made primarily for the Java programming language.",
    icon: "/netbeans.svg",
    imgtitle: "netbeans",
    href: 'https://netbeans.apache.org/front/main/',
    tooltype: 'ides'
  },
  {
    title: "Postman",
    description: "Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster.",
    icon: "/postman.svg",
    imgtitle: "postman",
    href: 'https://www.postman.com/',
    tooltype: 'apis'
  },
  {
    title: "Insomnia REST",
    description: "Leading Open Source API Development Platform for HTTP, REST, GraphQL, gRPC, SOAP, and WebSockets.",
    icon: "/insomnia.svg",
    imgtitle: "insomnia",
    href: 'https://insomnia.rest/',
    tooltype: 'apis'
  },
  {
    title: "DBeaver",
    description: "It supports all popular SQL databases like MySQL, MariaDB, PostgreSQL, SQLite, Apache Family, and more.",
    icon: "/dbeaver.svg",
    imgtitle: "dbeaver",
    href: 'https://dbeaver.io/',
    tooltype: 'databases'
  },
  {
    title: "pgAdmin",
    description: "pgAdmin - PostgreSQL Tools for Windows, Mac, Linux and the Web",
    icon: "/pgadmin.svg",
    imgtitle: "pgadmin",
    href: 'https://www.pgadmin.org/',
    tooltype: 'databases'
  },
  {
    title: "bg.ibelick",
    description: "Collection of modern, background snippets. Ready-to-use, simply copy and paste into your next project. All snippets crafted with Tailwind CSS and Vanilla CSS for easy integration.",
    icon: "/bgibelick.ico",
    imgtitle: "bgibelick",
    href: 'https://bg.ibelick.com/',
    tooltype: 'images'
  },
  {
    title: "Shots",
    description: "Create amazing mockups. Craft beautiful presentations for your social media, website and more!",
    icon: "/shots-logo.png",
    imgtitle: "shots",
    href: 'https://shots.so/',
    tooltype: 'images'
  },
  {
    title: "Css loaders",
    description: "This is a library having a collection of different types of CSS loaders, spinners.",
    icon: "/css-loaders.png",
    imgtitle: "cssloaders",
    href: 'https://cssloaders.github.io/',
    tooltype: 'components-ui'
  },
  {
    title: "CODEPEN",
    description: "CodePen is a social development environment for front-end designers and developers. Build and deploy a website, show off your work, build test cases to learn and debug, and find inspiration.",
    icon: "/codepen.png",
    imgtitle: "codepen",
    href: 'https://codepen.io/',
    tooltype: 'code'
  },
  {
    title: "Flowbite",
    description: "Start developing with an open-source library of over 600+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.",
    icon: "/flowbite.svg",
    imgtitle: "flowbite",
    href: 'https://flowbite.com/',
    tooltype: 'components-ui'
  },
  {
    title: "animation.ibelick",
    description: "A curated collection of animations crafted exclusively with Tailwind CSS. Ready to integrate with a simple copy-paste.",
    icon: "/anim-ibelick.ico",
    imgtitle: "anim-ibelick",
    href: 'https://animation.ibelick.com/',
    tooltype: 'animations'
  },
  {
    title: "Tailwinds css animations",
    description: " tailwind css animations the plugin that you need for your Tailwind project!",
    icon: "/midu-tailwind-anim.svg",
    imgtitle: "tailwind-anim",
    href: 'https://tailwindcss-animations.vercel.app/',
    tooltype: 'animations'
  },
  {
    title: "StackBlitz",
    description: "Stay in the flow with instant dev experiences. No more hours stashing/pulling/installing locally — just click, and start coding.",
    icon: "/stackblitz.png",
    imgtitle: "stackblitz",
    href: 'https://stackblitz.com/',
    tooltype: 'code'
  }
  // add more tools here
];
