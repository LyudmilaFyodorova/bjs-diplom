const logoutButton = new LogoutButton();
logoutButton.action = () => {
    ApiConnector.logout((response) => {
        if (response.success) {
            location.reload();
        }
    })
}

ApiConnector.current((response) => {
    if (response.success) {
        ProfileWidget.showProfile(response.data);
    }
})

const ratesBoard = new RatesBoard;
function getRates() {
    ApiConnector.getStocks((response) => {
        if (response.success) {
            ratesBoard.clearTable();
            ratesBoard.fillTable(response.data);
        }
    })
}

getRates();
const intervalId = setInterval(getRates, 60000);

const moneyManager = new MoneyManager;
moneyManager.addMoneyCallback = (data) => {
    ApiConnector.addMoney(data, (response) => {
        if (response.success) {
            ProfileWidget.showProfile(response.data);
        }
        moneyManager.setMessage(response.success);
        moneyManager.setMessage(response.error);

    })
}