import { Card } from 'flowbite-react';
import Link from 'next/link';

const articles = [
    {
        title: 'Lorem ipsum dolor sit amet.',
        imgSrc: '/image1.jpg',
        imgAlt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, ipsum?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, rerum.',
        date: '22 December2023',
        path: 'posts/post-1'
    },
    {
        title: 'Calculating capital gains tax',
        imgSrc: '/image2.jpg',
        imgAlt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, ipsum?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, rerum.',
        date: '22 December 2023',
        path: 'posts/capital-gains-tax-calculation'
    },
    {
        title: 'What is tax loss harvesting?',
        imgSrc: '/image3.jpg',
        imgAlt: 'Tax loss harvesting',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, rerum.',
        date: '22 December 2023',
        path: 'posts/tax-loss-harvesting'
    }
];

export default function Blob() {
    return (
        <>
            <h1 className="text-5xl my-10">Blog</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, ipsum?</p>

            <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-16 mt-10">
                {
                    articles.map(item => (
                        <li>
                            <Card imgSrc={ item.imgSrc } imgAlt={ item.imgAlt }>
                                <Link href={ item.path }>
                                    <h5>{ item.title }</h5>
                                    <p className="inline-block my-5">{ item.description }</p>
                                    <p>{ item.date }</p>
                                </Link>
                            </Card>
                        </li>
                    ))
                }
            </ul>
        </>
    );
}
