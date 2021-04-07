import Nav from './nav';
import '../aNs.css';
import Skills from './skills';
import uuid from 'react-uuid';
import React, { useEffect, useState } from 'react';
import db from '../firebase';

const AboutNskills = () => {


    const [about, setAbout] = useState();
    const [skills, setSkills] = useState([]);


    useEffect(()=>{

        db.collection('aboutAndSkills').onSnapshot(snapshot=>(
            setAbout(snapshot.docs.map(doc => doc.data().about))
        ))
    
    }, [])

    useEffect(()=>{
        let gotSkills = null
        db.collection('aboutAndSkills').onSnapshot(snapshot=>(
            gotSkills = snapshot.docs.map(doc => doc.data().skills),
            setSkills(gotSkills[0])
        ))
    },[])
    
    const [divOpen, setDivOpen] = useState(false)

    function divControl(){
        if(divOpen === false){
            setDivOpen(true)
        }
        else{
            setDivOpen(false)
        }
    }

    function divStyle(){
        if (divOpen === false){
            return ({
                marginTop:'100px',
                width:'85%',
                height:'48%',
                overflow:'hidden'
            })
        }
        else{
            return ({
                marginTop:'100px',
                width:'85%',
                height:'60%',
                overflow:'hidden'
            })
        }
    }


    function buttonReadIt(){
        if(divOpen === false){
            return('Read More')
        }
        else{
            return('Read Less')
        }
    }


    return (<div id="homeContainer">
        <Nav />
        <div align="center" style={{ width: '46.5%' }}>
            <div id="aboutContainer" style={divStyle()}>
                <b><p style={{ fontFamily: 'revert', fontSize: '50px' }}>About Me</p></b>
                <b><p style={{ color: 'grey', fontSize: '20px' }}>{about}</p></b>
            </div>
            <button onClick={divControl} id='readMoreButton'>{buttonReadIt()}</button>
        </div>
        <div align="center" style={{ width: '49%' }}>
            <div style={{ width: '87%', marginTop: '120px' }}>
                <b><p style={{ color: "white", fontFamily: 'revert', fontSize: '40px' }}>Skills & Experience</p></b>
                <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap', overflowY:'hidden'}}>
                    {skills.map(skill=> <Skills skill={skill} />)}
                </div>
            </div>
        </div>
    </div>);
}

export default AboutNskills;