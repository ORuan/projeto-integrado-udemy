import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import { useState } from 'react'
import ApiCreate from '../../../services'
import { useHistory } from 'react-router'
import NavbarComponent from '../../../Components/Navbar'

const ViewAccount = () => {
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
            <Container text class="ui container">
                <div class="ui middle aligned center aligned grid">
                    <div>
                        <h2 class="ui center aligned icon header">
                            <i class="circular users icon"></i>
                            Conta
                        </h2>
                        <table class="ui fixed table">
                            <thead>
                                <tr><th>Nome</th>
                                    <th>Email</th>
                                    <th>Mentor</th>
                                </tr></thead>
                            <tbody>
                                <tr>
                                    <td>{user.firstName} {user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.is_mentor}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="ui message ">
                        Editar conta? <a href="#">Clique</a>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ViewAccount;