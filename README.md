# ember-device-detection

Ember device detection is an Ember addon for client-side device detection and a wrapper of the UA parser library. It makes it easy to render different views or url redirection based on  4 device criteria:
  * [operating system (iOS, Android,...)](#os)
  * [type (tablet, Mobile, phone,...)](#type)
  * [browser(Chrome, Safari, IE,...) ](#browser)
  * [media queries (only screen and (max-device-width: 640px))](#media)

and without needing special server-side configuration, saving the time and effort required to do user agent string parsing.

## Philosophy

The idea behind a ember-device-detection is simple: As you build an mvp or prototyping an application, you might not implemented a browser or multi device compatibility yet. To avoid a bad user experience, it would be great to redirect a user if his/her device is not supported by your application yet. It can be a redirection to another page or serving a different html view. Thus, you avoid receiving hundreds of bugs caused by users entering your app with an incompatible device or browser.

## Setup

` ember install ember-device-detection `

## Usage

And add merely a `<link>` tag to your `<head>` section in your main `index.html` file :
  ```html
    <link rel="alternate" criteria="value" href="url" id="id">
  ```

For example, it is how your index.html will look like:
  ```html
  <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Your app</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="alternate" href="https://qonto.eu/en/iphone" id="phone" os="ios">
    <link rel="alternate" href="/tablet.html" id="tablet" type="tablet">  
    <link rel="alternate" href="https://qonto.eu/en" id="phone" browser="chrome"> 
    <link rel="alternate" href="https://qonto.eu/en/other" id="phone" media="only screen and (max-device-width: 640px)">

    {{content-for "head"}}

    <link rel="stylesheet" href="{{rootURL}}assets/vendor.css">
    <link rel="stylesheet" href="{{rootURL}}assets/yourapp.css">

    {{content-for "head-footer"}}
  </head>
  <body>

    {{content-for "body"}}

    <script src="{{rootURL}}assets/vendor.js"></script>
    <script src="{{rootURL}}assets/yourapp.js"></script>

    {{content-for "body-footer"}}
  </body>
</html>
  ```

 ~~ OR ~~

If you want to keep your index.html clean, in your app's **ember-cli-build.js**, define inlineContent options on your app instance

```js
var app = new EmberApp(defaults, {
  inlineContent: {
    'device' : {
      content: '<link rel="alternate" href="https://qonto.eu/en/iphone" id="phone" os="ios">'
    }
  }
});
```

Then in your **index.html** file, use the `content-for` helper in your `<head>` tag with a references to the keys in your options:

```html
  <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Your app</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    {{content-for 'device'}}
    
    <link rel="stylesheet" href="{{rootURL}}assets/vendor.css">
    <link rel="stylesheet" href="{{rootURL}}assets/yourapp.css">

    {{content-for "head-footer"}}
  </head>
  <body>

    {{content-for "body"}}

    <script src="{{rootURL}}assets/vendor.js"></script>
    <script src="{{rootURL}}assets/yourapp.js"></script>

    {{content-for "body-footer"}}
  </body>
```
To learn more about this implementation, please visit [ember-cli-inline-content](https://github.com/gdub22/ember-cli-inline-content)

<a name="os">Operating system criteria</a>
-----------
`os` attribute must match one of these value listed below:
  ```html
    <link rel="alternate" os="value" href="url" id="id">
  ```
  ```
# Possible 'value'
AIX, Amiga OS, Android, Arch, Bada, BeOS, BlackBerry, CentOS, Chromium OS, Contiki,
Fedora, Firefox OS, FreeBSD, Debian, DragonFly, Gentoo, GNU, Haiku, Hurd, iOS, 
Joli, Linpus, Linux, Mac OS, Mageia, Mandriva, MeeGo, Minix, Mint, Morph OS, NetBSD, 
Nintendo, OpenBSD, OpenVMS, OS/2, Palm, PC-BSD, PCLinuxOS, Plan9, Playstation, QNX, RedHat, 
RIM Tablet OS, RISC OS, Sailfish, Series40, Slackware, Solaris, SUSE, Symbian, Tizen, 
Ubuntu, UNIX, VectorLinux, WebOS, Windows [Phone/Mobile], Zenwalk
```

<a name="type">Device type criteria</a>
-----------
`type` attribute must match one of these value listed below:
  ```html
    <link rel="alternate" type="value" href="url" id="id">
  ```
  ```
# Possible 'value'
console, mobile, tablet, smarttv, wearable, embedded
```

<a name="browser">Browser criteria</a>
-----------
`browser` attribute must match one of these value listed below:
  ```html
    <link rel="alternate" browser="value" href="url" id="id">
  ```
  ```
# Possible 'value'
Amaya, Android Browser, Arora, Avant, Baidu, Blazer, Bolt, Bowser, Camino, Chimera, 
Chrome [WebView], Chromium, Comodo Dragon, Conkeror, Dillo, Dolphin, Doris, Edge, 
Epiphany, Fennec, Firebird, Firefox, Flock, GoBrowser, iCab, ICE Browser, IceApe, 
IceCat, IceDragon, Iceweasel, IE[Mobile], Iron, Jasmine, K-Meleon, Konqueror, Kindle, 
Links, Lunascape, Lynx, Maemo, Maxthon, Midori, Minimo, MIUI Browser, [Mobile] Safari, 
Mosaic, Mozilla, Netfront, Netscape, NetSurf, Nokia, OmniWeb, Opera [Mini/Mobi/Tablet], 
PhantomJS, Phoenix, Polaris, QQBrowser, RockMelt, Silk, Skyfire, SeaMonkey, Sleipnir, 
SlimBrowser, Swiftfox, Tizen, UCBrowser, Vivaldi, w3m, WeChat, Yandex
```

<a name="media">Media queries criteria</a>
-----------
`media queries` attribute must match one of these value listed below:
  ```html
    <link rel="alternate" media="value" href="url" id="id">
  ```
  ```
# Possible 'value'
only screen and (touch-enabled: 0),
only screen and (max-device-width: 640px),
only screen and (min-device-width: 641px,
...any valid media query type
```

## Installation

* `git clone <repository-url>` this repository
* `cd ember-device-detection`
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
