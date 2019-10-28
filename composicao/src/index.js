'use strict'

import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import App from './app'

const renderApp = (Aplicacao) => {
    render(
        <AppContainer>
            <Aplicacao/>
        </AppContainer>,
        document.querySelector('[data-js="app"]')
    )
}

renderApp(App)//renderizando aplicacao

if (module.hot){
    module.hot.accept('./app', () =>{
        const NextApp = require('./app').default
        renderApp(NextApp)//renderizando aplicacao em caso de atualizacao do fonte
    })
}