# Emotion — шпаргалка для React

## 1. Установка

```bash
npm install @emotion/react @emotion/styled
```

---

## 2. Структура файлов

Рекомендуется создавать отдельный файл для стилей компонента:

```
Component/
├─ Component.jsx          # сам компонент
└─ Component.styled.jsx  # стили через Emotion
```

Допустимые расширения файлов со стилями:

- `Component.styled.js`
- `Component.styled.jsx`
- `Component.styled.tsx` (если TypeScript)

---

## 3. Создание styled-component

### Пример `FriendList.styled.jsx`

```jsx
import styled from '@emotion/styled';

const Friends = styled.ul`
  display: grid;
  /* другие стили */
`;

export { Friends };
```

---

## 4. Использование в компоненте

### Пример `FriendList.jsx`

```jsx
import { Friends } from '@/components/FriendList/FriendList.styled.jsx';

const FriendList = ({ friends }) => {
  return <Friends>{/* li элементы */}</Friends>;
};

export default FriendList;
```

---

## 5. Возможности Emotion

### ✅ Динамические стили через props

```jsx
const Status = styled.span`
  color: ${({ isOnline }) =>
    isOnline ? 'rgb(11, 115, 11)' : 'rgb(173, 14, 14)'};
`;

<Status isOnline={true}>Online</Status>;
```

Или:

```jsx
const Button = styled.button`
  background-color: ${props => (props.primary ? 'blue' : 'gray')};
`;

<Button primary>Click me</Button>;
```

---

### ✅ Вложенные селекторы и псевдоклассы

Emotion поддерживает обычный CSS:

```jsx
const Card = styled.div`
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
```

---

## 📊 Стилизация таблиц

Обычно таблицу делают одним styled-компонентом:

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
```

👉 Не нужно создавать отдельные styled-компоненты для `thead`, `tr`, `td` —
Emotion применяет вложенные стили только внутри `Table`.

---

# 🎨 Theme (ThemeProvider)

`theme` — единый объект с цветами, размерами, шрифтами и другими
дизайн-токенами.

### Зачем использовать:

- не хардкодить значения
- легко менять дизайн
- использовать одинаковые цвета во всех компонентах
- централизованное управление стилями

---

## Пример `theme`

```js
// styles/theme.js

export const theme = Object.freeze({
  colors: {
    background: {
      white: '#fff',
      gray: '#f5f5f5',
      blue: '#3498db',
    },
    text: {
      primary: '#222',
      secondary: '#555',
    },
  },
});
```

`Object.freeze()` защищает тему от случайных изменений.

---

## Подключение ThemeProvider (один раз)

В `main.jsx` или `App.jsx`:

```jsx
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>;
```

---

## Использование theme

```jsx
const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.background.gray};
  color: ${({ theme }) => theme.colors.text.primary};
`;
```

Emotion автоматически прокидывает `theme` в props.

---

# 🌍 Global styles

`Global` используется для:

- reset
- body
- заголовков
- списков
- базовых HTML элементов

Аналог `global.css`.

---

## Создаём файл

```
src/styles/global.js
```

```jsx
import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        font-family: system-ui, sans-serif;
      }

      h1,
      h2,
      h3,
      p {
        margin: 0;
      }

      ul {
        padding: 0;
        margin: 0;
        list-style: none;
      }
    `}
  />
);

export default GlobalStyles;
```

---

## Подключаем Global (один раз)

```jsx
import GlobalStyles from './styles/global';

<ThemeProvider theme={theme}>
  <GlobalStyles />
  <App />
</ThemeProvider>;
```

---

# 🔄 emotion-reset

Готовый CSS reset.

Используют довольно часто — чтобы не писать reset вручную.

---

## Установка

```bash
npm install emotion-reset
```

---

## Использование

```jsx
import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

<Global
  styles={css`
    ${emotionReset}/* свои глобальные стили ниже */
  `}
/>;
```

---
