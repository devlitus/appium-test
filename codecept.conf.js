exports.config = {
  tests: './__tests__/**/*.ts',
  output: './output',
  helpers: {
    Appium: {
      app: '/home/kirito/dev/deviceInfo/android/app/release/app-release.apk',
      platform: 'Android',
      device: 'emulator',
      desiredCapabilities: {
        appPackage: 'com.deviceinfo',
        appActivity: 'MainActivity',
        platformName: 'Android',
        platformVersion: '12.0',
        deviceName: 'emulator-5554',
        // autoGrantPermissions: true,
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
