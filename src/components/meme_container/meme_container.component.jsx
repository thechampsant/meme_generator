import './meme_container.scss'
import Button from '../button/Button.component';
import React from 'react';
import axios from 'axios';

export default class Meme extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            memes : [{url :''}],
            count: 0
        }
    }
    componentDidMount() {
        axios.get('https://api.imgflip.com/get_memes')
        .then(res => {
            const memes = res.data["data"]["memes"]
            this.setState({memes})
        })
    }

    changeUrl = (change) =>{
        const {count, memes} = this.state
  
        console.log(change);
        if(count === memes.length -1){
            this.setState({count: 0})
        }

        if( count >= 0 && change > 0 && count < memes.length){
            this.setState((prevState) =>({
                count : prevState.count + change
            }))
        }
        else if(count > 0 && change < 0 && count < memes.length){
            this.setState((prevState) =>({
                count : prevState.count + change
            }))
        }
  
    }

    render() {
        const {memes, count} = this.state;
        return (
            <div className="meme__container">
                <div className="meme__container-left">
                    <Button name="Prev" func={this.changeUrl}/>
                </div>
                <div className="meme__container-middle">
                    <div className="meme__container-box">
                        &nbsp;
                    </div>
                    <div className="meme__container-circles">
                        &nbsp;
                    </div>
                    <img src={memes[count]["url"]} alt="meme" className='meme__container-meme'/>
                </div>
                <div className="meme__container-right">
                    <Button name="Next" func={this.changeUrl}/>
                </div>
            </div>
        )
    }
}
