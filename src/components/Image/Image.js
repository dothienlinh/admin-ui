import PropTypes from 'prop-types'

function Image({ src, alt = 'Image', className, ...otherPops }) {
  return <img src={src} alt={alt} className={className} {...otherPops} />
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  otherPops: PropTypes.object
}

export default Image
