import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../helpers";
import Image from "../../elements/image";
import Lockup from "../lockup";
import Like from "./like-button";

const BeerCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  margin-left: 20px;
  width: 100%;

  @media ${device.laptop} {
    width: 30%;
  }
`;

const ImagContainer = styled.div`
  padding: 40px 20px;
  background-color: #2897b1;
  position: relative;
  margin-top: auto;

  img {
    height: 100px;
    width: auto;
    display: block;
    margin: 0 auto;
  }
`;

const Content = styled.div`
  padding: 20px;
`;

function Beercard(props) {
  const [active, setActive] = useState(false);

  const changeLike = (event, active) => {
    event.preventDefault();
    setActive(!active);
  };

  return (
    <BeerCard>
      <Content>
        <Lockup text={props.description} tag="h3" title={props.title} />
      </Content>
      <ImagContainer>
        <Like liked={active} action={(event) => changeLike(event, active)} />
        <Image url={props.image} />
      </ImagContainer>
    </BeerCard>
  );
}

export default Beercard;
