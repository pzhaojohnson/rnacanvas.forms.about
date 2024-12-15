import * as styles from './AboutForm.module.css';

import { DragTranslater } from '@rnacanvas/forms';

/**
 * A form with information about RNAcanvas and links to more resources.
 */
export class AboutForm {
  readonly domNode = document.createElement('div');

  #dragTranslater;

  constructor() {
    this.domNode.classList.add(styles['about-form']);

    this.domNode.append(Title());

    let contentContainer = ContentContainer();
    this.domNode.append(contentContainer);

    contentContainer.append(SilvecPlug());

    contentContainer.append(ContactEmail());

    contentContainer.append(PaperDOI());

    contentContainer.append(GitHubDocsRef());

    let closeButton = CloseButton();
    closeButton.addEventListener('click', () => this.close());
    this.domNode.append(closeButton);

    this.#dragTranslater = new DragTranslater(this.domNode);
  }

  close() {
    this.domNode.remove();
  }

  appendTo(container: Node): void {
    this.#dragTranslater.untranslate();

    container.appendChild(this.domNode);
  }
}

function Title() {
  let domNode = document.createElement('p');

  domNode.classList.add(styles['title']);

  domNode.textContent = 'About';

  return domNode;
}

/**
 * For the content of the About form.
 */
function ContentContainer() {
  let domNode = document.createElement('div');

  domNode.classList.add(styles['content-container']);

  return domNode;
}

function P(...content: (string | HTMLSpanElement)[]) {
  let domNode = document.createElement('p');

  domNode.classList.add(styles['text']);

  domNode.append(...content);

  return domNode;
}

function BoldSpan(textContent: string) {
  let domNode = document.createElement('span');

  domNode.textContent = textContent;

  domNode.style.fontWeight = '700';

  return domNode;
}

function SilvecPlug() {
  let RNAcanvasCode = BoldSpan('RNAcanvas Code');

  let SilvecBiologics = BoldSpan('Silvec Biologics');

  return P(RNAcanvasCode, ' is developed by ', SilvecBiologics, ' - an RNA company.');
}

function ContactEmail() {
  let leadingLine = P('Feel free to send any questions to...');

  let label = BoldSpan('Email: ');

  let link = ContactEmailLink();

  let linkLine = P(label, link);

  let domNode = document.createElement('div');
  domNode.classList.add(styles['contact-email']);
  domNode.append(leadingLine, linkLine);
  return domNode;
}

function ContactEmailLink() {
  let domNode = document.createElement('a');

  domNode.classList.add(styles['link']);

  domNode.href = 'mailto:contact@rnacanvas.app';

  domNode.textContent = 'contact@rnacanvas.app';

  return domNode;
}

function PaperDOI() {
  let nucleicAcidsResearch = BoldSpan('Nucleic Acids Research');
  nucleicAcidsResearch.style.fontStyle = 'italic';

  let leadingLine = P('Article in ', nucleicAcidsResearch);

  let label = BoldSpan('DOI: ');

  let link = PaperDOILink();

  let linkLine = P(label, link, '.');
  linkLine.style.marginTop = '8px';

  let trailingLine1 = P('Citations are greatly appreciated!');
  trailingLine1.style.marginTop = '18px';

  let trailingLine2 = P('(If you use RNAcanvas Code to draw structures in publications.)');
  trailingLine2.style.marginTop = '8px';

  let domNode = document.createElement('div');
  domNode.classList.add(styles['paper-doi']);
  domNode.append(leadingLine, linkLine, trailingLine1, trailingLine2);
  return domNode;
}

function PaperDOILink() {
  let domNode = document.createElement('a');

  domNode.classList.add(styles['link']);

  domNode.href = 'https://doi.org/10.1093/nar/gkad302';

  domNode.textContent = '10.1093/nar/gkad302';

  domNode.target = '_blank';
  domNode.rel = 'noreferrer noopener';

  return domNode;
}

function GitHubDocsRef() {
  let gitHubDocs = GitHubDocsLink();

  let domNode = P('See the ', gitHubDocs, ' for technical documentation regarding RNAcanvas Code.');
  domNode.style.marginTop = '40px';
  return domNode;
}

function GitHubDocsLink() {
  let domNode = document.createElement('a');

  domNode.classList.add(styles['link']);

  domNode.href = 'https://pzhaojohnson.github.io/rnacanvas.code/';

  domNode.textContent = 'GitHub docs';

  domNode.target = '_blank';
  domNode.rel = 'noreferrer noopener';

  return domNode;
}

function CloseButton() {
  let domNode = document.createElement('button');

  domNode.classList.add(styles['close-button']);

  domNode.textContent = 'Close';

  return domNode;
}
