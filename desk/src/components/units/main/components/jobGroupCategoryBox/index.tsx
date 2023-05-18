import { Box, useColorModeValue } from '@chakra-ui/react'
import { JobGroupCategoryBoxProps } from './types'

export default function JobGroupCategoryBox(props: JobGroupCategoryBoxProps) {
  return (
    <>
      <Box
        my={3}
        px={3}
        w="140px"
        h="120px"
        bg="rgba(167, 167, 167, 0.13)"
        borderWidth="2px"
        borderStyle="solid"
        borderColor="dGray.medium"
        boxShadow="3px 3px 7px rgba(0, 0, 0, 0.15)"
        backdropFilter="blur(6px)"
        borderRadius="20px"
        textAlign="center"
        cursor="pointer"
        transition="all 0.2s"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontWeight="bolder"
        color={useColorModeValue('dGray.dark', 'dGray.light')}
        _hover={{
          borderWidth: '2px',
          borderColor: 'dPrimaryHover.transparency',
          transform: 'scale(1.05)',
        }}
        userSelect="none"
        onClick={props.onClick}>
        {props.jobGroup}
      </Box>
    </>
  )
}
