import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMeme } from '../actions';

class MemeItem extends Component {
    constructor(){
        super()
        this.state ={
            hoverd:false
        }
    }
    postMeme(){
        console.log('this.props', this.props);
        const { text0,text1 } = this.props;
        const memeObj = {
            template_id:this.props.meme.id,
            text0,
            text1
        }
        this.props.createMeme(memeObj)
    }
  render() {
    return (
        <div className='meme-item'
            onMouseEnter={() => this.setState({ hoverd: true })}
            onMouseLeave={() => this.setState({ hoverd: false })}
            onClick={()=>this.postMeme()}
        >
        <img 
            src={this.props.meme.url}
            alt={this.props.meme.name}
            className={this.state.hoverd?'meme-img darken-img' : 'meme-img'}
          
        />
        <p className= {this.state.hoverd?'meme-txt':'no-txt'}>
            {this.props.meme.name}
        </p>
      </div>
    )
  }
}

export default connect(null,{createMeme})(MemeItem);