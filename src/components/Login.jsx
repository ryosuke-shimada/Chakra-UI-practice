import {
  Button,
  Container,
  Heading,
  Input,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

export const Login = () => {
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
          <Heading fontSize={'2xl'}>アカウントを登録する</Heading>

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
          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'} fontSize={'4xs'}>
              パスワードをお忘れですか？
            </Link>
          </Button>
          <Button colorScheme={'purple'}> ログインする</Button>

          <Text fontWeight={'bold'} textAlign={'right'}>
            新しく登録される方はこちら&ensp;&ensp;&ensp;&ensp;
            {/* &enspはスペースを表示してくれるが、レスポンシブ時に迷惑をかける恐れ多いにあり */}
            <Button variant={'link'} colorScheme={'purple'} spacing={'10'}>
              <Link to={'/signup'} fontSize={'4xs'}>
                アカウント登録
              </Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};
