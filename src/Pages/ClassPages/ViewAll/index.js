import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import { useState } from 'react'
import ApiCreate from '../../../services'
import { useHistory } from 'react-router'
import NavbarComponent from '../../../Components/Navbar'

const ViewClassAll = () => {
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
        <h2 class="ui header">Aulas</h2>
        <div class="ui list">
          <div class="item">
            <i class="map marker icon"></i>
            <div class="content">
              <a class="header">Krolewskie Jadlo</a>
              <div class="description">An excellent polish restaurant, quick delivery and hearty, filling meals.</div>
            </div>
          </div>
          <div class="item">
            <i class="map marker icon"></i>
            <div class="content">
              <a class="header">Xian Famous Foods</a>
              <div class="description">A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers.</div>
            </div>
          </div>
          <div class="item">
            <i class="map marker icon"></i>
            <div class="content">
              <a class="header">Sapporo Haru</a>
              <div class="description">Greenpoint's best choice for quick and delicious sushi.</div>
            </div>
          </div>
          <div class="item">
            <i class="map marker icon"></i>
            <div class="content">
              <a class="header">Enid's</a>
              <div class="description">At night a bar, during the day a delicious brunch spot.</div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ViewClassAll;