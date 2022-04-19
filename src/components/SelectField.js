import React from 'react'
import { Field, ErrorMessage } from 'formik'
import { InputGroup, InputRightAddon, InputLeftAddon, FormLabel, Box } from "@chakra-ui/react"
import Select from 'react-select'
import style from './styles.module.css'

const SelectField = ({
    t,
    title,
    required,
    type,
    name,
    id,
    leftAddon,
    rightAddon,
    leftIcon,
    rightIcon,
    toggle,
    disabled,
    width,
    index,
    hidden,
    bg,
    SelectedColor,
    ListDisabledOption,
    children,
    variant,
    className,
    parentMarginTop,
    leftAddOnBorderRadius,
    selectBorderRadius,
    isError,
    value,
    position,
    errorMessageAllowed = true,
    ...props
}) => {
  const customStyles = {
    option: (base, state) => ({
      ...base,
      color: state.isDisabled ? '#98a7b7' : '#000',
      textAlign: 'left',
      fontSize: '1rem',
      backgroundColor: state.isDisabled
      ? undefined
      : state.isSelected
      ? '#1FB4D2'
      : state.isFocused
      ? 'rgba(70, 162, 225, 0.16)'
      : '#fff',
    ':active': {
      ...base[':active'],
      backgroundColor: ! state.isDisabled
        ?  state.isDisabled
          ? '#1FB4D2'
          : 'rgba(70, 162, 225, 0.16)'
        : undefined,
    },
    }),
    control: (base, state) => ({
      ...base,
      background: disabled ? '#ECECEC' : '#fff',
      borderColor: '#CBD5E0',
      borderRadius: selectBorderRadius ? selectBorderRadius : '0.375rem 0.375rem 0.375rem 0.375rem',
      width: width ?? '100%',
      textAlign: 'left',
      fontSize: '1rem',
      position: position && 'absolute',
    }),
    placeholder: (base, state) => ({
      ...base,
      color: state.isSelected ? '#000' : '#98a7b7',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      textAlign: 'left',
      fontSize: '1rem'
    }),
    singleValue: (base, state) => ({
      ...base,
      color: '#000',
      textAlign: 'left',
      fontSize: '1rem',
    })
  };

  return (
    <Box style={{ width: width ?? '100%' }}>
          <Field name={name}>
          {({ field, form }) => (
                <Box style={{ marginTop: title ? 20 : 0 }}>
                  {title && <FormLabel htmlFor={id} className="form-label">{title} {required ? <span style={{ color: 'red' }}> *</span> : ''}</FormLabel>}
                  <Select
                    {...props}
                    filterOption={(option, searchText) => {
                      if (
                        option.data.label.toLowerCase().includes(searchText.toLowerCase())
                      ) {
                        return true;
                      } else {
                        return false;
                      }
                    }}
                    id={id}
                    name={name}
                    className={form.errors[name] ? `${className} ${style['is-invalid']}` : `${className}`}
                    styles={customStyles} 
                    isDisabled={disabled}
                    value={value}
                  />
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

export default SelectField