//our-getDomainLocale.com/aboutus

import { Fragment } from "react";
import Link from "next/link";



const AboutPage = () => {
    return(
        <Fragment>
            <h1>The About Page</h1>
            <ul>
                <li>
                    <Link href='/aboutus/1'> id:1</Link>
                </li>
                <li>
                    <Link href='/aboutus/2'> id:2</Link>
                </li>
                <li>
                    <Link href='/aboutus/3'> id:3</Link>
                </li>
            </ul>
        </Fragment>
        

    )
};

export default AboutPage;