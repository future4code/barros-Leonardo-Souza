import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Leonardo" 
          descricao="Oi, eu sou Leonardo, sou apaixonada por tecnologia e estudante da Labenu."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>
      <div className = 'info-container'>
        <CardPequeno 
          imagem = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAADx8fHOzs7ExMR5eXn6+vpVVVXc3Ny9vb319fXt7e01NTXl5eWqqqq2trZJSUlsbGwtLS2UlJRjY2PW1tajo6M/Pz+KiorKysoODg6bm5uAgIAlJSUXFxcdHR1NTU08PDywsLBeXl59fX1ra2u87si8AAAEKUlEQVR4nO2dbVfyMAyGKeI23lSQgSiIov7/v/jMF56DSza6Nl3iOff1EUF7YdY0TRmDAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFMiK8soU5VDUb5w7e8zWYpKjvbZME/cygtfaHi28TgUE77Qt2plHC1q8An8RezGOtQUuson9H5YzbYULbOJn1Btth1Zuo/0qsndtjUaE0sVgUGy0VVhWErnixFHbhjLbCvpVTKyF6lrW75PCUu6/nsgLVtw+aov9cFcIGZFMk+203T55FskQX4yXZf2h4kXbzz1k9UGFr01HVbyTX3er65eTDDHNFzGGzt2Qhx/0/JYkQ2TVaK7jDN3sqv74XKvgoBnia/KLNXRuQaacscasuiAZ4ieBxRtyb17vobohs97ktPsgYeiW2qFKM8T6/89EDLll7ujQm98DGdv2bHtMyNC5J/KE+3783kjCm6/Ofy5myMzV87f0fgdaQ9QmATnDKlTJrDp6TixII4dM5JKGXFX9lNKP1hBMNS5r6A6j+tOmK+55EmxIDTHh9qeFDbkLf7tM4fd4JCPid8XEDblQXTc9NRxaQ1w17GwmMHSPJFSHwqGak0BpvhhSGHIjaHqHQ9iTd7At96Yx5KJILFSZDNGWlFIZuudx/QXDhYTfgqwPi/Y1cDJDNlSjZ9UZqSEu7rknNHRuR0I1ss3hmyF6M2TKGjYpe+KfIXo0dC9k4VEGtjmYDPHh87rUhlyohrQ56HLQtzpLb8iEatY5VDtmiL4NmV2Ubm0OutnV4fW9GDr3Tuqco/eGHLPL1KV/0JMhM9H7DjMkQ6gYulcyq/o0j9/JPNX1dER/hlxJfqnNEZohtAyZNkfWtnccniH0DJl15byxI0cr6aBTgj0bcqHKtznoHnPgPnrvhn5tDtrSCu4wKxh6tDloWzL8QIuGIVfGjs8usR0J5PI1/G/pGDILzew0TdJqJG5zQMuwMVTJ5kfstrmaIduR2zMZIrahrGjI1UR1BDqtqoZMR+4XrSseX3QN289Iyhx51DZsDtWYDHGOviG3wK4yROcaogkDhlyRJNitMmFYryNGkh1HI4bnbY6p7FkcK4bO3X2HqkiGOMeO4feuvfzxTUuG7nBMcFrclGESYAhD+8AQhvaBIQztA0MY2geGMLQPDGFoHxjC0D4whKF9YAhD+8AQhvaBIQztA0MY2geGMLRPuGGpPXRP6D2WfCm0h+4J/XSKL5n20D0hn3rwR/82kF6Qj2j6Y/s20CdW4YKDifbgveAOkXujeJtLb5Yxgn9iromYZz7Zao//Irs4wcR3YxMgjxXs7d6IgQgI2v4CiPD12i+GVr+HJScfjA9mepPvrdyt/IfD5l7qtuUnJkNLpLnpPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4A/wD6OgZKJ1fC+FAAAAAElFTkSuQmCC'  
          type = 'Email: '
          info = 'leonardo.bsouza@hotmail.com'
          />

          <CardPequeno 
          imagem = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAADh4eGlpaX5+flra2s5OTnv7+/d3d3CwsJ1dXWKioq9vb0nJydfX18VFRV/f38eHh63t7fKyspSUlJCQkLz8/NjY2MJCQmTk5OwsLDs7Oybm5vU1NTm5uZMTEyGhoYlJSVEREQwMDCXl5dXV1f5725cAAAGP0lEQVR4nO2daVfiTBCFaWRxRGRRUXFBhvH//8X3zUEHAknqVm9VzdTz3T59TdJdO72eYRiGYRiGYRiGYRiGYRiGYRjGP8Wqf3v1MtyMpovFYjraDF+ubvsr6U1Fo78ejlwTo+G6L725YAbL4axR3Q+z4XIgvckAlned6n64W0pv1I/rOSRvz/xaerts7h8Y+ioe7qW3zOL+kamv4rEcjdfc5/f3OZbxrg5uPPVV3BRwsC4D9FVoP1dXT4ECnXtSbevcPwcLdO5Z8YnzEkFfxYu0kDYwCwbhTlpKI+Nm89qP0Vhazjkf3RY2l9mHtKBT+lH1VShzrK6jC3ROlYET/wlWKHqK47jf4A8zPcfNNIlA56bSwn7wdSVoHqSl7ZkkE+jcRFpcxa+EAp37JS2v13tNKtC5V2mBCT/CPeKf4lVigc5dyQocJxfonOytGO7S0zxJCrzPINA5SZ8/pkvYzkhOYGhcDUUu/rZl73U23U35ZvpWSiDvEW7n6/5rFSlcvV6v51vW30o9RI5L8XLq7PU5gTkhJwM/SHfNz2C5g1eQOU7h4OG6dYk1uoRIeBE1ub+6bJLxF7iKhAH+hm3tLc8yKcBue9q/w/xLgVsfC68hJwR2YuUPvEFvF+ahQ08x/2v6G9gV6tohTubvpGoaQBzDIbwa4oTldhNv6S094zn5AaDwNqGaJoAQImdLwD8sd2CRviseWevRBTiZ7wvgteKZksCVkbcQhc6mcf/l9EuRN9tGfzft5nYztBGe96j5Q+6HWxWzIlf8k0RJG2RlJT9UTQbP5wl0BGyHH6kmDZu88f0FtZ139pLv1JKLBDraoXbjcbTTF1ACHe1Qm/GJ/22LUrjxWHOjSSH5RvlEjsjIVk6jhlToky8iXShVCot/huR3+OWxJhlYjK6iC2ozPq4OaXtHV9EFtZny70OynptfHvpBLfmcQEc7pEvOz4eRuTpe0CAUsmvkRsOSIZCBKL6ZTBrzeUNRtEfOzfjRgRpu1CAM0tVhhIP3DMkV+Q5ZCEDIm5fxA7KRmYPe5FfDDDrQDad5HWDg5OM9ROAR5j1KoQw8J64C1HDmPWgAC4S1J6RiIXsTDVIpguZtkXzyLqmaJpBe9BkWFl4hdWB5o6UVUPZ9h7gYA6hwKH/NEJLU/N9PpCUOsKIOgRZo2gipmFIHxAdWHcc1kWKA9ll0+1FofaNI3wW4N3fXft6s4Nq4jLoO4OWTb80f0QCs+HJSvc+MToTnyfnn+DFhtLYLdSRwxrO4zdux9/P+Rsbwj8l/Ge6h07Yn7IbzyWQyH+KVs9+IjVlI3xK0R7AxKFXzaB3JVlKglCkCueu9aiAViqFkr0qskaZNvY5w03rIQCGM3NGLU9g3BhvxgTypbwzhFtIK9vXNQrAz7y90+DuEvIHuFjBX2A8Jx/eclIeN+DGzB3fzuEj0AjVy8bNNkrV0Kxrcluaw0XHM7EkzWkHPiKFeGstGgTVzTPzZAxqsmWPiWzYqrJljYrtR0k7TOVimBkfhMNq4QzJUjqKNOU9JfHZSIzFjNooGCh4Tb3CbijFtTcQanziTFtJKLAtckcV9SpzBWKKjrwjiWOCqLO5TYljgyizuU3x+FKFO3nJuPuEDhVWND27iM1Dgp7QAmkCF0tsHCJvYqmAiK03Ipaj5KjwQMpVWfuIshP+lqPwqPOAbltIWfGrH11NU6hU24ecpqvUKm/DxFPV6hU34XIpFXIUH+LkaTXkYBH5iWEm6Fwce3PlN7qafCLBKZL0GaUiDdEYdUPfTQAj0LKkDeWdARQOvlsrfthUHPKeoLleIghbzS5XihzPAOioYQzLVgRlvhZlrdZC+pjIiF20gYX7VQXwaOqJRTOSiDcp4K9Fcq0NFNAqKXLTR3aao9kdVOXRVn+qpIA2hy3gr1lyr0268lWuu1Rm0Rd5mBZtrddqMt6LNtTrN6aiyzbU6zZG34qJrXTRF3gqMrnVxbryVb67VOY+8FRld6+K0dUhNw0886mnTcpKhOPVaIvV1QT4cp02LSobiHOb05Z6fl4uDk3EhLsU5P10n+rpFYvEdIS45AkyxnxQiOskjNZWTcUkuxTmrS3Mpzllfmktxzqf0BgzDMAzDMAzDMAzDMAzDMAzDMKT4D1gBSwuhRyrLAAAAAElFTkSuQmCC'  
          type = 'Endereço: '
          info = 'Rua dos Bobos, nº: 0'
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudando desenvolvimento web fullstack" 
        />
        
        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/f/f9/Logomarca_UFSCAR.png" 
          nome="UFSCar" 
          descricao="Estudante de pedagogia pela UFSCar" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
