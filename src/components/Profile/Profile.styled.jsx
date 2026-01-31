import styled from '@emotion/styled';

const ProfileWrapper = styled.div`
  background-color: rgb(199, 204, 208);
  padding: 60px;
`;

const Description = styled.div`
  background-color: rgb(255, 255, 255);
  max-width: 500px;
  width: 90%;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0px 0px 45px -12px rgba(119, 126, 131, 0.49);
`;

const Avatar = styled.img`
  width: 100%;
  max-width: 200px;
  border-radius: 50%;
  background-color: antiquewhite;
`;

const Name = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  color: #000;
`;

const Tag = styled.p`
  padding: 10px;
  font-size: 1.2rem;
  font-weight: 400;
  font-style: italic;
  color: #4b4b4b;
`;

const Location = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  color: #4b4b4b;
`;

const StatsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 500px;
  width: 90%;

  margin: 0 auto;

  background-color: #f5f5f5;

  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const StatsItem = styled.li`
  display: grid;
  grid-template-rows: auto auto;
  justify-items: center;
  align-items: center;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const Label = styled.span`
  font-size: 0.9rem;
  color: #555;
`;

const Quantity = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  color: #222;
`;

export {
  ProfileWrapper,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  StatsList,
  StatsItem,
  Label,
  Quantity,
};
