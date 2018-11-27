
import HeaderDesign from "../components/HeaderDesign";

/**
 * Main admin layout - A Higher Order Component
 */
class HeaderLayout extends React.Component {
    render() {
        return <div className="wrapper">
            <HeaderDesign/>
            {/*<AdminFooter rightContent={'Some text for the footer'} leftContent={<div>I must be an element</div>}/>*/}
        </div>
    }
}

export default HeaderLayout