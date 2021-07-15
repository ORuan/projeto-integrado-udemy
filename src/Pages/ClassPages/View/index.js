import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import { useState } from 'react'
import ApiCreate from '../../../services'
import { useHistory } from 'react-router'
import NavbarComponent from '../../../Components/Navbar'

const ViewClass = () => {
    const redirect = useHistory()
    const id = 1
    const [user, setUser] = useState('')

    ApiCreate('GET', `users/${id}/`, {}).then((res) => {
        setUser(res.data)
        redirect('/')

    }).catch(error => {
        //
    })


    return (
        <>
            <NavbarComponent />
            <div class="ui container">

                <div class="ui grid">
                    <div class="four wide column">
                        <div class="ui inverted segment">
                            <h1>Aulas</h1>
                            <div class="ui inverted relaxed divided list">
                                <div class="item">
                                    <div class="content">
                                        <div class="header">Snickerdoodle</div>
                                        An excellent companion
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="content">
                                        <div class="header">Poodle</div>
                                        A poodle, its pretty basic
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="content">
                                        <div class="header">Paulo</div>
                                        He's also a dog
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="six wide column">
                        <iframe width="640" height="400" src="https://www.youtube.com/embed/lJIrF4YjHfQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div class="ui message">
                            <h1>Titulo</h1>
                            <span>Material: https://drive.google.com</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ViewClass;