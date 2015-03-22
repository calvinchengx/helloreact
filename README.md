# Isomorphic ReactJS

A ReactJS web frontend that is SEO-friendly using Server-Side Rendered (SSR) template for the first-time and thereafter, does not need to call the server again.  Doing this also ensures that visitors entering the site from other urls other than the home '/' path will also be served appropriately.  No more broken urls which is typical of frontend-only static sites.  At the same time, we benefit from not having to make unnecessary calls to the server!  Call once and we are done.

This isomorphic layout should be used in conjunction with a separate API backend (not included here) that will serve data to the frontend.

Currently, this app is composed with

* Webpack (compiler and various build optimizations)
* npm (dependencies and scripts)
* ReactJS
* React Hot Reload (Hot Module Reload, HMR)
* Isomorphic Server-Side Rendered templates with NodeJS and Express

## Set-up

Simply git clone and run `start.sh`.

It would make sense to do this in an isolated node environment so the automatically installed dependencies invoked by

* `start.sh`  (global dependencies)
* `npm install` in `start.sh`
* `bower install` in `start.sh`

will be cleanly installed.

Open app at [http://localhost:8080](http://localhost:8080) and enjoy.

## Usage Notes

* Source code is located in the `/src` directory.
* Run only webpack-dev-server with `npm run dev-static`
* Run webpack-dev-server AND nodejs backend via `npm run dev`
* We build into `dist/` directory via `npm run build`

## TODO 

* generate css which is used by SSR template so as to avoid FOUC
* Handle routes that are not yet defined with react router
* Implement static site generation feature - markdown content in `./contents` can be built into html content and placed in `./build` via `node markdownToHtml` command.
* Implement Flux design pattern
* Implement CORS so we can make cross origin API calls to API backends
* Integrate [flow](http://flowtype.org) into our workflow
