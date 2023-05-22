import classNames from 'classnames/dedupe'

import Typography from "../../atoms/Typography/Typography"
import SvgImage from "../../atoms/SvgImage/SvgImage"
import Paper from "../../atoms/Paper/Paper"

import './TextWithIcon.scss'

type Padding = {
  desktop?: number
  mobile?: number
  all?: number
}

type TextWithIconProps = {
  svgType: string,
  padding?: Padding
  leftSide?: boolean
  rightSide?: boolean
  className?: string
  color?: string
  children: string,
  iconSize?: number
  textSize?: number
  textWeight?: number
}

const TextWithIcon = ({ svgType, padding, leftSide, rightSide, className, color, iconSize, textSize, textWeight, children }: TextWithIconProps) => {
  const classes = classNames(className, 'TextWithIcon', {
    [`TextWithIcon_${color}`]: color
  })

  return (
    <div className={classes}>
      {leftSide && (
        <Paper display="flex" right={padding}>
          <SvgImage size={iconSize} type={svgType} />
        </Paper>
      )
      }
      <Typography weight={textWeight} size={textSize}>{children}</Typography>
      {rightSide && (
        <Paper display="flex" left={padding}>
          <SvgImage size={iconSize} type={svgType} />
        </Paper>
      )
      }
    </div>
  )

}

export default TextWithIcon
