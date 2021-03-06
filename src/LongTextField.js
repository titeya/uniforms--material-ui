import connectField     from 'uniforms/connectField';
import filterDOMProps   from 'uniforms/filterDOMProps';
import React            from 'react';
import TextField        from '@material-ui/core/TextField';

import wrapField from './wrapField';

const LongText = props => wrapField(props, (
    <TextField
        autoFocus={props.autoFocus}
        disabled={props.disabled}
        error={!!props.error}
        FormHelperTextProps={props.FormHelperTextProps}
        fullWidth={props.fullWidth}
        helperText={props.error && props.showInlineError ? props.errorMessage : props.helperText}
        InputProps={props.InputProps}
        inputProps={{...props.inputProps, id: props.id}}
        inputRef={props.inputRef}
        label={props.label}
        margin={props.margin}
        multiline
        onChange={event => props.onChange(event.target.value)}
        placeholder={props.placeholder}
        value={props.value}
        {...filterDOMProps(props)}
    />
));

LongText.defaultProps = {
    fullWidth: true,
    margin: 'normal'
};

export default connectField(LongText);
