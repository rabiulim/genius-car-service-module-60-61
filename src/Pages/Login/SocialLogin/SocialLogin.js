import React from 'react';
import google from '../../../images/social-icon/google.png'
import fasebook from '../../../images/social-icon/fasebook.png'
import github from '../../../images/social-icon/github.png'
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorElement;

    if (error || error1) {

        errorElement =
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>

    }

    if (user || user1) {
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-3 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info d-block mx-auto w-50 my-3'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button className='btn btn-info d-block mx-auto w-50 my-3'>
                    <img style={{ width: '30px' }} src={fasebook} alt="" />
                    <span className='px-2'>Fasebook Sign In </span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-info d-block mx-auto w-50 my-3'>
                    <img style={{ width: '60px' }} src={github} alt="" />
                    <span className='px-2'>GitHub Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;