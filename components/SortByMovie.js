import React, {Component} from 'react';

class SortByMovie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [{"item":"title"},{"item":"rating"}, {"item":"budget"} , {'item' : 'runtime'}],
            showMenu: false
        };
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(e) {
        e.preventDefault();
        
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {
        this.setState({ showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
        }); 
    }

    render() {
        return (
            <div className="dropdown">
                <div onClick={this.showMenu} className="dropdownButton">Filter</div>
                {
                    this.state.showMenu ? (
                        <div id="myDropdown" className="dropdownContent">
                            {this.state.data.map(d => 
                                <a href = {'/movies?sortBy=' + d.item} >
                                    <div className="dropdownItem">{d.item}</div>
                                </a>
                                )
                            }
                            
                        </div>
                    ): (null)
                }
                <style jsx global> {`
                    .dropdown {
                        top:5px;
                        position:relative;
                        display:inline-block;
                        cursor:pointer;
                    }
                    .dropdownContent {
                        list-style-type: none;
                        margin: 0;
                        padding: 0;
                        top:45px;
                        right:0px;
                        width: 120px;
                        background-color: white;
                        font-weight:bold;
                        position: absolute;
                        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                        z-index: 1;
                    }
                    .dropdownItem {
                        padding: 8px 16px;
                        border-bottom: 1px solid #e5e5e5;
                        cursor:pointer;
                    }
                    .dropdownItem:hover {
                        background-color: #e5e5e5;
                    }
                    .dropdownButton {
                        width:100px;
                        height:18px;
                        background-color:#333;
                        padding:12px;
                        border-radius:10px;
                        font-weight:bold;
                        color:white;
                    }
                    .dropdownButton:before {
                        content:"";
                        position:absolute;
                        width:0px;
                        height:0px;
                        border: 8px solid;
                        border-color: white transparent transparent transparent;
                        right:10px;
                        top:18px;
                    }
                `}</style>
            </div>
        )
    }
}

export default SortByMovie