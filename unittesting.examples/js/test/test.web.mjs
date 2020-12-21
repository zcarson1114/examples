import assert from 'assert';
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
        driver.quit();
        server.close();
    });

    it('should have a proper ui', async function() {
        this.timeout(60000); // Give the test case 1 minute.

        try {
            await driver.get('http://localhost:5000');

            let value_input_ele = await driver.wait(until.elementLocated(By.css('#value')), 5000);
            let btn = await driver.wait(until.elementLocated(By.css('#calculate-btn')), 5000);
        } finally {}
    });

    it('should show the result when click on the button', async function() {
        this.timeout(60000);
        try {
            await driver.get('http://localhost:5000');

            let value_input_ele = await driver.wait(until.elementLocated(By.css('#value')), 5000);
            let btn = await driver.wait(until.elementLocated(By.css('#calculate-btn')), 5000);
            let result_ele = await driver.wait(until.elementLocated(By.css('#result')), 5000);


            await btn.click();
            assert.equal("8", await result_ele.getAttribute('textContent'));

        } finally {}
    });
});
