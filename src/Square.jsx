import './Square.css';
import { useDispatch } from 'react-redux';
// import { useState } from 'react';

export default function Square(props) {
    const symbol = props.symbol;
    let backgroundColor;
    if (symbol === 'w') {
        backgroundColor = 'whiteBackground';
    } else if (symbol === 'b') {
        backgroundColor = 'blackBackground';
    }

    const dispatch = useDispatch();

    return <div onClick={() => dispatch(
        {
        type: 'boardClick',
        x: props.x,
        y: props.y,
        symbol: symbol,
        }
    )} id="square" class={backgroundColor}></div>;

        
    // const symbol = props.symbol;
    
    // const [state, setState] = useState(props.symbol);
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

}
