'use client'

import Link from 'next/link';
import { Dropdown, Navbar } from 'flowbite-react';
import { useTranslation } from 'next-export-i18n';

export default function () {
    return (
        <div className="flex-initial bg-primary border border-solid border-green-500">
            <Navbar fluid rounded className="container mx-auto bg-primary text-white">
                <Navbar.Brand as={ Link } href="/">
                    <span
                        className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">InvestRate</span>
                </Navbar.Brand>

                <div className="flex md:order-2">
                    <div className="hidden md:block">
                        <Dropdown label="Language" dismissOnClick={false}>
                            <Dropdown.Item>Polska</Dropdown.Item>
                            <Dropdown.Item>English</Dropdown.Item>
                            <Dropdown.Item>Українська</Dropdown.Item>
                        </Dropdown>
                    </div>

                    <Navbar.Toggle className="text-white hover:bg-primary"/>
                </div>
                <Navbar.Collapse>
                    <Navbar.Link as={ Link } href="/" className="text-white hover:bg-primary">
                        Home
                    </Navbar.Link>
                    <Navbar.Link as={ Link } href="/posts" className="text-white hover:bg-primary">
                        Blog
                    </Navbar.Link>
                    <Navbar.Link as={ Link } href="/feedback" className="text-white hover:bg-primary">
                        Feedback
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
