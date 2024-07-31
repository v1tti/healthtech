import { Header } from "../header/header";
import SQUAT from "./high-bar.gif";
import "./index.css";

export function SquatExercise() {
  return (
    <div className="container">
        <Header></Header>
      <h1 className="exercise-title">Agachamento Livre com Barra</h1>
      <img className="exercise-example" src={SQUAT}></img>
      <div className="sets-details-holder">
        <div className="sets-labels">
          <h2>Série</h2>
          <h2>Repetições</h2>
          <h2>Peso</h2>
        </div>
        <div className="set-content">
          <div className="sets">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
          <div className="reps">
            <span>20</span>
            <span>15</span>
            <span>12</span>
            <span>10</span>
            <span>8</span>
          </div>
          <div className="weight">
            <span>40</span>
            <span>50</span>
            <span>60</span>
            <span>70</span>
            <span>80</span>
          </div>
        </div>
      </div>
    </div>
  );
}
