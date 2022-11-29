import React from 'react';
import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';

export const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading fontSize={'2xl'}>VIDEO HUB</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />
          <Input
            placeholder={'Name'}
            type={'text'}
            required
            focusBorderColor={'purple.500'}
          />

          <Input
            placeholder={'Email'}
            type={'email'}
            required
            focusBorderColor={'purple.500'}
          />
          <Input
            placeholder={'Password'}
            type={'password'}
            required
            focusBorderColor={'purple.500'}
          />

          <Button colorScheme={'purple'}> Sign Up</Button>

          <Text fontWeight={'bold'} textAlign={'right'}>
            アカウントをお持ちですか？&ensp;&ensp;&ensp;&ensp;
            {/* &enspはスペースを表示してくれるが、レスポンシブ時に迷惑をかける恐れ多いにあり */}
            <Button variant={'link'} colorScheme={'purple'} spacing={'10'}>
              <Link to={'/login'} fontSize={'4xs'}>
                ログインする
              </Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};
