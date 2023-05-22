import classNames from 'classnames/dedupe'

import './Input.scss'

type InputProps = {
  onChange?: () => void
  id: string
  className: string
  warning: boolean
}

const Input = ({onChange, className, warning, id}: InputProps) => {
  const classes = classNames(className ,'Input', {
    "Input-Warning": warning
  })
  return (
    <input
      id={id}
      className={classes}
      placeholder="Введите интересующий вас адрес"
      type="text"
      onChange={onChange}
    />
  );
};

export default Input;
