
const initState = {
    name: '',
    description: '',
}

const FormInputFeature = () => {
    const [formData, setFormData] = useState(initState)

    const handleChnage = (e) =>{
        const {name, value, type} = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("OK")
    }
    return (
        <article>
            <form 
                onSubmit={handleSubmit}
            >
                <input type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChnage}
                />
                <input type="text"
                    name="description"
                    value={formData.description}
                    onCanPlay={handleChnage}
                />
                <button>Add Feature</button>
            </form>
        </article>
    )
}

export default FormInputFeature