import PropTypes from 'prop-types'

function TitleSection({ children, className }) {
  return (
    <h2
      className={`text-center text-[35px] leading-[1.45] font-extrabold px-3 ${className}`}
    >
      {children}
    </h2>
  )
}

TitleSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default TitleSection
