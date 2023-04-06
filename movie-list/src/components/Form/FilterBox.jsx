import styled from "styled-components";

function FilterBox() {
  return (
    <Container>
      <h3>트렌딩</h3>
      <UlFilter>
        <LiFilter>필터1</LiFilter>
        <LiFilter>필터2</LiFilter>
        <LiFilter>필터3</LiFilter>
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

  & + & {
    border-left: 1px solid black;
  }
`;
