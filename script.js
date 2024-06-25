
var captcha = document.getElementById("captcha")
var input = document.getElementById("userinput")
var verifybtn = document.getElementById("verifybtn")
var refresh = document.getElementById("refresh")

verifybtn.addEventListener("click", function () {
    if (captcha.textContent == input.value) {
        alert("CAPTCHA Verified Successfully")
    }
    else {
        alert("Captcha Verfication Failed, Please Try Agian Later")
    }
})

function generateCaptcha() {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var CAPTCHA = [];
    var length = 6;
    for (var i = 0; i < length; i++) {
        var index = Math.floor(Math.random() * chars.length);
        CAPTCHA.push(chars[index])
    }
    captchaText = CAPTCHA.join("")
    captcha.textContent = captchaText
}


refresh.addEventListener("click",function() {
    generateCaptcha()
})

