import prompt from 'prompt'
import  {mainPrompt}  from './prompts/prompt-main.js'
import chalk from 'chalk';
import {creadeQrCode}  from './services/qrcode/create.js';
import {createPassword}  from './services/password/create.js';
async function main() {
    prompt.get(mainPrompt, async (err, choose) => {
        if(choose.select ==1) await creadeQrCode();
        if(choose.select ==2) await createPassword();  
    });
prompt.start();
}
main();
