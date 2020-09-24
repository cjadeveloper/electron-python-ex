# electron-py-example

Connecting Python 3 and Electron/Node.JS simple example

## Using

You can [download the project](https://github.com/electron/electron-api-demos/releases) for your operating system or build it yourself (see below).

## Building

You'll need [Node.js](https://nodejs.org) and [Python 3](https://www.python.org/downloads/) installed on your computer in order to build this app.

```bash
$ git clone https://github.com/cjadeveloper/electron-py-example
$ cd electron-py-example
```

Make sure that Python 3 is installed on your system

```bash
$ python -V
Python 3.8.5
```

Create a Python virtual environment in the same directory, activate and install dependencies

```bash
# Create a venv
$ python -m venv .venv
# Activate: Win: .venv\Scripts\activate.bat ; Linux bash: source .venv/bin/activate
$ source .venv/bin/activate
# install dependencies
$ (.venv) pip install -r requirements.txt
```

> Note: If you know how some python dependency managers like poetry or pipenv (or whatever) works, you can use them instead of pip. I particularly use poetry. Anyway, I have shown how to install the dependencies with pip although I leave the pyproject.toml file for reference.


Install node dependencies

```bash
$ npm install
$ npm start
```

For [Poetry](https://python-poetry.org/) users you can launch the app:

```bash
$ npm run dev
```
