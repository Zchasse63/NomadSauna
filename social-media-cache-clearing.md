# Social Media Cache Clearing Instructions

After updating the Open Graph image, you need to clear the cache on various social media platforms to ensure they display the new image. Here's how to do it for each major platform:

## Facebook and Instagram

1. Go to the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. Enter your website URL (https://nomadsaunaco.com)
3. Click "Debug"
4. Click "Scrape Again" to force Facebook to fetch the latest version of your Open Graph tags
5. Verify that the image shown is the new one with the solid Warm Taupe background

## Twitter

1. Go to the [Twitter Card Validator](https://cards-dev.twitter.com/validator)
2. Enter your website URL (https://nomadsaunaco.com)
3. Click "Preview card"
4. Twitter should fetch the latest version of your Open Graph tags
5. Verify that the image shown is the new one with the solid Warm Taupe background

## LinkedIn

1. Go to the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
2. Enter your website URL (https://nomadsaunaco.com)
3. Click "Inspect"
4. LinkedIn should fetch the latest version of your Open Graph tags
5. Verify that the image shown is the new one with the solid Warm Taupe background

## Other Platforms

For other platforms that don't have specific cache clearing tools:

1. Try adding a query parameter to the URL when sharing, e.g., https://nomadsaunaco.com?refresh=1
2. Wait 24-48 hours for the cache to naturally expire on most platforms
3. If the old image still appears, try contacting the platform's support

## Verifying the Image

The new Open Graph image should have:
- A solid Warm Taupe (#D9C4A3) background throughout the entire image
- The Nomad Sauna Co. logo centered on the background
- No multi-panel or different colored sections

If you're still seeing the old image with multiple background panels, try:
1. Hard refreshing your browser (Ctrl+F5 or Cmd+Shift+R)
2. Clearing your browser cache
3. Using an incognito/private browsing window
4. Trying a different browser
