
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
    // 模拟浏览器
    await page.setting('userAgent', 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1');
    // 设屏幕尺寸
    await page.property('viewportSize', {width: 375, height: 667});

    const status = await page.open('http://api.l.whereask.com/daily/shop/page/welcome.html?t=1495702333802&uid=8bd7ef637e0d46438768defa024930ed&v=1&tone=2&client=1&token=DE60602A2348F7CD04D416DC42832BF82076477AB6790E3CB83CC6BAF62EDAC4&nickname=%25E8%259B%2587%25E8%258E%2593&qr_code=10&l=1&entity_id=99001331&shop_name=%25E8%2596%25AF%25E6%259D%25A1%25E5%2586%2585%25E7%25BD%2591%25E6%25B5%258B%25E8%25AF%2595%25E5%25BA%2597');
    console.log(status);

    const designImage = './assets/welcome.png';
    const actualImage = './assets/act-welocme.png';
    const out = './assets/out-welocme.png';
    await page.render(actualImage);
    console.log('Image diff file created');

    // if (!!require(designImage)) {
    	await ImageDiff(designImage, actualImage, out);
    // }

    // const content = await page.property('content');
    // console.log(content);

    await instance.exit();
}())