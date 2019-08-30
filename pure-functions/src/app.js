'use strict'

import React,{ Component } from 'react'
import Title from './title'

class App extends React.Component{
    render(){
        return (
            <div className="conteiner">
                <Title nome="Luiz Henrique" sobreNome="Saluti"/>
                <Title informacoesPessoais={{nascimento:'06/05/1986'}}/>
            </div>
        )
    }
}

export default App