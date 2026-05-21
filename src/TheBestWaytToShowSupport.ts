import * as styles from './TheBestWayToShowSupport.module.css';

import * as textStyles from './Text.module.css';

export class TheBestWayToShowSupport {
  readonly domNode = document.createElement('div');

  readonly #intro = document.createElement('p');

  readonly #reasons = Reasons();

  constructor() {
    this.domNode.classList.add(styles['the-best-way-to-show-support']);

    this.#intro.classList.add(textStyles['text']);
    this.#intro.textContent = 'Citing RNAcanvas in publications is the best way to:';

    this.domNode.append(this.#intro, this.#reasons);
  }
}

function Reasons() {
  let one = DottedLine('Show others that you use RNAcanvas');

  let two = DottedLine('Help garner support for RNAcanvas development');

  let reasons = document.createElement('div');

  reasons.classList.add(styles['reasons']);
  reasons.append(one, two);

  return reasons;
}

function DottedLine(textContent: string) {
  let dot = Dot();

  let text = document.createElement('p');

  text.classList.add(textStyles['text']);
  text.textContent = textContent;

  let dottedLine = document.createElement('div');

  dottedLine.classList.add(styles['dotted-line']);
  dottedLine.append(dot, text);

  return dottedLine;
}

function Dot() {
  let dot = document.createElement('div');

  dot.classList.add(styles['dot']);

  return dot;
}
