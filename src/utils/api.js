export const currencyMap = {
    USD: 'usd',
    EURO: 'eur',
    CAD: 'cad',
    AUD: 'aud',
    UAH: 'uah',
    CHF: 'chf'
};

export default async function fetchRate(date = new Date(), currency = currencyMap.USD) {
    let previousDayDate = new Date(date.setDate(date.getDate() - 1));
    let rate, calculationDate, response;

    while (!rate) {
        try {
            calculationDate = new Date(previousDayDate).toISOString().slice(0, 10);
            response = await fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${currency}/${calculationDate}`, { cache: 'no-store' });

            if (response.status === 404) {
                previousDayDate.setDate(previousDayDate.getDate() - 1);
                continue;
            }

            if (response.status !== 200) {
                throw new Error(response.statusText);
            }

            const data = await response.json();

            rate = data.rates[0].mid;

            return {
                rate,
                date: calculationDate
            };
        } catch (e) {
            alert(e.message)
            return;
        }
    }
}
