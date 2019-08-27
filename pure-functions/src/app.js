'use strict'

import React from 'react'
import Title from './title'

const App = React.createClass({
    render:function(){
        return (
            <div data-id="1">
            <Title nome="Luiz Henrique" sobreNome="Saluti"/>
                <Title informacoesPessoais={{nascimento:'06/05/1986'}}/>
            </div>
        )
    }
})
export default App