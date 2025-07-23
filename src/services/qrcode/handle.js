import chalk from "chalk";
import qrcode from "qrcode-terminal";

async function handle (err, result) {
        if (err) {
          console.log(chalk.red(err));
          return;
        }
        const isSmall = result.type==2;
        qrcode.generate(result.link, { small: isSmall} ,(qrcode)=> {
         console.log(chalk.blue("qrcode gareado\n"));
         console.log(qrcode);
        });
}
export {handle};