// LOG IN POPUP

const login_button = document.getElementById("account-login");
const login_dialog = document.getElementById("popup-login");
const body = document.getElementsByTagName("body")[0];

login_button.addEventListener("click", event => {
    login_dialog.classList.add("show");
    popup_blocker.classList.add("show");
    body.classList.add("lock");
});


// LOG IN WITH METAMASK

const login_with_metamask_button = document.getElementById("metamask-login");
const providers_list = document.getElementById("providers-list");
const popup_alert = document.getElementById("popup-alert");
const popup_blocker = document.getElementById("popup-blocker");

login_with_metamask_button.addEventListener("click", event => {
    providers_list.classList.add("hide");
    popup_alert.classList.remove("hide");
    login().then(value => {
        login_dialog.classList.remove("show");
        providers_list.classList.remove("hide");
        popup_alert.classList.add("hide");
        popup_blocker.classList.remove("show");
        body.classList.remove("lock");
        console.log("DONE");
    });
});


// TRACK BACKGROUND CLICKS

popup_blocker.addEventListener("click", event => {
    popup_blocker.classList.remove("show");
    login_dialog.classList.remove("show");
    body.classList.remove("lock");
});
