import { FC } from "react"

interface Props {
  fill: string
  width: string
  height: string
}

const LinkIcon: FC<Props> = ({
  fill = "#151515",
  width = "26",
  height = "26",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 3V5H2V16H13V11H15V17C15 17.2652 14.8946 17.5196 14.7071 17.7071C14.5196 17.8946 14.2652 18 14 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V4C0 3.73478 0.105357 3.48043 0.292893 3.29289C0.48043 3.10536 0.734784 3 1 3H7ZM18 0V8H16V3.413L8.207 11.207L6.793 9.793L14.585 2H10V0H18Z"
        fill={fill}
      />
    </svg>
  )
}

export default LinkIcon
