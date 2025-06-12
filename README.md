# imk

## 開発コマンド

```shell
npm run watch
```

## build

```shell
npm run build:esbuild       # JSのみビルド
npm run build               # JSとEleventyを両方ビルド
```

## JavaScript bundle

```shell
npx esbuild src/scripts/script.js \
  --bundle \
  --outfile=dist/scripts/script.js \
  --target=es2015 \
```

## Git push の前に

`npm run format` する。

## format

```shell
npm run format
```

## Zen Old Mincho: CSS classes

```css
.zen-old-mincho-regular {
  font-family: 'Zen Old Mincho', serif;
  font-weight: 400;
  font-style: normal;
}

.zen-old-mincho-medium {
  font-family: 'Zen Old Mincho', serif;
  font-weight: 500;
  font-style: normal;
}

.zen-old-mincho-semibold {
  font-family: 'Zen Old Mincho', serif;
  font-weight: 600;
  font-style: normal;
}

.zen-old-mincho-bold {
  font-family: 'Zen Old Mincho', serif;
  font-weight: 700;
  font-style: normal;
}

.zen-old-mincho-black {
  font-family: 'Zen Old Mincho', serif;
  font-weight: 900;
  font-style: normal;
}
```

### Noto Sans JP: CSS class for a variable style

```
// <weight>: Use a value from 100 to 900
// <uniquifier>: Use a unique and descriptive class name
```

```css
.noto-sans-jp-<uniquifier > {
  font-family: 'Noto Sans JP', sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}
```

### Inter: CSS class for a variable style

```
// <weight>: Use a value from 100 to 900
// <uniquifier>: Use a unique and descriptive class name
```

```css
.inter-<uniquifier > {
  font-family: 'Inter', sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}
```

## CTA ボタンの無効化

無効化

```JavaScript
toggleCtaLinkDisabled(true);
```

有効化

```JavaScript
toggleCtaLinkDisabled(false);
```
