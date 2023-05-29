Feature('HomeScreen');

Scenario(
  'Verify "Get Started" button navigates to Home screen',
  async ({I}) => {
    // Navigate to the home screen
    await I.amOnPage('Home');

    // Tap the "Get Started" button
    await I.tap({testID: 'button-getStarted'});

    // Verify that we're on the login screen
    await I.seeElement({title: 'Login'});
  },
);
