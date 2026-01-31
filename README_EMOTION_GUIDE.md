# Emotion — шпаргалка для React

## 1. Установка

```bash
npm install @emotion/react @emotion/styled
```

---

## 2. Структура файлов

Рекомендуется создавать отдельный файл для стилей компонента:

```
Компонент/
├─ Component.jsx          # сам компонент
└─ Component.styled.jsx   # стили через Emotion
```

Файл со стилями можно назвать с любым из этих расширений:

- `Component.styled.js`
- `Component.styled.jsx`
- `Component.styled.tsx` (если используешь TypeScript)п

---

## 3. Создание Styled Component

**Пример `FriendList.styled.jsx`:**

```jsx
import styled from '@emotion/styled';

const Friends = styled.ul`
  display: grid;
== другие стили ==
`;

export { Friends };
```

---

## 4. Использование в компоненте

**Пример `FriendList.jsx`:**

```jsx
import { Friends } from '@/components/FriendList/FriendList.styled.jsx';

const FriendList = ({ friends }) => {
  return <Friends> // наш список ul // тут компонент li</Friends>;
};

export default FriendList;
```

---

## 5. Особености

**Динамические стили через пропсы** Emotion позволяет изменять стили компонента
в зависимости от переданных пропсов.

```jsx
const Status = styled.span`
  color: ${({ isOnline }) =>
    isOnline ? 'rgb(11, 115, 11)' : 'rgb(173, 14, 14)'};
`;
<Status isOnline={true}>Online</Status>;
```

или:

```jsx
const Button = styled.button`
  background-color: ${props => (props.primary ? 'blue' : 'gray')};
`;

<Button primary>Click me</Button>;
```

**Вложенные селекторы и псевдоклассы поддерживаются** В Emotion можно писать
обычный CSS прямо внутри styled-компонента:  
поддерживаются вложенные селекторы (`div`, `svg`, `span`) и псевдоклассы
(`:hover`, `:focus`, `:active`).

```jsx
const Card = styled.div`
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
```

### **Стилизация таблиц**

Обычно таблицу оформляют как один `styled.table`,  
а `th`, `td`, `tr` стилизуют через вложенные селекторы.

```jsx
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    background-color: #00bcd5;
    color: white;
    padding: 10px;
  }

  td {
    padding: 10px;
    text-align: center;
  }

  tbody tr:nth-child(even) {
    background-color: #f3f6f9;
  }
`;
Так не нужно создавать отдельные styled-компоненты для thead, tr, td —
Emotion применяет стили только внутри этого компонента.
```
