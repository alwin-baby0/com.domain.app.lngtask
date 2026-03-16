# lng-task

## com.domain.app.lngtask

## Horizontal Row & Card Component

- The app displays a horizontal row of content cards generated from a mock JSON response.
- Built as a LightningJS component that renders a scrollable row of cards.
- Each card shows a thumbnail image, title, and subtitle.
- The row handles remote control focus: left/right navigation with d-pad, smooth scroll animation, and visible focus state on the active card.
- The component accepts its data via props.

## Component Design Points

- Horizontal scrolling row for TV interface
- Card focus and navigation with remote
- Smooth animation and clear focus indication
- Flexible data input via props
- The app is developed for 1920x1080 resolution, suitable for TV viewing.

## Deployed Version

- The deployed version of this branch can be found here: https://lucent-gnome-aabd72.netlify.app/

### Getting started with using

> Before you follow the steps below, make sure you have the
[Lightning-CLI](https://rdkcentral.github.io/Lightning-CLI/#/) installed _globally_ only your system

```
npm install -g @lightningjs/cli
```

#### Running the App

1. Install the NPM dependencies by running `npm install`

2. Build the App using the _Lightning-CLI_ by running `lng build` inside the root of your project

3. Fire up a local webserver and open the App in a browser by running `lng serve` inside the root of your project

#### Developing the App

During development you can use the **watcher** functionality of the _Lightning-CLI_.

- use `lng watch` to automatically _rebuild_ your App whenever you make a change in the `src` or  `static` folder
- use `lng dev` to start the watcher and run a local webserver / open the App in a browser _at the same time_

#### Documentation

Use `lng docs` to open up the Lightning-SDK documentation.
