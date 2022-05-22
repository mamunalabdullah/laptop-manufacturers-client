import React from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../Firebase/firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Components/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithGoogle, goUser, goLoading, goError] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  let errorElement;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (error || goError) {
    return (
      errorElement = <p className="text-error font-bold text-center">{error?.message || goError?.message}</p>
      
    );
  }
  if (loading || goLoading) {
    return <Loading />
  }
  if (user || goUser) {
    navigate(from, {replace: true});
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content">
        <div className="card w-full lg:max-w-lg shadow-2xl bg-base-100">
          <div className="card-body w-96">
              <h2 className="text-center text-3xl text-info font-bold">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
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
              <input className="btn btn-primary w-full max-w-xs " type="submit" value="Login"/>
            </form>
            <p>Not have an Account? <Link to="/register" className="text-info font-bold">Create New Account</Link> </p>
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

export default Login;
