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
            clearTable();
            fillTable(response.data);
        }
    })
}

getRates();
const intervalId = setInterval(getRates, 60000);
