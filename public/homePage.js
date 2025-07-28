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
        ProfileWidget.showProfile(response);
    }
})

const ratesBoard = new RatesBoard;
ratesBoard.func = () => {
    ApiConnector.getStocks((response) => {
        if (response.success) {
            clearTable();
            fillTable(data);
        }
    })

}

func();
const intervalId = setInterval(func, 60000);