https://google-test-lka.herokuapp.com

Process and Challenges

When prototyping a new solution, I always start with the content and the data. Regardless of how complex or interactive we make a product, quality content and data makes or breaks it. It also gives you more to experiment with.

I generated a `response.json` file that would mimic and API response of a collection of images. In it I added the image files, and the minimum amount of metadata needed to render something workable.

I had to extract the images from the PSD as none were provided, but they are lower res than I would have used. I talked to Makeda about this, and was going to generate my own but that would have taken a lot of time.

Since this is a prototype and because I think it produces clean interfaces, I used a functional CSS library (tachyons.io). I also broke down the interface into as many singular/reusable components that I could in the time alloted.

The first thing I did was quickly sketch it to the mockup specs, that means that the control bar at the bottom is there but doesn't work.

I tried to make the gallery as simple as possible and still give a good user experience. When you click or tap an image it opens it in full screen and the user can swipe the images left and right as it's a common use case.

While I know this was a mobile phone oriented project, I couldn't ignore desktop. So on desktop, small buttons appear on the left and right for the user to click allow the gallery to go forward and backward. The buttons disappear when you reach the end/beginning of the gallery.


If I had more time and assets, I would have worked on the following things.

- Multiple size images and fallbacks using the `<picture />` element. Image quality is huge and also a giant load on pages/apps.

- I would have worked on an aspect ratio locking mechanism for the images, which would have solved a problem with landscape rendering on mobile.
