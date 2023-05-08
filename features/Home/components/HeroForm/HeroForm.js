import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  Input,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import ModalPopup from '@/features/common/Modal/ModalPopup'

const HeroForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    console.log(data)
    reset()
    onOpen()
  }

  return (
    <Box
      width='100%'
      padding={{ base: '1rem', sm: '2rem' }}
      borderRadius='sm'
      backgroundColor='white'
      color='gray.700'
    >
      <Text fontSize='xl' fontWeight='bold'>
        Free PDF Guide
      </Text>
      <Text fontSize='lg'>Complete the form below to download your guide</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Input
            marginTop='1.3rem'
            borderColor={errors.name ? 'red' : null}
            id='name'
            type='text'
            placeholder='Name'
            {...register('name', { required: true })}
          />
          {errors.name && (
            <Text fontSize='xs' color='red.400'>
              {`*${errors.name.type}`}
            </Text>
          )}
          <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            gap={{ base: '0', md: '0.5rem' }}
          >
            <Input
              marginTop='1.3rem'
              borderColor={errors.email ? 'red' : null}
              id='email'
              type='text'
              placeholder='Email'
              {...register('email', { required: true })}
            />
            {errors.email && (
              <Text
                fontSize='xs'
                color='red.400'
                alignSelf={{ base: 'flex-start', md: 'center' }}
                gap='0'
              >
                {`*${errors.email.type}`}
              </Text>
            )}
            <Input
              marginTop='1.3rem'
              borderColor={errors.phone ? 'red' : null}
              id='phone'
              type='text'
              placeholder='Phone'
              {...register('phone', { required: true })}
            />
            {errors.phone && (
              <Text
                fontSize='xs'
                color='red.400'
                alignSelf={{ base: 'flex-start', md: 'center' }}
              >
                {`*${errors.phone.type}`}
              </Text>
            )}
          </Flex>

          <Checkbox
            marginTop='1.3rem'
            marginLeft='0'
            borderColor={errors.gdpr ? 'red' : null}
            id='gdpr'
            type='checkbox'
            placeholder='GDPR'
            {...register('gdpr', { required: true })}
          >
            <Text fontSize='0.8rem' color='gray.500'>
              I consent to having this website store my submitted info
            </Text>
          </Checkbox>
          {errors.gdpr && (
            <Text fontSize='xs' color='red.400'>
              {`*${errors.gdpr.type}`}
            </Text>
          )}
        </FormControl>
        <Button
          type='submit'
          colorScheme='blue'
          width='100%'
          fontSize='xl'
          padding='2rem'
          marginTop='2rem'
        >
          Donwload Now
        </Button>
      </form>
      <ModalPopup
        isOpen={isOpen}
        onClose={onClose}
        title='Your Personal PDF Guide'
        description='Congrats! Your personal guide is waiting now for you on your email.'
      />
    </Box>
  )
}

export default HeroForm
