import { Box, Divider, Flex, Text, SimpleGrid } from '@chakra-ui/react'
import { agents } from './agentContst'
import AgentCard from './components/AgentCard/AgentCard'

const MeetTheTeam = () => {
  return (
    <Box
      maxWidth='1280px'
      margin='0 auto'
      paddingY={{ base: '3rem', sm: '6rem' }}
    >
      <Text
        fontSize={{ base: '4xl', sm: '5xl' }}
        lineHeight='shorter'
        fontWeight='light'
        paddingX='2rem'
        textAlign='center'
      >
        Meet The Team
      </Text>
      <Text
        fontSize='2xl'
        fontWeiht='light'
        marginTop='1rem'
        marginBottom='2rem'
        paddingX='2rem'
        textAlign='center'
      >
        The best in the industry, at your service 24/7
      </Text>
      <SimpleGrid columns={agents.length} margin='0 auto' minChildWidth='250px'>
        {agents.map(agent => (
          <AgentCard key={agent.name} {...agent} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default MeetTheTeam
