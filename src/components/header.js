'use client'

import Link from 'next/link';
import { Navbar } from 'flowbite-react';

const styles = {
    height: 100
};

export default function () {
    return <Navbar fluid rounded style={styles}>
        <Navbar.Brand as={ Link } href="/">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">InvestRate</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Navbar.Link as={ Link } href="/">
                Home
            </Navbar.Link>
            <Navbar.Link as={ Link } href="/posts">
                Blog
            </Navbar.Link>
            <Navbar.Link as={ Link } href="/feedback">
                Feedback
            </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
}
