import React, { useContext, useEffect, useState } from 'react'
import Style from './Add.module.css'
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Todoapp from '../Context/Todo'

const Edit = () => {
    const { id } = useParams()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState([])
    const [hobby, setHobby] = useState([])
    const [textarea, setTextarea] = useState([])
    const [select, setselect] = useState([])
    const [gender, setGender] = useState([])
    const [Password, setPasseord] = useState([])


    const sahil = useContext(Todoapp)

    useEffect(() => {
        const sutariya = sahil.allData[id]
        setName(sutariya.name)
        setEmail(sutariya.email)
        setNumber(sutariya.number)
        setHobby(sutariya.hobby)
        setTextarea(sutariya.textarea)
        setselect(sutariya.select)
        setGender(sutariya.gender)
        setPasseord(sutariya.Password)
    }, [])



    const Upadate = () => {

        var xyz = {
            name,
            email,
            number,
            Password,
            hobby,
            textarea,
            select,
            gender
        }

        sahil.allData[id] = xyz;
        sahil.setAllData(sahil.allData)
    }

    return (
        <div>
            <div className={ Style.fom }>

                <div >
                    <label
                        htmlFor=""
                        className='mt-3'
                    >
                        Name:
                    </label>
                    <input
                        type="text"
                        value={ name }
                        onChange={ (e) => setName(e.target.value) }
                        name='name'
                    />
                </div>

                <div>
                    <label
                        htmlFor=""
                        className='mt-3'
                    >

                        Email:
                    </label>
                    <input
                        type="text"
                        name='email'
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) }
                    />

                </div>

                <div>
                    <label
                        htmlFor=""
                        className='mt-3'
                    >
                        Number:
                    </label>
                    <input
                        type="text"
                        name='number'
                        value={ number }
                        onChange={ (e) => setNumber(e.target.value) }
                    />
                </div>

                <div>
                    <label
                        htmlFor=""
                        className='mt-3'
                    >
                        Password:
                    </label>
                    <input
                        value={ Password }
                        type="password"
                        onChange={ (e) => setPasseord(e.target.value) }
                    />
                </div>

                <div>
                    <label
                        htmlFor=""
                        className='mt-3'

                    >
                        Hobby:
                    </label>
                    Cricket:<input
                        type="checkbox"
                        checked={ hobby === 'Cricket' }
                        value={ 'Cricket' }
                        name='hobby'
                        onChange={ (e) => setHobby(e.target.value) }
                    />
                    Football:<input
                        type="checkbox"
                        value={ 'Football' }
                        checked={ hobby === 'Football' }

                        name='hobby'
                        onChange={ (e) => setHobby(e.target.value) }
                    />
                    Hokey:<input
                        checked={ hobby === 'Hokey' }
                        type="checkbox"
                        value={ 'Hokey' }
                        name='hobby'
                        onChange={ (e) => setHobby(e.target.value) }
                    />
                </div>

                <div>
                    <label
                        htmlFor=""
                        className='mt-3'
                    >
                        Textarea:
                    </label>
                    <textarea
                        value={ textarea }
                        onChange={ (e) => setTextarea(e.target.value) }
                        required
                        name="textarea"
                        id="textarea"
                        cols="25"
                        rows="1">
                    </textarea>
                </div>

                <div>

                    <label
                        htmlFor=""
                        className='mt-3'
                        onChange={ (e) => setGender(e.target.value) }
                    >
                        Gender:
                        male <input
                            checked={ gender === 'male' }
                            required
                            type="radio"
                            value={ 'male' }
                            onChange={ (e) => setGender(e.target.value) }
                            name='gender' />
                        female <input
                            checked={ gender === 'female' }
                            required
                            type="radio"
                            value={ 'female' }
                            onChange={ (e) => setGender(e.target.value) }
                            name='gender' />
                    </label>

                </div>


                <div>
                    <label
                        htmlFor=""
                        className='mt-3'
                    >
                        Choose a Cricket:
                        <select
                            id="cars"
                            name="cars"
                            value={ select }
                            onChange={ (e) => setselect(e.target.value) }
                        >
                            <option>Cricketer</option>
                            <option value="Rohit Sharma">Rohit Sharma</option>
                            <option value="Virat Kohli">Virat Kohli</option>
                            <option value="Sky">Sky</option>
                            <option value="Ishan Kishan">Ishan Kishan</option>
                        </select>
                    </label>
                </div>
                <div className={ Style.BB }>
                    <Link to={ "/list" }>

                        <Button variant="primary m-2" onClick={ Upadate }>Upadate</Button>
                    </Link>
                    <Link to={ '/' }>
                        <Button variant="warning ">Cancle</Button>
                    </Link>
                </div>
            </div >
        </div >
    )
}

export default Edit







