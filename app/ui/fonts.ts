import { Inter, Lusitana } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

const lusitana = Lusitana({
  subsets: ['latin'], // Đảm bảo thêm subsets nếu cần
  weight: '700', // Định nghĩa trọng số (weight)
});

export { inter, lusitana };
