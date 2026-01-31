import styled from '@emotion/styled';

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;

  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;

  background: white;
  border-radius: 12px;

  box-shadow: 0 6px 12px -6px rgba(0, 0, 0, 0.25);

  svg {
    width: 32px;
    height: 32px;
    margin-left: 8px;

    color: ${
      (
        { isOnline, theme } // передаёv проп isOnline в компонент ListItem
      ) => (isOnline ? theme.colors.other.green : theme.colors.other.red) //Emotion берёт isOnline из пропсов. Проверяет: если true → зелёный, а если false → красный
    };
  }
`;

const Avatar = styled.img`
  width: 100%;
  max-width: 100px;
  border-radius: 25%;
  background-color: ${props => props.theme.colors.background.antiquewhite};
`;
const UserName = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
`;

export { ListItem, Avatar, UserName };
