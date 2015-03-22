# reactjs + npm + webpack + react-hot-reload + isomorphic backend with nodejs express

Simply git clone and run `start.sh`.

It would make sense to do this in an isolated node environment so the automatically installed dependencies invoked by

* `start.sh`  (global dependencies)
* `npm install` in `start.sh`
* `bower install` in `start.sh`

will be cleanly installed.

Open app at [http://localhost:8080](http://localhost:8080) and enjoy.

## Notes

* Source code is located in the `/src` directory.
* Run only the webpack-dev-server with `npm run dev-static`
* Run webpack-dev-server with nodejs backend via `npm run dev`
* We build into `dist/` directory via `npm run build`

## IN PROGRESS

* Implement static site generation feature - markdown content in `./contents` can be built into html content and placed in `./build` via `node markdownToHtml` command.

## TODO

* Integrate [flow](http://flowtype.org) into our workflow
