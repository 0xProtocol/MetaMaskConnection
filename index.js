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
            "0xD585ef6eA45EeAe19b4454B1dB15B696FcbE94dD",
            'latest'

        ]
    }).catch((err) => {
        console.log(err.code)
    })
    console.log(parseInt(balance) / Math.pow(10,18))
}