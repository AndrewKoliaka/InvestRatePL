import Image from 'next/image'
import Calculator from '@/components/calculator';
import { Button, Flowbite } from 'flowbite-react';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="flex flex-col mt-10 md:mt-40">
            <section className="justify-between md:flex">
                <div className="mr-10 md:w-1/2">
                    <h2 className="text-5xl font-bold text-primary">Easy way to get exchage rate for your foreign
                        investement tax calculation in Poland!
                    </h2>
                    <p className="inline-block mt-7">Don't know how to calculate tax from your foreign investments? This
                        website can help you to figure that out and provides a tool to simplify this process, you only
                        need to paste exchange rate into your spreadsheet</p>
                    <Button as={ Link }
                            href="/posts"
                            className="text-primary inline-block border-2 border-primary border-solid mt-7 hover:bg-primary hover:text-white">Learn
                        more</Button>

                </div>
                <div className="md:w-1/2 md:ml-10 mt-10 md:mt-0">
                    <Calculator />
                </div>
            </section>

            <section className="mt-40 mb-5 md:mt-10">
                <h2 className="text-center text-4xl text-primary mb-5">About</h2>
                <p>
                    Investing in foreign securities can be a great way to diversify your portfolio and potentially
                    increase your returns. However, it is important to be aware of the tax implications of such
                    investments. In Poland, investors are subject to a 19% tax on all realized profits from foreign
                    investments. Additionally, a withholding tax is typically deducted from dividends paid by foreign
                    companies. To avoid double taxation, Poland has tax treaties with many developed countries. This
                    means that investors only need to pay the difference between the Polish tax rate and the withholding
                    tax.
                    This website provides a comprehensive guide to calculating taxes from foreign investments in Poland.
                    It also includes a tool for calculating exchange rates, which is essential for converting foreign
                    income into Polish zlotys. By using this website, investors can make informed decisions about their
                    foreign investments and ensure that they are compliant with Polish tax laws.
                </p>

            </section>
        </div>
    )
}
