'use strict'

import React from 'react'
import Title from './title'

const App = React.createClass({
    render:function(){
        return (
            <div data-id="1">
            <Title nome="Luiz Henrique" sobreNome="Saluti"/>
                <Title />
            </div>
        )
    }
})
export default App