import React from 'react';
import PropTypes from 'prop-types';
import { ProductTemplate } from '../../templates/product';

const ProductPreview = ({ entry, widgetFor }) => (
  <ProductTemplate
    content={widgetFor('body')}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
);

ProductPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default ProductPreview;
