import * as styles from './Text.module.css';

export class IntroLine {
  readonly domNode = document.createElement('p');

  readonly #RNAcanvas = document.createElement('span');

  constructor() {
    this.domNode.classList.add(styles['text']);

    this.#RNAcanvas.textContent = 'RNAcanvas';

    this.#RNAcanvas.style.fontWeight = '700';

    let RNAcanvas = this.#RNAcanvas;

    this.domNode.append(RNAcanvas, ' is 100% free-to-use and open source.');
  }
}
