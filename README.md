# lng-task

## com.domain.app.lngtask

## Mocked API & Loading/Error Simulation

- The app mocks an API response and adds artificial delays (1.5-2.5 seconds) to simulate loading scenarios.
- Induced errors are included to demonstrate error handling; errors appear randomly (about once every 5-10 reloads).
- Users are provided with an option to retry loading the channels if an error occurs.

## App Build Points

- Built as a simple LightningJS screen that fetches a list of channels from a mock JSON file.
- If running the app or opening the deployed version in a browser, make sure that the
app is viewed in a 1920x1080 viewport in inspector mode. Must click the view area before attempting navigation using arrow keys.
- Channels are rendered as a list, each showing the channel name and a placeholder image.
- Loading state is handled (shows a loading screen while fetching).
- Error state is handled (shows a message if fetch fails, with retry option).
- Layout is 1920x1080, suitable for TV screens.

## Deployed Version

- The deployed version of this branch can be found here: https://glistening-madeleine-a0dec5.netlify.app/

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
