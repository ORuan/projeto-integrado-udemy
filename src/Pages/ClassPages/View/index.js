import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import { useEffect, useState } from 'react'
import ApiCreate from '../../../services'
import { useHistory } from 'react-router'
import NavbarComponent from '../../../Components/Navbar'
import './index.css'

const ViewClass = () => {
    const redirect = useHistory()
    const id = 1
    const [user, setUser] = useState('')
    useEffect(() => {
        ApiCreate('GET', `users/${id}/`, {}).then((res) => {
            setUser(res.data)
            redirect('/')

        }).catch(error => {
            //
        })
    }, [])



    return (
        <>
            <NavbarComponent />
            <div className="ui equal width grid" id="container-video-yt">
                <div className="column">
                    <div className="video-container">
                        <iframe class="embedded-video-16-9" src="https://www.youtube.com/embed/lJIrF4YjHfQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; " allowfullscreen=""></iframe>
                    </div>
                    <h1>Titulo</h1>
                    <span>Material: https://drive.google.com</span>
                    <hr></hr>
                    <button class="ui right labeled icon button">
                        <i class="right arrow icon"></i>
                        Next
                    </button>
                </div>

            </div>
        </>
    )
}

export default ViewClass;