import React, { useContext, useState } from 'react'
import Todoapp from '../Context/Todo'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Style from './Add.module.css'

const Add = () => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState([])
    const [hobby, setHobby] = useState([])
    const [textarea, setTextarea] = useState([])
    const [select, setselect] = useState([])
    const [gender, setGender] = useState([])
    const [Password, setPasseord] = useState([])


    const sahil = useContext(Todoapp);

    var abc = {
        name,
        email,
        number,
        Password,
        hobby,
        textarea,
        select,
        gender
    }

    const addData = () => {

        sahil.setAllData([...sahil.allData, abc])

        setName("")
        setEmail("")
        setNumber("")
        setHobby("")
        setTextarea("")
        setselect("")
        setGender("")
        setPasseord("")
    }
    return (
        <>
            <div className={ Style.fom }>

                <div >
                    <label
                        htmlFor=""
                        className='mt-3'
                    >
                        Name:
                        <input
                            type="text"
                            value={ name }
                            onChange={ (e) => setName(e.target.value) }
                            name='name'
                        />
                    </label>
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
                        value={ 'Cricket' }
                        name='hobby'
                        onChange={ (e) => setHobby(e.target.value, e.target.checked) }
                    />
                    Football:<input
                        type="checkbox"
                        value={ 'Football' }
                        name='hobby'
                        onChange={ (e) => setHobby(e.target.value, e.target.checked) }
                    />
                    Hokey:<input
                        type="checkbox"
                        value={ 'Hokey' }
                        name='hobby'
                        onChange={ (e) => setHobby(e.target.value, e.target.checked) }
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
                        type='text'
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

                    >
                        Gender:
                        male <input
                            required
                            type="radio"
                            value='male'
                            onChange={ (e) => setGender(e.target.value) }
                            name='gender' />
                        female <input

                            required
                            type="radio"
                            value='female'
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
                    <Button variant="primary " onClick={ addData }>Add</Button>
                    <Link to={ '/' }>
                        <Button variant="warning ">Cancle</Button>
                    </Link>
                </div>

            </div >

        </>
    )

}
export default Add
