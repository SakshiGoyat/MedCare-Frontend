import { Skeleton, Stack } from '@chakra-ui/react'
import React from 'react'

const chatloading = () => {
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

export default chatloading