import { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>(''); // Definimos o tipo de `email` como string
  const [password, setPassword] = useState<string>(''); // Definimos o tipo de `password` como string
  const router = useRouter();

  const handleLogin = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Simulando login (credenciais fixas)
    if (email === 'admin@exemplo.com' && password === '123456') {
      localStorage.setItem('token', 'meu-token-seguro');
      router.push('/dashboard');
    } else {
      alert('Credenciais inválidas!');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="p-6 bg-white rounded shadow-md"
        onSubmit={handleLogin}
      >
        <h2 className="mb-4 text-xl font-bold">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-2 mt-1 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">
            Senha
          </label>
          <input
            id="password"
            type="password"
            className="w-full p-2 mt-1 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
