
/**
 * plantomjs-node
 */
const phantom = require('phantom');
const ImageDiff = require('./tools/imageDiff');

(async function() {
    const instance = await phantom.create();
    const page = await instance.createPage();

    // 设置cookie
	page.addCookie({
	    name: 'BDUSS',
	    value: 'k1SnpjQmhubXpJSjllSnVJb3gxQ0dSNDdMWmRSRjBrcGd-LVp2ZWZWc1NvVXRaSUFBQUFBJCQAAAAAAAAAAAEAAABdylgqZnJlZdL10-rM7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIUJFkSFCRZdn',
	    domain: 'baidu.com',
	    path: '/',
	    secure: false,
	    httponly: false,
	    expires: Date.now() + (1000 * 60 * 60 * 24 * 5)
	});
	await page.cookies()


    // await page.on("onResourceRequested", function(requestData) {
    //     console.info('Requesting', requestData.url);
    // });
    await page.setting('userAgent', 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1');
    await page.property('viewportSize', {width: 375, height: 667});

    const status = await page.open('https://www.baidu.com/');
    console.log(status);

    const designImage = './assets/baidu.png';
    const actualImage = './assets/act-baidu.png';
    const out = './assets/out-baidu.png';
    await page.render(actualImage);
    console.log('Image diff file created');

    if (!!actualImage.length) {
    	await ImageDiff(designImage, actualImage, out);
    }    

    // const content = await page.property('content');
    // console.log(content);

    await instance.exit();
}())