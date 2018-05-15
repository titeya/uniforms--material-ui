import Checkbox from '@material-ui/core/Checkbox'
import connectField from 'uniforms/connectField'
import filterDOMProps from 'uniforms/filterDOMProps'
import PropTypes from 'prop-types'
import React from 'react'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'

import wrapField from './wrapField'

const Bool = props =>
  wrapField(
    props,
    <FormControl
      disabled={props.disabled}
      error={!!props.error}
      fullWidth={props.fullWidth}
      margin={props.margin}
      required={props.required}
    >
      <FormControlLabel
        checked={!!props.value}
        control={
          props.appearance === 'toggle' ? (
            <Switch
              disableRipple={props.disableRipple}
              inputProps={{ ...props.inputProps, id: props.id }}
              inputRef={props.inputRef}
              name={props.name}
              {...filterDOMProps(props)}
            />
          ) : (
            <Checkbox
              disableRipple={props.disableRipple}
              indeterminate={props.indeterminate}
              indeterminateIcon={props.indeterminateIcon}
              inputProps={{ ...props.inputProps, id: props.id }}
              inputRef={props.inputRef}
              name={props.name}
              {...filterDOMProps(props)}
            />
          )
        }
        onChange={(event, value) => props.disabled || props.onChange(value)}
        disabled={props.disabled}
        label={props.label}
      />
      {props.error &&
        props.showInlineError && (
          <FormHelperText>{props.errorMessage}</FormHelperText>
        )}
    </FormControl>
  )

Bool.defaultProps = {
  appearance: 'checkbox',
  fullWidth: true,
  margin: 'normal'
}

Bool.propTypes = {
  appearance: PropTypes.oneOf(['toggle', 'checkbox'])
}

export default connectField(Bool)
