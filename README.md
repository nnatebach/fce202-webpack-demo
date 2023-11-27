The original site of this webpage can be found on https://www.bar-e-passione.com/
This page is for the demonstration purpose of how we can improve the PSI scores (web performance) by applying module bundler technique with the integration of Webpack


The reference for this page PSI practice can be found at https://github.com/vannizhang/web-performance-optimization-with-webpack


Problem: Missing assets (images) from CSS files
Solution: Ignore urls (missing files) in CSS files only
How to fix: https://github.com/webpack-contrib/mini-css-extract-plugin/issues/320

Minify CSS - https://webpack.js.org/plugins/css-minimizer-webpack-plugin/

splitChunks.minSize - https://webpack.js.org/plugins/split-chunks-plugin/#splitchunksminsize
Minimum size, in bytes, for a chunk to be generated

splitChunks.maxSize - https://webpack.js.org/plugins/split-chunks-plugin/#splitchunksmaxsize
tells webpack to try to split chunks bigger than maxSize bytes into smaller parts. Parts will be at least minSize (next to maxSize) in size.

imagemin-webp-webpack-plugin - https://github.com/iampava/imagemin-webp-webpack-plugin
Convert images to ".webp" format without deleting the original images
.jpg => .jpg.webp
.png => .png.webp

image-minimizer-webpack-plugin - https://www.npmjs.com/package/image-minimizer-webpack-plugin
Optimize (compress) all images using imagemin. No matter how large the size of the images turn out to be, they are always optimized/compressed.
Optimize with "sharp" - https://webpack.js.org/plugins/image-minimizer-webpack-plugin/#optimize-with-sharp