window.onload = function () {
    if (window.ethereum !== "undefined") {
        this.ethereum.on("accountsChanged", handleAccountsChanged)

    }
}

let accounts;

const handleAccountsChanged = (a) => {
    console.log("accounts changed")
    accounts = a
}

async function connectWallet() {
    accounts = await window.ethereum.request({method: "eth_requestAccounts"}).catch((err) => {
        console.log(err.code)
    })
    console.log(accounts)
}

async function checkBalance() {
    let balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [
            accounts[0],
            'latest'

        ]
    }).catch((err) => {
        console.log(err.code)
    })
    console.log(parseInt(balance) / Math.pow(10, 18))
}