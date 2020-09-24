# electron-py-ex

Connecting Python 3 and Electron with a simple example

## Building

You'll need [Node.js](https://nodejs.org) and [Python 3](https://www.python.org/downloads/) installed on your computer in order to run this app.

``` bash
$ git clone https://github.com/cjadeveloper/electron-py-ex
$ cd electron-py-ex
```

Make sure that Python 3 is installed on your system

``` bash
$ python -V
Python 3.8.5
```

Create a Python virtual environment in the same directory, activate and install dependencies

``` bash
# Create a venv
$ python -m venv .venv
# Activate: Win: .venv\Scripts\activate.bat ; Linux bash: source .venv/bin/activate
$ source .venv/bin/activate
# install dependencies
$ (.venv) pip install -r requirements.txt
```

> Note: If you know how some python dependency managers like poetry or pipenv (or whatever) works, you can use them instead of pip. I particularly use poetry. Anyway, I have shown how to install the dependencies with pip although I leave the pyproject.toml file for reference.

Install node dependencies and run

``` bash
$ npm install
$ npm start
```

For [Poetry](https://python-poetry.org/) users you can launch the app:

``` bash
$ npm run dev
```
