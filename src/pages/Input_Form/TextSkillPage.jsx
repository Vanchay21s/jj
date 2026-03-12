import { param } from "motion/react-client";
import { useParams } from "react-router-dom";

const TextSkillPage = () => {
    const {id} = useParams()
    
    
    return(
        <article>
            <h1>Text Skill Page</h1>
        </article>
    )
}
export default TextSkillPage;