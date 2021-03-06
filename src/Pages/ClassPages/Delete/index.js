import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import { useState } from 'react'
import ApiCreate from '../../../services'
import { useHistory } from 'react-router'
import NavbarComponent from '../../../Components/Navbar'
import { useParams } from 'react-router-dom'


const DeleteClass = () => {
    const redirect = useHistory()
    const {id_class} = useParams()

    const account_id = 1
    const send = (e) => {
        e.preventDefault()
        ApiCreate('DELETE', `users/${account_id}`,).then((res) => {
            redirect('/')
        }).catch(error => {
            //
        })
    }

    return (
        <>
            <NavbarComponent />
            <Container text>
                <div class="ui middle aligned center aligned grid">
                    <div class="column">
                        <h2 class="ui teal image header">
                            <div class="content">
                                Deletar Aula
                            </div>
                        </h2>
                        <section class="ui large form">
                            <div class="ui stacked segment">
                                <div class="header">
                                    Realmente deseja excluir?
                                </div>
                                <div class="header">
                                    de ID: {id_class}
                                </div>
                                <div class="ui divider"></div>
                                <button class="fluid  negative ui button" onClick={(e)=>{send(e)}}>Enviar</button>
                            </div>
                            <div class="ui error message"></div>
                        </section>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default DeleteClass;