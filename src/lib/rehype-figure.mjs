import { visit } from 'unist-util-visit';

/**
 * Rehype plugin to wrap standalone images in <figure> and add <figcaption>
 * based on the image alt text.
 */
export function rehypeFigure() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === 'img' && parent && parent.tagName === 'p') {
        // Only transform if img is the only child of the paragraph
        // Or if other children are just whitespace text nodes
        const isOnlyChild = parent.children.every(
          child => child === node || (child.type === 'text' && child.value.trim() === '')
        );

        if (isOnlyChild) {
          parent.tagName = 'figure';
          parent.properties = parent.properties || {};
          parent.properties.className = ['prose-figure'];
          
          if (node.properties.alt && node.properties.alt.trim() !== '') {
            parent.children.push({
              type: 'element',
              tagName: 'figcaption',
              properties: { className: ['prose-figcaption'] },
              children: [{ type: 'text', value: node.properties.alt }]
            });
          }
        }
      }
    });
  };
}
