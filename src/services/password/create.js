import chalk from 'chalk';
import  handle  from './handle.js';

async function createPassword() {
    console.log(chalk.green("criar senha"));
    const password = await handle();
    console.log(chalk.red(password));
}

export {createPassword};