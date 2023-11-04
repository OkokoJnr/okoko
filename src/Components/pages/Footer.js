import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Footer component
function Footer() {

    const socialMediaAccounts = [
        {
            name:'GitHub',
            url:"https://www.github.com/OkokoJnr",
            icon:faGithub
        },
        {
            name:'Linkedln',
            url:"https://www.linkedin.com/in/godwin-jnr-okoko-75b927280/",
            icon:faLinkedin
        },
        {
            name:'X',
            url:"https://www.twitter.com/",
            icon:faTwitter
        }
    ]
    return (
        <footer id="footer">
            <div className="container-fluid">
                <div className="social-icons mt-4">
                    <div className="social-icons mt-4">
                        {React.Children.toArray(socialMediaAccounts.map(account=> < SocialIcon account={account}/> ))}
                        {/* <a href={''} target="_blank"><i className='social-icon'><FontAwesomeIcon icon={faGithub} /></i></a>
                        <a href="" target="_blank"><i className='social-icon'><FontAwesomeIcon icon={faLinkedin} /></i></a> */}
                        
                    </div>
                </div>
            </div>
        </footer>
    );
  }


  function SocialIcon({account}){
    console.log(account)

    return(<>
        
        <a href={account.url} target="_blank"><i className='social-icon'><FontAwesomeIcon icon={account.icon} /></i></a>
    </>)
  }
  export default Footer