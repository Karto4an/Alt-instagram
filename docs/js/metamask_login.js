Moralis.initialize("wC93MGH0kZJ6Gc6pu72XdkDbkdbbTc3l6ZmgGJWT");
Moralis.serverURL = "https://etf331pjxe0y.usemoralis.com:2053/server";

wallet_address_text = document.getElementById("wallet-address");

async function login() {
    console.log('Click!');
    var user = await Moralis.Web3.authenticate({ signingMessage: "Log in to 100gram" });

    if (user) {
        console.log(user);
        console.log(user.get("ethAddress"));
        var ethaddress = user.get("ethAddress");
        wallet_address_text.innerText = `${ethaddress.substring(0,5)}` + '...' + `${ethaddress.substring(ethaddress.length - 4)}`;

        // user.set("email", "test@test.test");
        // user.set("username", "Karto4an");
        // user.set("password", "12345678");
        // user.save();
    }
}
