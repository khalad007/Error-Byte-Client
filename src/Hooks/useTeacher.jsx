import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useTeacher = () => {

    const axiosSecure = useAxiosSecure();

    const { data: statuss = [] } = useQuery({
        queryKey: ['statuss', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myApplyStatus/${user.email}`);
            return res.data;
        }
    });
    console.log(statuss)
    console.log(user)
    // console.log(statuss[0]["name"])
    console.log(statuss[0]?.name);
    console.log(statuss[0]?.role);

};

export default useTeacher;