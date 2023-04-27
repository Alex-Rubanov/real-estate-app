import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  Input,
  Text
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

const HeroForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = data => console.log(data)

  return (
    <Box
      width='100%'
      padding={{ base: '1rem', sm: '2rem' }}
      borderRadius='sm'
      backgroundColor='white'
      color='gray.700'
      textAlign='center'
    >
      <Text fontSize='xl' fontWeight='bold'>
        Free PDF Guide
      </Text>
      <Text fontSize='lg'>Complete the form below to download your guide</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Input
            marginTop='1.3rem'
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
          <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            gap={{ base: '0', sm: '1rem' }}
          >
            <Input
              marginTop='1.3rem'
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
          </Flex>
          <Flex marginTop='1.3rem'>
            <Checkbox
              lineHeight='1.2'
              padding='0.5rem'
              id='gdpr'
              alignItems='flex-start'
              type='checkbox'
              placeholder='GDPR'
              {...register('gdpr', { required: true })}
            ></Checkbox>
            {errors.gdpr && (
              <Text fontSize='xs' color='red.400'>
                {errors.gdpr.type}
              </Text>
            )}
            <Text textAlign='left' padding='0.15rem'>
              I consent to having this website store my submitted info
            </Text>
          </Flex>
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
    </Box>
  )
}

export default HeroForm
