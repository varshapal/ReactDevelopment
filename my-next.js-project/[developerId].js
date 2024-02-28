//our-getDomainLocale.com/aboutus/developer

import { useRouter } from "next/router";
import { Fragment } from "react";

const DeveloperPage = () => {
    const details = [
        { id : 1, name: 'Yash', role: 'Senior Developer'},
        { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
        { id : 3, name: 'Suresh', role: 'Frontend Developer'}
    ]
    const router = useRouter();
    console.log(router.query.developerId);
    const developerId = router.query.developerId;
    const info = details.find(item => item.id === parseInt(developerId));
    console.log("i",info);
    
    
    return(
        <Fragment>
        <h1>The Developer Page</h1>
        {info ? <div><p>{info.name} {info.role}</p></div> : <p>Developer does not exist</p>}
        </Fragment>
        )
};

export default DeveloperPage;