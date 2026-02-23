import { article } from "motion/react-client"
import { useState } from "react"

const TestForm = () => {

    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [about, setAbout] = useState("")
    const [date, setDate] = useState("")
    const [passwork, setPasswork] = useState("")
    
    

    const handleSubmitProfile = (e) => {
        e.preventDefault();
        alert(`Username: ${username}\nName: ${name}\nPhone Number: ${phone}\nEmail: ${email}\nAddress: ${address}\nAbout: ${about}\nDate: ${phone}\nPassword: ${email}\n`)
        setUsername("")
        setName("")
        setPhone("")
        setEmail("")
        setAddress("")
        setAbout("")
        setDate("")
        setPasswork("")
    }

    console.log(username)
    return(
        <article>
            <form onSubmit={handleSubmitProfile}>
                <input 
                    type="text"
                    value={username}
                    placeholder="Username"
                    onChange={(e)=>setUsername(e.target.value)}
                    className=""
                />
                <input type="text"
                    value={name}
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                />
                <input type="text"
                    value={phone}
                    placeholder="Phone munber"
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input type="text"
                    value={address}
                    placeholder="Address"
                    onChange={(e) => setAddress(e.target.value)}
                />
                <input type="text"
                    value={about}
                    placeholder="About"
                    onChange={(e) => setAbout(e.target.value)}
                />
                <input type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <button>OK</button>
            </form>
        </article>
    )
}

export default TestForm