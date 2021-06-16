import { hex, bgHex } from 'chalk';
import _ from 'lodash';

type ColorType = 'color' | 'bgColor';
export type StyleTypes = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'fade' | 'highlight';
type Colors = Record<ColorType, string>;
export type Styles = Partial<Record<StyleTypes, Partial<Colors>>>;

export default class Theme {
  styles: Styles;

  constructor(styles: Styles = Themes.Default) {
    _.merge(Themes.Default, styles);
    this.styles = styles;
  }

  stylize(text: string, styleType: StyleTypes = 'primary') {
    const style = this.styles[styleType];
    // Because of _.merge in the constructor, style is never undefined.
    const color = style!.color ?? '';
    const bgColor = style!.bgColor ?? '';

    return hex(color).bgHex(bgColor)(text);
  }
}

const Themes: Record<string, Styles> = {
  Default: {
    primary: { color: '#FFFFFF' },
    secondary: { color: '#00FFFF' },
    success: { color: '#00FF00' },
    danger: { color: '#FF0000' },
    warning: { color: '#FFFF00' },
    info: { color: '#0000FF' },
    fade: { color: '#808080' },
    highlight: { color: '#000000', bgColor: "#FFFFFF" },
  },
}
