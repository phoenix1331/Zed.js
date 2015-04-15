## Synopsis

Zed.js is a lightweight (3kb) JQuery plug-in to assist with designing on the z-axis. This plug-in was developed as part of my final year project whilst I was studying BSc Digital Media at the University of the West of England. www.zedjs.co.uk demonstrates the current capabilities of the plug-in through page navigation and mouse scroll (Over the logo, or any element you wish). Zed.js works by applying 3d tranforms to sectioned content in a single page HTML document to add depth to the field of vision.

This plug-in is still in early development but hopefully it'll continue to grow and as issues are resolved, it may help contribute to a future design trend. Please feel free to contribute to it's future development through our GitHub repository, all pull requests will be reviewed.

## Demo

To view what the plug-in does go to [www.zedjs.co.uk](http://www.zedjs.co.uk) Smaller examples can also be viewed [here](http://www.zedjs.co.uk/demos/1/) and [here](http://www.zedjs.co.uk/demos/2/)

## Installation

To make Zed.js work in you projects start with a single page HTML document with sectioned content inside a wrapper and assign a class of zed to each section.

```html
<div class="wrap clearfix">
		<section class="zed"><img src="img/1.jpg" alt="" /></section>
		<section class="zed"><img src="img/2.jpg" alt="" /></section>
		<section class="zed"><img src="img/3.jpg" alt="" /></section>
		<section class="zed"><img src="img/4.jpg" alt="" /></section>
		<section class="zed"><img src="img/5.jpg" alt="" /></section>
</div>
```
Next include the jQuery library and Zed.js plug-in just before the closing body tag and add zed.css underneath your existing stylesheet. Not forgetting to add the modernizr JavaScript library and HTML shiv for older browsers that don't support new CSS transitions or HTML5 tags. The stylesheet between the noscript tags cleans the layout up when JavaScript is disabled in the browser.

```html
<script src="js/vendor/modernizr.js"></script>
 
<link rel="stylesheet" href="css/yourstylesheet.css">
<link rel="stylesheet" href="css/zed.css">
<noscript>
	<link rel="stylesheet" href="css/zed.noscript.css">
</noscript>
<!--[if lt IE 9]>
  <script src="js/html5shiv.js"></script>
<![endif]-->
 
</head>
<body>
	<!-- content goes here -->
 
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
<script src="js/zed.min.js"></script>
</body>
</html>
```

The the last step is to create your page navigation above your section wrapper. The scroll event listener can be assigned to any element you like. We've assigned the listener to the whole of the header bar and it works perfect.

```html
<header>
	<div class="zedScroll"><p>Scroll Me</p></div>
	<nav>
		<ul>  
			<li><a href="#" class="current">One</a></li>
			<li><a href="#" >Two</a></li>
			<li><a href="#" >Three</a></li>
			<li><a href="#" >Four</a></li>
			<li><a href="#" >Five</a></li>
		</ul>
	</nav>
</header>
```

## Tests

Zed.js has been tested in all major browsers and will gracefully degrade where not supported. There are still a few issues which I'm starting to note in the TODO.

## Contributors

Contributions to this project would be much appreciated, please feel free to contact me on Twitter @phoenix1331 or email me email@zedjs.co.uk with any comments.

## License

Zed.js is licensed under the [Creative Commons Attribution 3.0 license](http://creativecommons.org/licenses/by/3.0/us/deed.en_US).

## TODO

The following list will be updated as and when any issues arise.

* Current page pulled from URL hash instead of class
* Mouse scroll issues when scrolling too fast
* Absolute positioned zed elements collapsing wrapper - Reason for CSS height hack
* Wait for transition to end before changing page - Causing jumping
* Improve zed properties to allow for more config
* Create template stylesheets for various transforms (Pages flying in from different perspectives, maybe !)
* Explore child zed elements
* Explore jQuery mobile - transition on touch
* Explore keypress navigation
* Provide users with the functionality to switch off the fast moving visuals

## Ideas

* Leap Motion to change pages
* Anaglyph 3D plug-in to shift red / green content to be viewed using 3D glasses (May already be out there !)
* Integration of parallax scrolling on the y-axis with the functionality of Zed.js when certain elements are reached