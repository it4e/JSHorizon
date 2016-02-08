# JSHorizon
A tiny Javascript library used for creating horizontal-scrolling websites

## What is JSHorizon?
JSHorizon is a tiny library written in pure Javascript to assist you in creating fresh and responsive horizontal-scrolling websites. JSHorizon provides you with easy to use functions to calculate and to automatically scale the page width to perfectly fit the containing elements.

The problem with creating horizontal websites is that all of the browsers are predefined to automatically autowrap every element to a new row as soon as they hit the right corner of the viewport. It is neither very flexible nor easy to calculate and hardcode the page width yourself, since you need to do this for every element you add. With JSHorizon this is taken care of for you and you can add elements freely, without having to think about manipulating any page values.

## How does it work?
JSHorizon uses a simple algorithm to calculate the width of all elements contained inside of the container of your choosing. Using the calculated width of the elements a page width is determined.

## How do I use it?

First you will want to include the file '*jshorizon.js*' in your HTML document. You can download the file straight here from Github.

```html
<script src="jshorizon.js"></script>
```

JSHorzion is based on a class called '*Horzion*', so you will need to create an object of that class.

```javascript
// Syntax: Horizon = function(container), where element should be equal to a container of your choosing
// Here we use the standard <body> element as container

var container = document.getElementByTagName("BODY")[0];
var horizontal = new Horizon(container);
```

To automatically calculate the width of the page you shall use the '*Horizon.calc_width(mobile = false)*' function, taking a single argument whether to call of the calculation if the device is mobile-size.

```javascript
var horizontal = new Horizon(container);

// Calculate page width
horizontal.calc_width();
```

If there is an element inside of the container which has a width that you would not like to be counted, you can add an exception using the '*Horizon.add_excepiton(element)*' function.

Container

```html
<body>
  <div id="hidden">
    I do not want this width to count
  </div>
  <header>
    Swimming
  </header>
  <section>
    Tomorrow I want to go swimming.
  </section>
</body>
```

Do not count the #hidden element's width

```javascript
var horizontal = new Horizon(container);

horizontal.add_exception(document.getElementById("hidden"));

// Calculate page width
horizontal.calc_width();
```

Only the width of the header and the section elements will now be used in calculating the width of the page.

## Responsive websites

When it comes to creating repsonsive websites, more specifically mobile adapted sites, having a horizontal-scrolling experience may not be very pleasing at all. Therefore JSHorizon provides you with the option to turn off width calculation when the device is in mobile mode (under 768px standard, but can be changed manually using the function '*Horizon.set_mobile_breakpoint(breakpoint)*'). This can be done directly within the *Horizon.calc_width(mobile = false)* function, or using the function '*Horizon.set_mobile(state = false)*'.

```javascript
var horizontal = new Horizon(document.getElementById("container"));

// Turn off mobile width calculation
horizontal.set_mobile(true);

/* or */

horizontal.calc_width(true);
```

## API

- *Horizon.set_mobile_breakpoint(breakpoint)* : set custom mobile breakpoint, standard = 768(px).
- *Horizon.add_exception(element)* : add element as an exception so its width will not be included.
- *Horizon.is_mobile()* : returns true if device is mobile, false if not.
- *Horizon.set_mobile(state)* : turn on or off mobile width calculation. state = true | false.
- *Horizon.set_resize(state)* : set whether to resize width on window resize. state = true | false. Standard is true
- *Horizon.calc_width(mobile)* : calculate and set container width, mobile = set mobile width calculation = true | false.

### Examples

## Live demo

https://jsfiddle.net/pqf8v9cd/

index.html - Note that we are using the unit vw in the CSS code (http://www.w3schools.com/cssref/css_units.asp)

```html
<!DOCTYPE html>
<html>
    <head>
        <META charset="UTF-8" />
        <META name="viewport" content="width=device-width, initial-scale=1.0" />
        <style type="text/css">
          html, body {margin: 0; padding: 0; height: 100%;}
          * {box-sizing: border-box;}
          header {width: 20vw; height: 100%; padding-top: 5%; position: absolute; top: 0; color: #FFF;}
          section {width: 100vw; height: 100%; float: left; text-align: center;}
        </style>
        <script src="jshorizon.js"></script>
   </head>
   <body>
        <header id="menu" style="background: rgba(0, 0, 0, 0.8);">
          <ul>
            <li>Home</li>
          </ul>
        </header>
        <section style="background: red;">
          This is section 1
        </section>
        <section style="background:green;">
          This is section 2
        </section>
        <section style="background: blue;">
          This is section 3
        </section>
    </body>
    <script src="horizontal.js"></script>
</html>
```

horizontal.js
```javascript
// Define Horizon object. Use <body> as container
var horizon = new Horizon(document.getElementsByTagName("BODY")[0]);

// Remove #menu from width calculation
horizon.add_exception(document.getElementById("menu"));

// Calculate page width
horizon.calc_width();
```


