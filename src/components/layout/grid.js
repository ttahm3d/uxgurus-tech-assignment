import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Beercard from "../beer-card";

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const gridcontainer = ({ data, children }) => {
  return (
    <GridContainer>
      {data ? (
        data.map((item, index) => (
          <Beercard
            key={index.toString()}
            image={item.image_url}
            title={item.name}
            description={item.brewers_tips}
          />
        ))
      ) : (
        <p>
          There is no data passed to <code>`GridContainer`</code> component
        </p>
      )}
      {children}
    </GridContainer>
  );
};

gridcontainer.propTypes = {
  data: PropTypes.array,
};

export default gridcontainer;
