# 📱 Stephan Kugler - Dev Portfolio

Welcome to my personal portfolio project!
This website showcases my projects, skills, and experience as a developer.
Built with Next.js, TailwindCSS, and TypeScript, the focus is on performance, modern design, and clean code.

## 🔥 Features

- **`Responsive design with TailwindCSS`**
- **`Dynamic components and server actions with Next.js 15`**
- **`Contact form with axios for direct messages to telegram`**
- **`Smooth scroll effects and interactive navigation`**

Check out the website and explore my work!

[Live Demo](https://stephankugler-personal-portfolio.vercel.app/)

## 🚀 Getting Started

This project uses **Next.js**. Below is a brief explanation on how to use the project.

### Prerequisites

- **Node.js** installed on your machine
- **npm** package manager

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/stekug/stephankugler-personal-portfolio.git
   cd stephankugler-personal-portfolio
   npm i
   npm run dev
   ```

2. Add **`TELEGRAM_BOT_TOKEN`** and **`TELEGRAM_CHAT_ID`** to your .env.local.

3. Open [http://localhost:3000](http://localhost:3000)
   with your browser to see the result.

### Strapi Install / Start

Strapi is running in a docker container
Make sure that docker is installed on your system.

Use the following command to start the build process and start the container:

```bash
docker-compose up -d
```

You can stop theh container and remove it by use this command:

```bash
docker-compose down
```

Open http://localhost:1337 with your browser to open the strapi admin panel.
