import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import PageJumbotron from '../components/PageJumbotron';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import showdown from 'showdown';
const converter = new showdown.Converter();

export const ProductTemplate = ({
  contentComponent,
  title,
  subtitle,
  description1,
  description2,
  headerimage,
  smallimage,
  fullwidthimage,
  infobox1,
  infobox2,
  productcategory,
  productbrochures,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section>
      {helmet || ''}
      <div>
        {headerimage && (
          <PageJumbotron
            title={title}
            description={subtitle}
            image={headerimage}
          />
        )}
        <div className="product-content-section">
          <div className="product-info-section">
            <div className="product-info-section-text">
              <div
                className={'markdown-container description'}
                dangerouslySetInnerHTML={{
                  __html: converter.makeHtml(description1),
                }}
              />
              <div className="infobox-container">
                <div
                  className={'markdown-container infobox lightblue'}
                  dangerouslySetInnerHTML={{
                    __html: converter.makeHtml(infobox1),
                  }}
                />
                {productbrochures &&
                  productbrochures.map((brochure, index) => (
                    <div key={index} className="brochure-container">
                      <div className="brochure-container-info">
                        <h4>{title}</h4>
                        <h3>{brochure.title}</h3>
                      </div>
                      <div className="brochure-container-icon">
                        <a href={brochure.file.publicURL} download>
                          <img
                            src={`https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg`}
                            width="110px"
                            style={{ height: '90px' }}
                          />
                        </a>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="smallimage-container">
              {smallimage ? (
                <PreviewCompatibleImage
                  imageInfo={{
                    image: smallimage,
                    alt: `smallimage for product ${title}`,
                    style: { height: '269px', width: '410px' },
                  }}
                />
              ) : null}
            </div>
          </div>
          <div className="fullwidthimage-container">
            {fullwidthimage ? (
              <PreviewCompatibleImage
                imageInfo={{
                  image: fullwidthimage,
                  alt: `fullwidthimage for product ${title}`,
                  style: { height: '100vh', maxHeight: '650px' },
                }}
              />
            ) : null}
          </div>
          <div className="product-info-section">
            <div className="product-info-section-text">
              <div
                className={'markdown-container description'}
                dangerouslySetInnerHTML={{
                  __html: converter.makeHtml(description2),
                }}
              />
              <div className="infobox-container">
                <div
                  className={'markdown-container infobox darkblue'}
                  dangerouslySetInnerHTML={{
                    __html: converter.makeHtml(infobox2),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ProductTemplate.propTypes = {
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  helmet: PropTypes.object,
  headerimage: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
  description1: PropTypes.string,
  infobox1: PropTypes.string,
  smallimage: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
  fullwidthimage: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
  description2: PropTypes.string,
  infobox2: PropTypes.string,
  productcategory: PropTypes.string,
  productbrochures: PropTypes.array,
};

const Product = ({ data }) => {
  const { markdownRemark: product } = data;

  return (
    <Layout>
      <ProductTemplate
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="Product | %s">
            <title>{`${product.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${product.frontmatter.subtitle}`}
            />
          </Helmet>
        }
        title={product.frontmatter.title}
        subtitle={product.frontmatter.subtitle}
        headerimage={product.frontmatter.headerimage}
        description1={product.frontmatter.description1}
        infobox1={product.frontmatter.infobox1}
        smallimage={product.frontmatter.smallimage}
        fullwidthimage={product.frontmatter.fullwidthimage}
        description2={product.frontmatter.description2}
        infobox2={product.frontmatter.infobox2}
        productcategory={product.frontmatter.productcategory}
        productbrochures={product.frontmatter.productbrochures}
      />
    </Layout>
  );
};

Product.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default Product;

export const pageQuery = graphql`
  query ProductByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date
        title
        subtitle
        headerimage {
          childImageSharp {
            fluid(maxWidth: 1440, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description1
        infobox1
        smallimage {
          childImageSharp {
            fluid(maxWidth: 1440, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        fullwidthimage {
          childImageSharp {
            fluid(maxWidth: 1440, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description2
        infobox2
        productcategory
        productbrochures {
          title
          file {
            publicURL
          }
        }
      }
    }
  }
`;
