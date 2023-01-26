import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { signup } from '../../redux/actions/auth';
import Alert from '../../components/alert';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../common/logo';

const Signup = ({ signup }) => {
  const [hasPromo, setHasPromo] = useState(false);

  const onChangeCheckBox = (e) => {
    setHasPromo(e.target.checked);
  };

  const [promo, setPromo] = useState('');
  const onChangePromo = (e) => {
    setPromo(e.target.value);
  };

  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [accountCreated, setAccountCreated] = useState(false);

  const [formData, setFormData] = useState({
    FirtsName: '',
    SecondName: '',
    FirstLastName: '',
    SecondLastName: '',
    curp: '',
    phone: '',
    email: '',
    gender: '',
    municipality: '',
  });

  const {
    FirstName,
    SecondName,
    FirstLastName,
    SecondLastName,
    curp,
    phone,
    email,
    gender,
    municipality,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    signup(
      FirstName,
      SecondName,
      FirstLastName,
      SecondLastName,
      curp,
      phone,
      email,
      gender,
      municipality
    );
    setAccountCreated(true);
    navigate('/login');
  };

  return (
    <>
      <Alert />
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Logo />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={(e) => onSubmit(e)}>
              <div>
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Primer Nombre
                </label>
                <div className="mt-1">
                  <input
                    id="FirstName"
                    name="FirstName"
                    value={FirstName}
                    onChange={(e) => onChange(e)}
                    type="text"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="SecondName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Segundo Nombre
                </label>
                <div className="mt-1">
                  <input
                    id="SecondName"
                    name="SecondName"
                    value={SecondName}
                    onChange={(e) => onChange(e)}
                    type="text"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="FirstLastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Apellido Paterno
                </label>
                <div className="mt-1">
                  <input
                    id="FirstLastName"
                    name="FirstLastName"
                    value={FirstLastName}
                    onChange={(e) => onChange(e)}
                    type="text"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="SecondLastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Apellido Materno
                </label>
                <div className="mt-1">
                  <input
                    id="SecondLastName"
                    name="SecondLastName"
                    value={SecondLastName}
                    onChange={(e) => onChange(e)}
                    type="text"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => onChange(e)}
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <div className="mt-1">
                  <input
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => onChange(e)}
                    type="text"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  CURP
                </label>
                <div className="mt-1">
                  <input
                    id="curp"
                    name="curp"
                    value={curp}
                    onChange={(e) => onChange(e)}
                    type="text"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="mt-1">
                <div className="flex items-center gap-3 text-gray">
                  <input
                    type="checkbox"
                    checked={hasPromo}
                    onChange={onChangeCheckBox}
                  />
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    <span>¿Tienes número de convenio con tu empresa?</span>
                  </label>
                </div>
                {hasPromo && (
                  <input
                    type="text"
                    placeholder="Número convenio"
                    autoFocus
                    value={promo}
                    onChange={onChangePromo}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                )}
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Register
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <Link
                    to="/login"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Do you already have an account?
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  signup,
})(Signup);
