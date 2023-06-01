Feature('HomeScreen');

Scenario(
  'Verify "Get Started" button navigates to Home screen',
  async ({I}) => {
    await I.seeAppIsInstalled('com.deviceinfo');
    await I.seeElement({id: 'button-getStarted'});
    await I.tap({id: 'button-getStarted'});
    await I.waitForElement({id: 'input-text'});
    await I.seeElement({id: 'input-text'});
    await I.waitForElement({id: 'button-submit'});
  },
);
