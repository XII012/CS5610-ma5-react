import Square from "./Square";
import "./Board.css";
// import { useState } from "react";
import { useSelector } from "react-redux";

export default function Board() {
    const boardState = useSelector(state => state.game)
    const clickCount = useSelector(state => state.clickCount)
    // const [boardState, setBoard] =  useState([
    //     ['w', 'w'],
    //     ['w', 'w'],
    // ]);
    const boardComponent = [];

    // let count = 0;
    for (let i=0;i<boardState.length;i++) {
        let row = boardState[i];
        for (let j=0;j<row.length;j++) {
            boardComponent.push((<Square symbol = {boardState[i][j]} x = {i} y = {j}/>))
            // boardComponent.push((<Square symbol = {boardState[i][j]} onClick = {setBoard} boardState = {boardState} x={i} y = {j}/>))
            // if (boardState[i][j] === 'b')  {
            //     count += 1;
            // }
        }
    }

    console.dir(boardComponent);
    return (
        <div>
            <h1>{"Count: " + clickCount}</h1>
            <div id="board">
                {boardComponent}
            </div>
            
        </div>
    )
}
