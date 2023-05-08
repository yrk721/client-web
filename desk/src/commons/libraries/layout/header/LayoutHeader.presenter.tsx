import { useEffect } from 'react'
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { LayoutHeaderUIProps } from './LayoutHeader.types'
import { useAuth } from '@/src/commons/hooks/useAuth'
import Logo from '@/src/components/ui/logo'
import SearchBoards from '@/src/components/units/main/components/searchBoards/SearchBoards.container'
import { useRecoilState } from 'recoil'
import { MyLastLogined } from '@/src/commons/store/atom'

export default function LayoutHeaderUI(props: LayoutHeaderUIProps) {
  const { colorMode, toggleColorMode } = useColorMode()
  const [myLastLogined, setMyLastLogined] = useRecoilState(MyLastLogined)
  const {
    isLoggedIn,
    myUserInfo,
    LoginModalUI,
    SignupModalUI,
    fetchUserInfo,
    openModal,
    logout,
  } = useAuth()

  useEffect(() => {
    void fetchUserInfo()
  }, [])

  return (
    <>
      <Box bg={useColorModeValue('dGray.light', 'gray.900')} px={4} position={'relative'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Logo />
          <Flex alignItems={'center'} zIndex={999}>
            <Stack direction={'row'} spacing={4}>
              <SearchBoards />
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    mr={2}
                    size={'sm'}
                    bgColor={'gray.400'}
                    src={isLoggedIn && myUserInfo?.picture ? myUserInfo.picture : ''}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      bgColor={'gray.400'}
                      size={'xl'}
                      src={isLoggedIn && myUserInfo?.picture ? myUserInfo.picture : ''}
                    />
                  </Center>
                  <br />
                  <Center>
                    {!isLoggedIn && <p>닉네임</p>}
                    {isLoggedIn && (
                      <div>
                        <Center>{myUserInfo?.nickName}</Center>
                        <Center>{myUserInfo?.email}</Center>
                        <Center>
                          <div>팔로우 : {myUserInfo?.followeesCount}</div>
                        </Center>
                        <Center>
                          <div>팔로잉 : {myUserInfo?.followingsCount}</div>
                        </Center>
                      </div>
                    )}
                  </Center>
                  <br />
                  <MenuDivider />
                  {!isLoggedIn ? (
                    <>
                      <MenuItem pl={10} onClick={() => openModal('LOGIN')}>
                        로그인
                      </MenuItem>
                      <MenuItem pl={10} onClick={() => openModal('SIGNUP')}>
                        회원가입
                      </MenuItem>
                    </>
                  ) : (
                    <>
                      <MenuItem
                        pl={10}
                        onClick={props.onClickMoveToUser(myUserInfo?.id ?? '')}>
                        마이페이지
                      </MenuItem>
                      <MenuItem pl={10} onClick={logout}>
                        로그아웃
                      </MenuItem>
                    </>
                  )}
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>

      <LoginModalUI />
      <SignupModalUI />
    </>
  )
}
