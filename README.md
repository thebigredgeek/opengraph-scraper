# opengraph-scraper [![Build Status](https://api.travis-ci.org/thebigredgeek/opengraph-scraper.png?branch=master)](http://travis-ci.org/thebigredgeek/opengraph-scraper)

A scraper for open graph meta-data

## Getting Started
Install the module with: `npm install opengraph-scraper`

```javascript
var ogs = require('opengraph-scraper');
ogs('http://www.google.com').then(function(data){ // returns a promise
    console.log(data); //spits out any open graph data contained within google's search page
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License
Copyright (c) 2013 Andrew E. Rhyne  
Licensed under the MIT license.
