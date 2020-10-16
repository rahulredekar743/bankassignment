import React, {Component} from 'react';
import {connect} from 'react-redux';

class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className={`nav-wrapper`}>
                        <a href="" className={`left brand-logo`}>
                            &nbsp;Bank
                        </a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;