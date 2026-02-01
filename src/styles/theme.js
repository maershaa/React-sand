// В JavaScript зафиксировать theme можно через Object.freeze(), чтобы его нельзя было мутировать.

export const theme = Object.freeze({
  colors: Object.freeze({
    background: Object.freeze({
      white: '#fff',
      antiquewhite: '#faebd7',
      lightGray: '#c7ccd0',
      gray: '#f5f5f5',
      lavender: '#e3d2ed',
      lightYellow: '#fffacd',
      blueLight: '#b0bcfb',
      pinkLight: '#e89bf4',
      yellowLight: '#ffffe0',
      skyBlue: '#b0e6fb',
      blue: '#70b1dc',
      green: '#27ae60',
      grayDark: '#7f8c8d',
      purple: '#8e44ad',
      weryDarkGray: '#34495e',
      teal: '#67d0cd',
    }),

    other: Object.freeze({
      white: '#fff',
      darkGray: '#4b4b4b',
      black: '#000',
      grayText: '#555',
      darkText: '#222',
      purple: '#754e8c',
      green: '#0b730b',
      red: '#ad0e0e',
    }),
  }),
});
