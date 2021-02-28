cmake_minimum_required(VERSION 3.6)
project(example)

add_executable(bot source.cpp)

add_subdirectory(deps/sleepy-discord)
target_link_libraries(bot sleepy-discord)

add_subdirectory(deps/cpp-dotenv)
target_link_libraries(bot cpp_dotenv)
