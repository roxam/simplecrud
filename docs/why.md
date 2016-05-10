# SimpleCRUD

## Why were these technologies chosen?

This app is a thin application which uses the MEAN stack (not to be confused with mean.js, which is a software product).

It's all JavaScript - server, client, tests...developers only have to use one language across the stack.

The technologies used here are: MongoDB, Express, Angular 1.5, jQuery, Bootstrap, Sass, Jasmine, Karma, and Protractor. 

### Why Node.js?

- Performance - Node.js apps are incredibly performant, mainly due to the event loop
- Easy transition - JavaScript has been used at some point by nearly all (web) engineers
- Data consistency - nearly all data a node developer works on is JSON: REST APIs, Mongo databases, built-in objects
- As with most web applications, it supports unit testing, continuous integration, and all modern build/test tools
- Platform-independent - Node.js runs on *Nix, Windows, Mac, IOS, Android, and even Raspberry Pi!
- Asynchronicity with a single-threaded event loop. Each callback gets executed by a non-blocking worker thread from a C++ thread pool.  
- A node.js app that isn't doing CPU intensive tasks (that stuff is now behind an API layer) can run thousands more concurrent connections than Apache or IIS or other thread-based servers. The way it does this is with a non-blocking, asynchronous, event-driven architecture. It has an event loop that listens for events, and then triggers a callback function when one of those events is detected. For example, an activity taking a long time to finish, such as file access, network communication, and database operations, is requested and put aside until the results are ready and returned via a callback function. This frees the server to handle additional requests.
- Almost all code is written as non-blocking. 