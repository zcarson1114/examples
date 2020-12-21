import handler from 'serve-handler';
import http from 'http';

import { Builder, By, Key, until } from 'selenium-webdriver';

const server = http.createServer((request, response) => {
    return handler(request, response);
});
let driver = new Builder().forBrowser('firefox').build();

describe('Web App', function () {
    before(function() {
        server.listen(5000, () => {});
    });

    after(function() {
        server.close();
    });

    it('should have proper ui', async function() {
        this.timeout(60000); // Give the test case 1 minute.

        await driver.get('http://localhost:5000');
        await driver.findElement(By.id('value'));

        await driver.quit();
    });
});
