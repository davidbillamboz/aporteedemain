import React from 'react';
import { RichText as PrismicRichText, Elements } from 'prismic-reactjs';
import textPropType from '../proptypes/text';

const propsWithUniqueKey = (props, key) => {
  return Object.assign(props || {}, { key });
};

const hyperLinkSerializer = (element, children, key) => {
  let targetAttr = element.data.target ? { target: element.data.target } : {};

  if (element.data.link_type === 'Media') {
    targetAttr = { target: '_blank' };
  }

  const relAttr = targetAttr.target === '_blank' ? { rel: 'noopener' } : {};

  const props = {
    className: 'underline',
    href: element.data.url,
    ...targetAttr,
    ...relAttr,
    onClick: (e) => e.stopPropagation(),
  };
  return React.createElement('a', propsWithUniqueKey(props, key), children);
};

const htmlSerializer = (type, element, content, children, key) => {
  switch (type) {
    // Add a class to hyperlinks
    case Elements.hyperlink:
      return hyperLinkSerializer(element, children, key);

    // Return null to stick with the default behavior
    default:
      return null;
  }
};

const RichText = ({ text }) => (
  <div className="richtext">
    <PrismicRichText render={text} htmlSerializer={htmlSerializer} />
  </div>
);

RichText.propTypes = {
  text: textPropType.isRequired,
};

export default RichText;
