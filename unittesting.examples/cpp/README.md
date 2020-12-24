# A Unit Testing Example in C++

## Steps

### Install dependencies

This example will be using cmake as a build system, vcpkg as pacakge manager. Make sure you have [CMake](https://cmake.org/download/), and vcpkg installed. For CMake, you can download the installer from the website or use your package manager to install it. Instruction for how to install vcpkg for each OSes can be found in the [Getting Started](https://github.com/microsoft/vcpkg#getting-started) section. Generally, you clone the respository down and run bootstrap-vcpkg of your operating system. During the setup it will compile the source code of the pacakges, so make sure that you following the steps to install developer tools.

Install the curlpp library by running

```shell
$ ./vcpkg/vcpkg install curlpp
```

This will take quite some time since it will compile every libraries from scratch. During this we can set up our CMakeLists.txt. First create a directory `src` and create new file and name it `CMakeLists.txt`. Put the following content in this new file:

```cmake
add_executable(main main.cc)
```

This is telling CMake that an executable main is from source code main.cc.

Create another `CMakeLists.txt`, this time on your project root directory (just outside of `src` directory) with the following content

```cmake
cmake_minimum_required(VERSION 3.10)

project(UnitTestingExample CXX)

add_subdirectory(src)
```

The first line state that this project need CMake to be at least 3.10. The second line define the project. The last line add our source code directory to the project.

For a tutorial on CMake, you can refer to this [webpage](https://cmake.org/cmake/help/latest/guide/tutorial/index.html). For the commands (show in each of the lines above), see this [page](https://cmake.org/cmake/help/v3.19/manual/cmake-commands.7.html)

To verify that your setup work, let create a simple hello world C++ program `src/main.cc` with the following content.

```cpp
#include <iostream>

int main(int argc, char **argv) {
  std::cout << "Hello, World!" << std::endl;
  return EXIT_SUCCESS;
}
```

Now run `cmake -S . -B build` (on your root directory of the project; not in src directory). Now if you cd into build directory, run make, and run the program we should get the following result.

```shell
$ cd build
$ make
Scanning dependencies of target main
[ 50%] Building CXX object CMakeFiles/main.dir/main.cc.o
[100%] Linking CXX executable main
[100%] Built target main
$ ./src/main
Hello, World!
```

If everything work, let prepare a commit. First of, let create .gitignore with the content from [https://www.toptal.com/developers/gitignore/api/c++,cmake](https://www.toptal.com/developers/gitignore/api/c++,cmake):

```plain

# Created by https://www.toptal.com/developers/gitignore/api/c++,cmake
# Edit at https://www.toptal.com/developers/gitignore?templates=c++,cmake

### C++ ###
# Prerequisites
*.d

# Compiled Object files
*.slo
*.lo
*.o
*.obj

# Precompiled Headers
*.gch
*.pch

# Linker files
*.ilk

# Debugger Files
*.pdb

# Compiled Dynamic libraries
*.so
*.dylib
*.dll

# Fortran module files
*.mod
*.smod

# Compiled Static libraries
*.lai
*.la
*.a
*.lib

# Executables
*.exe
*.out
*.app

### CMake ###
CMakeLists.txt.user
CMakeCache.txt
CMakeFiles
CMakeScripts
Testing
Makefile
cmake_install.cmake
install_manifest.txt
compile_commands.json
CTestTestfile.cmake
_deps
CMakeUserPresets.json

### CMake Patch ###
# External projects
*-prefix/

# End of https://www.toptal.com/developers/gitignore/api/c++,cmake
```

Before we add files to the staging area, let also add vcpkg into the .gitignore. It should just be a line of `vcpkg` at the top of `.gitignore` file. You can add it as a submodule, but we will not do that in this example.

Now let write simple application that use curlpp.
