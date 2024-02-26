import githubLogo from "./images/github.svg";
import twitterLogo from "./images/twitter.svg";

function Header(props){
    return <>
        <header className="header">
            <h1 className="header-title">
                {props.headingName}
            </h1>
            <div className="socials">
                <a href="https://github.com/pufex" className="social-link" target="_blank">
                    <img src={githubLogo} alt="Github" className="social-link" />
                </a>
                <a href="https://twitter.com" className="social-link" target="_blank">
                    <img src={twitterLogo} alt="Github" className="social-link" />
                </a>
            </div>
        </header>
    </>;
}

export default Header;