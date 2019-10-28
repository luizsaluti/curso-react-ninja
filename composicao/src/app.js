'use strict'

import React,{ Component } from 'react'
import Title from './title'
import Square from './square'
import LikeButton from './like-button'

class App extends Component{
    render(){
        return (
            <div className="conteiner" >
               {/* <Button>Teste</Button> */}
               <LikeButton></LikeButton>
            </div>
        )
    }
}

export default App