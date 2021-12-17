import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PieChart from './charts/PieChart';

function Repos({ repos }) {
  console.log(repos);
  return (
    <section className='section'>
      <Wrapper className='section-center'>
        <PieChart />
        <PieChart />
      </Wrapper>
    </section>
  );
}

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

const mapStateToProps = (store) => {
  return { ...store };
};

export default connect(mapStateToProps)(Repos);
