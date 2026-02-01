Вот обновлённая шпаргалка с учётом всех твоих дополнений

# Шпаргалка по Styled Components в React

---

## 1. Установка и подключение

```bash
npm install styled-components
```

Для TypeScript:

```bash
npm install --save-dev @types/styled-components
```

Подключение:

```js
import styled, { createGlobalStyle } from 'styled-components';
```

**Объяснение:**

- `styled` — функция для создания стилизованных React-компонентов.
- `createGlobalStyle` — для глобальных стилей.
- В `styled-components` для пропсов, которые не должны попасть в DOM, принято
  использовать префикс `$`, например: `$isOnline`. В отличие от `emotion`, где
  такого префикса нет.

---

## 2. Структура файлов

```
src/
├─ components/
│  ├─ Button/
│  │  ├─ Button.jsx
│  │  └─ Button.styled.js
│  └─ Card/
│     ├─ Card.jsx
│     └─ Card.styled.js
├─ styles/
│  ├─ global.js           // глобальные стили
│  └─ theme.js            // тема
```

---

## 3. Создание styled-компонента

```js
import styled from 'styled-components';

export const Button = styled.button`
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
```

---

## 4. Использование компонента

```js
import { Button } from './Button.styled';

<Button>Нажми меня</Button>;
```

---

## 5. Динамические стили через пропсы

```js
export const Button = styled.button`
  background: ${props => props.theme.colors.background.white};
  color: ${({ $isOnline, theme }) =>
    $isOnline ? theme.colors.other.green : theme.colors.other.red};
  padding: 10px 20px;
  border-radius: 5px;
`;
```

```js
<Button $isOnline={true}>Онлайн</Button>
<Button $isOnline={false}>Оффлайн</Button>
```

**Объяснение:**

- `$isOnline` — префикс `$` нужен, чтобы пропс не ушёл в DOM.
- Через `${props => ...}` можно менять стили в зависимости от пропсов и темы.

---

## 6. Вложенные селекторы и псевдоклассы

```js
export const Button = styled.button`
  span {
    font-weight: bold;
  }

  &:hover {
    background-color: #2980b9;
  }
`;
```

---

## 7. Тема (Theme)

```js
export const theme = {
  colors: {
    background: { white: '#fff' },
    other: { green: '#2ecc71', red: '#e74c3c' },
  },
};
```

```js
import { ThemeProvider } from 'styled-components';

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>;
```

---

## 8. Глобальные стили и сброс CSS

```js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Сброс/normalize */
  *, *::before, *::after { box-sizing: border-box; }

  body, h1, h2, h3, h4, p, ul, ol, li, figure, figcaption, blockquote, dl, dd {
    margin: 0;
    padding: 0;
  }

  ul, ol { list-style: none; padding: 0; }

  input, button, textarea, select { font: inherit; }

  svg {
    display: inline-block;
    vertical-align: middle;
    color: inherit; /* позволяет наследовать цвет из styled-components */
  }

  /* Важно: через createGlobalStyle нельзя подключить шрифты через @import внутри JS. */
`;
```

**Объяснение:**

- В `emotion` есть `${emotionReset}`, в `styled-components` аналога нет — сброс
  делаем вручную через `createGlobalStyle`.
- SVG можно стилизовать через `color: inherit`, тогда `react-icons` будут менять
  цвет в зависимости от пропсов, как в примере выше.

---

## 9. Пример использования GlobalStyle

```js
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <FriendList friends={friends} />
    </>
  );
}
```
