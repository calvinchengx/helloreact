# Example set-up for reactjs with gulp for public reference

Simply git clone and run `start.sh`.

It would make sense to do this in an isolated node environment so the automatically installed dependencies invoked by

* `start.sh`  (global dependencies)
* `npm install` in `start.sh`
* `bower install` in `start.sh`

will be cleanly installed.

Open the react + react-router + webpack + gulp + react-hot-loader and enjoy.

## Notes

* Source code is located in the `/src` directory.
* The webpack-dev-server (invoked via `gulp`) sends modified source code to `/generated` directory and `/generated` is the base directory from which we run our dev server.
* `dist` (currently not used) is intended for our compiled source code for deployment purposes <-- TODO




