import Nav from './nav';
import '../contact.css';
import React, { useRef, useState } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import db from '../firebase';

const Contact = () => {

    const getFirstName = useRef();
    const getLastName = useRef();
    const getEmail = useRef();
    const getSubject = useRef();
    const getContext = useRef();

    const [note, setNote] = useState(["Thankyou for visiting my portfolio. I'll get back to you within 24-48 hours, so, please be patient and don't spam the contact form."]);
    const [contactinfo, detContactinfo] = useState('Thibsckjkbskvb uofhfuvnfusho');
    const [loading, setloading] = useState(false);

    function setMessage(){
        if(loading === false){
            return(<ArrowForwardIosIcon id="submiticon" fontSize='large' />)
        }
        else{
            return(<b><p>sent!</p></b>)
        }
    }

    async function handleForm(e) {

        e.preventDefault();
        let gotFirstName = getFirstName.current.value;
        let gotLastName = getLastName.current.value;
        let gotEmail = getEmail.current.value;
        let gotSubject = getSubject.current.value;
        let gotContext = getContext.current.value;
        
        try {
            setloading(true)
            await db.collection('contact').add({
                firstName: gotFirstName,
                lastName: gotLastName,
                email: gotEmail,
                subject: gotSubject,
                context: gotContext,
                createdAt: new Date()
            })

        } catch {
            console.log("this is an error!")
        }

        getFirstName.current.value = '';
        getLastName.current.value = '';
        getEmail.current.value = '';
        getSubject.current.value = '';
        getContext.current.value = '';

        // setloading(false)
    }



    return (<div id="homeContainer">
        <Nav />
        <div align="center" style={{ width: '100%', height: '100vh' }}>
            <b><p id="contacttext" style={{ marginTop: '4%', fontSize: '40px', color: 'orange', fontFamily: 'sans-serif' }}>Contact Me</p></b>
            <form align="center" id='form' style={{ border: "12px solid black", backgroundColor: 'white', width: '40%', height: '40%', marginTop: '4%', padding: '15px' }}>
                <input maxLength="20" type="text" ref={getFirstName} placeholder="First Name" style={{ width: '45%', height: '10%', border: '3px solid black', marginTop: '10px' }} /><input maxLength="20" ref={getLastName} type="text" placeholder="Last Name" style={{ width: '45%', height: '10%', border: '3px solid black', marginTop: '10px' }} />
                <input type="email" ref={getEmail} placeholder="Your Email" style={{ width: '91.5%', height: '10%', border: '3px solid black', marginTop: '10px' }} />
                <input ref={getSubject} placeholder="Subject" style={{ width: '91.5%', height: '10%', border: '3px solid black', marginTop: '10px' }} />
                <input ref={getContext} placeholder="Context" style={{ width: '91.5%', height: '30%', border: '3px solid black', marginTop: '10px', overflowY: 'auto' }} />
                <button onClick={handleForm} disabled={loading} type="submit" id="submit">{setMessage()}</button>
            </form>
        </div>
        <div style={{ border: '2px solid white', width: '670px', height: '100px', position: 'absolute', bottom: '45px', right: '0px' }}>
            <b><p style={{ color: 'white', marginLeft: '15px', fontFamily: 'monospace', fontSize: '17px' }}>{note}</p></b>
        </div>
    </div>);
}

export default Contact;