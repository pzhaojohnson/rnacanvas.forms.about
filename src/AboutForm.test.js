/**
 * @jest-environment jsdom
 */

import { AboutForm } from './AboutForm';

describe('`class AboutForm`', () => {
  it('renders', () => {
    var aboutForm = new AboutForm();

    var n = document.body.childNodes.length;

    expect(() => document.body.append(aboutForm.domNode)).not.toThrow();

    expect(document.body.childNodes.length).toBe(n + 1);
  });
});
