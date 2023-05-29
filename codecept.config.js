exports.config = {
  tests: './__tests__/**/*.ts',
  output: './output',
  helpers: {
    Appium: {
      app: 'android/app/build/outputs/apk/debug/app-debug.apk',
      platform: 'Android',
      device: 'emulator',
      desiredCapabilities: {
        appPackage: 'com.deviceinfo',
        appActivity: 'com.deviceinfo.MainActivity',
        platformName: 'Android',
        platformVersion: '12.0',
        deviceName: 'Pixel_5_API_31',
      },
    },
  },
  // include: {
  //   I: './steps_file.js',
  // },
  bootstrap: null,
  mocha: {},
  name: 'deviceinfo',
};
