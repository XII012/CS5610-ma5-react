import './Square.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export default function Square(props) {
    // const symbol = props.symbol;
    
    // // const [state, setState] = useState(props.symbol);
    // let backgroundColor;
    // if (symbol === 'w') {
    //     backgroundColor = 'whiteBackground';
    // } else if (symbol === 'b') {
    //     backgroundColor = 'blackBackground';
    // }

    // const dispatch = useDispatch();

    // return (<div onClick={() => {
    //     dispatch({
    //         type: 'boardClick',
    //         x: props.x,
    //         y: props.y,
    //     })
    // }
    // } id="square" class={backgroundColor}>
    //     {symbol}
    // </div>);


    const state = props.symbol;
    let backgroundColor;
    if (state === 'w') {
        backgroundColor = 'whiteBackground';
    } else if (state === 'b') {
        backgroundColor = 'blackBackground';
    }



    return <div onClick={() => {
        const {onClick,x,y,boardState} = props;
        boardState[x][y] = state === 'w' ? 'b' : 'w';
        onClick([...boardState])}} id="square" class={backgroundColor}></div>;
}
