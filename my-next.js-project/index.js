//our-getDomainLocale.com/aboutus
import DeveloperPage from "./[developerId]";
import { Fragment } from "react";
import Link from "next/link";

const details = [
    { id : 1, name: 'Yash', role: 'Senior Developer'},
    { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
    { id : 3, name: 'Suresh', role: 'Frontend Developer'}
]

const AboutPage = () => {
    return(
        <Fragment>
            <h1>The About Page</h1>
            <ul>
                {details.map((detail) => (
                    <li key={detail.id}>
                        <Link href={`/aboutus/${detail.id}`}>{detail.name}</Link>
                    </li>
                    
                ))}
            </ul>
            
        </Fragment>
        

    )
};

export default AboutPage;