import '../skills.css';

const Skills = (props) => {


    return (<div style={{padding:'30px'}}>
        <h1 class="ml1">
            <span class="text-wrapper">
                <span style={{color:"#FED75A", fontSize:"18px"}} class="letters">| {props.skill} |</span>
            </span>
        </h1>
    </div>);
}

export default Skills;