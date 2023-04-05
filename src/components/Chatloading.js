import { Skeleton, Stack } from '@chakra-ui/react'
import React from 'react'

const Chatloading = () => {
  return (
    <Stack>
      <Skeleton height="3rem" />
      <Skeleton height="3rem" />
      <Skeleton height="3rem" />
      <Skeleton height="3rem" />
      <Skeleton height="3rem" />
      <Skeleton height="3rem" />
      <Skeleton height="3rem" />
      <Skeleton height="3rem" />
    </Stack>
  );
}

export default Chatloading