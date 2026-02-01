# CSS Modules шпаргалка

## 1. Установка и поддержка

Для **React + Vite** отдельная установка CSS Modules **не нужна**, поддержка
встроена. Достаточно иметь проект React на Vite:

CSS Modules работают по соглашению: файлы стилей должны иметь расширение
`.module.css`.

---

## 2. Рекомендуемая структура файлов

**Стандартная структура компонента с CSS Module:**

```
src/
├─ components/
│  ├─ Button/
│  │  ├─ Button.jsx
│  │  └─ Button.module.css
│  ├─ Profile/
│  │  ├─ Profile.jsx
│  │  └─ Profile.module.css
```

> Компонент и его стили лежат в одной папке для удобства и инкапсуляции.

---

## 3. Пример реализации CSS Module

### Button.module.css

```css
/* Локальные стили для кнопки */
.button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.primary {
  background-color: #007bff;
}

.secondary {
  background-color: #6c757d;
}

.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

### Button.jsx

```jsx
import React from 'react';
import styles from './Button.module.css';

const Button = ({ type = 'primary', disabled = false, children }) => {
  // Динамическое применение классов
  const buttonClass = `${styles.button} ${styles[type]} ${disabled ? styles.disabled : ''}`;

  return (
    <button className={buttonClass} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
```

**Использование:**

```jsx
<Button type="primary">Primary</Button>
<Button type="secondary">Secondary</Button>
<Button disabled>Disabled</Button>
```

---

## 4. Динамическое применение классов

В CSS Modules легко менять классы через **props**:

```jsx
const Button = ({ size }) => {
  return (
    <button
      className={`${styles.button} ${size === 'large' ? styles.large : styles.small}`}
    >
      Click
    </button>
  );
};
```

**Таблица мини-шпаргалка по динамике классов:**

| Цель                 | Пример                                                      |
| -------------------- | ----------------------------------------------------------- |
| Применить один класс | `<div className={styles.container}></div>`                  |
| Несколько классов    | `<div className={`${styles.one} ${styles.two}`}></div>`     |
| Класс через prop     | `<div className={props.active ? styles.active : ''}></div>` |

> Можно использовать `classnames` библиотеку для удобного комбинирования
> классов.

```bash
npm install classnames
```

```jsx
import classNames from 'classnames';

const buttonClass = classNames(styles.button, {
  [styles.primary]: type === 'primary',
  [styles.disabled]: disabled,
});
```

---

## 5. Локальные и глобальные стили

### Локальные стили

По умолчанию CSS Modules создают **локальные уникальные классы**, чтобы не было
конфликтов.

```css
/* Button.module.css */
.button {
  color: red; /* применится только к этому компоненту */
}
```

### Глобальные стили

Можно делать глобальные стили через `:global` или обычные `.css` файлы.

#### Пример global.module.css

```css
:global(.app-container) {
  margin: 0 auto;
  max-width: 1200px;
}

body {
  font-family: Arial, sans-serif;
}
```

#### Импорт глобального стиля

```jsx
import './styles/global.module.css';
```

> Все классы, указанные в `:global(...)`, будут видны глобально.

---

## 6. Комбинирование классов через шаблонные строки

```jsx
<div
  className={`${styles.box} ${styles.active} ${isDisabled ? styles.disabled : ''}`}
>
  Content
</div>
```

Или через `classnames`:

```jsx
import classNames from 'classnames';

<div
  className={classNames(styles.box, styles.active, {
    [styles.disabled]: isDisabled,
  })}
>
  Content
</div>;
```

---

## 7. Возможности CSS Modules

| Возможность                       | Поддержка | Пример                                          |
| --------------------------------- | --------- | ----------------------------------------------- |
| Локальные классы                  | ✅ Да     | `styles.button`                                 |
| Динамические классы через props   | ✅ Да     | `className={props.active ? styles.active : ''}` |
| Комбинирование нескольких классов | ✅ Да     | `${styles.one} ${styles.two}`                   |
| Глобальные классы                 | ✅ Да     | `:global(.globalClass)`                         |
| Импорт других модулей             | ✅ Да     | `@import './variables.module.css';`             |

---

## 8. Советы для новичков

- Всегда используйте `.module.css` для компонентов, чтобы избежать конфликтов.
- Для сложных комбинаций классов используйте `classnames`.
- Глобальные стили держите в отдельном файле `global.module.css` или
  `global.css`.
- Имя класса в CSS Module может быть любым, но лучше совпадать с функционалом
  компонента (`button`, `container`, `header`).
