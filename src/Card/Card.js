import React, { Component } from 'react';
import styled from 'styled-components';
import './Card.css';



const All = styled.div`
    width: ${ props => props.alt ? '21vw': '17vw' };
    z-index: ${ props => props.alt ? '5': '4'};
    max-width: 30vw;
    height: ${ props => props.alt ? '40vh': '20vh' };
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    z-index: 2;
    background-color: #221f1f;
    color: #ffff;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.5s ease-out;
    user-drag: none; 
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    box-shadow:${ props => props.alt? '0px 0px 5px 5px black': null };
`;

const CoverImage = styled.img`
    width: 100%;
    height: 100%;
    z-index: 1;
    border-radius: ${props => props.open ? '5px 5px 0px 0px': '5px'};
    user-drag: none; 
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
`;

const Control = styled.div`
    width: 90%;
    height: 10vh;
    display: ${ props => props.alt ? 'flex': 'none' };
    align-items: center;
    justify-content: space-around;
    
`;

const Info = styled.div`
    width: 90%;
    height: 10vh;
    display: ${ props => props.alt ? 'flex': 'none' };
    flex-direction: column;
    color: #ffff;
    
`;

// flips

const Flip = styled.div`
    display: ${props => props.openHoverd ? 'flex': 'none'};
    width: 90px;
    font-weight: bold;
    height: 30px;
    font-size: 12px;
    background-color: wheat;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin-top: -45px;
    margin-left: -20px;
    z-index: 10;
    justify-content: center;
    align-items: center;
    color: #221f1f;
    border-radius: 5px;
    &:after {
    content: '';
    width: 0;
	height: 0;
	border-left: 10px solid transparent;
	border-right: 10px solid transparent;
    border-top: 10px solid wheat;
    position: absolute;
    left: 0;
    right: 0;
    margin-left: 30px;
    bottom: 0;
    top: 0;
    margin: auto;
    margin-bottom: -8px;
    }
`;

class Card extends Component {

    state = {
        open: false,
        iconOpenHoverd: false,
        iconAddHoverd: false,
        iconLikeHoverd: false,
        iconDislikeHoverd: false,
        iconMoreHoverd: false
    }

    openView = () => {
        this.setState( {open: true} );
    }


    closeView = () => {
       this.setState( {open: false} );
    }

    //Icon hovering..

    hoverOpenIcon = () => {
        this.setState( {iconOpenHoverd: true} );
    }

    hoverOutOpenIcon = () => {
        this.setState( {iconOpenHoverd: false} );
    }
    //....................

    hoverAddIcon = () => {
        this.setState( {iconAddHoverd: true} );
    }

    hoverOutAddIcon = () => {
        this.setState( {iconAddHoverd: false} );
    }

    //.....................

    hoverLikeIcon = () => {
        this.setState( {iconLikeHoverd: true} );
     
    }

    hoverOutLikeIcon = () => {
        this.setState( {iconLikeHoverd: false} );
    }

    //........................

    hoverDislikeIcon = () => {
        this.setState( {iconDislikeHoverd: true} );
        
    }

    hoverOutDislikeIcon = () => {
        this.setState( {iconDislikeHoverd: false} );
    }

    //.........................

    hoverMoreIcon = () => {
        this.setState( {iconMoreHoverd: true} );
    }

    hoverOutMoreIcon = () => {
        this.setState( {iconMoreHoverd: false} );
    }
    //..........................




    render() {

        const UI = (
            <All alt = { this.state.open } onMouseOver = { this.openView } onMouseOut = { this.closeView }>
           
                <div className = 'cover-container'>
                    
                    <CoverImage open = { this.state.open } src = { this.props.cover } alt = 'image cover'></CoverImage>
                </div>

                <Control alt = { this.state.open } >

                    <div className = 'left-side'>
                      <div className = 'icon icon-file' onMouseOver = { this.hoverOpenIcon } onMouseOut = { this.hoverOutOpenIcon } >
                          <Flip openHoverd = { this.state.iconOpenHoverd }>Open</Flip>
                         <i className ="fas fa-folder-open"></i>
                      </div>

                      <div className = 'icon icon-plus' onMouseOver = { this.hoverAddIcon } onMouseOut = { this.hoverOutAddIcon }>
                      <Flip openHoverd = { this.state.iconAddHoverd }>Add to My List</Flip>
                         <i className ="fas fa-plus"></i>
                      </div>

                      <div className = 'icon icon-like' onMouseOver = { this.hoverLikeIcon } onMouseOut = { this.hoverOutLikeIcon }>
                      <Flip openHoverd = { this.state.iconLikeHoverd }>I like this</Flip>
                         <i className ="far fa-thumbs-up"></i>
                      </div>

                      <div className = 'icon icon-dislike' onMouseOver = { this.hoverDislikeIcon } onMouseOut = { this.hoverOutDislikeIcon }>
                      <Flip openHoverd = { this.state.iconDislikeHoverd }>Not for me</Flip>
                         <i className ="far fa-thumbs-down"></i>
                      </div>
                    </div>

                    <div className = 'right-side'>
                        <div className = 'icon icon-arrow' onMouseOver = { this.hoverMoreIcon } onMouseOut = { this.hoverOutMoreIcon }>
                        <Flip openHoverd = { this.state.iconMoreHoverd }>See More!</Flip>
                           <i className ="fas fa-chevron-down"></i>
                        </div>
                    </div>

                </Control>
                
                <Info alt = { this.state.open }>
            
                    <div className = 'card-header'>
                        { this.props.header }
                    </div>
                    <div className = 'card-title'>
                        { this.props.title }
                    </div>

                </Info>
                
            </All>
        );

        return UI;
    }
}

export default Card;