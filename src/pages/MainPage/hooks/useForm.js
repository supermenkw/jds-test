import { useReducer } from "react";

const SET_NAME = 'SET_NAME'
const SET_NIK = 'SET_NIK'
const SET_KK = 'SET_KK'
const SET_KTP = 'SET_KTP'
const SET_AGE = 'SET_AGE'
const SET_GENDER = 'SET_GENDER'
const SET_PROVINCE = 'SET_PROVINCE'
const SET_REGENCY = 'SET_REGENCY'
const SET_DISTRICT = 'SET_DISTRICT'
const SET_VILLAGE = 'SET_VILLAGE'
const SET_NO_KK = 'SET_NO_KK'
const SET_ADDRESS = 'SET_ADDRESS'
const SET_RT = 'SET_RT'
const SET_RW = 'SET_RW'
const SET_INCOME_BEFORE = 'SET_INCOME_BEFORE'
const SET_INCOME_AFTER = 'SET_INCOME_AFTER'
const SET_REASON = 'SET_REASON'
const SET_OTHER_REASON = 'SET_OTHER_REASON'

const intialValues = {
  name: '',
  nik: null,
  no_kk: null,
  kk: null,
  ktp: null,
  age: null,
  gender: null,
  province: null,
  regency: null,
  district: null,
  village: null,
  address: '',
  income_before: null,
  income_after: null,
  reason: null,
  other_reason: ''
}

const reducer = (state, action) => {
  switch(action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload
      }
    case SET_NIK:
      return {
        ...state,
        nik: action.payload
      }
    case SET_NO_KK:
      return {
        ...state,
        no_kk: action.payload
      }
    case SET_KK:
      return {
        ...state,
        kk: action.payload
      }
    case SET_KTP:
      return {
        ...state,
        ktp: action.payload
      }
    case SET_AGE:
      return {
        ...state,
        age: action.payload
      }
    case SET_GENDER:
      return {
        ...state,
        gender: action.payload
      }
    case SET_PROVINCE:
      return {
        ...state,
        province: action.payload
      }
    case SET_REGENCY:
      return {
        ...state,
        regency: action.payload
      }
    case SET_DISTRICT:
      return {
        ...state,
        district: action.payload
      }
    case SET_VILLAGE:
      return {
        ...state,
        village: action.payload
      }
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload
      }
    case SET_RT:
      return {
        ...state,
        rt: action.payload
      }
    case SET_RW:
      return {
        ...state,
        rw: action.payload
      }
    case SET_INCOME_BEFORE:
      return {
        ...state,
        income_before: action.payload
      }
    case SET_INCOME_AFTER:
      return {
        ...state,
        income_after: action.payload
      }
    case SET_REASON:
      return {
        ...state,
        reason: action.payload
      }
    case SET_OTHER_REASON:
      return {
        ...state,
        other_reason: action.payload
      }
    default:
      throw new Error()
  }
}

const useForm = () => {
  const [dataState, dispatch] = useReducer(reducer, intialValues)

  const setName = (data) => {
    dispatch({ type: SET_NAME, payload: data })
  }

  const setNIK = (data) => {
    dispatch({ type: SET_NIK, payload: data })
  }

  const setNoKK = (data) => {
    dispatch({ type: SET_NO_KK, payload: data })
  }

  const setKK = (data) => {
    dispatch({ type: SET_KK, payload: data })
  }

  const setKTP = (data) => {
    dispatch({ type: SET_KTP, payload: data })
  }

  const setAGE = (data) => {
    dispatch({ type: SET_AGE, payload: data })
  }

  const setGender = (data) => {
    dispatch({ type: SET_GENDER, payload: data })
  }

  const setProvince = (data) => {
    dispatch({ type: SET_PROVINCE, payload: data })
  }

  const setRegency = (data) => {
    dispatch({ type: SET_REGENCY, payload: data })
  }

  const setDistrict = (data) => {
    dispatch({ type: SET_DISTRICT, payload: data })
  }

  const setVillage = (data) => {
    dispatch({ type: SET_VILLAGE, payload: data })
  }

  const setAddress = (data) => {
    dispatch({ type: SET_ADDRESS, payload: data })
  }

  const setRT = (data) => {
    dispatch({ type: SET_RT, payload: data })
  }

  const setRW = (data) => {
    dispatch({ type: SET_RW, payload: data })
  }

  const setIncomeBefore = (data) => {
    dispatch({ type: SET_INCOME_BEFORE, payload: data })
  }

  const setIncomeAfter = (data) => {
    dispatch({ type: SET_INCOME_AFTER, payload: data })
  }

  const setReason = (data) => {
    dispatch({ type: SET_REASON, payload: data })
  }

  const setOtherReason = (data) => {
    dispatch({ type: SET_OTHER_REASON, payload: data })
  }

  return {
    dataState,
    setName,
    setNIK,
    setKK,
    setKTP,
    setGender,
    setAGE,
    setProvince,
    setRegency,
    setDistrict,
    setVillage,
    setNoKK,
    setAddress,
    setRT,
    setRW,
    setIncomeBefore,
    setIncomeAfter,
    setReason,
    setOtherReason
  }
}

export default useForm