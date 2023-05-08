import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Input,
  Text,
  useDisclosure,
  Textarea
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import ModalPopup from '../../Modal/ModalPopup'

const ContactForm = () => {
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
      borderRadius='sm'
      backgroundColor='white'
      color='gray.700'
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Input
            marginTop='1.3rem'
            borderColor={errors.name ? 'red.400' : null}
            id='name'
            type='text'
            placeholder='Name'
            {...register('name', { required: true })}
          />
          {errors.name && (
            <Text fontSize='xs' color='red.400'>
              {errors.name.type}
            </Text>
          )}
          <Input
            marginTop='1.3rem'
            borderColor={errors.email ? 'red.400' : null}
            id='email'
            type='text'
            placeholder='Email'
            {...register('email', { required: true })}
          />
          {errors.email && (
            <Text fontSize='xs' color='red.400'>
              {errors.email.type}
            </Text>
          )}
          <Input
            marginTop='1.3rem'
            borderColor={errors.phone ? 'red.400' : null}
            id='phone'
            type='text'
            placeholder='Phone'
            {...register('phone', { required: true })}
          />
          {errors.phone && (
            <Text fontSize='xs' color='red.400'>
              {errors.phone.type}
            </Text>
          )}
          <Textarea
            marginTop='1.3rem'
            borderColor={errors.message ? 'red.400' : null}
            id='message'
            type='text'
            placeholder='Message'
            {...register('message', { required: true })}
          />
          {errors.message && (
            <Text fontSize='xs' color='red.400'>
              {errors.message.type}
            </Text>
          )}
          <Checkbox
            marginTop='1.3rem'
            borderColor={errors.gdpr ? 'red.400' : null}
            id='gdpr'
            type='checkbox'
            placeholder='GDPR'
            {...register('gdpr', { required: true })}
          >
            <Text fontSize='0.8rem' color='gray.500'>
              I consent to having this website store my details communication
            </Text>
          </Checkbox>
          {errors.gdpr && (
            <Text fontSize='xs' color='red.400'>
              {errors.gdpr.type}
            </Text>
          )}
        </FormControl>
        <Button
          type='submit'
          colorScheme='blue'
          fontSize='xl'
          padding='2rem'
          marginTop='2rem'
        >
          Send Message
        </Button>
      </form>
      <ModalPopup
        isOpen={isOpen}
        onClose={onClose}
        title='Your Message'
        description='Thank you! Your message has been successfully sent.'
      />
    </Box>
  )
}

export default ContactForm
