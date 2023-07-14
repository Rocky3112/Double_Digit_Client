import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const SignUp = () => {
    const {createUser} =useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) =>{ 
        console.log(data)
        createUser(data.email, data.password)
        .then(result=>{
            const loggedUser =result.user;
            console.log(loggedUser);
        })

    }

  
    return (
        <>
        <Helmet>
        <title>Bistro Boss | SignUp</title>
      </Helmet>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">Sign-Up now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register("name",  { required: true })} name="name" placeholder="name" className="input input-bordered" />
          {errors.name && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
          {errors.email && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password", { required: true ,minLength:6, maxLength: 20})} name="password" placeholder="password" className="input input-bordered" />
          {errors.password && <span className="text-red-500">This field is required</span>}
          {errors.password?.type === "minLength" && (
        <p className="text-red-500">Password must be 6 Character </p>
      )}
          
        </div>
        <div className="form-control mt-6">
            
        <input className="btn btn-primary" type="submit" value={"Sign Up"} />
        </div>
      </form>
      <p className=' text-center text-blue-800 text-xl pb-2'><small><Link to="/login">Already have an Account</Link> </small></p>
    </div>
  </div>
</div>
</>
    );
};

export default SignUp;