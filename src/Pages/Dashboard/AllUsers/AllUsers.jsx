import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";




const AllUsers = () => {
  
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    // const handleMakeAdmin = user =>{
    //     fetch(`http://localhost:5000/users/admin/${user._id}`, {
    //         method: 'PATCH'
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         if(data.modifiedCount){
    //             refetch();
    //             Swal.fire({
    //                 position: 'top-end',
    //                 icon: 'success',
    //                 title: `${user.name} is an Admin Now!`,
    //                 showConfirmButton: false,
    //                 timer: 1500
    //               })
    //         }
    //     })
    // }

    // const handleDelete = user => {

    // }

    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss | All users</title>
            </Helmet>
            <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
            
        </div>
    );
};

export default AllUsers;