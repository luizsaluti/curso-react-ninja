'use strict'

import React from 'react'

const Title = React.createClass({
    getDefaultProps: function(){
        return {
            nome:"Desconhecido",
            sobreNome: "sem Sobrenome"
        }
    },
    render:function(){
        return (
            <h1>Ola {this.props.nome} {this.props.sobreNome}!</h1>
        )
    }
})

export default Title