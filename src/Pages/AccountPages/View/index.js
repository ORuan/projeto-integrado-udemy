import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import { useEffect, useState } from 'react'
import ApiCreate from '../../../services'
import { useHistory } from 'react-router'
import NavbarComponent from '../../../Components/Navbar'
import Toast from 'light-toast';


const ViewAccount = () => {
    const redirect = useHistory()
    const id = 1
    const [user, setUser] = useState({
        firstName: 'Ruan Pablo',
        lastName: 'M. Pereira',
        email: 'ruanpablo@gmail.com',
        is_mentor: false
    })
    useEffect(() => {
        ApiCreate('GET', `users/${id}/`).then(res => {
            setUser(res.data)
        }).catch(error => {
            Toast.fail('Houve um erro', 1500, () => { })
        })
    }, [])


    return (
        <>
            <NavbarComponent />
            <Container text class="ui container">
                <div class="ui middle aligned center aligned grid">
                    <div>
                        <h2 class="ui center aligned icon header">
                            <i class="circular"></i>
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
                                    <td>{user.is_mentor.toString()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="m-3">
                        <div class="ui message ">
                            Editar conta? <a href="/conta/editar">Clique</a>
                        </div>
                    </div>
                    <div>
                        <div class="ui message ">
                            Deletar conta? <a href="/conta/deletar">Clique</a>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ViewAccount;