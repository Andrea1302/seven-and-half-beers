
function checkMail(mail) {
    const reMail =
        /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g
    return reMail.test(mail)
}

function checkPassword(password) {
    const rePassword = /^(?=.{8,})(?=.[a-z])(?=.[A-Z])(?=.[@#$%!^&+=]).*$/;
    return rePassword.test(password)
}

export {
    checkMail,
    checkPassword
}