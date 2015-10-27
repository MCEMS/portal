Development
===========

I find it helpful to have two terminals open in the background, one running `gulp watch` in the project root, and the other running `jekyll serve` from the `./dist` directory. This way, my changes will be built automatically and I can just hit save and refresh `http://localhost:4000/` in Chrome.

Using React
===========

React classes are broken down into the following categories, for the purpose of dependencies:

* **Application**: an Application is the highest level of abstraction. There is just one, and it includes whatever pages/components/utilities it needs.
* **Pages**: a Page is a high-level class that can use Components and Utilities
* **Components**: a Component is a block-level class that may use Utilities
* **Utilities**: a Utility is a low-level class that has no dependencies and is typically used for rendering a very small item various places throughout the application
