/**
 * @file fib_cache.cc
 * @brief Implementation of the FibCache class.
 * 
 * All the documentation for these member functions are in the .h file already.
 * 
 */
#include "fib.h"
#include "fib_cache.h"

FibCache::~FibCache() {

}


int FibCache::get(int n) {
    // Catch invalid n.
    if (n < 1) {
        return 0;
    }

    // Check if cache is available.
    if (cache[n - 1] != 0) {
        return cache[n - 1];
    }

    int result = fib_recursive(n);
    cache[n - 1] = result;
    
    return result;
}