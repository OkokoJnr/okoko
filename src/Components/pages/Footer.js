import '@fortawesome/fontawesome-free/css/all.min.css';
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Footer component
function Footer() {
    return (
        <footer id="footer">
            <div className="container-fluid">
                <div className="social-icons mt-4">
                    <div class="social-icons mt-4">
                        <a href="https://www.github.com/" target="_blank"><i className='social-icon'><FontAwesomeIcon icon={faGithub} /></i></a>
                        <a href="https://www.linkedin.com/" target="_blank"><i className='social-icon'><FontAwesomeIcon icon={faLinkedin} /></i></a>
                        <a href="https://www.twitter.com/" target="_blank"><i className='social-icon'><FontAwesomeIcon icon={faTwitter} /></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
  }

  export default Footer