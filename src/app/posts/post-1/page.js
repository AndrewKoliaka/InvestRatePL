import Image from 'next/image';
import { List } from 'flowbite-react';
import Link from 'next/link';
import Disclaimer from '@/app/posts/components/disclaimer';

export default function Post1() {
    return (
        <article className="container lg:w-3/4">
            <h1 className="text-3xl mt-10">Calculating taxes from foreign dividends</h1>
            <p>22 December 2023</p>
            <picture className="flex w-full relative my-5 h-96">
                <Image src="/image1.jpg" fill alt="hello" title="title" objectFit="cover"
                       className="rounded" />
            </picture>

            <p>
                If you've invested in foreign securities, you may be wondering how to calculate the taxes you owe. This
                guide can assist you in making these calculations.

                <br /><br />
            </p>

            <article>
                <h4>Taxation of Foreign Investment Income in Poland.</h4>

                <br />
                <p>
                    When you invest in foreign securities and receive income from them, you are liable for a 19% tax on
                    all
                    realized profits. In the case of dividends, a withholding tax (a tax levied by the government of the
                    stock's home country) is typically deducted. Poland typically has tax treaties with developed
                    countries
                    to avoid double taxation. This means that investors only need to pay the difference between the
                    Polish
                    tax rate (19%) and the withholding tax.
                </p>
            </article>

            <br />

            <article>
                <h4>Calculation Steps:</h4>

                <List className="text-black" ordered>
                    <List.Item>Determine the withholding tax rate: Check the tax treaty between Poland and the stock's
                        home country to determine the applicable withholding tax rate;</List.Item>
                    <List.Item>Calculate the gross income: Convert the received income into Polish zlotys (PLN) using
                        the exchange rate from the working day prior to receiving the income. This <Link href="/"
                                                                                                         className="text-primary hover:underline">tool</Link> can
                        help :)</List.Item>
                    <List.Item>Calculate the withholding tax: Multiply the gross income by the withholding tax
                        rate;</List.Item>
                    <List.Item>Calculate the Polish tax: Multiply the gross income by 19%;</List.Item>
                    <List.Item>Calculate the net income: Subtract the withholding tax from the Polish tax. This is the
                        amount you owe to the Polish tax authorities.</List.Item>
                </List>
            </article>


            <br />

            <article>
                <h4>Example:</h4>

                <p>
                    You received $1 in dividends from stock ABC on November 29, 2023. Withholding tax was already taken
                    (15%). You need to pay the difference (19% - 15%) = 4%.
                    <List className="text-black">
                        <List.Item>Enter the date you received the income (November 29, 2023);</List.Item>
                        <List.Item>The exchange rate on November 28, 2023 (previous day) is automatically calculated and
                            copied to the
                            clipboard. In this case, the exchange rate is 3.93 PLN per USD;</List.Item>
                        <List.Item>Your gross income is $1 * 3.93 PLN = 3.93 PLN;</List.Item>
                        <List.Item>The withholding tax is $1 * 15% = $0.15, which equals 0.59 PLN;</List.Item>
                        <List.Item>The Polish tax is 3.93 PLN * 19% = 0.75 PLN;</List.Item>
                        <List.Item>The net income is 0.75 PLN - 0.59 PLN = 0.16 PLN</List.Item>
                    </List>
                </p>
            </article>

            <br />

            <Disclaimer />

        </article>
    );
}
