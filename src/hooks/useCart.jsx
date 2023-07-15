import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
const useCart = email =>{
    const {user}=useContext(AuthContext);
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['todos'],
        queryFn: fetchTodoList,
      })

}
export default useCart;