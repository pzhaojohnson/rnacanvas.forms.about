import * as styles from './Text.module.css';

export class TheBestWayToShowSupport {
  readonly domNode = document.createElement('p');

  constructor() {
    this.domNode.classList.add(styles['text']);

    this.domNode.textContent = 'Citing RNAcanvas in publications is the best way to show support!';

    this.domNode.style.marginTop = '33px';
  }
}
