import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import { useState } from 'react'
import ApiCreate from '../../../services'
import { useHistory } from 'react-router'
import NavbarComponent from '../../../Components/Navbar'

const CreateClass = () => {
    const redirect = useHistory()

    const [classes, setClass] = useState({
        material_link_url: '',
        video_url: '',
        title_class: ''
    })

    function handleToChangeInput(target) {
        setClass({ ...classes, [target.name]: target.value })
    }
    console.log(classes)
    const send = async (e) => {
        e.preventDefault()
        await ApiCreate('POST', 'class/', classes).then((res) => {
            //
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
                                Criar Aula
                            </div>
                        </h2>
                        <section class="ui large form" style={{textAlign: 'left'}}>
                            <div class="ui stacked segment">
                                <div class="field">
                                    <label>Título</label>
                                    <div class="ui left icon input">
                                        <i class="pencil icon"></i>
                                        <input type="text" name="title_class" value={classes.title_class} onChange={(e) => { handleToChangeInput(e.target) }} placeholder="Título da Aula" />
                                    </div>
                                </div>
                                <div class="field">
                                    <label>Link da Aula </label>
                                    <div class="ui left icon input">
                                        <i class="youtube icon"></i>
                                        <input type="text" name="video_url" value={classes.video_url} onChange={(e) => { handleToChangeInput(e.target) }} placeholder="Link da Aula no YouTube" />
                                    </div>
                                </div>
                                <div class="field">
                                <label>Link de Material Complementar(Drive)</label>
                                    <div class="ui left icon input">
                                        <i class="google drive icon"></i>
                                        <input type="text" name="material_link_url" value={classes.material_link_url} onChange={(e) => { handleToChangeInput(e.target) }} placeholder="Link(Google Drive) de algum material externo" />
                                    </div>
                                </div>
                                <div class="ui fluid large teal submit button" onClick={(e) => { send(e) }} >Enviar</div>
                            </div>
                            <div class="ui error message">
                            </div>
                        </section>

                    </div>
                </div>
            </Container>
        </>
    )
}

export default CreateClass;