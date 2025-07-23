import chalk from "chalk";

const mainPrompt=
{
"name": "select",
"description":chalk.bgMagenta("escolha a ferramenta \n (1-gerar qr-code , 2-gerar senha)"),
"pattern": /^[1-2]+$/ ,
"message": chalk.red(" escola um numero entre 1 e 2")
}

export {mainPrompt};