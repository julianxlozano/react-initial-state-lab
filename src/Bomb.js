// your Bomb code here!

import React, {Component} from "react";
import ImageSlider from "./ImageSlider";
export default class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
          secondsLeft: props.initialCount
        }
      }

    bombTimer = () => {
       return this.state.secondsLeft === 0 ? <p>Boom!</p> : <p>{this.state.secondsLeft} seconds left before I go boom!</p>
    }

  
    render() {
        return(this.bombTimer())
    }
} 