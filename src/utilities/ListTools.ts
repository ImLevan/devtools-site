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
    icon: "/imgs/iloveimg.svg",
    imgtitle: "iloveimg",
    href: 'https://www.iloveimg.com/es',
    tooltype: 'images'
  },
  {
    title: "Tabler Icons",
    description: "Free and open source icons designed to make your website or app attractive, visually consistent and simply beautiful.",
    icon: "/imgs/tabler.ico",
    imgtitle: "tabler-icons",
    href: 'https://tabler.io/icons',
    tooltype: 'icons'
  },
  {
    title: "ILovePdf",
    description: "Every tool you need to use PDFs, at your fingertips. All are 100% FREE and easy to use! Merge, split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks.",
    icon: "/imgs/ilovepdf.svg",
    imgtitle: "ilovepdf",
    href: 'https://www.ilovepdf.com/',
    tooltype: 'media-files'
  },
  {
    title: "Online-convert",
    description: "Free online file converter, convert media files online from one format into another.",
    icon: "/imgs/oc.svg",
    imgtitle: "online-convert",
    href: 'https://www.online-convert.com/',
    tooltype: 'media-files'
  },
  {
    title: "Radix-ui",
    description: "An open source component library optimized for fast development, easy maintenance, and accessibility. Just import and go—no configuration required.",
    icon: "/imgs/radix-ui.svg",
    imgtitle: "radix-ui",
    href: 'https://www.radix-ui.com/',
    tooltype: 'components-ui'
  },
  {
    title: "Material UI",
    description: "Material UI is an open-source React component library that implements Google's Material Design. It's comprehensive and can be used in production out of the box.",
    icon: "/imgs/mui.svg",
    imgtitle: "mui",
    href: 'https://mui.com/material-ui/',
    tooltype: 'components-ui'
  },
  {
    title: "Park UI",
    description: "Park UI, beautifully designed components built for your choice of JS and CSS frameworks.",
    icon: "/imgs/park-ui.svg",
    imgtitle: "park-ui",
    href: 'https://park-ui.com/',
    tooltype: 'components-ui'
  },
  {
    title: "Quicktype",
    description: "Generate models and serializers from JSON, schema, and GraphQL for working with data quickly & safely in any programming language.",
    icon: "/imgs/quicktype.svg",
    imgtitle: "quicktype",
    href: 'https://quicktype.io/',
    tooltype: 'code'
  },
  {
    title: "UIVerse",
    description: "Universe of UI; Hundreds of Open Source UI elements. Create, share, and use beautiful custom elements made with CSS or Tailwind.",
    icon: "/imgs/uiverse.svg",
    imgtitle: "uiverse",
    href: 'https://uiverse.io/',
    tooltype: 'components-ui'
  },
  {
    title: "Readme.so",
    description: "Our simple editor allows you to quickly add and customize all the sections you need for your project's readme.",
    icon: "/imgs/readme-so.svg",
    imgtitle: "readme-so",
    href: 'https://readme.so/',
    tooltype: 'code'
  },
  {
    title: "Squoosh",
    description: "Squoosh is the ultimate image optimizer that allows you to compress and compare images with different codecs in your browser.",
    icon: "/imgs/squoosh.svg",
    imgtitle: "squoosh",
    href: 'https://squoosh.app/',
    tooltype: 'images'
  },
  {
    title: "Coolors",
    description: "Create the perfect palette or get inspired by thousands of beautiful color schemes.",
    icon: "/imgs/colors.svg",
    imgtitle: "coolors",
    href: 'https://coolors.co/',
    tooltype: 'colors'
  },
  {
    title: "Image extractor",
    description: "Find all relevant images on an website. This includes background images, dynamically loaded or embedded images and SVG elements.",
    icon: "/imgs/img-extractor.svg",
    imgtitle: "extract",
    href: 'https://extract.pics/',
    tooltype: 'images'
  },
  {
    title: "Photopea",
    description: "Photopea is a web-based photo and graphics editor. It is used for image editing, illustrations, web design or conversion between different image formats. Photopea is an online advertising-supported software.",
    icon: "/imgs/photopea.svg",
    imgtitle: "photopea",
    href: 'https://www.photopea.com/',
    tooltype: 'images'
  },
  {
    title: "Freepik",
    description: "Freepik is an image bank with its own production company that offers more than 10 million graphic resources.",
    icon: "/imgs/freepik.svg",
    imgtitle: "freepik",
    href: 'https://www.freepik.com',
    tooltype: 'images'
  },
  {
    title: "Web code tools",
    description: "The best code generators for developers. Code generators for front-end development.",
    icon: "/imgs/web-code-tools.svg",
    imgtitle: "web-code-tools",
    href: 'https://webcode.tools/',
    tooltype: 'code'
  },
  {
    title: "Cool Backgrounds",
    description: "Cool Backgrounds is a collection of tools to create compelling, colorful images for blogs, social media, and websites.",
    icon: "/imgs/cool-backgrounds.svg",
    imgtitle: "cool-backgrounds",
    href: 'https://coolbackgrounds.io/',
    tooltype: 'images'
  },
  {
    title: "CSS Gradient",
    description: "CSS Gradient is a designstripe project that lets you create free gradient backgrounds for your website.",
    icon: "/imgs/css-gradient.svg",
    imgtitle: "css-gradient",
    href: 'https://cssgradient.io/',
    tooltype: 'code'
  },
  {
    title: "UptimeRobot",
    description: "The world's leading uptime monitoring service. Be the first to know that your website is down!.",
    icon: "/imgs/uptimerobot.svg",
    imgtitle: "uptimerobot",
    href: 'https://uptimerobot.com/',
    tooltype: 'web-monitor'
  },
  {
    title: "Neon",
    description: "Neon is Serverless Postgres built for the cloud. Neon separates compute and storage to offer modern developer features such as autoscaling, branching, bottomless storage, and more.",
    icon: "/imgs/neon.svg",
    imgtitle: "neontech",
    href: 'https://neon.tech/',
    tooltype: 'deploys'
  },
  {
    title: "Railway",
    description: "Railway is the cloud for building, shipping, and monitoring applications. No Platform Engineer required. Instant Deployments, Effortless Scale.",
    icon: "/imgs/railway.svg",
    imgtitle: "railway",
    href: 'https://railway.app/',
    tooltype: 'deploys'
  },
  {
    title: "Fl0",
    description: "Deploy backend applications and databases in minutes.Powerful, fully managed deployment platform.",
    icon: "/imgs/fl0.svg",
    imgtitle: "fl0",
    href: 'https://www.fl0.com/',
    tooltype: 'deploys'
  },
  {
    title: "Vercel",
    description: "Vercel is the Frontend Cloud. Build, scale, and secure a faster, personalized web. Develop with your favorite tools. ",
    icon: "/imgs/vercel.svg",
    imgtitle: "vercel",
    href: 'https://vercel.com/',
    tooltype: 'deploys'
  },
  {
    title: "Fly.io",
    description: "Fly.io transforms containers into micro-VMs that run on our hardware in 30+ regions on six continents.",
    icon: "/imgs/fly.svg",
    imgtitle: "fly.io",
    href: 'https://fly.io/',
    tooltype: 'deploys'
  },
  {
    title: "PlanetScale",
    description: "PlanetScale is a MySQL-compatible database that brings you scale, performance, and reliability — without sacrificing developer experience.",
    icon: "/imgs/planetscale.svg",
    imgtitle: "planetscale",
    href: 'https://planetscale.com/',
    tooltype: 'deploys'
  },
  {
    title: "React-Symbols",
    description: "React-Symbols is a library for React with the icons of the VSCode theme Symbols by Miguel Solorio. +100 files & folders icons.",
    icon: "/imgs/react-symbols.svg",
    imgtitle: "react-symbols",
    href: 'https://react-symbols.vercel.app/',
    tooltype: 'icons'
  },
  {
    title: "Google Fonts",
    description: "Google Fonts is a computer font and web font service owned by Google. This includes free and open source font families, an interactive web directory for browsing the library",
    icon: "/imgs/googlefonts.svg",
    imgtitle: "google-fonts",
    href: 'https://fonts.google.com/',
    tooltype: 'fonts'
  },
  {
    title: "Fontsource",
    description: "Fontsource is a collection of open-source fonts that are packaged into individual NPM packages for self-hosting in your web applications.",
    icon: "/imgs/fontsource.svg",
    imgtitle: "fontsource",
    href: 'https://fontsource.org/',
    tooltype: 'fonts'
  },
  {
    title: "Render",
    description: "Render helps software teams ship products fast and at any scale. Build, deploy, and scale your apps with unparalleled ease from your first user to your billionth.",
    icon: "/imgs/render.svg",
    imgtitle: "render",
    href: 'https://render.com/',
    tooltype: 'deploys'
  },
  {
    title: "Visual Studio Code",
    description: "Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications. Free. Built on open source. Runs everywhere.",
    icon: "/imgs/vscode.svg",
    imgtitle: "vscode",
    href: 'https://code.visualstudio.com/',
    tooltype: 'code-editors'
  },
  {
    title: "Sublime Text",
    description: "Sublime Text is a sophisticated text editor for code, markup and prose. You'll love the slick user interface, extraordinary features and amazing performance.",
    icon: "/imgs/sublime.svg",
    imgtitle: "sublimetext",
    href: 'https://www.sublimetext.com/',
    tooltype: 'code-editors'
  },
  {
    title: "Notepad++",
    description: "Notepad++ is a free source code editor and Notepad replacement that supports several languages. Running in the MS Windows environment, its use is governed by GNU General Public License.",
    icon: "/imgs/notepad.svg",
    imgtitle: "notepad",
    href: 'https://notepad-plus-plus.org/',
    tooltype: 'code-editors'
  },
  {
    title: "IntelliJ IDEA",
    description: "IntelliJ IDEA is undoubtedly the top-choice IDE for software developers. It makes Java and Kotlin development a more productive and enjoyable experience.",
    icon: "/imgs/intellij.svg",
    imgtitle: "intellij",
    href: 'https://www.jetbrains.com/idea/',
    tooltype: 'ides'
  },
  {
    title: "Android Studio",
    description: "Android Studio and SDK Tools — Get the official Integrated Development Environment (IDE) for Android app development.",
    icon: "/imgs/androidstudio.svg",
    imgtitle: "androidstudio",
    href: 'https://developer.android.com/studio?hl=es-419',
    tooltype: 'ides'
  },
  {
    title: "Eclipse IDE",
    description: "Eclipse is a software platform composed of a set of cross-platform open source programming tools for developing what the project calls 'Rich Client Applications'.",
    icon: "/imgs/eclipse.svg",
    imgtitle: "eclipse",
    href: 'https://eclipseide.org/',
    tooltype: 'ides'
  },
  {
    title: "Apache NetBeans",
    description: "NetBeans is a free integrated development environment, made primarily for the Java programming language.",
    icon: "/imgs/netbeans.svg",
    imgtitle: "netbeans",
    href: 'https://netbeans.apache.org/front/main/',
    tooltype: 'ides'
  },
  {
    title: "Postman",
    description: "Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster.",
    icon: "/imgs/postman.svg",
    imgtitle: "postman",
    href: 'https://www.postman.com/',
    tooltype: 'apis'
  },
  {
    title: "Insomnia REST",
    description: "Leading Open Source API Development Platform for HTTP, REST, GraphQL, gRPC, SOAP, and WebSockets.",
    icon: "/imgs/insomnia.svg",
    imgtitle: "insomnia",
    href: 'https://insomnia.rest/',
    tooltype: 'apis'
  },
  {
    title: "DBeaver",
    description: "It supports all popular SQL databases like MySQL, MariaDB, PostgreSQL, SQLite, Apache Family, and more.",
    icon: "/imgs/dbeaver.svg",
    imgtitle: "dbeaver",
    href: 'https://dbeaver.io/',
    tooltype: 'databases'
  },
  {
    title: "pgAdmin",
    description: "pgAdmin - PostgreSQL Tools for Windows, Mac, Linux and the Web",
    icon: "/imgs/pgadmin.svg",
    imgtitle: "pgadmin",
    href: 'https://www.pgadmin.org/',
    tooltype: 'databases'
  },
  {
    title: "bg.ibelick",
    description: "Collection of modern, background snippets. Ready-to-use, simply copy and paste into your next project. All snippets crafted with Tailwind CSS and Vanilla CSS for easy integration.",
    icon: "/imgs/bgibelick.ico",
    imgtitle: "bgibelick",
    href: 'https://bg.ibelick.com/',
    tooltype: 'images'
  },
  {
    title: "Shots",
    description: "Create amazing mockups. Craft beautiful presentations for your social media, website and more!",
    icon: "/imgs/shots-logo.png",
    imgtitle: "shots",
    href: 'https://shots.so/',
    tooltype: 'images'
  },
  {
    title: "Css loaders",
    description: "This is a library having a collection of different types of CSS loaders, spinners.",
    icon: "/imgs/css-loaders.png",
    imgtitle: "cssloaders",
    href: 'https://cssloaders.github.io/',
    tooltype: 'components-ui'
  },
  {
    title: "CODEPEN",
    description: "CodePen is a social development environment for front-end designers and developers. Build and deploy a website, show off your work, build test cases to learn and debug, and find inspiration.",
    icon: "/imgs/codepen.png",
    imgtitle: "codepen",
    href: 'https://codepen.io/',
    tooltype: 'code'
  },
  {
    title: "Flowbite",
    description: "Start developing with an open-source library of over 600+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.",
    icon: "/imgs/flowbite.svg",
    imgtitle: "flowbite",
    href: 'https://flowbite.com/',
    tooltype: 'components-ui'
  },
  {
    title: "animation.ibelick",
    description: "A curated collection of animations crafted exclusively with Tailwind CSS. Ready to integrate with a simple copy-paste.",
    icon: "/imgs/anim-ibelick.ico",
    imgtitle: "anim-ibelick",
    href: 'https://animation.ibelick.com/',
    tooltype: 'animations'
  },
  {
    title: "Tailwinds css animations",
    description: " tailwind css animations the plugin that you need for your Tailwind project!",
    icon: "/imgs/midu-tailwind-anim.svg",
    imgtitle: "tailwind-anim",
    href: 'https://tailwindcss-animations.vercel.app/',
    tooltype: 'animations'
  },
  {
    title: "StackBlitz",
    description: "Stay in the flow with instant dev experiences. No more hours stashing/pulling/installing locally — just click, and start coding.",
    icon: "/imgs/stackblitz.png",
    imgtitle: "stackblitz",
    href: 'https://stackblitz.com/',
    tooltype: 'code'
  },
  {
    title: "Font Awesome",
    description: "Font Awesome gives you scalable vector icons that can instantly be customized — size, color, drop shadow, and anything that can be done with the power of CSS.",
    icon: "/imgs/fontawesome.svg",
    imgtitle: "font-awesome",
    href: 'https://fontawesome.com/v4/icons/',
    tooltype: 'icons'
  },
  {
    title: "Bootstrap Icons",
    description: "Free, high quality, open source icon library with over 2,000 icons.",
    icon: "/imgs/booticon.svg",
    imgtitle: "bootstrap-icons",
    href: 'https://icons.getbootstrap.com/',
    tooltype: 'icons'
  },
  {
    title: "unDraw",
    description: "Browse to find the images that fit your messaging, automagically customise the color to match your brand and use it as a normal image, embedded code or directly in your design workflow.",
    icon: "/imgs/undraw.webp",
    imgtitle: "undraw",
    href: 'https://undraw.co/illustrations',
    tooltype: 'images'
  },
  {
    title: "Ouch",
    description: "Free vector and 3D illustrations that just look professional. Get professional, perfectly matching illustrations. Edit or mix them up effortlessly before downloading.",
    icon: "/imgs/ouch.svg",
    imgtitle: "undraw",
    href: 'https://icons8.com/illustrations',
    tooltype: 'images'
  },
  {
    title: "Unsplash",
    description: "The source of images of the internet. With resources from creators around the world.",
    icon: "/imgs/unsplash.svg",
    imgtitle: "unsplash",
    href: 'https://unsplash.com/',
    tooltype: 'images'
  },
  {
    title: "Pexels",
    description: "The best free stock photos, royalty-free images and videos shared by creators.",
    icon: "/imgs/Pexels.svg",
    imgtitle: "pexels",
    href: 'https://www.pexels.com/',
    tooltype: 'images'
  },
  {
    title: "Color Hunt",
    description: "Color Palettes for Designers and Artists. Discover the newest hand-picked palettes of Color Hunt.",
    icon: "/imgs/colorhunt.svg",
    imgtitle: "colorhunt",
    href: 'https://colorhunt.co/',
    tooltype: 'colors'
  },
  {
    title: "Canva Colors",
    description: "Find the perfect color tools and resources for any project. From color palettes to everything you could ever want to learn about color.",
    icon: "/imgs/canva.svg",
    imgtitle: "canvacolor",
    href: 'https://www.canva.com/colors/',
    tooltype: 'colors'
  },
  {
    title: "Smooth Shadow",
    description: "Make a smooth shadow, friend. Shadow generator. Make a smooth css shadow",
    icon: "/imgs/shadowsbrumm.svg",
    imgtitle: "shadowsbrumm",
    href: 'https://shadows.brumm.af/',
    tooltype: 'code'
  },
  {
    title: "Layoutit!",
    description: "Quickly design web layouts, and get HTML and CSS code. Learn CSS Grid visually and build web layouts with our interactive CSS Grid Generator.",
    icon: "/imgs/layoutit.ico",
    imgtitle: "layoutit",
    href: 'https://grid.layoutit.com/',
    tooltype: 'code'
  },
  {
    title: "Yesicon",
    description: "217,418 High-Quality Vector Icons from Top Design Teams. 169 Open-Source, Free Icon sets",
    icon: "/imgs/yesicon.svg",
    imgtitle: "yesicon",
    href: 'https://yesicon.app/',
    tooltype: 'icons'
  },
  {
    title: "Material Tailwind",
    description: "Material Tailwind is an open-source library that uses the power of Tailwind CSS and React to help you build unique web projects faster and easier.",
    icon: "/imgs/material-tailwind.png",
    imgtitle: "material-tailwind",
    href: 'https://www.material-tailwind.com/',
    tooltype: 'components-ui'
  },
  {
    title: "daisyUI",
    description: "daisyUI adds component class names to Tailwind CSS so you can make beautiful websites faster than ever.",
    icon: "/imgs/daisyui-logotype.svg",
    imgtitle: "daisyui",
    href: 'https://daisyui.com/',
    tooltype: 'components-ui'
  },
  {
    title: "monkeytype",
    description: "Monkeytype is a minimalistic and customizable typing test. It features many test modes, an account system to save your typing speed history, and user-configurable features such as themes, sounds, a smooth caret, and more.",
    icon: "/imgs/monkeytype.svg",
    imgtitle: "monkeytype",
    href: 'https://monkeytype.com/',
    tooltype: 'code'
  }
  // add more tools here
];
