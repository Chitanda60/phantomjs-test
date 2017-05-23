/**
 * image diff
 * 图片比较工具
 */

module.exports = (imageAPath, imageBPath, out) => {
    return new Promise((resolve, reject) => {
        var BlinkDiff = require('blink-diff')
        var diff = new BlinkDiff({
            imageAPath: imageAPath,
            imageBPath: imageBPath,

            thresholdType: BlinkDiff.THRESHOLD_PERCENT,
            threshold: 0.01,

            imageOutputPath: out,

            composition: false
        });

        diff.run(function (error, result) {
            if (error) {
                throw error;
            } else {
                console.log(diff.hasPassed(result.code) ? 'Passed' : 'Failed');
                console.log('Found ' + result.differences + ' differences.');
                resolve()
            }
        });
    })
}