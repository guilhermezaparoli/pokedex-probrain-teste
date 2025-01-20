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
        d="M7.168 14.152A6.111 6.111 0 1 0 7.43 2.037C9.105 3.304 10.211 5.501 10.211 8c0 2.626-1.223 4.92-3.043 6.152ZM7.99 16a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
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