import { Outlet } from 'react-router-dom';
import illustration from '../../assets/img/illustration.png';
import { Logo } from '../components';

export function AuthLayout() {
  return (
    <div className="flex w-full h-full">
      <div className="flex flex-col items-center justify-center w-full h-full gap-16 lg:w-1/2" >
        <Logo className='h-6 text-gray-500' />
        <div className="w-full max-w-[504px] px-8">
          <Outlet />
        </div>
      </div>
      <div className="relative items-center justify-center hidden w-1/2 h-full lg:flex">
        <img src={illustration} className='object-cover w-full h-full max-w-[656px] max-h-[960px] p-8 select-none rounded-[32px]' alt="" />

        <div className="max-w-[656px] bottom-8 bg-white p-10 absolute rounded-b-[32px] ">
          <Logo className='h-8 text-teal-900' />
          <p className='mt-6 text-xl font-medium text-gray-700'>Gerencie suas finanças pessoais de uma forma simples com o fincheck, e o melhor, totalmente de graça!</p>
        </div>
      </div>
    </div>
  )
}