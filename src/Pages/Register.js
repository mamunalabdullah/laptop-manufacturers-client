import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../Firebase/firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Components/Loading";
import { Link, useNavigate } from "react-router-dom";
import useToken from '../Hooks/useToken';

const Register = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
      const [signInWithGoogle, goUser, goLoading, goError] = useSignInWithGoogle(auth);
      const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      const [token] = useToken(user || goUser);

      const navigate = useNavigate();
      let errorElement;
    
      if (error || goError || updateError) {
        return (
          errorElement = <p className="text-error font-bold text-center">{error?.message || goError?.message}</p>
          
        );
      }
      if (loading || goLoading || updating) {
        return <Loading />
      }
      if (token) {
        navigate("/home");
      }
      const onSubmit = async(data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name});
        navigate("/home")
      };
    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content">
        <div className="card w-full lg:max-w-lg shadow-2xl bg-base-100">
          <div className="card-body w-96">
              <h2 className="text-center text-3xl text-info font-bold">Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">What is your Name?</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here your name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                      required: {
                          value: true,
                          message: "Required Your Name"
                      }
                  })}
                />
                <label className="label">
                {errors.name?.type === "required" && <span className="label-text-alt text-error font-bold">{errors.name.message}</span>}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">What is your Email?</span>
                </label>
                <input
                  type="email"
                  placeholder="Type here your email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                      required: {
                          value: true,
                          message: "Required Email Address"
                      },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide valid Email Address"
                    }
                  })}
                />
                <label className="label">
                {errors.email?.type === "required" && <span className="label-text-alt text-error font-bold">{errors.email.message}</span>}
                {errors.email?.type === "pattern" && <span className="label-text-alt text-error font-bold">{errors.email.message}</span>}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">What is your Password?</span>
                </label>
                <input
                  type="password"
                  placeholder="Type here your password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password", {
                      required: {
                          value: true,
                          message: "Required Password"
                      },
                    minLength: {
                      value: 8,
                      message: "Must be 8 or longer characters"
                    }
                  })}
                />
                <label className="label">
                {errors.password?.type === "required" && <span className="label-text-alt text-error font-bold">{errors.password.message}</span>}
                {errors.password?.type === "pattern" && <span className="label-text-alt text-error font-bold">{errors.password.message}</span>}
                </label>
              </div>
                  {errorElement}
              <input className="btn btn-primary w-full max-w-xs " type="submit" value="Register"/>
            </form>
            <p>Already have an Account? <Link to="/login" className="text-info font-bold">Please Login</Link> </p>
            <div className="divider font-bold">OR</div>
            <button
              className="btn btn-secondary"
              onClick={() => signInWithGoogle()}
            >
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;