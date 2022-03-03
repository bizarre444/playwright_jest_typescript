import main from '../helper/ka_main';
import parent from '../helper/ka_parent';
import learning from '../helper/ka_learning';
import educator from '../helper/ka_educator';
import learning_tabs_worksheet from '../helper/ka_learning_tabs';

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

// describe(`Learning resources test`, () => {
    
//     it('Correct loading page', async () => {
//         await page.goto(learning.url);
//         const title = await page.innerText(learning_tabs_worksheet.title_learning_tag);
//         let titleExp: string = learning_tabs_worksheet.text_learning;
//         expect(title).toBe(titleExp);
//     });

    
    
// })

afterAll(async () => {
    await page.close();
})