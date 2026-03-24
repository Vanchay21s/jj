import React, { useEffect, useState } from 'react'
import gojo from "../../image/gojo.jpg"
import { Calendar, MapPin, Pen, Phone, Pin, User } from 'lucide-react'
import useProfile from '../../call api/hooks/useProfile'
import { image, p } from 'motion/react-client'
import { data } from 'react-router-dom'


const FormProfile = () => {
    const {profile, success, setSuccess, loading, error, editProfile} = useProfile()
    const [editId, setEditId] = useState(null)

    const [form, setForm] = useState({
        name: "",
        username: "",
        about: "",
        date: "",
        email: "",
        phone: "",
        address: "",
        image:  null,
    })
    const [preview, setPreview] = useState(null)
    const [originalForm, setOriginalForm] = useState(null)
    const loadForm = () => {
        if(profile){
            const data = {
                name: profile?.data[0]?.name || "",
                username: profile?.data[0]?.username || "",
                about: profile?.data[0]?.about || "",
                date: profile?.data[0]?.date?.split("T")[0] || "",
                email: profile?.data[0]?.email || "",
                phone: profile?.data[0]?.phone || "",
                address: profile?.data[0]?.address || "",
                image:  profile?.data[0]?.image || null,
            }
            setEditId(profile?.data[0]?.id)
            setForm({ ...data })
            setPreview(null)
            setOriginalForm({ ...data })
            return
        }
        setForm({
            name: "",
            username: "",
            about: "",
            date: "",
            email: "",
            phone: "",
            address: "",
            image:  null,
        })
        
    }

    const handleChange = (e) => {
        const {name, value, type, files} = e.target
        if(type === "file"){
            const file = files[0]
            setForm((prev) => ({
                ...prev,
                image: file,
            }))
            setPreview(URL.createObjectURL(file))
        }
        setForm((prev) => ({
            ...prev,
            [name]: value
        }) )
    } 

    const handleSubmit = (e) =>{
        e.preventDefault()
        const formData = new FormData()
        formData.append("name", form.name)
        formData.append("username", form.username)
        formData.append("phone", form.phone)
        formData.append("email", form.email)
        formData.append("about", form.about)
        formData.append("address", form.address)
        formData.append("date", form.date)
        formData.append("image", form.image)
        editProfile(editId, formData)
    }

    const handleCencel = () => {
        setForm(originalForm)
    }
    const fields = ["name", "username", "about", "date", "email", "phone", "address", "image"]

    const isTextChanged = fields.some(
        (field) => form[field] !== originalForm?.[field]
    )

    const ClearSuccess = () =>{
        if(success) {
            const timer = setTimeout(() => {
                setSuccess(null)
            }, 3000)
            return () => clearTimeout(timer)
        }
    }
    useEffect(() => {
        loadForm()
        ClearSuccess()
    }, [profile])
    return (
        <article className='relative'>
            {success && (
                <div
                    className={`absolute text-[14px] bg font-medium px-3 py-1 border rounded-sm right-0 bg-green-950/50 text-green-500 border-green-900/50`}
                >
                    {success.message}
                </div>
            )}
            {/* header */}
            <div className="w-full flex justify-between">
                <div className="">
                <span className="text-[10px] text-[#7C6AF8] bg-[#7C6AF715] font-bold uppercase px-2 py-1 border border-[#7C6AF730] rounded-sm ">Portfolio Manager</span>
                <h1 className="text-[46px] font-bold text-[#EDEDF8]">Profile.</h1>
                <p className="text-[14px] mt-[-5px] text-[#55556A]">Manage your personal information and preferences</p>
            </div>
        </div>
        {/* Profile Picture */}
        <form onSubmit={handleSubmit} className='flex flex-col mt-[36px] gap-5 bg-[#111118] py-4 px-6 rounded-md border-t-3 border-[#7C6AF8]'>
            <div className=''>
                <h1 className="text-[#66668A] uppercase text-[10px] font-bold mb-2 ">Profile Picture</h1>
                {/* Picture */}
                <div className="size-30 relative">
                    <label htmlFor="imageInput" className='absolute bottom-0 right-0 bg p-2 rounded-full bg-amber-300 cursor-pointer'><Pen size={20} /></label>
                    {preview ? (
                        <img src={preview} alt="Preview" className='size-30 object-cover rounded-full'  />
                    ) : (
                        // <img src={gojo} alt="Profile" className='size-30 object-cover  rounded-full'  />
                        <img src={`http://localhost:5000/uploads/${profile?.data[0]?.image}`} alt="Profile" className="w-full h-full object-cover rounded-md" />
                    )}
                    <input
                        id="imageInput"
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleChange}
                        className="hidden"
                    />
                </div>
            </div>
            {/* fullname & username*/}
            <div className='flex gap-5'>
                <div className='w-1/2'>
                    <h1 className="text-[#66668A] uppercase text-[10px] font-bold mb-2 ">Full Name</h1>
                    <label htmlFor="" className='relative'>
                        <input 
                            type="text" 
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            className="w-full bg-[#0A0A10]  border border-[#22223A] rounded-md pl-9 py-2 px-3 text-[#66668A] text-[12px] font-bold focus:outline-0"
                        />
                        <User size={20} className='absolute top-1/2 -translate-y-1/2 left-3 text-[#66668A]' />
                    </label>
                    <p className="text-[10px] mt-2 text-[#55556A]">Your real name</p>
                </div>
                <div className='w-1/2'>
                    <h1 className="text-[#66668A] uppercase text-[10px] font-bold mb-2 ">Username</h1>
                    <label htmlFor="" className='relative'>
                        <input 
                            type="text"
                            name='username' 
                            value={form.username}
                            onChange={handleChange}
                            className="w-full bg-[#0A0A10]  border border-[#22223A] rounded-md pl-9 py-2 px-3 text-[#66668A] text-[12px] font-bold focus:outline-0"
                        />
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">@</span>
                    </label>
                    <p className="text-[10px] mt-2 text-[#55556A]">The name that you wanna call.</p>
                </div>
            </div>
            <div>
                <h1 className="text-[#66668A] uppercase text-[10px] font-bold mb-2 ">About me</h1>
                <textarea 
                    id="" 
                    rows={5}
                    name='about'
                    value={form.about}
                    onChange={handleChange}
                    className="w-full bg-[#0A0A10] border border-[#22223A] rounded-md py-2 px-3 text-[#66668A] text-[12px] font-bold focus:outline-0" placeholder="Tell us about yourself...">
                </textarea>
                <p className="text-[10px] mt-2 text-[#55556A]">You can @mention other users and organizations to link to them</p>
            </div>
            {/*  */}
            <div className='flex gap-5'>
                <div className='w-1/2'>
                    <h1 className="text-[#66668A] uppercase text-[10px] font-bold mb-2 ">Birth Date</h1>
                    <label htmlFor="" className='relative'>
                        <input 
                            type="date" 
                            name='date'
                            value={form.date}
                            onChange={handleChange}
                            className="w-full bg-[#0A0A10]  border border-[#22223A] rounded-md pl-9 py-2 px-3 text-[#66668A] text-[12px] font-bold focus:outline-0"
                        />
                        <Calendar size={20} className='absolute top-1/2 -translate-y-1/2 left-3 text-[#66668A]' />
                    </label>
                    <p className="text-[10px] mt-2 text-[#55556A]">Your real name</p>
                </div>
                <div className='w-1/2'>
                    <h1 className="text-[#66668A] uppercase text-[10px] font-bold mb-2 ">Email</h1>
                    <label htmlFor="" className='relative'>
                        <input type="email"
                            value={form.email}
                            onChange={handleChange}
                            name='email'
                            className="w-full bg-[#0A0A10]  border border-[#22223A] rounded-md pl-9 py-2 px-3 text-[#66668A] text-[12px] font-bold focus:outline-0"
                        />
                        <User size={20} className='absolute top-1/2 -translate-y-1/2 left-3 text-[#66668A]' />
                    </label>
                    <p className="text-[10px] mt-2 text-[#55556A]">Your gmail account</p>
                </div>
            </div>
            <div className='flex gap-5'>
                <div className='w-1/2'>
                    <h1 className="text-[#66668A] uppercase text-[10px] font-bold mb-2 ">Phone</h1>
                    <label htmlFor="" className='relative'>
                        <input type="tel"
                            name='phone' 
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full bg-[#0A0A10]  border border-[#22223A] rounded-md pl-9 py-2 px-3 text-[#66668A] text-[12px] font-bold focus:outline-0"
                        />
                        <Phone size={20} className='absolute top-1/2 -translate-y-1/2 left-3 text-[#66668A]' />
                    </label>
                    <p className="text-[10px] mt-2 text-[#55556A]">Your phone number</p>
                </div>
                <div className='w-1/2'>
                    <h1 className="text-[#66668A] uppercase text-[10px] font-bold mb-2 ">Address</h1>
                    <label htmlFor="" className='relative'>
                        <input type="text" 
                            name='address'
                            value={form.address}
                            onChange={handleChange}
                            className="w-full bg-[#0A0A10]  border border-[#22223A] rounded-md pl-9 py-2 px-3 text-[#66668A] text-[12px] font-bold focus:outline-0"
                        />
                        <MapPin size={20} className='absolute top-1/2 -translate-y-1/2 left-3 text-[#66668A]' />
                    </label>
                    <p className="text-[10px] mt-2 text-[#55556A]">Your address</p>
                </div>
            </div>
            {isTextChanged && (
                <div className='flex gap-5'>
                    <button 
                        type="button"
                        onClick={handleCencel}
                        className="w-full p-3 rounded-sm text-[12px] text-[#8888BB] bg-[#18182A] border border-[#22223A] font-bold cursor-pointer">Cancel</button>
                    <button 
                        disabled={!isTextChanged}
                        className={`w-full p-3 rounded-sm text-[12px] text-[#06060C] bg-[#7C6AF7] font-bold cursor-pointer`}>Save Change</button>
                </div>
            )}
        </form>

    </article>
  )
}

export default FormProfile