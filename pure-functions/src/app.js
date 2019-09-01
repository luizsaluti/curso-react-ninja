'use strict'

import React,{ Component } from 'react'
import Title from './title'
import Square from './square'

class App extends Component{
    render(){
        return (
            <div className="conteiner">
                <Title nome="Luiz Henrique" sobreNome="Saluti"/>
                <Title informacoesPessoais={{nascimento:'06/05/1986'}}/>
                <Square color='blue'/>
            </div>
        )
    }
}

export default App