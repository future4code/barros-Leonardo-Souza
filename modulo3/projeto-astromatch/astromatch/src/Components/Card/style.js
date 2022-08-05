import styled from "styled-components";

export const CardContainer = styled.div`
  width: 400px;
  margin: 0 auto;
  height: 600px;
  margin-top: 100px;
  border: ridge;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 500px) {
    
  height: 100vh;
}

  header {
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 50px;
  }

  .title {
    display: flex;
    font-size: 24px;
    font-weight:400;
    
  }
  

  .title h4:nth-child(2) {
    color: var(--pink);
    
  }

  header button {
    padding: 5px 20px;
    color: white;
    background: var(--red);
    font-weight: 500;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 10px;
    border: none;
  }

  header button:nth-child(1) {
    margin-right: 30px;
  }

  header button:nth-child(3) {
    margin-left: 30px;
  }

  header button:hover {
    color: var(--red);
    background-color: white;
  }

  #main {
    height: 500px;
    width: 360px;
    box-shadow: 5px 5px 5px darkgray;
    object-fit: cover;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

main div {
    width: 100%;
    color: white;
    margin: 0px 10px 5px;
}



main div div {
  display: flex;
}

/* main div div h3:nth-child(2) {
  font-weight: 400;
} */


footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 100px;
    width: 380px;
}

footer button {
    width: 60px;
    height: 60px;
    border-radius: 500%;
    font-size:35px;
    cursor: pointer;

}

footer button:nth-child(1){
    background: var(--red);
    color: white;
    border: none;
}

footer button:nth-child(1):hover{
    color: var(--red);
    background-color: white;
}

footer button:nth-child(1)

footer button:nth-child(2) {
    font-weight: 700;
}




`;
