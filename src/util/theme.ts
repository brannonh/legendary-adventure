import { hex, bgHex } from 'chalk';
import _ from 'lodash';

type ColorType = 'color' | 'bgColor';
export type StyleTypes = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'fade' | 'highlight';
type Colors = Record<ColorType, string>;
export type Styles = Partial<Record<StyleTypes, Partial<Colors>>>;

export class Theme {
  styles: Styles;

  constructor(styles: Styles = Themes.Default) {
    this.styles = _.cloneDeep(Themes.Default);
    _.merge(this.styles, styles);
  }

  stylize(text: string, styleType: StyleTypes = 'primary') {
    const style = this.styles[styleType];
    // Because of _.merge in the constructor, style is never undefined.
    const color = style!.color ?? false;
    const bgColor = style!.bgColor ?? false;

    if (color !== false) {
      text = hex(color)(text);
    }

    if (bgColor !== false) {
      text = bgHex(bgColor)(text);
    }

    return text;
  }
}

export const Themes: Record<string, Styles> = {
  // Default to Dracula Theme
  Default: {
    primary: { color: '#f8f8f2' },
    secondary: { color: '#bd93f9' },
    success: { color: '#50fa7b' },
    danger: { color: '#ff5555' },
    warning: { color: '#f1fa8c' },
    info: { color: '#8be9fd' },
    fade: { color: '#6272a4' },
    highlight: { color: '#f8f8f2', bgColor: "#44475a" },
  },
}
