import { FC } from "react"

interface Props {
  fill: string
  width: string
  height: string
}

const BurgerIcon: FC<Props> = ({
  fill = "#F2F2F2",
  width = "30",
  height = "22",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={width} height="2" fill={fill} />
      <rect y="10" width={width} height="2" fill={fill} />
      <rect y="20" width={width} height="2" fill={fill} />
    </svg>
  )
}

export default BurgerIcon
