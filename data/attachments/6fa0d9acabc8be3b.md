# Test info

- Name: Wantlist >> Checking the display of the Wantlist page for an authorized user
- Location: /home/runner/work/discogs-api-tests/discogs-api-tests/src/ui/tests/wantlist.spec.ts:4:7

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
  - <launching> /home/runner/.cache/ms-playwright/chromium-1169/chrome-linux/chrome --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-extensions --disable-features=AcceptCHFrame,AutoExpandDetailsElement,AvoidUnnecessaryBeforeUnloadCheckSync,CertificateTransparencyComponentUpdater,DeferRendererTasksAfterInput,DestroyProfileOnBrowserClose,DialMediaRouteProvider,ExtensionManifestV2Disabled,GlobalMediaControls,HttpsUpgrades,ImprovedCookieControls,LazyFrameLoading,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,Translate --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --force-color-profile=srgb --metrics-recording-only --no-first-run --enable-automation --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --no-sandbox --user-data-dir=/tmp/playwright_chromiumdev_profile-7AgT5H --remote-debugging-pipe --no-startup-window
  - <launched> pid=2717
  - [pid=2717][err] [2717:2717:0523/153602.630830:ERROR:ui/ozone/platform/x11/ozone_platform_x11.cc:249] Missing X server or $DISPLAY
  - [pid=2717][err] [2717:2717:0523/153602.630869:ERROR:ui/aura/env.cc:257] The platform failed to initialize.  Exiting.

```

# Test source

```ts
   1 | import { test } from '../../fixtures/ui.fixtures/ui.data';
   2 |
   3 | test.describe('Wantlist', async () => {
>  4 |   test('Checking the display of the Wantlist page for an authorized user', async ({
     |       ^ Error: browserType.launch: Target page, context or browser has been closed
   5 |     pageManager
   6 |   }) => {
   7 |     await pageManager.wantlistPage.goto();
   8 |     await pageManager.wantlistPage.checkWantlistPageTitle();
   9 |     // await pageManager.wantlistPage.verifyAllReleasesStructure();
  10 |   });
  11 | });
  12 |
```