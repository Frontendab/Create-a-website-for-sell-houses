import './login.css';
import { Link } from 'react-router-dom';
import logo from '../../imgs/logo.png';
import google from '../../imgs/google.png';
import apple from '../../imgs/apple.png';


export const Login = () => {
    return (
        <>      
        <div className='pageLogin container p-0 m-0'>
            <div className="content-login text-center shadow p-3 mt-3 rounded" style={{height: 'fit-content'}} >
            <Link to='/'><img src={logo} alt="" width={250}/></Link>
            <p>Remember everything important</p>
            <div className='btns-login d-flex'>
                <a href='https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=AXo7B7X5Y-aNPjvNwJVuEF3Rtk974DtmYfjk6RZ3t42ZYpFXL34msJLpKwdZ0DSwNmitBeAl_2v_7g&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1795834472%3A1693995892844249&theme=glif'><button><img src={google} width={20} alt="" /> Continue width Google</button></a>
                <a href='https://www.icloud.com/mail'><button><img src={apple} width={20} alt="" /> Continue width Apple</button></a>
            </div>
            <div className="d-flex" style={{height: 'fit-content', lineHeight: '28px'}}>
                <hr className='text-secondary' /> <span className='mx-2 text-secondary'>or</span> <hr className='text-secondary' />
            </div>
            <div>
                <input type="text" className='emailUsername p-2' style={{width: '100%', outline: 'none', borderRadius: '0.375rem', padding: '11px', border: '1px solid #ddd'}} placeholder='Email Address or username' />
                <input type="submit" className='text-light border-0' style={{width: '100%',background: '#00a72c', outline: 'none', borderRadius: '0.375rem', padding: '11px'}} value='Continue'/>
            </div>
            <div className='d-flex justify-content-center'>
                <input type="checkbox" id="check" className='mx-1'/>
                <label for="check" className='text-secondary my-3' style={{userSelect: 'none', cursor: 'pointer'}}>Remember me for 30 days</label>
            </div>
            <div>
                <p className='mt-3 mb-2 noAccount text-secondary'>Dont't have an account?</p>
                <a href="https://accounts.google.com/signup/v2/createaccount?theme=glif&flowName=GlifWebSignIn&flowEntry=SignUp" style={{textDecoration: 'none'}}><p style={{color: '#00a72c', cursor: 'pointer'}}>Create account</p></a>
            </div>
            </div>
            </div>
        </>
    );
}