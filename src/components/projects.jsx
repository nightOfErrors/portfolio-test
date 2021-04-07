import Nav from './nav';
import '../projects.css';
import Project from './project';
import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import db from '../firebase';

const Projects = () => {


    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        let projectGot = null
        db.collection('projects').onSnapshot(snapshot=>(
            projectGot = snapshot.docs.map(doc=> doc.data()),
            setProjects(projectGot[0].projects) 
        ))
    },[])


    const [displays, setDisplays] = useState('none');
    const [displayNote, setDisplayNote] = useState('flex')
    const [displayContent, setDisplayContent] = useState({
        name: null,
        coverimage: null,
        duration: null,
        description: null,
        github: null,
        id: null
    });



    function showproject(gotid) {

        projects.forEach(element => {
            if (element.id === gotid) {
                setDisplays('flex')
                setDisplayNote('none')
                setDisplayContent({
                    name: element.name,
                    coverImage: element.coverImage,
                    duration: element.duration,
                    description: element.description,
                    github: element.github,
                    id: element.id
                })
            }
        });

    }

    return (<div id="homeContainer">
        <Nav />

        <div align="center" style={{ width: '46%' }}>
            <b style={{ fontSize: '42px', fontFamily: 'sans-serif' }}><p>PROJECTS</p></b>
            <div style={{ padding: '35px', width: '95%', marginTop: '75px', height: '65vh', display: 'flex', flexWrap: 'wrap' }}>

                {projects.map(project => <Project seeproject={showproject} name={project.name} cover={project.coverImage} id={project.id} key={project.id} />)}

            </div>
        </div>

        <div style={{border:'2px solid white', display: displayNote, width:'670px', height:'100px',position:'absolute', bottom:'50%', right:'0px'}}>
            <b><p style={{color:'white', marginLeft:'15px', fontFamily:'monospace', fontSize:'17px'}}>CLICK THE PROJECT TO SEE THE PREVIEW HERE...</p></b>
        </div>
        <div style={{ width: '50%', display: displays }}>
            <div id="showProject" style={{ backgroundImage: `url(${displayContent.coverImage})`, marginLeft: '7%' }}>
                <div style={{ height: '45%', width: '97%', marginTop: '250px', padding: '10px' }}>
                    <h1 style={{ color: 'white' }}>{displayContent.name}</h1>
                    <p style={{ color: 'white' }}>{displayContent.duration}</p>
                    <p style={{ color: 'white' }}>{displayContent.description}</p>
                    <a href="www.github.com" style={{ color: "grey", textDecoration: 'none' }}><GitHubIcon /> {displayContent.github}</a>
                </div>
            </div>
        </div>
    </div>);
}

export default Projects;