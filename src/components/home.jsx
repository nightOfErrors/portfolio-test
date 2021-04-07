import '../home.css';
import Nav from './nav';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import db from '../firebase';
import Typical from 'react-typical';


const Home = () => {


    const [platforms, setPlatforms] = useState({})
    const [userData, setUserData] = useState({});


    useEffect(()=>{
        let user = null;
        db.collection('home').doc('oIUwdhCTvHfPnswLf0kU').collection('user').onSnapshot(snapshot=> (
            user = (snapshot.docs.map(doc => doc.data())),
            setUserData(user[0])
        ))

        let accounts = null;
        db.collection('home').doc('oIUwdhCTvHfPnswLf0kU').collection('platfroms').onSnapshot(snapshot=>(
            accounts = snapshot.docs.map(doc=> doc.data()),
            setPlatforms(accounts[0])
        ))

    }, [])


    return (<div id="homeContainer">

        <Nav />
        <div>
            <div id="profiePicNd">
                <div id="profiePic" style={{backgroundImage: `url(${userData.profilePic})`}}></div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <h1 style={{ fontSize: '40px' }}>{userData.firstName}</h1><h1 style={{ color: 'white', fontSize: '40px' }}>{userData.lastName}</h1>
                </div>
                <div id="platformLinks">
                    <a href={platforms.github}><IconButton><GitHubIcon style={{fontSize:'35px'}} id="platformsButtonGit" /></IconButton></a>
                    <a href={platforms.instagram}><IconButton><InstagramIcon style={{fontSize:'35px'}} id="platformsButtonInsta" /></IconButton></a>
                    <a href={platforms.linkedin}><IconButton><LinkedInIcon style={{fontSize:'35px'}} id="platformsButtonLinkedIn" /></IconButton></a>
                    <a href={platforms.facebook}><IconButton><FacebookIcon style={{fontSize:'35px'}} id="platformsButtonFacebook" /></IconButton></a>
                </div>
            </div>
            <div id="homeInfo">
                <p style={{ color: '#808080', fontSize: "25px", marginTop: "85px" }}>Hey,</p>
                <p style={{ color: 'white', fontFamily: "revert", fontSize: "50px" }}>I'm a{' '} 
                    <Typical 
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            'Developer',
                            1000,
                            'Designer',
                            1000
                        ]}
                    />
                </p>
                <p style={{ color: "white" }}>{userData.tagLine}<br />From India</p>
                <Link to='contact'><button id="hireMe">Hire Me</button></Link>
            </div>
        </div>

    </div>);
}

export default Home;