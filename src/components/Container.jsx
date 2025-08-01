import Styles from './Container.module.css';
function Container(props){
    return <div className={Styles.Container}>{props.children}</div>
}
export default Container;