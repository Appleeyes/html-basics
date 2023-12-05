function getBankAccountInformation(accountHolder, accountNumber, balance) {
  const bankAccount = {
    accountHolder: accountHolder,
    accountNumber: accountNumber,
    balance: balance.toFixed(2), 
    currency: "USD",
  };

  return bankAccount;
}

const accountInfo = "My account information: " + JSON.stringify(getBankAccountInformation("John Doe", "123456789", 1500.75));
console.log(accountInfo);

