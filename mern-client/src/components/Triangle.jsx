import React, { useRef } from "react";
import Button from "./Button";
import { Stage, Layer, Circle } from "react-konva";
import triangleBoundaryHandler from "../utils/triangleBoundryHandler";

const Triangle = ({ isSelectTriangle, answers, postAnswer }) => {
  const circleRef = useRef(null);
  const triangleDim = {
    width: 300,
    height: 300,
  };
  const circleDim = {
    width: 25,
    height: 25,
  };

  const submitAnswer = async (payload) => {
    if (payload.x || payload.y) {
      await postAnswer(payload);
    }
  };

  return (
    <React.Fragment>
      <div className="triangle">
        <Stage width={300} height={300}>
          <Layer>
            {!answers ? (
              <Circle
                x={150}
                y={150}
                width={25}
                height={25}
                fill="red"
                draggable
                ref={circleRef}
                dragBoundFunc={(event) => {
                  return triangleBoundaryHandler(
                    event,
                    triangleDim.width,
                    triangleDim.height,
                    circleDim.width
                  );
                }}
              />
            ) : (
              answers.map((answer) => (
                <Circle
                  x={answer.x}
                  y={answer.y}
                  width={
                    answer._id !== answers[answers.length - 1]._id ? 15 : 25
                  }
                  height={
                    answer._id !== answers[answers.length - 1]._id ? 15 : 25
                  }
                  fill={
                    answer._id !== answers[answers.length - 1]._id
                      ? "black"
                      : "red"
                  }
                />
              ))
            )}
          </Layer>
        </Stage>
      </div>
      {isSelectTriangle && (
        <Button
          onClick={() =>
            submitAnswer({ x: circleRef.current.x(), y: circleRef.current.y() })
          }
          title={"Save answer"}
        />
      )}
    </React.Fragment>
  );
};

export default Triangle;
