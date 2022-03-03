import main from '../helper/ka_main';
import parent from '../helper/ka_parent';
import learning from '../helper/ka_learning';
import educator from '../helper/ka_educator';
import learning_tabs_worksheet from '../helper/learning_tabs/ka_learning_tabs_worksheet';
import learning_tabs_games from '../helper/learning_tabs/ka_learning_tabs_games';
import learning_tabs_video from '../helper/learning_tabs/ka_learning_tabs_video';
import learning_tabs_lesson from '../helper/learning_tabs/ka_learning_tabs_video';

describe(`Check page title`, () => {
    
    it('Correct title on Main page', async () => {
        await page.goto(main.url);
        const title = await page.innerText(main.title_tag);
        let titleExp: string = main.title;
        expect(title).toBe(titleExp);
    });

    it('Correct title on Parent page', async () => {
        await page.goto(parent.url);
        const title = await page.innerText(parent.title_tag);
        let titleExp: string = parent.title;
        expect(title).toBe(titleExp);
    });

    it('Correct title on Learning page', async () => {
        await page.goto(learning.url);
        const title = await page.innerText(learning.title_tag);
        let titleExp: string = learning.title;
        expect(title).toBe(titleExp);
    });

    it('Correct title on Teachers page', async () => {
        await page.goto(educator.url);
        const title = await page.innerText(educator.title_tag);
        let titleExp: string = educator.title;
        expect(title).toBe(titleExp);
    });
})

describe(`Learning resources test`, () => {

    beforeAll(async () => {
        await page.goto(learning_tabs_worksheet.url);
    })

    it('Correct loading tab', async () => {
        const title = await page.innerText(learning_tabs_worksheet.title_learning_tag);
        let titleExp: string = learning_tabs_worksheet.text_learning;
        expect(title).toBe(titleExp);
    });

    it('Correct loading games tab', async () => {
        await page.click('text=' + learning_tabs_games.tag_learning);
        await page.waitForSelector(learning_tabs_games.title_learning_tag);
        await page.screenshot({
            path: './screenshots/' + learning_tabs_games.name + '.png',
            fullPage: true
        });
    });

    it('Correct loading video tab', async () => {
        await page.click('text=' + learning_tabs_video.tag_learning);
        await page.waitForTimeout(5000);
        await page.waitForSelector(learning_tabs_video.title_learning_tag);
        await page.screenshot({
            path: './screenshots/' + learning_tabs_video.name + '.png',
            fullPage: true
        });
    });

    it('Correct loading lesson tab', async () => {
        await page.click('text=' + learning_tabs_lesson.tag_learning);
        await page.waitForTimeout(5000);
        await page.waitForSelector(learning_tabs_lesson.title_learning_tag);
        await page.screenshot({
            path: './screenshots/' + learning_tabs_lesson.name + '.png',
            fullPage: true
        });
    });

    //TODO check URL
    
})

afterAll(async () => {
    await page.close();
})