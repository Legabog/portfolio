<div align="center">
  <a href="https://lega-portfolio.vercel.app/">
    <picture>
      <img alt="portfolio-logo" src="https://github.com/user-attachments/assets/d5f270d7-1193-4875-bbcb-73284c8eedf8" height="128">
    </picture>
  </a>
  <h1>Portfolio</h1>
<a href="https://t.me/legabog"><img alt="telegram" src="https://img.shields.io/badge/Join-Telegram-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtOS40MTcgMTUuMTgxLS4zOTcgNS41ODRjLjU2OCAwIC44MTQtLjI0NCAxLjEwOS0uNTM3bDIuNjYzLTIuNTQ1IDUuNTE4IDQuMDQxYzEuMDEyLjU2NCAxLjcyNS4yNjcgMS45OTgtLjkzMWwzLjYyMi0xNi45NzIuMDAxLS4wMDFjLjMyMS0xLjQ5Ni0uNTQxLTIuMDgxLTEuNTI3LTEuNzE0bC0yMS4yOSA4LjE1MWMtMS40NTMuNTY0LTEuNDMxIDEuMzc0LS4yNDcgMS43NDFsNS40NDMgMS42OTMgMTIuNjQzLTcuOTExYy41OTUtLjM5NCAxLjEzNi0uMTc2LjY5MS4yMTh6IiBmaWxsPSIjMDM5YmU1Ii8+PC9zdmc+"></a>
<a href="https://pnpm.io/"><img alt="pnpm" src="https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220"></a>
<a href="https://nextjs.org/"><img alt="next.js" src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"></a>
<a href="https://threejs.org/"><img alt="three.js" src="https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white"></a>
<a href="https://sentry.io/"><img alt="sentry" src="https://img.shields.io/badge/sentry-%23362D59.svg?style=for-the-badge&logo=sentry&logoColor=white"></a>
<a href="https://vercel.com/"><img alt="vercel" src="https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&labelColor=000"></a>
<a href="https://github.com/Legabog/portfolio/blob/main/LICENSE"><img alt="license" src="https://img.shields.io/npm/l/next.svg?style=for-the-badge&labelColor=000000"></a>
</div>

## ⚓ Oxc

The Oxidation Compiler is creating a collection of high-performance tools for JavaScript and TypeScript.

Oxc is building a parser, linter, formatter, transformer, minifier, resolver ... all written in Rust.

See more at [oxc.rs](https://oxc.rs)!

* **The main concept** The main concept of this project is to try to create a social network as similar to [Facebook](https://www.facebook.com/) as possible.

* **Practise** The side goal of the project is to improve skills and experiment with the technology stack.

## What’s In This Document

- [Getting started](#-getting-started)
  - [Environment File](#environment-file)
  - [Basic Scripts](#basic-scripts)
- [Stack of technologies](#%EF%B8%8F-stack-of-technologies)
- [Contact](#-contact)
- [License](#memo-license)
- [Powered by](#-powered-by)

## 🚀 Getting started

You can set up the project locally on your machine with these steps:

1. **Clone the "master" branch in the repository.**

   ```shell
   git clone -b master https://github.com/Legabog/linkify.git

   ```
2. **Install the packages using the command.**
   ```shell
   npm install
   ```

## **Environment File**

- Create a `.env` file in the root directory of the project. Add these lines with your parameters:

  ```shell

    # Firebase config
    REACT_APP_FIREBASE_API_KEY = "Your Firebase Api key"
    REACT_APP_FIREBASE_AUTH_DOMAIN = "your_project.com"
    REACT_APP_FIREBASE_DATABASE_URL = "https://your_project.firebaseio.com"
    REACT_APP_FIREBASE_PROJECT_ID = "your_project"
    REACT_APP_FIREBASE_STORAGE_BUCKET = "your_project.appspot.com"
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID = "your_project id"
    REACT_APP_FIREBASE_API_ID = "your_project id"

    # Music-api
    REACT_APP_FIREBASE_MUSIC_API_URL = "https://social-network-backend-legabog.herokuapp.com"

    # Openweathermap.org
    REACT_APP_WEATHER_URL = "https://api.openweathermap.org/data/2.5"
    REACT_APP_WEATHER_API_KEY = "Your openweather.org Api key"

    # Openstreetmap.org
    REACT_APP_ADDRESS_URL = "https://nominatim.openstreetmap.org"

    # Welcome compoenent Privacy Guide slides
    REACT_APP_PRIVACY_GUIDE_SLIDE_1 = "https://firebasestorage.googleapis.com/v0/b/social-network-legabog.appspot.com/o/privacy-guide-slides%2FPrivacy-Guide-Slide_1.jpg?alt=media"
    REACT_APP_PRIVACY_GUIDE_SLIDE_2 = "https://firebasestorage.googleapis.com/v0/b/social-network-legabog.appspot.com/o/privacy-guide-slides%2FPrivacu-Guide-Slide_2.jpg?alt=media"
    REACT_APP_PRIVACY_GUIDE_SLIDE_3 = "https://firebasestorage.googleapis.com/v0/b/social-network-legabog.appspot.com/o/privacy-guide-slides%2FPrivacy-Guide-Slide_3.jpg?alt=media"   
    
    ```
## **Basic Scripts**

List of available scripts:

1. **start** - this script runs your app (using Dev mode). You can open browser and insert `http://localhost:3000/`.

   ```shell
   npm run start

   ```
2. **build** - this script builds your app for production. After a ~minute of waiting you can see this build in `./build` folder.

   ```shell
   npm run build
   ```
3. **test** - this script launches the test runner in the interactive watch mode.

   ```shell
   npm run test

   ```
4. **size** - this script builds your app and analyzes boundle size.

   ```shell
   npm run size
   ```   
5. **flow** - this script runs Flow.

   ```shell
   npm run flow
   ```   
6. **eject** - this CRA is not ejected. Previous version was.

   ```shell
   npm run eject
   ```
## 🛠️ Stack of technologies

## Frontend

* This app was created with **[create react app](https://create-react-app.dev/)**. After was ejected.

* **[React](https://reactjs.org/)**

* **[Redux](https://redux.js.org/)**

* **[Redux-thunk](https://github.com/reduxjs/redux-thunk)**

* Styles was written with simple CSS and **[BEM](https://ru.bem.info/)** naming.

* **[Material-UI](https://material-ui.com/)**

## Backend (Serverless Google Firebase services)

* **[Firebase](https://firebase.google.com/)**

## [Backend of music module](https://social-network-backend-legabog.herokuapp.com/) with using **[Heroku](https://www.heroku.com/)**

* RestFull Api with using **[Express](https://expressjs.com/)**

* **[MongoDB](https://www.mongodb.com/)**

* **[Mongoose](https://mongoosejs.com/)**

## 📧 Contact

If you have any questions for me or you want to discuss something specific about the projects. You are welcome.

My email: **[probringer@mail.ru](mailto:probringer@mail.ru)**

## :memo: License

Licensed under the [MIT License](./LICENSE).

## 💜 Powered by

Weather module powered by **[Openweathermap.org](https://openweathermap.org/)** and **[Openstreetmap.org](https://www.openstreetmap.org/)**.
](url)
