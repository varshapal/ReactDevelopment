import { MongoClient } from 'mongodb';
//import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://plus.unsplash.com/premium_photo-1663050685796-3624fdc2b4df?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        address: 'Some address 5, 123456 some city',
        description: 'this is a first meetup',

    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://plus.unsplash.com/premium_photo-1663050685796-3624fdc2b4df?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        address: 'Some address 10, 123456 some city',
        description: 'this is a second meetup',

    }
]

function HomePage (props) {
    //const [loadedMeetups, setLoadedMeetups] = useState([]);
    // useEffect(() => {
    //     //send http request and fetch data
    //     setLoadedMeetups(DUMMY_MEETUPS);
    // }, []);

    return(
        <MeetupList meetups={props.meetups}/>
    )
};

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//     //fetch data from an API
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         },
//     }
// }

export async function getStaticProps() {
    //fetch data from an API
    const client = await MongoClient.connect('mongodb+srv://varsha25pal:abQsN2TxrwONZPrn@cluster0.ovpoxp1.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const meetups = await meetupsCollection.find().toArray();

        client.close();

    return {
        props: {
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        },
        revalidate: 1
    }
}

export default HomePage;