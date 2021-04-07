import '../project.css';

const Project = (props) => {


    return ( <button id="projectContainer" onClick={()=>props.seeproject(props.id)} style={{backgroundImage:`url(${props.cover})`}}>
        <b><p id="projectText">{props.name}</p></b>
    </button> );
}
 
export default Project;