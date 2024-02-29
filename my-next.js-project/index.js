import { Fragment} from 'react';

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails () {
    return(
        <MeetupDetail 
            image='https://plus.unsplash.com/premium_photo-1663050685796-3624fdc2b4df?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
            title='A First Meetup' 
            address="some street 5, some city" 
            description="This is a first meetup" 
        />
    )
};

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1',
                }
            },
            {
                params: {
                    meetupId: 'm2',
                }
            },
            {
                params: {
                    meetupId: 'm3',
                }
            }

        ]
    }
}

export async function getStaticProps(context) {
    // fetch data for a single meetup

    const meetupId = context.params.meetupId;

    console.log(meetupId);
    return {
        props: {
            meetupData: {
                image: 'https://plus.unsplash.com/premium_photo-1663050685796-3624fdc2b4df?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                id: meetupId,
                title: 'A First Meetup',
                address: 'some street 5, some city',
                description: 'This is a first meetup'
            }
        }
    }
}

export default MeetupDetails;