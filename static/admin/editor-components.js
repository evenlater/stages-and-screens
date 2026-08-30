/**
 * hl (highlight) is INLINE — it wraps a few words in the middle of a
 * running sentence, e.g.:
 *   This is {{< hl >}}the important part{{< /hl >}} of the sentence.
 *
 * Sveltia's editor-component insert menu works structurally for inline
 * patterns like this one (unlike block patterns, there's no dedicated
 * inline insertion UI yet — see sveltia/sveltia-cms discussion #560),
 * so this is registered, but expect it to behave a bit like a block
 * insert even though the pattern itself matches inline. If it feels
 * clunky in practice, Raw Markdown mode and typing `{{< hl >}}...{{<
 * /hl >}}` by hand works exactly the same as it does today.
 */

CMS.registerEditorComponent({
  id: 'hl',
  label: 'Highlight',
  fields: [
    { name: 'body', label: 'Text', widget: 'string' },
  ],
  pattern: /{{< hl >}}(.*?){{< \/hl >}}/,
  fromBlock: (match) => ({ body: match[1] }),
  toBlock: ({ body }) => `{{< hl >}}${body}{{< /hl >}}`,
  toPreview: ({ body }) => `<span style="background:#fff59d;">${body}</span>`,
});
