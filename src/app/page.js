import Image from 'next/image'
import Calculator from '@/components/calculator';
import { Button, Flowbite } from 'flowbite-react';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="container flex flex-col mt-10 md:mt-40">
            <section className="justify-between md:flex">
                <div className="mr-10 md:w-1/2">
                    <h2 className="text-5xl font-bold text-primary">Easy way to get exchage rate for your foreign
                        investement tax calculation</h2>
                    <p className="inline-block mt-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                        architecto aut debitis dicta fuga incidunt maiores nostrum, quasi. Accusamus accusantium aliquam
                        culpa doloremque dolores dolorum, eius facilis ipsa laudantium maxime minus neque nesciunt
                        perferendis, praesentium quasi suscipit ullam unde, voluptate?</p>
                    <Button as={ Link }
                            href="/posts"
                            className="text-primary inline-block border-2 border-primary border-solid mt-7 hover:bg-primary hover:text-white">Learn more</Button>

                </div>
                <div className="md:w-1/2 md:ml-10 mt-10 md:mt-0">
                    <Calculator />
                </div>
            </section>

            <section className="mt-40 mb-10 md:mt-10">
                <h2 className="text-center text-4xl text-primary mb-5">About</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet, animi commodi consectetur
                    consequatur delectus doloremque ducimus eius exercitationem fugit incidunt ipsa minima, nesciunt nobis
                    sapiente sed sunt vero vitae voluptatibus, voluptatum? Accusamus aliquid aperiam consequatur delectus
                    dolore eligendi et itaque, laudantium maxime, minima nostrum possimus praesentium quae quibusdam quo
                    quos reiciendis repellendus sapiente suscipit, tempora temporibus ut voluptates. Aliquam amet enim in
                    perferendis reprehenderit tempora temporibus, veritatis! Esse et ipsum maiores placeat quaerat qui
                    repellendus suscipit? Enim ex facere facilis id minima mollitia nam optio perspiciatis, porro
                    praesentium, reprehenderit sequi voluptatibus. Alias ducimus expedita magnam minima perspiciatis
                    reiciendis vero?</p>

            </section>
        </div>
    )
}
