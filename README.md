# Plait Skeleton App

[![build status](https://img.shields.io/travis/wildlyinaccurate/plait-skeleton-app/master.svg?style=flat-square)](https://travis-ci.org/wildlyinaccurate/plait-skeleton-app)

## Getting Started

You will need [Gulp](http://gulpjs.com/) installed (`npm install -g gulp`) before you can build this project.

First off, clone the repository

```
git clone https://github.com/wildlyinaccurate/plait-skeleton-app.git
cd plait-skeleton-app
```

Then build the application (to `dist/bundle.js`) with

```
gulp build
```

And then see it running by opening `index.html` in a web browser.

You can run the tests with

```
gulp test
```

## Project Structure

Source files live in `src/`. The application is bootstrapped onto the page by `src/Main.js`. Each component has its own file (e.g. `src/Counter.js`).

## License

The MIT License (MIT)

Copyright (c) 2016 Joseph Wynn

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