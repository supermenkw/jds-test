import React, { useEffect, useRef, useState } from 'react'
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  GridItem,
  InputGroup,
  Button,
  Text,
  Heading,
  Checkbox,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Table,
  Tr,
  Td,
  Tbody
} from '@chakra-ui/react'
import { Formik } from 'formik'
import { InputField, SelectField } from '../../components'
import { GetProvinces, GetRegencies, GetDistricts, GetVillages } from '../../services/APIs'
import useForm from './hooks/useForm'
import * as Yup from 'yup'

const MainPage = () => {

  const REQUIRED_MESSAGE = 'Required'

  // Ref
  const formikRef = useRef()
  const finalRef = useRef()

  //Custom Hooks
  const {
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
  } = useForm()

  // Hooks
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()

  // State
  const [dropdownProvince, setDropdownProvince] = useState([])
  const [dropdownRegencies, setDropdownRegencies] = useState([])
  const [dropdownDistrict, setDropdownDistrict] = useState([])
  const [dropdownVillages, setDropdownVillages] = useState([])

  const [isUserAgree, setIsUserAgree] = useState(false)

  // Function
  const handleSubmit = async (values) => {
    const formData = new FormData()

    for(const key in values) {
      formData.append(key, values[key]);
    }

    const arrayStatus = [200, 500, 503]

    const responseStatus = arrayStatus[Math.floor(Math.random() * arrayStatus.length)];

    setTimeout(() => {
      if(responseStatus === 200) {
        toast({
          title: 'Success',
          description: "Data Submitted",
          position: 'top',
          status: 'success',
          duration: 3000,
        })

        setTimeout(() => {
          window.location.reload()
        }, 4000);
      }
      else if(responseStatus === 503) {
        toast({
          title: 'Error',
          description: "Service Unavailable",
          position: 'top',
          status: 'error',
          duration: 3000,
        })
      } else {
        toast({
          title: 'Error',
          description: "Internal Server Error",
          position: 'top',
          status: 'error',
          duration: 3000,
        })
      }
    }, 1500);
  }

  //Intial Formik Values
  const initialValues = {
    name: dataState.name,
    nik: dataState.nik,
    no_kk: dataState.no_kk,
    upload_kk: dataState.kk,
    upload_ktp: dataState.ktp,
    age: dataState.age,
    gender: dataState.gender,
    province: dataState.province,
    regency: dataState.regency,
    district: dataState.district,
    village: dataState.village,
    address: dataState.address,
    rt: dataState.rt,
    rw: dataState.rw,
    income_before: dataState.income_before,
    income_after: dataState.income_after,
    reason: dataState.reason,
    other_reason: dataState.other_reason
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(REQUIRED_MESSAGE).nullable(),
    nik: Yup.number().required(REQUIRED_MESSAGE).nullable(),
    no_kk: Yup.number().required(REQUIRED_MESSAGE).nullable(),
    upload_ktp: Yup.mixed().required(REQUIRED_MESSAGE).nullable(),
    upload_kk: Yup.mixed().required(REQUIRED_MESSAGE).nullable(),
    age: Yup.number().required(REQUIRED_MESSAGE).nullable(),
    gender: Yup.object().required(REQUIRED_MESSAGE).nullable(),
    province: Yup.object().required(REQUIRED_MESSAGE).nullable(),
    regency: Yup.object().required(REQUIRED_MESSAGE).nullable(),
    district: Yup.object().required(REQUIRED_MESSAGE).nullable(),
    village: Yup.object().required(REQUIRED_MESSAGE).nullable(),
    address: Yup.string().required(REQUIRED_MESSAGE).nullable(),
    rt: Yup.string().required(REQUIRED_MESSAGE).nullable(),
    rw: Yup.string().required(REQUIRED_MESSAGE).nullable(),
    income_before: Yup.number().required(REQUIRED_MESSAGE).nullable(),
    income_after: Yup.number().required(REQUIRED_MESSAGE).nullable(),
    reason: Yup.object().required(REQUIRED_MESSAGE).nullable(),
    // other_reason: Yup.string().when('reason', {
    //   is: (value) => {
    //     if(value && value.value === 4) {
    //       return true
    //     } else {
    //       return false
    //     }
    //   },
    //   then: (schema) => schema.required(REQUIRED_MESSAGE).nullable(),
    //   otherwise: (schema) => schema.nullable()
    // }),
  })

  // Request APIs
  const handleGetProvince = async () => {
    const response = await GetProvinces()

    if(response.status === 200 && Array.isArray(response.data) && response.data.length !== 0) {
      const mappedData = response.data.map(item => {
        return {
          value: item.id,
          label: item.name
        }
      })

      setDropdownProvince(mappedData)
    } else {
      setDropdownProvince([])
    }
  }

  const handleGetRegencies = async (payload) => {
    const response = await GetRegencies(payload)

    if(response.status === 200 && Array.isArray(response.data) && response.data.length !== 0) {
      const mappedData = response.data.map(item => {
        return {
          value: item.id,
          label: item.name
        }
      })

      setDropdownRegencies(mappedData)
    } else {
      setDropdownRegencies([])
    }
  }

  const handleGetDistrict = async (payload) => {
    const response = await GetDistricts(payload)

    if(response.status === 200 && Array.isArray(response.data) && response.data.length !== 0) {
      const mappedData = response.data.map(item => {
        return {
          value: item.id,
          label: item.name
        }
      })

      setDropdownDistrict(mappedData)
    } else {
      setDropdownDistrict([])
    }
  }
  
  const handleGetVillages = async (payload) => {
    const response = await GetVillages(payload)

    if(response.status === 200 && Array.isArray(response.data) && response.data.length !== 0) {
      const mappedData = response.data.map(item => {
        return {
          value: item.id,
          label: item.name
        }
      })

      setDropdownVillages(mappedData)
    } else {
      setDropdownVillages([])
    }
  }

  // Effects
  useEffect(() => {
    handleGetProvince()
  }, [])

  useEffect(() => {
    if(dataState.province && dataState.province.value) {
      handleGetRegencies(dataState.province.value)
    }
  }, [dataState.province])

  useEffect(() => {
    if(dataState.regency && dataState.regency.value) {
      handleGetDistrict(dataState.regency.value)
    }
  }, [dataState.regency])

  useEffect(() => {
    if(dataState.district && dataState.district.value) {
      handleGetVillages(dataState.district.value)
    }
  }, [dataState.district])

  return <Box border='1px solid teal' borderRadius='0.45rem' margin={5}>
  <Heading as='h1' size='md' textAlign='center' m={4}>Formulir Bantuan Covid-19</Heading>
  <Formik
    innerRef={formikRef}
    enableReinitialize
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
  >
    {
      ({ handleSubmit, values, errors }) => (
        <Box onSubmit={handleSubmit}>
          <Grid templateColumns='repeat(2, 1fr)' gap={4} p={4}>
            <GridItem>
              <InputField 
                placeholder='Masukkan Nama'
                className='border-color-gray'
                title='Nama'
                name='name'
                id='name'
                value={dataState.name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </GridItem>
            <GridItem>
              <SelectField 
                placeholder='Pilih Jenis Kelamin'
                className='border-color-gray'
                title='Jenis Kelamin'
                name='gender'
                id='gender'
                options={[
                  {
                    value: 1,
                    label: 'Pria'
                  },
                  {
                    value: 2,
                    label: 'Wanita'
                  },
                ]}
                value={dataState.gender}
                onChange={(item) => setGender({ value: item.value, label: item.label })}
                required
              />
            </GridItem>
            <GridItem>
              <InputField 
                placeholder='Masukkan NIK'
                className='border-color-gray'
                title='NIK'
                name='nik'
                id='nik'
                value={dataState.nik}
                onChange={(e) => setNIK(parseInt(e.target.value))}
                type='number'
                required
              />
            </GridItem>
            <GridItem>
              <SelectField 
                placeholder='Pilih Provinsi'
                className='border-color-gray'
                title='Provinsi'
                name='province'
                id='province'
                options={dropdownProvince}
                value={dataState.province}
                onChange={(item) => setProvince({ value: item.value, label: item.label })}
                required
              />
            </GridItem>
            <GridItem>
              <InputField 
                placeholder='Masukkan Nomor KK'
                className='border-color-gray'
                title='Nomor Kartu Keluarga'
                name='no_kk'
                id='no_kk'
                value={dataState.no_kk}
                onChange={(e) => setNoKK(parseInt(e.target.value))}
                type='number'
                required
              />
            </GridItem>
            <GridItem>
              <SelectField 
                placeholder='Pilih Kab/Kota'
                className='border-color-gray'
                title='Kab/Kota'
                name='regency'
                id='regency'
                options={dropdownRegencies}
                value={dataState.regency}
                onChange={(item) => setRegency({ value: item.value, label: item.label })}
                required
              />
            </GridItem>
            <GridItem>
              <InputField 
                placeholder='Upload KTP'
                className='border-color-gray'
                title='Foto KTP'
                name='upload_ktp'
                id='upload_ktp'
                type='file'
                onChange={(e) => {
                  setKTP(e.target.files[0])
                }}
                required
              />
            </GridItem>
            <GridItem>
              <SelectField 
                placeholder='Pilih Kecamatan'
                className='border-color-gray'
                title='Kecamatan'
                name='district'
                id='district'
                options={dropdownDistrict}
                value={dataState.district}
                onChange={(item) => setDistrict({ value: item.value, label: item.label })}
                required
              />
            </GridItem>
            <GridItem>
              <InputField 
                placeholder='Upload Kartu Keluarga'
                className='border-color-gray'
                title='Foto Kartu Keluarga'
                name='upload_kk'
                id='upload_kk'
                type='file'
                onChange={(e) => {
                  setKK(e.target.files[0])
                }}
                required
              />
            </GridItem>
            <GridItem>
              <SelectField 
                placeholder='Pilih Kelurahan/Desa'
                className='border-color-gray'
                title='Kelurahan/Desa'
                name='village'
                id='village'
                options={dropdownVillages}
                value={dataState.village}
                onChange={(item) => setVillage({ value: item.value, label: item.label })}
                required
              />
            </GridItem>
            <GridItem>
              <InputField 
                placeholder='Masukkan Umur'
                className='border-color-gray'
                title='Umur'
                name='age'
                id='age'
                type='number'
                value={dataState.age}
                onChange={(e) => setAGE(parseInt(e.target.value))}
                required
              />
            </GridItem>
            <GridItem colSpan={2}>
              <InputField
                maxLength={255}
                isTextArea={true}
                placeholder='Masukkan Alamat'
                className='border-color-gray'
                title='Alamat'
                name='address'
                id='address'
                value={dataState.address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </GridItem>
            <GridItem colSpan={2}>
              <InputGroup gap={4} width='50%'>
                <InputField 
                  placeholder='Masukkan RT'
                  className='border-color-gray'
                  title='RT/RW'
                  name='rt'
                  id='rt'
                  value={dataState.rt}
                  onChange={(e) => setRT(e.target.value)}
                  type='number'
                  required
                />
                <InputField 
                  marginTop='auto'
                  placeholder='Masukkan RW'
                  className='border-color-gray'
                  name='rw'
                  id='rw'
                  value={dataState.rw}
                  onChange={(e) => setRW(e.target.value)}
                  type='number'
                  required
                />
              </InputGroup>
            </GridItem>
            <GridItem>
              <InputField 
                leftAddon='Rp.'
                placeholder='Masukkan Penghasilan sebelum pandemi'
                className='border-color-gray'
                title='Penghasilan sebelum pandemi'
                name='income_before'
                id='income_before'
                value={dataState.income_before}
                onChange={(e) => setIncomeBefore(isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value))}
                type='number'
                required
              />
            </GridItem>
            <GridItem>
              <InputField 
                leftAddon='Rp.'
                placeholder='Masukkan Penghasilan setelah pandemi'
                className='border-color-gray'
                title='Penghasilan setelah pandemi'
                name='income_after'
                id='income_after'
                value={dataState.income_after}
                onChange={(e) => setIncomeAfter(isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value))}
                type='number'
                required
              />
            </GridItem>
            <GridItem>
              <InputGroup gap={4}>
                <SelectField 
                  placeholder='Pilih Alasan membutuhkan bantuan'
                  className='border-color-gray'
                  title='Alasan membutuhkan bantuan'
                  name='reason'
                  id='reason'
                  options={[
                    {
                      value: 1,
                      label: 'Kehilangan pekerjaan'
                    },
                    {
                      value: 2,
                      label: 'Kepala keluarga terdampak atau korban Covid-19'
                    },
                    {
                      value: 3,
                      label: 'Tergolong fakir/miskin semenjak sebelum Covid-19'
                    },
                    {
                      value: 4,
                      label: 'Lainnya'
                    },
                  ]}
                  value={dataState.reason}
                  onChange={(item) => setReason({ value: item.value, label: item.label })}
                  required
                />
                {
                   dataState.reason && dataState.reason.value === 4 &&
                  <InputField 
                    marginTop='auto'
                    placeholder='Masukkan Alasan Lainnya'
                    className='border-color-gray'
                    name='other_reason'
                    id='other_reason'
                    value={dataState.other_reason}
                    onChange={(e) => setOtherReason(e.target.value)}
                    required
                  />
                }
              </InputGroup>
            </GridItem>
            <GridItem colSpan={2}>
              <Checkbox value={isUserAgree} onChange={() => setIsUserAgree((data) => !data)}>Saya menyatakan bahwa data yang diisikan adalah benar dan siap mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data tersebut.</Checkbox>
            </GridItem>
            <GridItem colSpan={2}>
                <Box display='flex' justifyContent='flex-end'>
                  <Button colorScheme='teal' w='8rem' onClick={() => {
             
                    formikRef.current.validateForm().then(() => {

                      if(isUserAgree) {
                        if(formikRef.current.isValid) {

                          if(values.income_before > values.income_after) {
                            toast({
                              title: 'Error',
                              description: "Previous income must be less than income after",
                              position: 'top',
                              status: 'error',
                              duration: 3000,
                            })
                          } else {
                            onOpen()
                          }
                        }
                        else {
                          formikRef.current.submitForm()
                        }
                      } else {
                        toast({
                          title: 'Error',
                          description: "Check the agreement.",
                          position: 'top',
                          status: 'error',
                          duration: 3000,
                        })
                      }
                    })
                  }}>Submit</Button>
                </Box>
            </GridItem>
          </Grid>
          <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size='lg'>
            <ModalOverlay />
            <ModalContent maxW='80%'>
              <ModalHeader>Preview Data</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Table variant='unstyled' width='50%'>
                  <Tbody>
                    <Tr>
                      <Td>Nama</Td>
                      <Td>:</Td>
                      <Td>{values.name}</Td>
                    </Tr>
                    <Tr>
                      <Td>NIK</Td>
                      <Td>:</Td>
                      <Td>{values.nik}</Td>
                    </Tr>
                    <Tr>
                      <Td>Nomor Kartu Keluarga</Td>
                      <Td>:</Td>
                      <Td>{values.no_kk}</Td>
                    </Tr>
                    <Tr>
                      <Td>Foto KTP</Td>
                      <Td>:</Td>
                      <Td>{values.upload_ktp?.name}</Td>
                    </Tr>
                    <Tr>
                      <Td>Foto Kartu Keluarga</Td>
                      <Td>:</Td>
                      <Td>{values.upload_kk?.name}</Td>
                    </Tr>
                    <Tr>
                      <Td>Umur</Td>
                      <Td>:</Td>
                      <Td>{values.age}</Td>
                    </Tr>
                    <Tr>
                      <Td>Jenis Kelamin</Td>
                      <Td>:</Td>
                      <Td>{values.gender?.label}</Td>
                    </Tr>
                    <Tr>
                      <Td>Provinsi</Td>
                      <Td>:</Td>
                      <Td>{values.province?.label}</Td>
                    </Tr>
                    <Tr>
                      <Td>Kab/Kota</Td>
                      <Td>:</Td>
                      <Td>{values.regency?.label}</Td>
                    </Tr>
                    <Tr>
                      <Td>Kecamatan</Td>
                      <Td>:</Td>
                      <Td>{values.district?.label}</Td>
                    </Tr>
                    <Tr>
                      <Td>Kelurahan/Desa</Td>
                      <Td>:</Td>
                      <Td>{values.village?.label}</Td>
                    </Tr>
                    <Tr>
                      <Td>Alamat</Td>
                      <Td>:</Td>
                      <Td>{values.address}</Td>
                    </Tr>
                    <Tr>
                      <Td>RT/RW</Td>
                      <Td>:</Td>
                      <Td>{values.rt}/{values.rw}</Td>
                    </Tr>
                    <Tr>
                      <Td>Penghasilan sebelum pandemi</Td>
                      <Td>:</Td>
                      <Td>{values.income_before}</Td>
                    </Tr>
                    <Tr>
                      <Td>Penghasilan sesudah pandemi</Td>
                      <Td>:</Td>
                      <Td>{values.income_after}</Td>
                    </Tr>
                    <Tr>
                      <Td>Alasan membutuhkan bantuan</Td>
                      <Td>:</Td>
                      <Td>{values.reason?.label}</Td>
                    </Tr>
                    {
                      values.reason && values.reason.value === 4 &&
                      <Tr>
                        <Td>Alasan Lainnya</Td>
                        <Td>:</Td>
                        <Td>{values.other_reason}</Td>
                      </Tr>
                    }
                  </Tbody>
                </Table>
              </ModalBody>
              <ModalFooter>
                <Button variant='outline' colorScheme='red' mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button colorScheme='green' onClick={() => handleSubmit(values)}>Save</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      )
    }
  </Formik>
</Box>
}

export default MainPage