import React, { useState, useEffect } from 'react'

function DevForm({ onSubmit }) {

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

    async function handleSubmit (e) {
        e.preventDefault();
   
        const data = {
            github_username,
            techs,
            latitude,
            longitude
          };

        await onSubmit(data)

        setGithubUsername('');
        setTechs('')

    }
    
    const [github_username, setGithubUsername] = useState('')
    const [techs, setTechs] = useState('')
  
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    return (
        <form onSubmit={handleSubmit} >
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
    )
}

export default DevForm;