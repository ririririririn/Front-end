import styled, { css } from "styled-components";

function FilterBox({ filterList, title, onClick }) {
  return (
    <Container>
      <h3>{title}</h3>
      <UlFilter>
        {filterList.map((filter) => (
          <LiFilter
            key={filter.id}
            active={filter.active}
            onClick={() => onClick(filter.id)}
          >
            {filter.text}
          </LiFilter>
        ))}
      </UlFilter>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

export default FilterBox;

const UlFilter = styled.ul`
  display: flex;
  border: 1px solid #000;
  margin-left: 40px;
  border-radius: 20px;
`;

const LiFilter = styled.li`
  padding: 2px 20px;
  cursor: pointer;

  ${({ active, theme }) =>
    active &&
    css`
      background-color: ${theme.colors.main};
      color: #fff;
      font-weight: bold;
    `}

  & + & {
    border-left: 1px solid black;
  }
`;
