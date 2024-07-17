import "./widgetSm.css"
import { Visibility } from "@material-ui/icons"

const WidgetSm = () => {
    return (
        <div className="widgetSm">
           <span className="widgetSmTitle">New Join Members</span> 
           <ul className="widgetSmList">
               <li className="widgetSmListItem">
                  <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""className="widgeSmImg"></img>
                  <div className="widgetSmUser">
                      <span className="widgetSmUsername">Dennis Bosire</span>
                      <span className="widgetSmUserTitle">Software Engineer</span>
                  </div>
                  <div className="widgetSmButton">
                  <Visibility className="widgetSmIcon"/>Display
                  </div>
               </li>
               <li className="widgetSmListItem">
                  <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""className="widgeSmImg"></img>
                  <div className="widgetSmUser">
                      <span className="widgetSmUsername">Dennis Bosire</span>
                      <span className="widgetSmUserTitle">Software Engineer</span>
                  </div>
                  <div className="widgetSmButton">
                  <Visibility className="widgetSmIcon"/>Display
                  </div>
               </li>
               <li className="widgetSmListItem">
                  <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""className="widgeSmImg"></img>
                  <div className="widgetSmUser">
                      <span className="widgetSmUsername">Dennis Bosire</span>
                      <span className="widgetSmUserTitle">Software Engineer</span>
                  </div>
                  <div className="widgetSmButton">
                      <Visibility className="widgetSmIcon"/>Display
                  </div>
               </li>
           </ul>
        </div>
    )
}

export default WidgetSm
