import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Đăng Nhập</h1>
        <div className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email của bạn"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Mật khẩu"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent"
            required
          />
          <button
            type="submit"
            className="bg-[#007BFF] text-white py-2 rounded-md hover:bg-[#A0D1E8] transition"
          >
            <Link href="/" className="text-white">
              Đăng Nhập
            </Link>
          </button>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Image src="/moreDark.png" alt="Icon" width={20} height={20} />
          <span className="text-gray-600 ml-2">
            Chưa có tài khoản?{" "}
            <Link href="/" className="text-[#007BFF]">
              Đăng Ký
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
