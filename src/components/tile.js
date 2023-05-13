import React, { Component } from "react";

class Tile extends Component {
  render() {
    const {
      selectorType,
      board,
      value,
      columnIndex,
      rowIndex,
      play,
      hover,
      out,
      curr,
    } = this.props;

    let space = selectorType ? "selector-open" : "open";

    const playerValues = {
      1: "player1",
      2: "player2",
      3: "trap",
      4: "freeze",
      5: "playerGreen",
      6: "playerGrey",
      7: "playerPurple",
      8: "playerBrown",
    };
    space = playerValues[value] || space;

    const divProps = {
      onClick: () => play(columnIndex),
      onMouseOver: () => hover(board, columnIndex, curr),
      onMouseOut: () => out(columnIndex),
      className: "tile",
    };

    const circleProps = {
      className: [space, "circle"].join(" "),
    };

    if (selectorType) {
      divProps.className = "selector-tile";
      circleProps.id = `selector${columnIndex}`;
    } else {
      divProps.id = `${rowIndex}${columnIndex}`;
    }

    return (
      <td>
        <div {...divProps}>
          <div {...circleProps}></div>
        </div>
      </td>
    );
  }
}

export default Tile;
