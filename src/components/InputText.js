
import { Field, ErrorMessage } from 'formik'
import { Input, InputGroup, InputRightAddon, InputLeftAddon, FormLabel, InputRightElement, Box, Textarea } from "@chakra-ui/react"
import style from './styles.module.css'

const InputField = ({
    title,
    required,
    type,
    placeholder,
    name,
    id,
    disabled,
    width,
    ref,
    classNameField,
    value,
    onChange,
    BackgroundColor,
    isReadOnly,
    className,
    isTextArea,
    maxLength,
    marginTop,
    leftAddon,
    onBlur
}) => {
    return (
        <Box style={{ marginTop: marginTop, width: width ?? '100%' }}>
            <Field name={name}>
                {({ field, form }) => (
                    <Box style={{ marginTop: title ? 20 : 0 }} className={classNameField}>
                        {title && <FormLabel htmlFor={id} className="form-label">{title} {required ? <span style={{ color: 'red' }}> *</span> : ''}</FormLabel>}
                        <InputGroup>
                          {
                            leftAddon &&
                            <InputLeftAddon children={leftAddon} />
                          }
                          {
                            isTextArea ? 
                            <Textarea
                              {...field}
                              maxLength={maxLength}
                              id={id}
                              backgroundColor={BackgroundColor}
                              readOnly={isReadOnly}
                              disabled={disabled}
                              className={form.errors[name] ? `${className} ${style['is-invalid']}` : `${className}`}
                              placeholder={placeholder} 
                              type={type ?? 'text'}
                              ref={ref}
                              value={value}
                              onChange={onChange}
                              onBlur={onBlur}
                            />
                            :
                            <Input
                              {...field}
                              maxLength={maxLength}
                              id={id}
                              backgroundColor={BackgroundColor}
                              readOnly={isReadOnly}
                              disabled={disabled}
                              className={form.errors[name] ? `${className} ${style['is-invalid']}` : `${className}`}
                              placeholder={placeholder} 
                              type={type ?? 'text'}
                              ref={ref}
                              value={value}
                              onChange={onChange}
                              onBlur={onBlur}
                            />
                          }
                        </InputGroup>
                        <ErrorMessage
                          name={name}
                          component="div"
                          className={`${style['invalid-feedback']}`}
                        />
                    </Box>
                )}
            </Field>
        </Box>
    )
}

export default InputField