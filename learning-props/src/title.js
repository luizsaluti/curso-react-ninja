'use strict'

import React from 'react'

const Title = React.createClass({
    getDefaultProps: function(){
        return {
            nome:"Desconhecido",
            sobreNome: "sem Sobrenome",
            informacoesPessoais:{
                nascimento: "01/01/1970"
            }
        }
    },
    render:function(){
        return (
            <div>
                <h1>Ola {this.props.nome} {this.props.sobreNome}!</h1>
                <h3>Nascido a {this.props.informacoesPessoais.nascimento}</h3>
            </div>
        )
    }
})

export default Title