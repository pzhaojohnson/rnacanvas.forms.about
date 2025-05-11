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

    contentContainer.append(CustomGPTPlug());

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

class Link {
  readonly domNode = document.createElement('span');

  /**
   * The wrapped anchor element.
   *
   * The purpose of wrapping the anchor element
   * is to prevent the anchor element from stealing focus
   * from the rest of the app,
   * which would interfere with key bindings.
   */
  #a = document.createElement('a');

  constructor() {
    this.domNode.classList.add(styles['link']);

    // forward clicks to the wrapped anchor element
    this.domNode.addEventListener('click', () => this.#a.click());
  }

  get href() { return this.#a.href; }
  set href(href) { this.#a.href = href; }

  get textContent() { return this.domNode.textContent; }
  set textContent(textContent) { this.domNode.textContent = textContent; }

  get target() { return this.#a.target; }
  set target(target) { this.#a.target = target; }

  get rel() { return this.#a.rel; }
  set rel(rel) { this.#a.rel = rel; }
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
  let contactEmailLink = new Link();

  contactEmailLink.href = 'mailto:contact@rnacanvas.app';

  contactEmailLink.textContent = 'contact@rnacanvas.app';

  return contactEmailLink.domNode;
}

function CustomGPTPlug() {
  let RNAcanvasCustomGPT = CustomGPTLink();

  let domNode = P('Or ask the ', RNAcanvasCustomGPT, '.');

  domNode.style.marginTop = '40px';

  return domNode;
}

function CustomGPTLink() {
  let customGPTLink = new Link();

  customGPTLink.href = 'https://chatgpt.com/g/g-jh8gXtvrC-rnacanvas-ai-assistant';

  customGPTLink.textContent = 'RNAcanvas Custom GPT';

  customGPTLink.target = '_blank';
  customGPTLink.rel = 'noreferrer noopener';

  return customGPTLink.domNode;
}

function PaperDOI() {
  let nucleicAcidsResearch = BoldSpan('Nucleic Acids Research');
  nucleicAcidsResearch.style.fontStyle = 'italic';

  let leadingLine = P('Article in ', nucleicAcidsResearch, '.');

  let label = BoldSpan('DOI: ');

  let link = PaperDOILink();

  let linkLine = P(label, link);
  linkLine.style.marginTop = '8px';

  let trailingLine1 = P('Citations are greatly appreciated!');
  trailingLine1.style.marginTop = '28px';

  let trailingLine2 = P('(If you use RNAcanvas Code to draw structures in publications.)');
  trailingLine2.style.marginTop = '8px';

  let domNode = document.createElement('div');
  domNode.classList.add(styles['paper-doi']);
  domNode.append(leadingLine, linkLine, trailingLine1, trailingLine2);
  return domNode;
}

function PaperDOILink() {
  let paperDOILink = new Link();

  paperDOILink.href = 'https://doi.org/10.1093/nar/gkad302';

  paperDOILink.textContent = '10.1093/nar/gkad302';

  paperDOILink.target = '_blank';
  paperDOILink.rel = 'noreferrer noopener';

  return paperDOILink.domNode;
}

function GitHubDocsRef() {
  let gitHubDocs = GitHubDocsLink();

  let domNode = P('Visit the ', gitHubDocs, ' to see the technical documentation for RNAcanvas Code.');
  domNode.style.marginTop = '53px';
  return domNode;
}

function GitHubDocsLink() {
  let gitHubDocsLink = new Link();

  gitHubDocsLink.href = 'https://pzhaojohnson.github.io/rnacanvas.code/';

  gitHubDocsLink.textContent = 'GitHub docs';

  gitHubDocsLink.target = '_blank';
  gitHubDocsLink.rel = 'noreferrer noopener';

  return gitHubDocsLink.domNode;
}

function CloseButton() {
  let domNode = document.createElement('p');

  domNode.classList.add(styles['close-button']);

  domNode.textContent = 'Close';

  return domNode;
}
