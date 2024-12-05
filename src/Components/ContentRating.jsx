import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
    constructor() {
        super();
        this.state = {
            likes: 0,
            dislikes: 0,
            totalRatings:0,
            handleLike:() => {
                this.setState((prevState) => ({
                    likes: prevState.likes + 1,
                    totalRatings: prevState.totalRatings +1
                }));
            },

            handleDislike:() => {
                this.setState((prevState) => ({
                    dislikes: prevState.dislikes +1,
                    totalRatings: prevState.totalRatings +1
                }));
            }
        };
    }
    render() {
        return (
            <>
            <h1>Text Content Rating</h1>
            <div className='content-rating'>
            <p>
               I see you and I noticed.

That your wardrobe mainly consists of black clothes. The guitar that you play is also in the colour black. All the little things that you own are in black, everything black but my favourite of them all is when you said you like seeing me in a black dress and I listened.

Because black is your favourite colour.

Although the absence of colour is also pretty much apparent in my wardrobe, but I started wearing it more so when I am with you.

Because black is your favourite colour.

Every time I see the colour black, I immediately associate it with you.

Because black is your favourite colour.

Whenever I want to give you something, like a small, tiny present because I enjoy giving gifts to people, I cherish. It has to be black.

Because black is your favourite colour.

I somehow found myself doing all these little things because of you and because you matter to me and that is how I show it.

To be love is to be seen they say but because I noticed, I found myself in this stupor. An unnerving feeling that none of this even really matters because all this time we were never on the same page, same line, same paragraph. You once never asked me what mine is.

I know your favourite colour, but do you even know mine?
            </p>
            <div className='rating-buttons'>
                <button className="like-button" onClick={this.state.handleLike}>
                    Like ({this.state.likes})
                </button>
                <button className="dislike-button" onClick={this.state.handleDislike}>
                    Dislike ({this.state.dislikes})
                </button>
            </div>
            <p>Total Ratings: {this.state.totalRatings}</p>
            </div>
            </>
        )
    }
}
export default ContentRating