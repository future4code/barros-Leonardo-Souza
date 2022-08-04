import Card from "../Card/Card";
import { CardContainer } from "../Card/style";
// import { Lista } from "./syle";

function Chat(props) {
  return (
    <CardContainer>
      <header>
        <button onClick={props.onClickReset}>Reset</button>
        <div className="title">
          <h4>Astro</h4>
          <h4>match</h4>
        </div>
        <button onClick={props.onClickReturn}>Return</button>
      </header>

      {/* <Lista>
        <main>
            <ul>
                <li>
                    <img src={props.image} alt=""/>
                    <p>{props.name}</p>
                </li> 
            </ul>
        </main>
      </Lista> */}
    </CardContainer>
  );
}

export default Chat
