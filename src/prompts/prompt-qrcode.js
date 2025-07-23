import chalk from 'chalk';

const promptQrCode= [
    {
        name:"link",
        desciption: chalk.bgMagenta("insira o link do qr-code"),
    },
    {
        name: "type",
        desciption:chalk.bgMagenta(
            "insira o tipo do qr-code (1-NORMAL OU 2-TERMINAL)",
       ) ,
       "pattern": /^[1-2]+$/ ,
"message": chalk.red(" escola um numero entre 1 e 2")
    }
]

export {promptQrCode};
