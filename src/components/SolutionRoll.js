import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

class SolutionRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: solutions } = data.allMarkdownRemark;

    return (
      <div className="solutions-roll is-multiline">
        {solutions &&
          solutions.map(({ node: solution }, index) => (
            <div
              className="solution-container remove-padding"
              key={solution.id}
            >
              <Link className="" to={solution.fields.slug}>
                {solution.frontmatter.featuredimage ? (
                  <div className="solution-image">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: solution.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${solution.title}`
                      }}
                    />
                  </div>
                ) : null}
                <p
                  className={`solution-text title is-uppercase ${
                    index % 3 == 0 ? 'black-overlay' : 'blue-overlay'
                  }`}
                >
                  {solution.frontmatter.title}
                </p>
              </Link>
            </div>
          ))}
      </div>
    );
  }
}

SolutionRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

const SolutionRollQuery = () => (
  <StaticQuery
    query={graphql`
      query SolutionRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "solution" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 680, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <SolutionRoll data={data} count={count} />}
  />
);

SolutionRollQuery.displayName = 'SolutionRollQuery';
export default SolutionRollQuery;