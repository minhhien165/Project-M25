// components/Footer.tsx
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-5">
      <div className="text-center p-3">
        © 2024 SocialMedia:
        <a className="text-dark" href="#">Privacy Policy</a> | 
        <a className="text-dark" href="#">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
