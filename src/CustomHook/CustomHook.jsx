import { useQuery } from '@tanstack/react-query';
import React from 'react';

function CustomHook() {

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['tea'],
    queryFn:  async() => {
      const data = await fetch('http://localhost:3000/tea');
      const result =await data.json();
      return result;
    },
  });


  return { data, isLoading, refetch };
}

export default CustomHook;
