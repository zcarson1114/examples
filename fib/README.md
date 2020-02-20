# Fibonacci Library

A sample library to calculate Fibonacci number.

Run `make doc` to generate the documentation.

Run `sudo apt-get install doxygen` to install doxygen if you don't have it on your Linux system.

## Documentation

Doxygen is used to document this project. The documentation is built by Netlify every time a push is made to this repository.
After that the built documentation is published to [https://ou-cs3560-examples.netlify.com/](https://ou-cs3560-examples.netlify.com/)


## About Doxygen

The command `doxygen -g Doxyfile` is only run once when there is no `Doxyfile` in the project. This command
creates the basic configuration for doxygen.

Later on when a document need to be recreate the command `doxygen` can be used. If the configuration file is
not named `Doxyfile`, then a file name can be added to the command (e.g. `doxygen ConfigFile`).
