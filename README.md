# Website Project Starter Kit 2018

This repo is a local environment that you can use to optimize, minify your CSS, JS, & HTML files in order to improve your project performance. This is how I start my projects, maybe you can use it too :)

## Requirements
In order to use this project you will need some requirements:
1. Install [NodeJS](https://nodejs.org/en/): that will help you to run Javascript on the console.
2. Install Gulp with the following command: ```npm install -g gulp```

Gulp is the one that will run all the compilation, watchers and others tasks. To learn more about Gulp and all it's magical abilities check out there website [here](https://gulpjs.com/).

## Download / Clone

Please feel free to clone or download the source files into your computer:

`https://github.com/lalegamero/Website-Project-Starter-Kit-2018.git`

Alternatively, you can [download](https://github.com/lalegamero/Website-Project-Starter-Kit-2018/archive/master.zip) this repository.

## Install required modules
Open your terminal window and change into the source directory where you have cloned or downloaded the repo to. Run the command:

`npm install`

## Initialise the environment
Once all of the required node modules have been downloaded and installed, run the following command:

`gulp`

This will generate the CSS, JS, & HTML files. It will compile the project and start a server that will refresh every time you change something in the code.

Here are commands you can run:
* __default__: Clean the output directory and then compile CSS, JS, & HTML files and watch for changes.
* __scripts__: Concatenate all JS file into a single file, minify the single JS file.
* __cssnano__: Compile Sass files, minify and optimize CSS files, add auto-prefixers.
* __pages__: Compile and minify HTML files
* __images__: Optimize and minify images (.png .jpg .svg)
* __watch__: Watch for any changes on each section.

## Folder Structure

```
|-- dist       
    |-- css
        |-- style.min.css       
    |-- js             
        |-- main.min.js       
    |-- index.html (minified)
|-- src       
    |-- css             
        |-- main.css       
    |-- js       
    |-- sass       
    |-- index.html
```

This is just a basic start but work for most basic project. Enjoy!
Happy coding!!
