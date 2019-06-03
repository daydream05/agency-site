import PropTypes from 'prop-types'

export const projectSectionPropTypes = {
  projectList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    client: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
    })),
    coverPhoto: PropTypes.shape({
      fluid: PropTypes.object,
      title: PropTypes.string,
    }),
    fields: PropTypes.shape({
      path: PropTypes.string,
    }),
  }))
}

export const projectCardPropTypes = {
  name: PropTypes.string,
  client: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })),
  media: PropTypes.shape({
    fluid: PropTypes.object,
    title: PropTypes.string,
  }),
  number: PropTypes.number,
}