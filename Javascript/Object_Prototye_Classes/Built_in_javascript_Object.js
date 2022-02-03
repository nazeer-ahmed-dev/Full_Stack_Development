// Regular Expression

function _regex_checkPassword_Complexity(passowrd)
{
    let regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$')
    return regex.test(passowrd)
}


console.log(_regex_checkPassword_Complexity("Stronger1"))

function findAlert(logData)
{
    let regex = /ERROR:/;

    return regex.exec(logData)
}
let logData = 'INFO:OK;ERROR:Something broke;';
console.log(findAlert(logData))