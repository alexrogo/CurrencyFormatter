export default function currencyFormatter(amount: number, currency: String) {
  let currencySymbol = "$";
  let formattedAmount = "0";
  // format currency
  if (currency) {
    switch (currency) {
      case "usd":
        currencySymbol = "$";
        break;
      case "eur":
        currencySymbol = "€";
        break;
      case "jpy":
        currencySymbol = "¥";
        break;
      case "gbp":
        currencySymbol = "£";
        break;
      case "aud":
        currencySymbol = "A$";
        break;
      case "cad":
        currencySymbol = "C$";
        break;
      case "chf":
        currencySymbol = "CHF";
        break;
      case "cny":
        currencySymbol = "¥";
        break;
      case "hkd":
        currencySymbol = "HK$";
        break;
      case "nzd":
        currencySymbol = "NZ$";
        break;
      default:
        currencySymbol = currency.toUpperCase();
    }
  }

  // format amount
  if (!isNaN(amount)) {
    switch (amount.toString().length) {
      case 1:
        formattedAmount = "0.0" + amount.toString();
        break;
      case 2:
        formattedAmount = "0." + amount.toString();
        break;
      case 3:
        formattedAmount =
          String(amount)[0] + "." + String(amount)[1] + String(amount)[2];
        break;

      // amount.length  > 3
      default:
        let digits = amount.toString().length;
        let last_digits = String(amount).slice(digits - 2, digits);
        let first_digits = String(amount).slice(0, digits - 2);
        formattedAmount = first_digits + "." + last_digits;
    }
  }

  return currencySymbol + formattedAmount;
}
