import React from 'react'
import './Petals.css'

/**
 * Class representing the flower body.
 *
 * @param {object} props - Standard React props.
 *
 * @return {string} - HTML markup for the component.
 */
class Petals extends React.Component {
  static propTyeps = {
    updating: React.PropTypes.bool
  }

  /**
   * Lifecycle method that is executed whenever the component receives new
   * props. The component only re-renders when the flower's busy state changes.
   *
   * @param {object} nextProps - Standard React props.
   */
  shouldComponentUpdate({ updating }) {
    return this.props.updating !== updating
  }

  /**
   * Renders the component.
   *
   * @return {string} - HTML markup for the component.
   */
  render() {
    return (
      <g transform="translate(52 52)" className={`flower-body ${this.props.updating ? 'is-updating' : ''}`}>
        <g fill="#32465d">
          <path d="M89.602 64.1s16.345-14.093 16.345-31.477c0-17.385-16.345-31.478-16.345-31.478S73.258 15.238 73.258 32.623c0 17.384 16.344 31.478 16.344 31.478z" />
          <path d="M99.305 65.138s20.493-6.765 27.146-22.827c6.654-16.06-3.053-35.335-3.053-35.335S102.903 13.74 96.25 29.802c-6.652 16.06 3.055 35.336 3.055 35.336z" />
          <path d="M108.55 70.906s21.524 1.592 33.817-10.7c12.293-12.294 10.7-33.816 10.7-33.816s-21.522-1.592-33.814 10.7C106.96 49.385 108.55 70.907 108.55 70.907z" />
          <path d="M115.717 79.9s19.275 9.707 35.336 3.054c16.062-6.653 22.828-27.146 22.828-27.146s-19.274-9.707-35.336-3.054c-16.06 6.652-22.827 27.146-22.827 27.146z" />
          <path d="M117.9 90.747s14.093 16.344 31.477 16.344c17.385 0 31.478-16.343 31.478-16.343s-14.093-16.344-31.478-16.344c-17.384 0-31.478 16.344-31.478 16.344z" />
          <path d="M116.862 100.45s6.765 20.493 22.827 27.145c16.06 6.653 35.335-3.054 35.335-3.054s-6.765-20.492-22.827-27.145c-16.06-6.653-35.336 3.054-35.336 3.054z" />
          <path d="M155.61 154.213s1.592-21.523-10.7-33.816c-12.294-12.293-33.816-10.7-33.816-10.7s-1.592 21.522 10.7 33.815c12.294 12.293 33.816 10.7 33.816 10.7z" />
          <path d="M125.686 175.025s9.707-19.275 3.054-35.336c-6.653-16.063-27.146-22.828-27.146-22.828s-9.707 19.275-3.054 35.336c6.653 16.062 27.146 22.827 27.146 22.827z" />
          <path d="M89.602 182s16.345-14.093 16.345-31.478-16.345-31.478-16.345-31.478-16.344 14.093-16.344 31.478S89.602 182 89.602 182z" />
          <path d="M54.663 175.025s20.493-6.765 27.146-22.827c6.652-16.06-3.055-35.336-3.055-35.336s-20.493 6.765-27.146 22.827c-6.654 16.06 3.053 35.335 3.053 35.335z" />
          <path d="M25.293 154.514s21.523 1.592 33.816-10.7c12.29-12.294 10.7-33.817 10.7-33.817s-21.523-1.59-33.816 10.702c-12.293 12.29-10.7 33.814-10.7 33.814z" />
          <path d="M6.975 124.54s19.275 9.708 35.336 3.055c16.063-6.652 22.828-27.146 22.828-27.146s-19.275-9.708-35.336-3.055C13.74 104.048 6.975 124.54 6.975 124.54z" />
          <path d="M0 90.747s14.093 16.344 31.478 16.344 31.478-16.343 31.478-16.343-14.093-16.344-31.478-16.344S0 90.747 0 90.747z" />
          <path d="M6.975 55.808S13.74 76.3 29.802 82.954c16.06 6.653 35.336-3.054 35.336-3.054S58.373 59.406 42.31 52.754C26.25 46.1 6.976 55.808 6.976 55.808z" />
          <path d="M71.798 72.05s1.59-21.522-10.7-33.815c-12.294-12.293-33.817-10.7-33.817-10.7S25.69 49.056 37.983 61.35c12.293 12.293 33.816 10.7 33.816 10.7z" />
          <path d="M79.9 66.283s-20.494-6.766-27.146-22.827C46.1 27.394 55.808 8.12 55.808 8.12S76.3 14.884 82.954 30.946c6.653 16.06-3.054 35.336-3.054 35.336z" />
        </g>
        <ellipse fill="#ECEAD5"
                 cx="89.855"
                 cy="91"
                 rx="40.503"
                 ry="40.503" />
      </g>
    )
  }
}

export default Petals
