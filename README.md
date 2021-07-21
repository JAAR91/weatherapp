# Weather App

This project includes a weather app that allows you to get the current weather conditions of the city you type on the search box. The project includes:

- DOM Manipulation with JavaScript
- Webpack
- Use of JavaScript functions and loops

## Live Server
- No live version due to api key sucurity

## Built With

- HTML
- CSS3
- JavaScript
- BootStrap

## Getting Started

To get a local copy of the repository please run the following commands on your terminal:

```bash
$ cd <folder>
$ git clone git@github.com:JAAR91/weatherapp.git
$ cd weatherapp
```

Now set up webpack using the command:
```
$ npm install
```

To run the project just type the command:
```
$ npm start
```

## Getting the a API key to run the project

To get the project running its necessary to get an API key to connect to weather service, dont worry, its free but make sure do the following:
- Go to [openweathermap.org](https://openweathermap.org/) and create an accoount
- Once you create your account, you will get a verification email, just click on the verification button.
- Now you will get a second email with the API instructions and your API key.
- Now that you have your API key, paste it on file index.js on line 5, like this:
```
const apiToken = 'API key';
```
- To run the project you cant type on the terminal:
```
npm start
```
or you can bundle everything with:
```
npm run build
```

## Author

👤  **Jose Alberto Arriaga Ramos**

- GitHub: [@jaarkira](https://github.com/jaarkira )
- Twitter: [@91_jaar](https://twitter.com/91_jaar )
- LinkedIn: [Jose Arriaga](https://www.linkedin.com/in/jaar/)


## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/JAAR91/weatherapp/issues).

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

MIT License

Copyright (c) 2021 Mih Julius Ndim and Jose Alberto Arriaga Ramos

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.