/* PostHog web analytics — cookieless (persistence: memory), so no consent banner needed.
   Same PostHog project as the app; web traffic shows up as $pageview events. */
(function () {
  var s = document.createElement('script');
  s.async = true;
  s.crossOrigin = 'anonymous';
  s.src = 'https://us-assets.i.posthog.com/static/array.js';
  s.onload = function () {
    if (window.posthog && window.posthog.init) {
      window.posthog.init('phc_nUkc5cS8M8UFKyyfbBDyTw4jsxV3A87h9uzffbzfnpCq', {
        api_host: 'https://us.i.posthog.com',
        persistence: 'memory'
      });
    }
  };
  document.head.appendChild(s);
})();
