import * as styles from './AboutButton.module.css';

/**
 * A button that can be used for opening the About form.
 */
export class AboutButton {
  readonly domNode = document.createElement('p');

  constructor() {
    this.domNode.classList.add(styles['about-button']);

    this.domNode.textContent = '?';
  }
}
