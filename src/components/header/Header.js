import React, {Fragment} from 'react';
import NavigationLinks from './NavigationLinks';

const Header = (props) => {
    const {score, stage, data} = props;
    return (
        <Fragment>
            <header>
                <div className="metabar">
                    <a href="/" className="logo"></a>
                    <div className="scope text">
                        <p>Score: </p>
                        <span>{score}</span>
                    </div>
                </div>

                <nav>
                    <ul className="nav">
                        {
                            data.map((topic, i) => <NavigationLinks key={topic.family} value={topic.family}
                                                                    className={`${i === stage ? 'active' : ''}`}/>)
                        }
                    </ul>
                </nav>
            </header>

        </Fragment>
    );
};

export default Header;
