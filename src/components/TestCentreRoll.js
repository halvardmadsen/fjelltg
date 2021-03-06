import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Img from 'gatsby-image';

class TestCentreRoll extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    // const filteredProjects = this.filterProjects(projects);

    return (
      <div>
        <div className="columns is-multiline is-gapless">
          {posts &&
            posts.map(({ node: post }, index) => (
              <div
                className="is-parent column is-12 test-post-container"
                key={post.id}
              >
                <div
                  className={`columns is-gapless
                  ${index % 2 == 0 ? 'row-reversed' : ''}`}
                >
                  <div className="column is-half">
                    {post.frontmatter.featuredimage ? (
                      <div>
                        <PreviewCompatibleImage
                          imageInfo={{
                            classNames: 'test-centre-post-image',
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.title}`,
                          }}
                        />
                      </div>
                    ) : (
                      <img
                        src={post.frontmatter.featuredimage}
                        alt="Image"
                        className="test-centre-post-image"
                      />
                    )}
                  </div>
                  <div
                    className="column is-half has-background-secondary test-post-text-container"
                    ref={(node) => {
                      if (node) {
                        node.style.setProperty(
                          'padding',
                          '4rem 4rem',
                          'important'
                        );
                      }
                    }}
                  >
                    <div>
                      <p className="has-text-centered title is-uppercase is-size-4">
                        {post.frontmatter.title}
                      </p>
                      <p
                        style={{ maxHeight: '180px', overflow: 'overlay' }}
                        className="is-size-7-touch"
                      >
                        {post.frontmatter.text}
                      </p>
                    </div>
                    <p
                      className="test-centre-post-date"
                      style={{ fontSize: '14px' }}
                    >
                      {post.frontmatter.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

TestCentreRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

const TestCentreRollQuery = () => (
  <StaticQuery
    query={graphql`
      query TestCentreRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "test-centre-post" } } }
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
                date
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 1920, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                text
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <TestCentreRoll data={data} count={count} />}
  />
);

TestCentreRollQuery.displayName = 'TestCentreRollQuery';
export default TestCentreRollQuery;
