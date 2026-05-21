import * as styles from './AboutForm.module.css';

import { IntroLine } from './IntroLine';

import { TheBestWayToShowSupport } from './TheBestWaytToShowSupport';

import { DragHandler } from '@rnacanvas/forms';

/**
 * A form with information about RNAcanvas and links to more resources.
 */
export class AboutForm {
  readonly domNode = document.createElement('div');

  readonly #introLine = new IntroLine();

  readonly #theBestWayToShowSupport = new TheBestWayToShowSupport();

  #dragHandler;

  constructor() {
    this.domNode.classList.add(styles['about-form']);

    this.domNode.append(Title());

    let contentContainer = ContentContainer();
    this.domNode.append(contentContainer);

    [
      this.#introLine,
      this.#theBestWayToShowSupport,
    ].forEach(ele => contentContainer.append(ele.domNode));

    contentContainer.append(PaperDOI());

    contentContainer.append(ContactEmail());

    contentContainer.append(GitHubDocsRef());

    let closeButton = CloseButton();
    closeButton.addEventListener('click', () => this.close());
    this.domNode.append(closeButton);

    this.#dragHandler = new DragHandler(this.domNode);
  }

  close() {
    this.domNode.remove();
  }

  appendTo(container: Node): void {
    this.reposition();

    container.appendChild(this.domNode);
  }

  /**
   * Undoes any dragging of the About form done by the user.
   */
  reposition(): void {
    this.#dragHandler.untranslate();
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

function PaperDOI() {
  let nucleicAcidsResearch = BoldSpan('Nucleic Acids Research');
  nucleicAcidsResearch.style.fontStyle = 'italic';

  let leadingLine = P('Please cite the following article in ', nucleicAcidsResearch, '.');

  let label = BoldSpan('DOI: ');

  let link = PaperDOILink();

  let linkLine = P(label, link);
  linkLine.style.marginTop = '11px';

  let domNode = document.createElement('div');
  domNode.classList.add(styles['paper-doi']);
  domNode.append(leadingLine, linkLine);
  return domNode;
}

function PaperDOILink() {
  let paperDOILink = new Link();

  paperDOILink.href = 'https://doi.org/10.1093/nar/gkad302';

  paperDOILink.textContent = '10.1093/nar/gkad302';

  paperDOILink.target = '_blank';
  paperDOILink.rel = 'noreferrer noopener';

  paperDOILink.domNode.style.userSelect = 'text';
  paperDOILink.domNode.style.webkitUserSelect = 'text';

  return paperDOILink.domNode;
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

  contactEmailLink.domNode.style.userSelect = 'text';
  contactEmailLink.domNode.style.webkitUserSelect = 'text';

  return contactEmailLink.domNode;
}

function GitHubDocsRef() {
  let gitHubDocs = GitHubDocsLink();

  let domNode = P('Visit the ', gitHubDocs, ' for further information on RNAcanvas.');
  domNode.style.marginTop = '55px';
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
