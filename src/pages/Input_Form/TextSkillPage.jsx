import { div, param } from "motion/react-client";
import { useParams } from "react-router-dom";
import { useSkill } from "../../call api/hooks/useSkill";
import { useEffect } from "react";

const TextSkillPage = () => {
    const {id} = useParams()
    const {skillOne, oneSkill} = useSkill()

    useEffect(() => {
        oneSkill(id)
    }, [])
    console.log(skillOne)
    return(
        <article>
            {
                skillOne.map((s, index)=>(
                    <div key={s.id}>
                        <img src={`http://localhost:5000/uploads/${s.image}`} alt="" />
                        <h1>Name: {s.name}</h1>
                        <p>Rating: {s.rating}</p>
                    </div>
                ))
            }
        </article>
    )
}
export default TextSkillPage;