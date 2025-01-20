const SvgComponent = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
  >
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M15.031 8A7.031 7.031 0 1 1 .97 8a7.031 7.031 0 0 1 14.062 0Zm-3.013 0a4.018 4.018 0 1 1-8.036 0 4.018 4.018 0 0 1 8.036 0Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
