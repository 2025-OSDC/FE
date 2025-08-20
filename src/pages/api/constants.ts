export const INSTALL_COMMAND =
  "pnpm add colbrush\n# 또는\nnpm install colbrush";
export const THEMEFILE_COMMEND =
  "/* theme.css */\n[data-theme='default'] {\n\t--color-primary-100: #F5F5F5;\n\t/* ... */\n}";
export const GENERATE_THEME_COMMAND =
  "npx colbrush-cli --generate --css=./styles/theme.css";
export const THEMEPROVIDER_SETTING =
  "import { ThemeProvider } from 'colbrush/client'; \nexport default function RootLayout({ children }) {  \n\treturn (   \n\t\t<ThemeProvider> \n\t\t\t{children} \n\t\t</ThemeProvider>  \n\t); \n}";
export const ThemeProvider =
  "import { ThemeProvider } from 'colbrush/client'; \n//...\n<ThemeProvider initialTheme=\"deuteranopia\"> \n\t<MyApp /> \n</ThemeProvider>";
export const USETHEME =
  "import { useTheme } from 'colbrush'; \nfunction ThemeButtons() {\n\tconst { theme, updateTheme, language, updateLanguage } = useTheme();\n\n\treturn (\n\t\t<>\n\t\t\t<button onClick={() => updateTheme('protanopia')}> \n\t\t\t\t적색맹 모드 \n\t\t\t</button>\n\t\t\t<button onClick={() => updateLanguage('English')}> \n\t\t\t\t영어 모드 \n\t\t\t</button> \n\t\t</>\n\t); \n}";
export const LICENSE =
  'MIT License Copyright (c) 2025 Colbrush Permission is hereby granted, free of charge, to any person obtaining a copy of\n this software and associated documentation files (the "Software"), to deal in the Software without restriction,\n including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following\n conditions: The above copyright notice and this permission notice shall be included in all copies or substantial\n portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING\n BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT\n SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF\n CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n THE SOFTWARE.';
