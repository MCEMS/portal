Development
===========

To get started, run `npm install` followed by `bower install`. Then, run `gulp watch`. This will open up a webserver at [http://localhost:8000]() that automatically refreshes when you update your source files.

Project Structure
=================

The order in which React classes are included is important! If component A uses component B, you need to make sure that component B appears above component A in the Gulpfile.

