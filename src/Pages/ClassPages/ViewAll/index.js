import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import { useEffect, useState } from 'react'
import ApiCreate from '../../../services'
import { useHistory } from 'react-router'
import NavbarComponent from '../../../Components/Navbar'
import Toast from 'light-toast';
import { Link } from 'react-router-dom'

const ViewClassAll = () => {
  const redirect = useHistory()
  const id = 1
  const [user, setUser] = useState('')
  useEffect(() => {
    ApiCreate('GET', `users/${id}/`).then((res) => {
      setUser(res.data)

    }).catch(error => {
      Toast.fail('Houve um erro', 1500, () => { });
      //
    })
  }, [])

  return (
    <>
      <NavbarComponent />
      <Container text class="ui container">
        <h1 class="ui header" style={{textAlign: 'center'}}>Aulas</h1>
        <div class="ui list">
          {[0,1,2,3,4,5,6].map((item, index) => {
            return (
              <>
                <div class="item">
                  <i class="map marker icon"></i>
                  <div class="content">
                    <a class="header">
                    <Link to={`visualizar/${index}`} >
                      Krolewskie Jadlo
                      </Link>
                      </a>
                    <div class="description">An excellent polish restaurant, quick delivery and hearty, filling meals.</div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </Container>
    </>
  )
}

export default ViewClassAll;