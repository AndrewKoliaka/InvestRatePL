import { List } from 'flowbite-react';
import Disclaimer from '@/app/posts/components/disclaimer';
import Image from 'next/image';

export default function () {
    return (
        <article className="container lg:w-3/4">
            <h1 className="text-3xl mt-10">Calculating capital gains tax</h1>
            <p>22 December 2023</p>
            <picture className="flex w-full relative my-5 h-96">
                <Image src="/image2.jpg" fill alt="hello" title="title" objectFit="cover"
                       className="rounded" />
            </picture>

            <p>
                As an investor venturing into foreign markets, it's crucial to understand the tax implications of your
                transactions. In Poland, capital gains from the sale of investment securities are subject to a 19% tax.
                However, calculating this tax can be a complex process, as it involves converting foreign currency into
                Polish zlotys (PLN) at the appropriate exchange rate.
            </p>

            <br />

            <article>
                To determine the capital gains tax owed, you'll need to follow these steps:

                <List ordered className="text-black">
                    <List.Item>
                        Determine the acquisition cost: Calculate the total cost incurred when purchasing the investment
                        securities.
                        This includes the purchase price, any broker commissions, and any other relevant expenses.
                    </List.Item>
                    <List.Item>
                        Obtain the exchange rate: Obtain the exchange rate between the currency of the investment
                        security and PLN
                        for the working day prior to the sale. This exchange rate will be used to calculate the tax base
                        in PLN.
                    </List.Item>
                    <List.Item>
                        Calculate the selling price: Determine the proceeds of the sale, including the sale price of the
                        investment
                        securities and any brokerage fees.
                    </List.Item>
                    <List.Item>
                        Calculate the capital gains: Subtract the acquisition cost from the selling price to determine
                        the capital
                        gains generated from the sale.
                    </List.Item>
                    <List.Item>
                        Apply the 19% tax rate: Multiply the capital gains by 19% to calculate the capital gains tax
                        owed.
                    </List.Item>
                </List>
            </article>

            <br />

            <article>
                <h4>Example:</h4>

                <p>
                    You bought one XYZ stock for $100 and sold it for $200, resulting in a profit of $100. No
                    withholding tax was taken. In this case, you are liable for the full 19% tax on your profit.

                    <List className="text-black">
                        <List.Item>Enter the date you bought the stock (November 27, 2023);</List.Item>
                        <List.Item>The exchange rate on November 26, 2023 (previous day) is automatically calculated and
                            copied to the clipboard. In this case, the exchange rate is 4.15 PLN per USD;</List.Item>
                        <List.Item>The cost of buying the stock is $100 * 4.15 PLN = 415 PLN;</List.Item>
                        <List.Item>Enter the date you sold the stock (November 30, 2023);</List.Item>
                        <List.Item>The exchange rate on November 30, 2023 is automatically calculated and copied to the
                            clipboard. In this case, the exchange rate is 4.16 PLN per USD;</List.Item>
                        <List.Item>The proceeds from selling the stock are $200 * 4.16 PLN = 832 PLN;</List.Item>
                        <List.Item>Your profit is 832 PLN - 415 PLN = 417 PLN;</List.Item>
                        <List.Item>The Polish tax on your profit is 417 PLN * 19% = 79.23 PLN.</List.Item>
                    </List>
                </p>
            </article>

            <br />

            <Disclaimer />
        </article>
    );
}
