# Test info

- Name: Check login with correct and incorrect credentials >> Login flow with unknown credentials
- Location: /home/runner/work/discogs-api-tests/discogs-api-tests/src/ui/tests/login.spec.ts:21:7

# Error details

```
Error: browserType.launch: Target page, context or browser has been closed
Browser logs:

╔════════════════════════════════════════════════════════════════════════════════════════════════╗
║ Looks like you launched a headed browser without having a XServer running.                     ║
║ Set either 'headless: true' or use 'xvfb-run <your-playwright-app>' before running Playwright. ║
║                                                                                                ║
║ <3 Playwright Team                                                                             ║
╚════════════════════════════════════════════════════════════════════════════════════════════════╝
Call log:
  - <launching> /home/runner/.cache/ms-playwright/chromium-1169/chrome-linux/chrome --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-extensions --disable-features=AcceptCHFrame,AutoExpandDetailsElement,AvoidUnnecessaryBeforeUnloadCheckSync,CertificateTransparencyComponentUpdater,DeferRendererTasksAfterInput,DestroyProfileOnBrowserClose,DialMediaRouteProvider,ExtensionManifestV2Disabled,GlobalMediaControls,HttpsUpgrades,ImprovedCookieControls,LazyFrameLoading,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,Translate --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --force-color-profile=srgb --metrics-recording-only --no-first-run --enable-automation --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --no-sandbox --user-data-dir=/tmp/playwright_chromiumdev_profile-UK3oHU --remote-debugging-pipe --no-startup-window
  - <launched> pid=2359
  - [pid=2359][err] [2359:2359:0523/153552.525925:ERROR:ui/ozone/platform/x11/ozone_platform_x11.cc:249] Missing X server or $DISPLAY
  - [pid=2359][err] [2359:2359:0523/153552.525959:ERROR:ui/aura/env.cc:257] The platform failed to initialize.  Exiting.

```

# Test source

```ts
   1 | import { test } from '../../fixtures/ui.fixtures/ui.data';
   2 | import { FLAGS } from '../../utils/constants/flags';
   3 | import { TestTags } from '../../utils/constants/tags';
   4 |
   5 | test.use({ storageState: { cookies: [], origins: [] } });
   6 |
   7 | test.describe('Check login with correct and incorrect credentials', async () => {
   8 |   test.beforeEach(async ({ pageManager }) => {
   9 |     await pageManager.loginPage.goto();
  10 |   });
  11 |
  12 |   test(
  13 |     'Login flow with valid credentials',
  14 |     { tag: [TestTags.UI, TestTags.POSITIVE] },
  15 |     async ({ pageManager, uiUserName }) => {
  16 |       await pageManager.loginPage.enterLoginCredentialsAndClickContinue(FLAGS.POSITIVE);
  17 |       await pageManager.mainPage.verifyUserAfterLogin(uiUserName);
  18 |     }
  19 |   );
  20 |
> 21 |   test(
     |       ^ Error: browserType.launch: Target page, context or browser has been closed
  22 |     'Login flow with unknown credentials',
  23 |     { tag: [TestTags.UI, TestTags.NEGATIVE] },
  24 |     async ({ pageManager }) => {
  25 |       await pageManager.loginPage.enterLoginCredentialsAndClickContinue(FLAGS.NEGATIVE);
  26 |       await pageManager.loginPage.checkErrorMessage();
  27 |     }
  28 |   );
  29 | });
  30 |
```