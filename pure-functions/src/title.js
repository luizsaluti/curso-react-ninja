'use strict'

import React from 'react'
                           //essa seta é um retorno
const Title = ({nome, sobreNome}) =>  <h1>Olá {`${nome} ${sobreNome}`}</h1> 
//usando arrow functions. Omitindo chaves e a palavra-chave return
 //na string está sendo aplicado o conceito de "Template String" (crases)

Title.defaultProps = {
    nome: 'Desconhecido',
    sobreNome: 'Sem Sobrenome'
}
// const Title = React.createClass({
//     getDefaultProps: function(){
//         return {
//             nome:"Desconhecido",
//             sobreNome: "sem Sobrenome",
//             informacoesPessoais:{
//                 nascimento: "01/01/1970"
//             }
//         }
//     },
//     render:function(){
//         return (
//             <div>
//                 <h1>Ola {this.props.nome} {this.props.sobreNome}!</h1>
//                 <h3>Nascido a {this.props.informacoesPessoais.nascimento}</h3>
//             </div>
//         )
//     }
// })

export default Title