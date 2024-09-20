import { UserProfile } from './components/UserProfile';
import '../../app/globals.css';
import { useEffect } from 'react';
const UserList = () => {
    const profiles = [
        {
            "icon": "https://placehold.co/600x400/000000/FFF?text=Carmen",
            "name": "Carmen Beline",
            "loginId": "Carmen.Bel",
            "products": [
                {
                    "productName": "Search",
                    "role": "Designer",
                    "status": "In Working",
                    "finalDate": new Date().toDateString(),
                }
            ]
        },
        {
            "icon": "https://placehold.co/600x400/000000/FFF?text=Sam",
            "name": "Sam E",
            "loginId": "sam.e",
            "products": [
                {
                    "productName": "Search",
                    "role": "Designer",
                    "status": "In Working",
                    "finalDate": new Date().toDateString(),
                },
                {
                    "productName": "Test",
                    "role": "Designer",
                    "status": "None",
                    "finalDate": new Date().toDateString(),
                },
                {
                    "productName": "Search",
                    "role": "Designer",
                    "status": "In Working",
                    "finalDate": new Date().toDateString(),
                }
            ]
        }
    ];
    return (
        profiles.map((profile, i) => {
            return <UserProfile key={i} userProfileData={profile} />
        })
    );
}

export default UserList;