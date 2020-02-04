import React, { useState, useEffect } from 'react';

import './global.css'
import './App.css'
import './Main.css'
import './Sidebar.css'

// Componente: Bloco isolado de HTML, CSS e JS, o qual nao interfere no restante da aplicação
// Propriedade: Informações que o componente pai passa para o componente filho
// Estado: Informações mantidas pelo componente (lembrar: imutabilidade)

function App() {

  const [github_username, setGithubUsername] = useState('')
  const [techs, setTechs] = useState('')

  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('poss', position);
          const { latitude, longitude } = position.coords
  
          setLatitude(latitude)
          setLongitude(longitude)
        },
        (err) => {
          console.log('deu erro', err)
          setLatitude(-123546)
          setLongitude(-462153)
        },
        {
          timeout: 30000
        }
      )
    }
  }, [])

  async function handleAddDev(e) {
    e.preventDefault()

    
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input type="text" name="github_username" 
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
              id="github_username" required />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input type="text" name="techs"
            value={techs}
            onChange={e => setTechs(e.target.value)}
            id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="number"
                name="latitude"
                onChange={e => setLatitude(e.target.value)}
                id="latitude" value={latitude} required />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
              type="number"
              name="longitude"
              id="longitude"
              onChange={e => setLongitude(e.target.value)}
              value={longitude} required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/10153920?s=460&v=4" alt="Maurício Martins" />
              <div className="user-info">
                <strong>Mauricio Martins</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>CTO no ECBR</p>
            <a href="https://github.com/mauriciomartinscruz">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/10153920?s=460&v=4" alt="Maurício Martins" />
              <div className="user-info">
                <strong>Mauricio Martins</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>CTO no ECBR</p>
            <a href="https://github.com/mauriciomartinscruz">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/10153920?s=460&v=4" alt="Maurício Martins" />
              <div className="user-info">
                <strong>Mauricio Martins</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>CTO no ECBR</p>
            <a href="https://github.com/mauriciomartinscruz">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/10153920?s=460&v=4" alt="Maurício Martins" />
              <div className="user-info">
                <strong>Mauricio Martins</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>CTO no ECBR</p>
            <a href="https://github.com/mauriciomartinscruz">Acessar perfil no github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
